// Base16 Tomorrow Night
// Scheme: Chris Kempson (http://chriskempson.com)

var color_scheme = {
        'base00': '#2d2d2d',
        'base01': '#393939',
        'base02': '#515151',
        'base03': '#999999',
        'base04': '#b4b7b4',
        'base05': '#cccccc',
        'base06': '#e0e0e0',
        'base07': '#ffffff',
        'base08': '#f2777a',
        'base09': '#f99157',
        'base0A': '#ffcc66',
        'base0B': '#99cc99',
        'base0C': '#66cccc',
        'base0D': '#6699cc',
        'base0E': '#cc99cc',
        'base0F': '#a3685a',
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
