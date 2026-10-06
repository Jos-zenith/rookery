// Icon paths on a 24px grid, drawn as 1.75px round-capped lines to match the logo.
// Everyday icons follow Lucide's shapes; the club icons are our own.
// Replace the club icons with traced pen sketches when they exist.

export const icons = {
  // everyday
  'arrow-right': '<path d="M5 12h14M13 6l6 6-6 6"/>',
  'arrow-up-right': '<path d="M7 17 17 7M8 7h9v9"/>',
  'arrow-down': '<path d="M12 5v14M6 13l6 6 6-6"/>',
  chat: '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>',
  video: '<rect x="2.5" y="6" width="13" height="12" rx="2"/><path d="m15.5 10.5 6-3.5v10l-6-3.5"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  check: '<path d="M5 12.5 10 17 19 7"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3.5 6.5 8.5 6.5 8.5-6.5"/>',
  user: '<circle cx="12" cy="8" r="4"/><path d="M4 21c.8-4 4-6.5 8-6.5s7.2 2.5 8 6.5"/>',
  flag: '<path d="M5 21V4M5 4h11l-2 4 2 4H5"/>',

  // lifecycle
  define:
    '<path d="M4 9V5a1 1 0 0 1 1-1h4M15 4h4a1 1 0 0 1 1 1v4M20 15v4a1 1 0 0 1-1 1h-4M9 20H5a1 1 0 0 1-1-1v-4"/><circle cx="12" cy="12" r="2.5"/>',
  prototype:
    '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94z"/>',
  test: '<circle cx="9" cy="8" r="3"/><path d="M3 20c.6-3.4 3-5.5 6-5.5 1.3 0 2.5.4 3.4 1.1M14 17l2.5 2.5L21 15"/>',
  showcase: '<path d="M12 3l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.4l-5.2 2.7 1-5.8-4.3-4.1 5.9-.9z"/>',
  sketch: '<path d="M4 20l1-4L16 5l3 3L8 19zM14 7l3 3M13 20h7"/>',

  // tracks
  ai: '<path d="M11 4c.6 4.3 2.7 6.4 7 7-4.3.6-6.4 2.7-7 7-.6-4.3-2.7-6.4-7-7 4.3-.6 6.4-2.7 7-7z"/><path d="M19 2.5v4M17 4.5h4"/>',
  cad: '<path d="M12 3l8 4.5v9L12 21l-8-4.5v-9z"/><path d="M4 7.5l8 4.5 8-4.5M12 12v9"/>',
  iot: '<rect x="8" y="13" width="8" height="8" rx="1.5"/><path d="M12 13v-2.5M7.5 8a6.5 6.5 0 0 1 9 0M4.5 5a10.5 10.5 0 0 1 15 0"/>',

  // club
  egg: '<path d="M12 3c3.6 0 6.5 5.4 6.5 10a6.5 6.5 0 0 1-13 0C5.5 8.4 8.4 3 12 3z"/>',
  huddle:
    '<circle cx="6.5" cy="10" r="2.2"/><circle cx="12" cy="7.5" r="2.2"/><circle cx="17.5" cy="10" r="2.2"/><path d="M2.5 19c.5-2.8 2-4.3 4-4.3M8 17c.6-3.4 2-5.2 4-5.2s3.4 1.8 4 5.2M21.5 19c-.5-2.8-2-4.3-4-4.3"/>',
  pond:
    '<path d="M12 3c-1.8 2.6-2.7 4.2-2.7 5.4a2.7 2.7 0 0 0 5.4 0c0-1.2-.9-2.8-2.7-5.4z"/><ellipse cx="12" cy="17" rx="9" ry="3.6"/><path d="M8.5 17c1-.8 2.2-1.2 3.5-1.2s2.5.4 3.5 1.2"/>',
  passport: '<rect x="5" y="3" width="14" height="18" rx="2"/><circle cx="12" cy="10.5" r="3.3"/><path d="M9 17h6"/>',
  fledge:
    '<path d="M2 18c2 0 2-1.5 4-1.5s2 1.5 4 1.5 2-1.5 4-1.5 2 1.5 4 1.5 2-1.5 4-1.5"/><path d="M8 13l8-8M11 5h5v5"/>',
  ship: '<path d="M3 15h18l-3 5H6z"/><path d="M12 15V3l7 10h-7"/>',
  trail: '<path stroke-dasharray="2.6 2.6" d="M3 6h10a3.5 3.5 0 0 1 0 7h-2a3.5 3.5 0 0 0 0 7h10"/>',
  pebble: '<path d="M4.5 15c0-4 3.4-7 7.5-7s7.5 2.6 7.5 5.6S16.4 18 12 18s-7.5 0-7.5-3z"/><path d="M9 12.4c.8-.9 1.9-1.4 3.1-1.4"/>',
} as const;

export type IconName = keyof typeof icons;
