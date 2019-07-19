// Base16 Horizon Light
// Scheme: Michaël Ball (http://github.com/michael-ball/)

var color_scheme = {
        'base00': '#FDF0ED',
        'base01': '#FADAD1',
        'base02': '#F9CBBE',
        'base03': '#BDB3B1',
        'base04': '#948C8A',
        'base05': '#403C3D',
        'base06': '#302C2D',
        'base07': '#201C1D',
        'base08': '#F7939B',
        'base09': '#F6661E',
        'base0A': '#FBE0D9',
        'base0B': '#94E1B0',
        'base0C': '#DC3318',
        'base0D': '#DA103F',
        'base0E': '#1D8991',
        'base0F': '#E58C92',
};

term_.prefs_.set('background-color', color_scheme.base00);
term_.prefs_.set('foreground-color', color_scheme.base05);
term_.prefs_.set('cursor-color', "rgba(64, 60, 61, 0.5)");

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
