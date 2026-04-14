export type Testimonial = {
  id: string;
  quote: string;
  authorName: string;
  authorTagline: string;
  authorAvatar?: string;
  url?: string;
  date: string;
  isFeatured?: boolean;
};

/**
 * TESTIMONIALS_ROW_1: Long quotes (more than 50 characters)
 * TESTIMONIALS_ROW_2: Short quotes (50 characters or fewer)
 */

export const TESTIMONIALS_ROW_1: Testimonial[] = [
  {
    id: 't1-1',
    quote:
      'Noah has a rare ability to take a vague product idea and turn it into something that feels inevitable. Her frontend work is exceptionally clean.',
    authorName: 'Daniel Karim',
    authorTagline: 'Engineering Manager @ Arcline Labs',
    authorAvatar: 'https://i.pravatar.cc/150?u=danielkarim',
    date: '2026-01-15',
    isFeatured: true,
  },
  {
    id: 't1-2',
    quote:
      "One of the most design-aware engineers I've worked with. She built our entire component library from scratch and it's still the backbone of everything we ship.",
    authorName: 'Priya Nair',
    authorTagline: 'Staff Designer @ Northflank',
    authorAvatar: 'https://i.pravatar.cc/150?u=priyanair',
    date: '2025-08-20',
  },
  {
    id: 't1-3',
    quote:
      "Noah doesn't just write code — she thinks about the person using it. That mindset changed how our whole team approaches frontend.",
    authorName: 'Leo Chen',
    authorTagline: 'CTO @ ChangeJar Technologies',
    authorAvatar: 'https://i.pravatar.cc/150?u=leochen',
    date: '2025-06-10',
  },
  {
    id: 't1-4',
    quote:
      "She shipped a checkout flow rewrite in two weeks that we'd been putting off for months. Conversion went up 18% overnight.",
    authorName: 'Aisha Patel',
    authorTagline: 'Product Lead @ ChangeJar',
    authorAvatar: 'https://i.pravatar.cc/150?u=aishapatel',
    date: '2025-04-05',
  },
  {
    id: 't1-5',
    quote:
      'Her intern project became one of the most-used features in the Admin. We tried to hire her full-time before she even graduated.',
    authorName: 'Marcus Wei',
    authorTagline: 'Senior Engineer @ Shopify',
    authorAvatar: 'https://i.pravatar.cc/150?u=marcuswei',
    date: '2020-09-01',
  },
  {
    id: 't1-6',
    quote:
      "Noah treats accessibility as a first-class concern, not an afterthought. That's rare and incredibly valuable in frontend engineering.",
    authorName: 'Sofia Lindberg',
    authorTagline: 'Design Systems Lead @ Vercel',
    authorAvatar: 'https://i.pravatar.cc/150?u=sofialindberg',
    date: '2025-11-12',
    isFeatured: true,
  },
  {
    id: 't1-7',
    quote:
      'Worked with Noah on the platform UI rewrite. She reduced our bundle size by 30% while making the whole thing more accessible. Unreal.',
    authorName: 'Jake Morrison',
    authorTagline: 'Frontend Lead @ Northflank',
    authorAvatar: 'https://i.pravatar.cc/150?u=jakemorrison',
    date: '2024-12-18',
  },
];

export const TESTIMONIALS_ROW_2: Testimonial[] = [
  {
    id: 't2-1',
    quote: 'Best component library I\'ve used. Period.',
    authorName: 'Ravi Gupta',
    authorTagline: 'Engineer @ Stripe',
    authorAvatar: 'https://i.pravatar.cc/150?u=ravigupta',
    date: '2025-10-05',
  },
  {
    id: 't2-2',
    quote: 'She makes hard problems look easy.',
    authorName: 'Nina Takahashi',
    authorTagline: 'Product Designer',
    authorAvatar: 'https://i.pravatar.cc/150?u=ninatakahashi',
    date: '2025-07-22',
  },
  {
    id: 't2-3',
    quote: 'Shipped faster than anyone expected.',
    authorName: 'Omar Farouk',
    authorTagline: 'CTO @ Tablewise',
    authorAvatar: 'https://i.pravatar.cc/150?u=omarfarouk',
    date: '2025-03-18',
  },
  {
    id: 't2-4',
    quote: 'Her Polaris contributions were top-tier.',
    authorName: 'Emily Park',
    authorTagline: 'Design Engineer @ Shopify',
    authorAvatar: 'https://i.pravatar.cc/150?u=emilypark',
    date: '2020-10-15',
  },
  {
    id: 't2-5',
    quote: 'Would hire again in a heartbeat.',
    authorName: 'Carlos Rivera',
    authorTagline: 'VP Engineering @ Arcline Labs',
    authorAvatar: 'https://i.pravatar.cc/150?u=carlosrivera',
    date: '2026-02-01',
  },
  {
    id: 't2-6',
    quote: 'Absolutely incredible attention to detail.',
    authorName: 'Hannah Liu',
    authorTagline: 'Staff Engineer @ Google',
    authorAvatar: 'https://i.pravatar.cc/150?u=hannahliu',
    date: '2025-09-28',
  },
  {
    id: 't2-7',
    quote: 'Clean code, clean thinking, clean UI.',
    authorName: 'Theo Browne',
    authorTagline: 'Creator of create-t3-app',
    authorAvatar: 'https://i.pravatar.cc/150?u=theobrowne',
    date: '2025-05-14',
  },
  {
    id: 't2-8',
    quote: 'Her design system work is next level.',
    authorName: 'Lena Morales',
    authorTagline: 'Senior Designer @ Figma',
    authorAvatar: 'https://i.pravatar.cc/150?u=lenamorales',
    date: '2025-12-03',
  },
];
