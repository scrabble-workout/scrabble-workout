export const WORD_LENGTH = 7;
export const DURATION = 120000;
export const INTERVAL = 1000;

/* a piece of magic due to the fact that matchMedia isn't implemented in JSDOM (used by Jest) yet */
window.matchMedia = window.matchMedia || (() => (
    {
        matches: false,
        addEventListener: () => {},
        removeEventListener: () => {},
    })
);

export const SMALL_SCREEN = window.matchMedia('(max-width: 530px)');
