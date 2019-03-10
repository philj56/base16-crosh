// Base16 Harmonic16 Dark
// Scheme: Jannik Siebert (https://github.com/janniks)

var color_scheme = {
        'base00': '#0b1c2c',
        'base01': '#223b54',
        'base02': '#405c79',
        'base03': '#627e99',
        'base04': '#aabcce',
        'base05': '#cbd6e2',
        'base06': '#e5ebf1',
        'base07': '#f7f9fb',
        'base08': '#bf8b56',
        'base09': '#bfbf56',
        'base0A': '#8bbf56',
        'base0B': '#56bf8b',
        'base0C': '#568bbf',
        'base0D': '#8b56bf',
        'base0E': '#bf568b',
        'base0F': '#bf5656',
};

term_.prefs_.set('background-color', color_scheme.base00);
term_.prefs_.set('foreground-color', color_scheme.base05);
term_.prefs_.set('cursor-color', "rgba(203, 214, 226, 0.5)");

term_.prefs_.set('color-palette-overrides',
                        [color_scheme.base00,
                        color_scheme.base08,
                        color_scheme.base0B,
                        color_scheme.base0A,
                        color_scheme.base0D,
                        color_scheme.base0E,
                        color_scheme.base0C,
                        color_scheme.base05,
                        color_scheme.base03,
                        color_scheme.base09,
                        color_scheme.base01,
                        color_scheme.base02,
                        color_scheme.base04,
                        color_scheme.base06,
                        color_scheme.base0F,
                        color_scheme.base07]);
