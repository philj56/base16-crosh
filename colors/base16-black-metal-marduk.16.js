// Base16 Black Metal (Marduk)
// Scheme: metalelf0 (https://github.com/metalelf0)

var color_scheme = {
        'base00': '#000000',
        'base01': '#121212',
        'base02': '#222222',
        'base03': '#333333',
        'base04': '#999999',
        'base05': '#c1c1c1',
        'base06': '#999999',
        'base07': '#c1c1c1',
        'base08': '#5f8787',
        'base09': '#aaaaaa',
        'base0A': '#626b67',
        'base0B': '#a5aaa7',
        'base0C': '#aaaaaa',
        'base0D': '#888888',
        'base0E': '#999999',
        'base0F': '#444444',
};

term_.prefs_.set('background-color', color_scheme.base00);
term_.prefs_.set('foreground-color', color_scheme.base05);
term_.prefs_.set('cursor-color', "rgba(193, 193, 193, 0.5)");

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
