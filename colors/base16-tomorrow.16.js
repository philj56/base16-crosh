// Base16 Tomorrow
// Scheme: Chris Kempson (http://chriskempson.com)

var color_scheme = {
        'base00': '#ffffff',
        'base01': '#e0e0e0',
        'base02': '#d6d6d6',
        'base03': '#8e908c',
        'base04': '#969896',
        'base05': '#4d4d4c',
        'base06': '#282a2e',
        'base07': '#1d1f21',
        'base08': '#c82829',
        'base09': '#f5871f',
        'base0A': '#eab700',
        'base0B': '#718c00',
        'base0C': '#3e999f',
        'base0D': '#4271ae',
        'base0E': '#8959a8',
        'base0F': '#a3685a',
};

term_.prefs_.set('background-color', color_scheme.base00);
term_.prefs_.set('foreground-color', color_scheme.base05);
term_.prefs_.set('cursor-color', "rgba(77, 77, 76, 0.5)");

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
