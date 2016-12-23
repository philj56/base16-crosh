// Base16 Bright
// Scheme: Chris Kempson (http://chriskempson.com)

var color_scheme = {
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

term_.prefs_.set('background-color', color_scheme.base00);
term_.prefs_.set('foreground-color', color_scheme.base05);
term_.prefs_.set('cursor-color', "rgba(224, 224, 224, 0.5)");

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
