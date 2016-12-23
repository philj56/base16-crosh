// Base16 Eighties
// Scheme: Chris Kempson (http://chriskempson.com)

var colour_scheme = {
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

var cursor_colour = "rgba(211, 208, 200, 0.5)";
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
