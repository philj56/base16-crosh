// Base16 Gruvbox dark, pale
// Scheme: Dawid Kurek (dawikur@gmail.com), morhetz (https://github.com/morhetz/gruvbox)

var color_scheme = {
        'base00': '#262626',
        'base01': '#3a3a3a',
        'base02': '#4e4e4e',
        'base03': '#8a8a8a',
        'base04': '#949494',
        'base05': '#dab997',
        'base06': '#d5c4a1',
        'base07': '#ebdbb2',
        'base08': '#d75f5f',
        'base09': '#ff8700',
        'base0A': '#ffaf00',
        'base0B': '#afaf00',
        'base0C': '#85ad85',
        'base0D': '#83adad',
        'base0E': '#d485ad',
        'base0F': '#d65d0e',
};

term_.prefs_.set('background-color', color_scheme.base00);
term_.prefs_.set('foreground-color', color_scheme.base05);
term_.prefs_.set('cursor-color', "rgba(218, 185, 151, 0.5)");

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
