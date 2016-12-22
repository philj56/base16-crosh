// Base16 Bright
// Scheme: Chris Kempson (http://chriskempson.com)

var colour_scheme = {
        'base00': '#000000',
        'base01': '#303030',
        'base02': '#505050',
        'base03': '#b0b0b0',
        'base04': '#d0d0d0',
        'base05': '#e0e0e0',
        'base06': '#f5f5f5',
        'base07': '#ffffff',
        'base08': '#fb0120',
        'base09': '#fc6d24',
        'base0A': '#fda331',
        'base0B': '#a1c659',
        'base0C': '#76c7b7',
        'base0D': '#6fb3d2',
        'base0E': '#d381c3',
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
