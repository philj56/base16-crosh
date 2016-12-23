// Base16 Harmonic16 Dark
// Scheme: Jannik Siebert (https://github.com/janniks)

var colour_scheme = {
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

var cursor_colour = "rgba(203, 214, 226, 0.5)";
term_.prefs_.set('background-color', colour_scheme.base00);
term_.prefs_.set('foreground-color', colour_scheme.base05);
term_.prefs_.set('cursor-color', cursor_colour);

term_.prefs_.set('color-palette-overrides', 
                        [colour_scheme.base00,
                        colour_scheme.base08,
                        colour_scheme.base0B,
                        colour_scheme.base0A,
                        colour_scheme.base0D,
                        colour_scheme.base0E,
                        colour_scheme.base0C,
                        colour_scheme.base05,
                        colour_scheme.base03,
                        colour_scheme.base08,
                        colour_scheme.base0B,
                        colour_scheme.base0A,
                        colour_scheme.base0D,
                        colour_scheme.base0E,
                        colour_scheme.base0C,
                        colour_scheme.base07,
                        colour_scheme.base09,
                        colour_scheme.base0F,
                        colour_scheme.base01,
                        colour_scheme.base02,
                        colour_scheme.base04,
                        colour_scheme.base06]);
