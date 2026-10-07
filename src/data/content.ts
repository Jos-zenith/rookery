// Page content. Keep it short: the drawings carry the meaning,
// the words are captions. Aim for 2–5 words per item.

import type { IconName } from '../lib/icons';

type Item = { icon: IconName; title: string; note?: string };

export const different: Item[] = [
  { icon: 'user', title: 'Real problems, real people', note: 'Every project starts with someone who has the problem.' },
  { icon: 'trail', title: 'Nobody left behind', note: 'No racing. Not ready? Present at the next showcase.' },
  { icon: 'video', title: 'All online', note: 'WhatsApp for chat, Google Meet for sessions.' },
  { icon: 'huddle', title: 'Small on purpose', note: '25–30 penguins, huddles of 4–5.' },
];

// Colleges our penguins come from (and later, sponsors). Shown near the top
// once there are names to show.
export const colleges: string[] = [];

// The 5-stage lifecycle every penguin goes through, in every track.
export const stages: Item[] = [
  { icon: 'define', title: 'Define', note: 'the real problem' },
  { icon: 'prototype', title: 'Prototype', note: 'build it rough' },
  { icon: 'test', title: 'Test', note: 'with real users' },
  { icon: 'ship', title: 'Ship', note: 'to your sponsor' },
  { icon: 'showcase', title: 'Showcase', note: 'show your work' },
];

// Universal onboarding: how every penguin starts.
export const onboarding: Item[] = [
  { icon: 'define', title: 'Frame problems' },
  { icon: 'chat', title: 'Interview users' },
  { icon: 'sketch', title: 'Sketch prototypes' },
];

// Small bento cards next to the big Passport card.
export const outcomes: (Item & { tint: 'blue' | 'peach' | 'mint' })[] = [
  { icon: 'video', title: 'A call with an expert', note: 'once you have a prototype', tint: 'blue' },
  { icon: 'showcase', title: 'A showcase spot', note: 'present to real people', tint: 'peach' },
  { icon: 'huddle', title: 'Your huddle', note: 'friends across colleges', tint: 'mint' },
  { icon: 'flag', title: 'A chance to lead', note: 'Guide the next batch', tint: 'blue' },
];

// The sample Passport on the home page. Clearly marked as an example.
export const passportSample = {
  name: 'A. Penguin',
  sponsor: 'A neighbourhood clinic',
  problem: 'A clinic loses track of follow-up visits',
  interviews: 7,
  versions: 3,
  quote: 'They came back with better questions than we had.',
  stage: 3, // 0-based index into `stages`: Ship
  level: 2, // 0-based index into `levels`: L2 Builder
};

export const team: { icon: IconName; role: string; who: string; does: string }[] = [
  { icon: 'flag', role: 'Founding Keeper', who: 'Jos Zenith', does: 'direction, sponsors, expert intros' },
  { icon: 'passport', role: 'Co-Keeper', who: 'joining soon', does: 'onboarding, check-ins' },
  { icon: 'trail', role: 'Guides', who: 'one per track', does: 'coach huddles, Saturday calls' },
  { icon: 'huddle', role: 'Huddle Captains', who: 'a penguin, rotating', does: 'runs check-ins' },
];

// For CSR teams and sponsors.
export const partnerWays: Item[] = [
  { icon: 'pond', title: 'Bring a problem' },
  { icon: 'video', title: 'Give expert time' },
  { icon: 'showcase', title: 'Host a showcase' },
  { icon: 'ai', title: 'Fund tools and credits' },
];

export const week: { day: string; icon?: IconName; what?: string }[] = [
  { day: 'Mon', icon: 'chat', what: 'Huddle check-in' },
  { day: 'Tue' },
  { day: 'Wed', icon: 'video', what: 'Live session' },
  { day: 'Thu' },
  { day: 'Fri' },
  { day: 'Sat', icon: 'huddle', what: 'Huddle call' },
  { day: 'Sun', icon: 'ship', what: 'Ship of the Week' },
];

export const levels: { code: string; name: string; unlock: string }[] = [
  { code: 'L0', name: 'Starter', unlock: 'Onboard' },
  { code: 'L1', name: 'Learner', unlock: 'Mini sprint' },
  { code: 'L2', name: 'Builder', unlock: 'Prototype' },
  { code: 'L3', name: 'Shipper', unlock: 'Ship + showcase' },
  { code: 'L4', name: 'Mentor', unlock: 'Bring up 2 newcomers' },
];

export const guidePerks: Item[] = [
  { icon: 'flag', title: 'Lead a track' },
  { icon: 'huddle', title: 'Mentor 2–3 huddles' },
  { icon: 'ship', title: 'Credit for shipped prototypes' },
];

// Sponsored problems for the Problem Pond. Leave empty until a sponsor
// has agreed; the section shows a waiting state.
export const problems: {
  title: string;
  sponsor: string; // e.g. "A neighbourhood clinic"
  sponsorType: string; // e.g. "Clinic", "NGO", "Shop"
  track?: string;
  open: boolean;
}[] = [];
