// Base16 Atlas
// Scheme: Alex Lende (https://ajlende.com)

var color_scheme = {
        'base00': '#002635',
        'base01': '#00384d',
        'base02': '#517F8D',
        'base03': '#6C8B91',
        'base04': '#869696',
        'base05': '#a1a19a',
        'base06': '#e6e6dc',
        'base07': '#fafaf8',
        'base08': '#ff5a67',
        'base09': '#f08e48',
        'base0A': '#ffcc1b',
        'base0B': '#7fc06e',
        'base0C': '#14747e',
        'base0D': '#5dd7b9',
        'base0E': '#9a70a4',
        'base0F': '#c43060',
};

term_.prefs_.set('background-color', color_scheme.base00);
term_.prefs_.set('foreground-color', color_scheme.base05);
term_.prefs_.set('cursor-color', "rgba(161, 161, 154, 0.5)");

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
