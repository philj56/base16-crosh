// Base16 Atelier Lakeside Light
// Scheme: Bram de Haan (http://atelierbramdehaan.nl)

var color_scheme = {
        'base00': '#ebf8ff',
        'base01': '#c1e4f6',
        'base02': '#7ea2b4',
        'base03': '#7195a8',
        'base04': '#5a7b8c',
        'base05': '#516d7b',
        'base06': '#1f292e',
        'base07': '#161b1d',
        'base08': '#d22d72',
        'base09': '#935c25',
        'base0A': '#8a8a0f',
        'base0B': '#568c3b',
        'base0C': '#2d8f6f',
        'base0D': '#257fad',
        'base0E': '#6b6bb8',
        'base0F': '#b72dd2',
};

term_.prefs_.set('background-color', color_scheme.base00);
term_.prefs_.set('foreground-color', color_scheme.base05);
term_.prefs_.set('cursor-color', "rgba(81, 109, 123, 0.5)");

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
