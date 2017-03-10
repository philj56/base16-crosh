// Base16 Gruvbox dark, hard
// Scheme: Dawid Kurek (dawikur@gmail.com), morhetz (https://github.com/morhetz/gruvbox)

var color_scheme = {
        'base00': '#1d2021',
        'base01': '#3c3836',
        'base02': '#504945',
        'base03': '#665c54',
        'base04': '#bdae93',
        'base05': '#d5c4a1',
        'base06': '#ebdbb2',
        'base07': '#fbf1c7',
        'base08': '#fb4934',
        'base09': '#fe8019',
        'base0A': '#fabd2f',
        'base0B': '#b8bb26',
        'base0C': '#8ec07c',
        'base0D': '#83a598',
        'base0E': '#d3869b',
        'base0F': '#d65d0e',
};

term_.prefs_.set('background-color', color_scheme.base00);
term_.prefs_.set('foreground-color', color_scheme.base05);
term_.prefs_.set('cursor-color', "rgba(213, 196, 161, 0.5)");

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
