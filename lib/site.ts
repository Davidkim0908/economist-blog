// Site-wide switches. Flip to true once a real newsletter provider is wired up.
export const SHOW_NEWSLETTER = false;

// Join/sign-up is hidden until OAuth keys and account storage exist. /join stays reachable by URL.
export const SHOW_JOIN = false;

// Only accounts that actually exist. Add Twitter/Facebook/YouTube here when ready.
export const socialLinks: { label: string; href: string }[] = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/kim-dongyoung-23a84493/" },
];
