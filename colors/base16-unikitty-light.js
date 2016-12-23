// Base16 Unikitty Light
// Scheme: Josh W Lewis (@joshwlewis)

var colour_scheme = {
        'base00': '#ffffff',
        'base01': '#e1e1e2',
        'base02': '#c4c3c5',
        'base03': '#a7a5a8',
        'base04': '#89878b',
        'base05': '#6c696e',
        'base06': '#4f4b51',
        'base07': '#322d34',
        'base08': '#d8137f',
        'base09': '#d65407',
        'base0A': '#dc8a0e',
        'base0B': '#17ad98',
        'base0C': '#149bda',
        'base0D': '#775dff',
        'base0E': '#aa17e6',
        'base0F': '#e013d0',
};

var cursor_colour = "rgba(108, 105, 110, 0.5)";
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
