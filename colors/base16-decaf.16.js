// Base16 Decaf
// Scheme: Alex Mirrington (https://github.com/alexmirrington)

var color_scheme = {
        'base00': '#2d2d2d',
        'base01': '#393939',
        'base02': '#515151',
        'base03': '#777777',
        'base04': '#b4b7b4',
        'base05': '#cccccc',
        'base06': '#e0e0e0',
        'base07': '#ffffff',
        'base08': '#ff7f7b',
        'base09': '#ffbf70',
        'base0A': '#ffd67c',
        'base0B': '#beda78',
        'base0C': '#bed6ff',
        'base0D': '#90bee1',
        'base0E': '#efb3f7',
        'base0F': '#ff93b3',
};

term_.prefs_.set('background-color', color_scheme.base00);
term_.prefs_.set('foreground-color', color_scheme.base05);
term_.prefs_.set('cursor-color', "rgba(204, 204, 204, 0.5)");

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
