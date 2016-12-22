// Base16 Bespin
// Scheme: Jan T. Sott

var colour_scheme = {
        'base00': '#28211c',
        'base01': '#36312e',
        'base02': '#5e5d5c',
        'base03': '#666666',
        'base04': '#797977',
        'base05': '#8a8986',
        'base06': '#9d9b97',
        'base07': '#baae9e',
        'base08': '#cf6a4c',
        'base09': '#cf7d34',
        'base0A': '#f9ee98',
        'base0B': '#54be0d',
        'base0C': '#afc4db',
        'base0D': '#5ea6ea',
        'base0E': '#9b859d',
        'base0F': '#937121',
};

var cursor_colour = "rgba(138, 137, 134, 0.5)";
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
