// Base16 Gigavolt
// Scheme: Aidan Swope (http://github.com/Whillikers)

var color_scheme = {
        'base00': '#202126',
        'base01': '#2d303d',
        'base02': '#5a576e',
        'base03': '#a1d2e6',
        'base04': '#cad3ff',
        'base05': '#e9e7e1',
        'base06': '#eff0f9',
        'base07': '#f2fbff',
        'base08': '#ff661a',
        'base09': '#19f988',
        'base0A': '#ffdc2d',
        'base0B': '#f2e6a9',
        'base0C': '#fb6acb',
        'base0D': '#40bfff',
        'base0E': '#ae94f9',
        'base0F': '#6187ff',
};

term_.prefs_.set('background-color', color_scheme.base00);
term_.prefs_.set('foreground-color', color_scheme.base05);
term_.prefs_.set('cursor-color', "rgba(233, 231, 225, 0.5)");

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
