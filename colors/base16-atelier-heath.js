// Base16 Atelier Heath
// Scheme: Bram de Haan (http://atelierbramdehaan.nl)

var colour_scheme = {
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

var cursor_colour = "rgba(171, 155, 171, 0.5)";
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
