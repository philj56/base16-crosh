// Base16 Flat
// Scheme: Chris Kempson (http://chriskempson.com)

var colour_scheme = {
        'base00': '#2C3E50',
        'base01': '#34495E',
        'base02': '#7F8C8D',
        'base03': '#95A5A6',
        'base04': '#BDC3C7',
        'base05': '#e0e0e0',
        'base06': '#f5f5f5',
        'base07': '#ECF0F1',
        'base08': '#E74C3C',
        'base09': '#E67E22',
        'base0A': '#F1C40F',
        'base0B': '#2ECC71',
        'base0C': '#1ABC9C',
        'base0D': '#3498DB',
        'base0E': '#9B59B6',
        'base0F': '#be643c',
};

var cursor_colour = "rgba(224, 224, 224, 0.5)";
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
