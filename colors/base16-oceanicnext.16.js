// Base16 OceanicNext
// Scheme: https://github.com/voronianski/oceanic-next-color-scheme

var color_scheme = {
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
                        color_scheme.base09,
                        color_scheme.base01,
                        color_scheme.base02,
                        color_scheme.base04,
                        color_scheme.base06,
                        color_scheme.base0F,
                        color_scheme.base07]);
