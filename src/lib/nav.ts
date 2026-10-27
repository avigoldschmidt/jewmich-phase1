export type Audience = 'students' | 'community' | 'youth' | 'shared';

export type NavItem = {
  label: string;
  href: string;
};

/** ≤5 primary links; Donate and Search are rendered separately in the header. */
export const STUDENT_NAV: NavItem[] = [
  { label: 'Shabbat', href: '/students/shabbat' },
  { label: 'Events', href: '/events' },
  { label: 'Holidays', href: '/students/holidays' },
  { label: 'Learn', href: '/students/learn' },
  { label: 'Visit', href: '/visit' },
];

export const COMMUNITY_NAV: NavItem[] = [
  { label: 'Services', href: '/community/services' },
  { label: 'Events', href: '/events' },
  { label: 'Holidays', href: '/community/holidays' },
  { label: 'Learn', href: '/community/learn' },
  { label: 'Jewish Life', href: '/community/jewish-life' },
];

export const FOOTER_GROUPS: { heading: string; links: NavItem[] }[] = [
  {
    heading: 'Visit',
    links: [
      { label: 'Find us', href: '/visit' },
      { label: 'Kosher', href: '/community/jewish-life#kosher' },
      { label: 'Contact', href: '/contact' },
      { label: 'Candle lighting', href: '/candle-lighting' },
    ],
  },
  {
    heading: 'Give',
    links: [
      { label: 'Donate', href: '/donate' },
      { label: 'Chai Club', href: '/donate#chai-club' },
      { label: 'Life & Legacy', href: '/donate#life-and-legacy' },
      { label: 'Membership', href: '/donate#membership' },
    ],
  },
  {
    heading: 'About',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Youth', href: '/youth' },
      { label: 'Events', href: '/events' },
      { label: 'Newsletter', href: '/newsletter' },
    ],
  },
];

/** @deprecated Prefer FOOTER_GROUPS */
export const SHARED_FOOTER_LINKS: NavItem[] = FOOTER_GROUPS.flatMap((g) => g.links);

export const SITE = {
  name: 'Chabad House of Ann Arbor',
  studentBrand: 'JewMich',
  communityBrand: 'Chabad Ann Arbor',
  addressLines: ['715 Hill Street', 'Ann Arbor, MI 48104'],
  addressShort: '715 Hill St',
  phoneDisplay: '734-995-3276',
  phoneTel: '+17349953276',
  since: '1975',
  /** Placeholder until staff supply EIN */
  ein: '',
  domains: {
    students: 'https://www.jewmich.com',
    community: 'https://www.chabadannarbor.com',
  },
  homes: {
    students: '/home/students',
    community: '/home/community',
  },
} as const;

export function navForAudience(audience: Audience): NavItem[] {
  if (audience === 'community' || audience === 'youth') return COMMUNITY_NAV;
  return STUDENT_NAV;
}

export function homeForAudience(audience: Audience): string {
  if (audience === 'community' || audience === 'youth') return SITE.homes.community;
  return SITE.homes.students;
}

export function primaryMobileLink(audience: Audience): NavItem {
  if (audience === 'community' || audience === 'youth') {
    return { label: 'Services', href: '/community/services' };
  }
  return { label: 'Shabbat', href: '/students/shabbat' };
}
