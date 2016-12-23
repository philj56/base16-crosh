// Base16 Eighties
// Scheme: Chris Kempson (http://chriskempson.com)

var color_scheme = {
        'base00': '#2d2d2d',
        'base01': '#393939',
        'base02': '#515151',
        'base03': '#747369',
        'base04': '#a09f93',
        'base05': '#d3d0c8',
        'base06': '#e8e6df',
        'base07': '#f2f0ec',
        'base08': '#f2777a',
        'base09': '#f99157',
        'base0A': '#ffcc66',
        'base0B': '#99cc99',
        'base0C': '#66cccc',
        'base0D': '#6699cc',
        'base0E': '#cc99cc',
        'base0F': '#d27b53',
};

term_.prefs_.set('background-color', color_scheme.base00);
term_.prefs_.set('foreground-color', color_scheme.base05);
term_.prefs_.set('cursor-color', "rgba(211, 208, 200, 0.5)");

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
