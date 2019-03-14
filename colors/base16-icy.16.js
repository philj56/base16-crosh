// Base16 Icy Dark
// Scheme: icyphox (https://icyphox.ga)

var color_scheme = {
        'base00': '#021012',
        'base01': '#031619',
        'base02': '#041f23',
        'base03': '#052e34',
        'base04': '#064048',
        'base05': '#095b67',
        'base06': '#0c7c8c',
        'base07': '#109cb0',
        'base08': '#16c1d9',
        'base09': '#b3ebf2',
        'base0A': '#80deea',
        'base0B': '#4dd0e1',
        'base0C': '#26c6da',
        'base0D': '#00bcd4',
        'base0E': '#00acc1',
        'base0F': '#0097a7',
};

term_.prefs_.set('background-color', color_scheme.base00);
term_.prefs_.set('foreground-color', color_scheme.base05);
term_.prefs_.set('cursor-color', "rgba(9, 91, 103, 0.5)");

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
