// Base16 Spacemacs
// Scheme: Nasser Alshammari (https://github.com/nashamri/spacemacs-theme)

var color_scheme = {
        'base00': '#1f2022',
        'base01': '#282828',
        'base02': '#444155',
        'base03': '#585858',
        'base04': '#b8b8b8',
        'base05': '#a3a3a3',
        'base06': '#e8e8e8',
        'base07': '#f8f8f8',
        'base08': '#f2241f',
        'base09': '#ffa500',
        'base0A': '#b1951d',
        'base0B': '#67b11d',
        'base0C': '#2d9574',
        'base0D': '#4f97d7',
        'base0E': '#a31db1',
        'base0F': '#b03060',
};

term_.prefs_.set('background-color', color_scheme.base00);
term_.prefs_.set('foreground-color', color_scheme.base05);
term_.prefs_.set('cursor-color', "rgba(163, 163, 163, 0.5)");

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
