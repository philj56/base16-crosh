// Base16 Fruit Soda
// Scheme: jozip

var color_scheme = {
        'base00': '#f1ecf1',
        'base01': '#e0dee0',
        'base02': '#d8d5d5',
        'base03': '#b5b4b6',
        'base04': '#979598',
        'base05': '#515151',
        'base06': '#474545',
        'base07': '#2d2c2c',
        'base08': '#fe3e31',
        'base09': '#fe6d08',
        'base0A': '#f7e203',
        'base0B': '#47f74c',
        'base0C': '#0f9cfd',
        'base0D': '#2931df',
        'base0E': '#611fce',
        'base0F': '#b16f40',
};

term_.prefs_.set('background-color', color_scheme.base00);
term_.prefs_.set('foreground-color', color_scheme.base05);
term_.prefs_.set('cursor-color', "rgba(81, 81, 81, 0.5)");

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
