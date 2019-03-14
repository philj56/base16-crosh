// Base16 Atelier Lakeside
// Scheme: Bram de Haan (http://atelierbramdehaan.nl)

var color_scheme = {
        'base00': '#161b1d',
        'base01': '#1f292e',
        'base02': '#516d7b',
        'base03': '#5a7b8c',
        'base04': '#7195a8',
        'base05': '#7ea2b4',
        'base06': '#c1e4f6',
        'base07': '#ebf8ff',
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
term_.prefs_.set('cursor-color', "rgba(126, 162, 180, 0.5)");

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
