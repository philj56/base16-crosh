// Base16 Materia
// Scheme: Defman21

var colour_scheme = {
        'base00': '#263238',
        'base01': '#2C393F',
        'base02': '#37474F',
        'base03': '#707880',
        'base04': '#C9CCD3',
        'base05': '#CDD3DE',
        'base06': '#D5DBE5',
        'base07': '#FFFFFF',
        'base08': '#EC5F67',
        'base09': '#EA9560',
        'base0A': '#FFCC00',
        'base0B': '#8BD649',
        'base0C': '#80CBC4',
        'base0D': '#89DDFF',
        'base0E': '#82AAFF',
        'base0F': '#EC5F67',
};

var cursor_colour = "rgba(205, 211, 222, 0.5)";
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
