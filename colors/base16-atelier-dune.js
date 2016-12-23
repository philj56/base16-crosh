// Base16 Atelier Dune
// Scheme: Bram de Haan (http://atelierbramdehaan.nl)

var color_scheme = {
        'base00': '#20201d',
        'base01': '#292824',
        'base02': '#6e6b5e',
        'base03': '#7d7a68',
        'base04': '#999580',
        'base05': '#a6a28c',
        'base06': '#e8e4cf',
        'base07': '#fefbec',
        'base08': '#d73737',
        'base09': '#b65611',
        'base0A': '#ae9513',
        'base0B': '#60ac39',
        'base0C': '#1fad83',
        'base0D': '#6684e1',
        'base0E': '#b854d4',
        'base0F': '#d43552',
};

term_.prefs_.set('background-color', color_scheme.base00);
term_.prefs_.set('foreground-color', color_scheme.base05);
term_.prefs_.set('cursor-color', "rgba(166, 162, 140, 0.5)");

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
