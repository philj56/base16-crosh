// Base16 Ocean
// Scheme: Chris Kempson (http://chriskempson.com)

var color_scheme = {
        'base00': '#2b303b',
        'base01': '#343d46',
        'base02': '#4f5b66',
        'base03': '#65737e',
        'base04': '#a7adba',
        'base05': '#c0c5ce',
        'base06': '#dfe1e8',
        'base07': '#eff1f5',
        'base08': '#bf616a',
        'base09': '#d08770',
        'base0A': '#ebcb8b',
        'base0B': '#a3be8c',
        'base0C': '#96b5b4',
        'base0D': '#8fa1b3',
        'base0E': '#b48ead',
        'base0F': '#ab7967',
};

term_.prefs_.set('background-color', color_scheme.base00);
term_.prefs_.set('foreground-color', color_scheme.base05);
term_.prefs_.set('cursor-color', "rgba(192, 197, 206, 0.5)");

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
