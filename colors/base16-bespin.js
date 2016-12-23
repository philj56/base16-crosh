// Base16 Bespin
// Scheme: Jan T. Sott

var color_scheme = {
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

term_.prefs_.set('background-color', color_scheme.base00);
term_.prefs_.set('foreground-color', color_scheme.base05);
term_.prefs_.set('cursor-color', "rgba(138, 137, 134, 0.5)");

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
