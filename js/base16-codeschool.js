// Base16 Codeschool
// Scheme: brettof86

var colour_scheme = {
        'base00': '#232c31',
        'base01': '#1c3657',
        'base02': '#2a343a',
        'base03': '#3f4944',
        'base04': '#84898c',
        'base05': '#9ea7a6',
        'base06': '#a7cfa3',
        'base07': '#b5d8f6',
        'base08': '#2a5491',
        'base09': '#43820d',
        'base0A': '#a03b1e',
        'base0B': '#237986',
        'base0C': '#b02f30',
        'base0D': '#484d79',
        'base0E': '#c59820',
        'base0F': '#c98344',
};

var cursor_colour = "rgba(158, 167, 166, 0.5)";
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
