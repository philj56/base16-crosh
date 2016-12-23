// Base16 Green Screen
// Scheme: Chris Kempson (http://chriskempson.com)

var color_scheme = {
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

term_.prefs_.set('background-color', color_scheme.base00);
term_.prefs_.set('foreground-color', color_scheme.base05);
term_.prefs_.set('cursor-color', "rgba(0, 187, 0, 0.5)");

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
