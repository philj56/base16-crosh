// Base16 Unikitty Dark
// Scheme: Josh W Lewis (@joshwlewis)

var color_scheme = {
        'base00': '#2e2a31',
        'base01': '#4a464d',
        'base02': '#666369',
        'base03': '#838085',
        'base04': '#9f9da2',
        'base05': '#bcbabe',
        'base06': '#d8d7da',
        'base07': '#f5f4f7',
        'base08': '#d8137f',
        'base09': '#d65407',
        'base0A': '#dc8a0e',
        'base0B': '#17ad98',
        'base0C': '#149bda',
        'base0D': '#796af5',
        'base0E': '#bb60ea',
        'base0F': '#c720ca',
};

term_.prefs_.set('background-color', color_scheme.base00);
term_.prefs_.set('foreground-color', color_scheme.base05);
term_.prefs_.set('cursor-color', "rgba(188, 186, 190, 0.5)");

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
