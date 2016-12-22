// Base16 Ocean
// Scheme: Chris Kempson (http://chriskempson.com)

var colour_scheme = {
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

var cursor_colour = "rgba(192, 197, 206, 0.5)";
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
