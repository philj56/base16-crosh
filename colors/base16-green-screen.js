// Base16 Green Screen
// Scheme: Chris Kempson (http://chriskempson.com)

var colour_scheme = {
        'base00': '#001100',
        'base01': '#003300',
        'base02': '#005500',
        'base03': '#007700',
        'base04': '#009900',
        'base05': '#00bb00',
        'base06': '#00dd00',
        'base07': '#00ff00',
        'base08': '#007700',
        'base09': '#009900',
        'base0A': '#007700',
        'base0B': '#00bb00',
        'base0C': '#005500',
        'base0D': '#009900',
        'base0E': '#00bb00',
        'base0F': '#005500',
};

var cursor_colour = "rgba(0, 187, 0, 0.5)";
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
