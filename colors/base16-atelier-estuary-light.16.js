// Base16 Atelier Estuary Light
// Scheme: Bram de Haan (http://atelierbramdehaan.nl)

var color_scheme = {
        'base00': '#f4f3ec',
        'base01': '#e7e6df',
        'base02': '#929181',
        'base03': '#878573',
        'base04': '#6c6b5a',
        'base05': '#5f5e4e',
        'base06': '#302f27',
        'base07': '#22221b',
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
term_.prefs_.set('cursor-color', "rgba(95, 94, 78, 0.5)");

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
