$root = Split-Path -Parent $MyInvocation.MyCommand.Path
$port = 8000

$contentTypes = @{
  ".html" = "text/html; charset=utf-8"
  ".css" = "text/css; charset=utf-8"
  ".js" = "application/javascript; charset=utf-8"
  ".jpg" = "image/jpeg"
  ".jpeg" = "image/jpeg"
  ".png" = "image/png"
  ".gif" = "image/gif"
  ".svg" = "image/svg+xml"
  ".ico" = "image/x-icon"
}

function Send-Response {
  param (
    [System.Net.Sockets.NetworkStream]$Stream,
    [int]$StatusCode,
    [string]$StatusText,
    [byte[]]$Body,
    [string]$ContentType
  )

  $headers = "HTTP/1.1 $StatusCode $StatusText`r`nContent-Type: $ContentType`r`nContent-Length: $($Body.Length)`r`nConnection: close`r`n`r`n"
  $headerBytes = [System.Text.Encoding]::ASCII.GetBytes($headers)
  $Stream.Write($headerBytes, 0, $headerBytes.Length)
  $Stream.Write($Body, 0, $Body.Length)
}

$listener = [System.Net.Sockets.TcpListener]::new([System.Net.IPAddress]::Loopback, $port)
$listener.Start()
Write-Host "Serving $root at http://localhost:$port/"

while ($true) {
  $client = $listener.AcceptTcpClient()
  try {
    $stream = $client.GetStream()
    $reader = [System.IO.StreamReader]::new($stream, [System.Text.Encoding]::ASCII, $false, 1024, $true)
    $requestLine = $reader.ReadLine()

    while ($reader.Peek() -gt -1) {
      $line = $reader.ReadLine()
      if ([string]::IsNullOrEmpty($line)) {
        break
      }
    }

    if ([string]::IsNullOrWhiteSpace($requestLine)) {
      continue
    }

    $parts = $requestLine.Split(" ")
    $requestPath = [System.Uri]::UnescapeDataString($parts[1].Split("?")[0].TrimStart("/"))
    if ([string]::IsNullOrWhiteSpace($requestPath)) {
      $requestPath = "index.html"
    }

    $candidate = Join-Path $root $requestPath
    $fullPath = [System.IO.Path]::GetFullPath($candidate)
    $rootPath = [System.IO.Path]::GetFullPath($root)

    if (-not $fullPath.StartsWith($rootPath) -or -not (Test-Path -LiteralPath $fullPath -PathType Leaf)) {
      Send-Response $stream 404 "Not Found" ([System.Text.Encoding]::UTF8.GetBytes("Not found")) "text/plain; charset=utf-8"
      continue
    }

    $extension = [System.IO.Path]::GetExtension($fullPath).ToLowerInvariant()
    $contentType = "application/octet-stream"
    if ($contentTypes.ContainsKey($extension)) {
      $contentType = $contentTypes[$extension]
    }

    Send-Response $stream 200 "OK" ([System.IO.File]::ReadAllBytes($fullPath)) $contentType
  } finally {
    $client.Close()
  }
}
