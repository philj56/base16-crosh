// Base16 Atelier Heath
// Scheme: Bram de Haan (http://atelierbramdehaan.nl)

var color_scheme = {
        'base00': '#1b181b',
        'base01': '#292329',
        'base02': '#695d69',
        'base03': '#776977',
        'base04': '#9e8f9e',
        'base05': '#ab9bab',
        'base06': '#d8cad8',
        'base07': '#f7f3f7',
        'base08': '#ca402b',
        'base09': '#a65926',
        'base0A': '#bb8a35',
        'base0B': '#918b3b',
        'base0C': '#159393',
        'base0D': '#516aec',
        'base0E': '#7b59c0',
        'base0F': '#cc33cc',
};

term_.prefs_.set('background-color', color_scheme.base00);
term_.prefs_.set('foreground-color', color_scheme.base05);
term_.prefs_.set('cursor-color', "rgba(171, 155, 171, 0.5)");

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
