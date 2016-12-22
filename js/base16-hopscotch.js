// Base16 Hopscotch
// Scheme: Jan T. Sott

var colour_scheme = {
        'base00': '#322931',
        'base01': '#433b42',
        'base02': '#5c545b',
        'base03': '#797379',
        'base04': '#989498',
        'base05': '#b9b5b8',
        'base06': '#d5d3d5',
        'base07': '#ffffff',
        'base08': '#dd464c',
        'base09': '#fd8b19',
        'base0A': '#fdcc59',
        'base0B': '#8fc13e',
        'base0C': '#149b93',
        'base0D': '#1290bf',
        'base0E': '#c85e7c',
        'base0F': '#b33508',
};

var cursor_colour = "rgba(185, 181, 184, 0.5)";
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
