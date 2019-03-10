// Base16 Atelier Seaside
// Scheme: Bram de Haan (http://atelierbramdehaan.nl)

var color_scheme = {
        'base00': '#131513',
        'base01': '#242924',
        'base02': '#5e6e5e',
        'base03': '#687d68',
        'base04': '#809980',
        'base05': '#8ca68c',
        'base06': '#cfe8cf',
        'base07': '#f4fbf4',
        'base08': '#e6193c',
        'base09': '#87711d',
        'base0A': '#98981b',
        'base0B': '#29a329',
        'base0C': '#1999b3',
        'base0D': '#3d62f5',
        'base0E': '#ad2bee',
        'base0F': '#e619c3',
};

term_.prefs_.set('background-color', color_scheme.base00);
term_.prefs_.set('foreground-color', color_scheme.base05);
term_.prefs_.set('cursor-color', "rgba(140, 166, 140, 0.5)");

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
