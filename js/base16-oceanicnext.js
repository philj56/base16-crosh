// Base16 OceanicNext
// Scheme: https://github.com/voronianski/oceanic-next-color-scheme

var colour_scheme = {
        'base00': '#1B2B34',
        'base01': '#343D46',
        'base02': '#4F5B66',
        'base03': '#65737E',
        'base04': '#A7ADBA',
        'base05': '#C0C5CE',
        'base06': '#CDD3DE',
        'base07': '#D8DEE9',
        'base08': '#EC5f67',
        'base09': '#F99157',
        'base0A': '#FAC863',
        'base0B': '#99C794',
        'base0C': '#5FB3B3',
        'base0D': '#6699CC',
        'base0E': '#C594C5',
        'base0F': '#AB7967',
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
