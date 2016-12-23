// Base16 Atelier Estuary
// Scheme: Bram de Haan (http://atelierbramdehaan.nl)

var color_scheme = {
        'base00': '#22221b',
        'base01': '#302f27',
        'base02': '#5f5e4e',
        'base03': '#6c6b5a',
        'base04': '#878573',
        'base05': '#929181',
        'base06': '#e7e6df',
        'base07': '#f4f3ec',
        'base08': '#ba6236',
        'base09': '#ae7313',
        'base0A': '#a5980d',
        'base0B': '#7d9726',
        'base0C': '#5b9d48',
        'base0D': '#36a166',
        'base0E': '#5f9182',
        'base0F': '#9d6c7c',
};

term_.prefs_.set('background-color', color_scheme.base00);
term_.prefs_.set('foreground-color', color_scheme.base05);
term_.prefs_.set('cursor-color', "rgba(146, 145, 129, 0.5)");

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
