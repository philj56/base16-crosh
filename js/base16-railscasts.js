// Base16 Railscasts
// Scheme: Ryan Bates (http://railscasts.com)

var colour_scheme = {
        'base00': '#2b2b2b',
        'base01': '#272935',
        'base02': '#3a4055',
        'base03': '#5a647e',
        'base04': '#d4cfc9',
        'base05': '#e6e1dc',
        'base06': '#f4f1ed',
        'base07': '#f9f7f3',
        'base08': '#da4939',
        'base09': '#cc7833',
        'base0A': '#ffc66d',
        'base0B': '#a5c261',
        'base0C': '#519f50',
        'base0D': '#6d9cbe',
        'base0E': '#b6b3eb',
        'base0F': '#bc9458',
};

var cursor_colour = "rgba(230, 225, 220, 0.5)";
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
