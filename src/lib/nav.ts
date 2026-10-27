export type Audience = 'students' | 'community' | 'youth' | 'shared';

export type NavItem = {
  label: string;
  href: string;
};

/** ≤5 primary links; Donate is always rendered separately in the header. */
export const STUDENT_NAV: NavItem[] = [
  { label: 'Shabbat', href: '/students/shabbat' },
  { label: 'Holidays', href: '/students/high-holidays' },
  { label: 'Learn', href: '/students/learn' },
  { label: 'Visit', href: '/visit' },
  { label: 'Events', href: '/events' },
];

export const COMMUNITY_NAV: NavItem[] = [
  { label: 'Visit', href: '/visit' },
  { label: 'Services', href: '/community/services' },
  { label: 'Youth', href: '/youth' },
  { label: 'Holidays', href: '/community/high-holidays' },
  { label: 'Events', href: '/events' },
];

export const SHARED_FOOTER_LINKS: NavItem[] = [
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
  { label: 'Map', href: '/map' },
  { label: 'Kosher', href: '/kosher' },
  { label: 'Visit', href: '/visit' },
  { label: 'Donate', href: '/donate' },
  { label: 'Chai Club', href: '/chai-club' },
  { label: 'Membership', href: '/membership' },
  { label: 'Life & Legacy', href: '/life-and-legacy' },
  { label: 'Events', href: '/events' },
  { label: 'Youth', href: '/youth' },
];

export const SITE = {
  name: 'Chabad House of Ann Arbor',
  studentBrand: 'JewMich',
  communityBrand: 'Chabad Ann Arbor',
  addressLines: ['715 Hill Street', 'Ann Arbor, MI 48104'],
  addressShort: '715 Hill',
  phoneDisplay: '734-995-3276',
  phoneTel: '+17349953276',
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
