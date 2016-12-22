// Base16 Spacemacs
// Scheme: Nasser Alshammari (https://github.com/nashamri/spacemacs-theme)

var colour_scheme = {
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

var cursor_colour = "rgba(163, 163, 163, 0.5)";
term_.prefs_.set('background-color', colour_scheme.base00);
term_.prefs_.set('foreground-color', colour_scheme.base05);
term_.prefs_.set('cursor-color', cursor_colour);

term_.prefs_.set('color-palette-overrides', 
                        [colour_scheme.base00,
                        colour_scheme.base08,
                        colour_scheme.base0B,
                        colour_scheme.base0A,
                        colour_scheme.base0D,
                        colour_scheme.base0E,
                        colour_scheme.base0C,
                        colour_scheme.base05,
                        colour_scheme.base03,
                        colour_scheme.base08,
                        colour_scheme.base0B,
                        colour_scheme.base0A,
                        colour_scheme.base0D,
                        colour_scheme.base0E,
                        colour_scheme.base0C,
                        colour_scheme.base07,
                        colour_scheme.base09,
                        colour_scheme.base0F,
                        colour_scheme.base01,
                        colour_scheme.base02,
                        colour_scheme.base04,
                        colour_scheme.base06]);
