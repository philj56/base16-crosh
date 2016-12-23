// Base16 Cupcake
// Scheme: Chris Kempson (http://chriskempson.com)

var color_scheme = {
        'base00': '#fbf1f2',
        'base01': '#f2f1f4',
        'base02': '#d8d5dd',
        'base03': '#bfb9c6',
        'base04': '#a59daf',
        'base05': '#8b8198',
        'base06': '#72677E',
        'base07': '#585062',
        'base08': '#D57E85',
        'base09': '#EBB790',
        'base0A': '#DCB16C',
        'base0B': '#A3B367',
        'base0C': '#69A9A7',
        'base0D': '#7297B9',
        'base0E': '#BB99B4',
        'base0F': '#BAA58C',
};

term_.prefs_.set('background-color', color_scheme.base00);
term_.prefs_.set('foreground-color', color_scheme.base05);
term_.prefs_.set('cursor-color', "rgba(139, 129, 152, 0.5)");

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
