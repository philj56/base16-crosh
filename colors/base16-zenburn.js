// Base16 Zenburn
// Scheme: elnawe

var color_scheme = {
        'base00': '#383838',
        'base01': '#404040',
        'base02': '#606060',
        'base03': '#6f6f6f',
        'base04': '#808080',
        'base05': '#dcdccc',
        'base06': '#c0c0c0',
        'base07': '#ffffff',
        'base08': '#dca3a3',
        'base09': '#dfaf8f',
        'base0A': '#e0cf9f',
        'base0B': '#5f7f5f',
        'base0C': '#93e0e3',
        'base0D': '#7cb8bb',
        'base0E': '#dc8cc3',
        'base0F': '#000000',
};

term_.prefs_.set('background-color', color_scheme.base00);
term_.prefs_.set('foreground-color', color_scheme.base05);
term_.prefs_.set('cursor-color', "rgba(220, 220, 204, 0.5)");

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
