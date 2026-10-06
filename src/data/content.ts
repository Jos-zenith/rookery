// Page content. Keep it short: the drawings carry the meaning,
// the words are captions. Aim for 2–5 words per item.

import type { IconName } from '../lib/icons';

type Item = { icon: IconName; title: string; note?: string };

// The 5-stage lifecycle every penguin goes through, in every track.
export const stages: Item[] = [
  { icon: 'define', title: 'Define', note: 'the real problem' },
  { icon: 'prototype', title: 'Prototype', note: 'build it rough' },
  { icon: 'test', title: 'Test', note: 'with real users' },
  { icon: 'ship', title: 'Ship', note: 'to your sponsor' },
  { icon: 'showcase', title: 'Showcase', note: 'show your work' },
];

// Universal onboarding, before branching into a track.
export const onboarding: Item[] = [
  { icon: 'define', title: 'Frame problems' },
  { icon: 'chat', title: 'Interview users' },
  { icon: 'sketch', title: 'Sketch prototypes' },
];

export const tracks: Item[] = [
  { icon: 'ai', title: 'AI', note: 'an AI agent' },
  { icon: 'cad', title: 'CAD', note: 'a CAD enclosure' },
  { icon: 'iot', title: 'IoT', note: 'a hybrid IoT system' },
];

export const outcomes: Item[] = [
  { icon: 'user', title: 'A real client' },
  { icon: 'ship', title: 'A shipped prototype' },
  { icon: 'video', title: 'A call with an expert' },
  { icon: 'passport', title: 'A Rookery Passport' },
  { icon: 'huddle', title: 'Friends across colleges' },
  { icon: 'flag', title: 'A chance to lead' },
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
  track?: string; // "AI", "CAD" or "IoT"
  open: boolean;
}[] = [];
