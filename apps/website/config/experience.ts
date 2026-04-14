export type ExperiencePositionIcon =
  /** Icon key used to render the position category in the UI. */
  'code' | 'design' | 'education' | 'business' | 'idea';

export type ExperiencePosition = {
  id: string;
  title: string;
  /**
   * Employment period of the position.
   * Use "MM.YYYY" or "YYYY" format. Omit `end` for current roles.
   */
  employmentPeriod: {
    /** Start date (e.g., "10.2022" or "2020"). */
    start: string;
    /** End date; leave undefined for "Present". */
    end?: string;
  };
  /** Full-time | Part-time | Contract | Internship, etc. */
  employmentType?: string;
  description?: string;
  /** UI icon to represent the role type. */
  icon?: ExperiencePositionIcon;
  skills?: string[];
  /** Whether the position is expanded by default in the UI. */
  isExpanded?: boolean;
};

export type Experience = {
  id: string;
  companyName: string;
  companyUrl: string;
  city: string;
  /** URL to the company logo (absolute URL or path under /public). */
  companyLogo?: string;
  /** Roles held at this company; keep newest first for display. */
  positions: ExperiencePosition[];
  /** Marks the company as the current employer for highlighting. */
  isCurrentEmployer?: boolean;
};

export const experiences: Experience[] = [
  {
    id: 'arcline-labs',
    companyName: 'Arcline Labs',
    companyUrl: 'https://arclinelabs.com',
    companyLogo: '/company_logos/simplifyingai.svg',
    city: 'Vancouver',
    positions: [
      {
        id: 'product-engineer',
        title: 'Product Engineer',
        employmentType: 'Full-time',
        employmentPeriod: {
          start: 'Mar 2025',
        },
        skills: [
          'React',
          'TypeScript',
          'Node.js',
          'PostgreSQL',
          'Figma',
          'Product Strategy',
        ],
        description:
          'Owning product features end to end, from user research and design through implementation and launch. Building internal tools and customer-facing dashboards that help teams manage complex workflows. Closely collaborating with design and product to shape the roadmap and prioritize what actually moves the needle for users.',
        icon: 'code',
      },
    ],
    isCurrentEmployer: true,
  },
  {
    id: 'google',
    companyName: 'Google',
    companyUrl: 'https://google.com/',
    companyLogo: '/company_logos/google-logo-vector-format-white-background-illustration-407571048.webp',
    city: 'Remote',
    positions: [
      {
        id: 'frontend-engineer',
        title: 'Frontend Engineer',
        employmentType: 'Full-time',
        employmentPeriod: {
          start: 'Jun 2023',
          end: 'Feb 2025',
        },
        skills: [
          'React',
          'TypeScript',
          'GraphQL',
          'Storybook',
          'Tailwind CSS',
          'Playwright',
          'Design Systems',
        ],
        description:
          'Built and maintained the developer platform UI used by thousands of teams to deploy and manage cloud infrastructure. Led the design system effort, creating a shared component library that unified the product experience across five feature areas. Drove accessibility improvements, reduced bundle size by 30%, and implemented end-to-end testing with Playwright.',
        icon: 'code',
      },
    ],
  },
  {
    id: 'opencv',
    companyName: 'OpenCV',
    companyUrl: 'https://opencv.org/',
    companyLogo: '/company_logos/opencv_padded.png',
    city: 'Remote',
    positions: [
      {
        id: 'fullstack-developer',
        title: 'Full-Stack Developer',
        employmentType: 'Full-time',
        employmentPeriod: {
          start: 'Sep 2021',
          end: 'May 2023',
        },
        skills: [
          'Next.js',
          'React',
          'Node.js',
          'MongoDB',
          'Redis',
          'AWS',
        ],
        description:
          'Developed and scaled the consumer-facing fintech web app handling digital payments and loyalty programs. Owned the checkout flow and merchant integration layer, improving conversion rates by 18%. Built real-time notification infrastructure using WebSockets and Redis pub/sub. Collaborated directly with the CTO on architecture decisions for the payments microservice.',
        icon: 'code',
      },
    ],
  },
  {
    id: 'shopify',
    companyName: 'Shopify',
    companyUrl: 'https://www.shopify.com/',
    companyLogo: '/company_logos/shopify.png',
    city: 'Ottawa',
    positions: [
      {
        id: 'frontend-intern',
        title: 'Frontend Developer Intern',
        employmentType: 'Internship',
        employmentPeriod: {
          start: 'May 2020',
          end: 'Aug 2020',
        },
        skills: [
          'React',
          'TypeScript',
          'Polaris',
          'GraphQL',
          'Ruby on Rails',
        ],
        description:
          'Worked on the Shopify Admin, building merchant-facing features using React and the Polaris design system. Shipped an improved bulk-editing interface for product variants that reduced task completion time by 40%. Contributed upstream fixes to the Polaris component library and participated in design critiques with the UX team.',
        icon: 'code',
      },
    ],
  },
];
