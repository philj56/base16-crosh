// Base16 Gruvbox light, medium
// Scheme: Dawid Kurek (dawikur@gmail.com), morhetz (https://github.com/morhetz/gruvbox)

var color_scheme = {
        'base00': '#fbf1c7',
        'base01': '#ebdbb2',
        'base02': '#d5c4a1',
        'base03': '#bdae93',
        'base04': '#665c54',
        'base05': '#504945',
        'base06': '#3c3836',
        'base07': '#282828',
        'base08': '#9d0006',
        'base09': '#af3a03',
        'base0A': '#b57614',
        'base0B': '#79740e',
        'base0C': '#427b58',
        'base0D': '#076678',
        'base0E': '#8f3f71',
        'base0F': '#d65d0e',
};

term_.prefs_.set('background-color', color_scheme.base00);
term_.prefs_.set('foreground-color', color_scheme.base05);
term_.prefs_.set('cursor-color', "rgba(80, 73, 69, 0.5)");

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
