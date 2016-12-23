// Base16 Atelier Savanna
// Scheme: Bram de Haan (http://atelierbramdehaan.nl)

var color_scheme = {
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

term_.prefs_.set('background-color', color_scheme.base00);
term_.prefs_.set('foreground-color', color_scheme.base05);
term_.prefs_.set('cursor-color', "rgba(135, 146, 138, 0.5)");

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
