// Base16 Atelier Savanna
// Scheme: Bram de Haan (http://atelierbramdehaan.nl)

var colour_scheme = {
        'base00': '#171c19',
        'base01': '#232a25',
        'base02': '#526057',
        'base03': '#5f6d64',
        'base04': '#78877d',
        'base05': '#87928a',
        'base06': '#dfe7e2',
        'base07': '#ecf4ee',
        'base08': '#b16139',
        'base09': '#9f713c',
        'base0A': '#a07e3b',
        'base0B': '#489963',
        'base0C': '#1c9aa0',
        'base0D': '#478c90',
        'base0E': '#55859b',
        'base0F': '#867469',
};

var cursor_colour = "rgba(135, 146, 138, 0.5)";
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
