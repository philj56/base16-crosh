// Base16 Atelier Seaside Light
// Scheme: Bram de Haan (http://atelierbramdehaan.nl)

var color_scheme = {
        'base00': '#f4fbf4',
        'base01': '#cfe8cf',
        'base02': '#8ca68c',
        'base03': '#809980',
        'base04': '#687d68',
        'base05': '#5e6e5e',
        'base06': '#242924',
        'base07': '#131513',
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
term_.prefs_.set('cursor-color', "rgba(94, 110, 94, 0.5)");

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
