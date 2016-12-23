// Base16 Unikitty Light
// Scheme: Josh W Lewis (@joshwlewis)

var color_scheme = {
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

term_.prefs_.set('background-color', color_scheme.base00);
term_.prefs_.set('foreground-color', color_scheme.base05);
term_.prefs_.set('cursor-color', "rgba(108, 105, 110, 0.5)");

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
                        color_scheme.base08,
                        color_scheme.base0B,
                        color_scheme.base0A,
                        color_scheme.base0D,
                        color_scheme.base0E,
                        color_scheme.base0C,
                        color_scheme.base07,
                        color_scheme.base09,
                        color_scheme.base0F,
                        color_scheme.base01,
                        color_scheme.base02,
                        color_scheme.base04,
                        color_scheme.base06]);
