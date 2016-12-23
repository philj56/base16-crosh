// Base16 Atelier Seaside
// Scheme: Bram de Haan (http://atelierbramdehaan.nl)

var colour_scheme = {
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

var cursor_colour = "rgba(140, 166, 140, 0.5)";
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
