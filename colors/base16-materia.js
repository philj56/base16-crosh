// Base16 Materia
// Scheme: Defman21

var color_scheme = {
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

term_.prefs_.set('background-color', color_scheme.base00);
term_.prefs_.set('foreground-color', color_scheme.base05);
term_.prefs_.set('cursor-color', "rgba(205, 211, 222, 0.5)");

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
