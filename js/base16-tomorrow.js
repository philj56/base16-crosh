// Base16 Tomorrow
// Scheme: Chris Kempson (http://chriskempson.com)

var colour_scheme = {
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

var cursor_colour = "rgba(77, 77, 76, 0.5)";
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
