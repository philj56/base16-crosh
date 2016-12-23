// Base16 Flat
// Scheme: Chris Kempson (http://chriskempson.com)

var color_scheme = {
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
