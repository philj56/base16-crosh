// Base16 Mellow Purple
// Scheme: gidsi

var color_scheme = {
        'base00': '#1e0528',
        'base01': '#1A092D',
        'base02': '#331354',
        'base03': '#320f55',
        'base04': '#873582',
        'base05': '#ffeeff',
        'base06': '#ffeeff',
        'base07': '#f8c0ff',
        'base08': '#00d9e9',
        'base09': '#aa00a3',
        'base0A': '#955ae7',
        'base0B': '#05cb0d',
        'base0C': '#b900b1',
        'base0D': '#550068',
        'base0E': '#8991bb',
        'base0F': '#4d6fff',
};

term_.prefs_.set('background-color', color_scheme.base00);
term_.prefs_.set('foreground-color', color_scheme.base05);
term_.prefs_.set('cursor-color', "rgba(255, 238, 255, 0.5)");

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
