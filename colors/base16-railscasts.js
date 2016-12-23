// Base16 Railscasts
// Scheme: Ryan Bates (http://railscasts.com)

var color_scheme = {
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

term_.prefs_.set('background-color', color_scheme.base00);
term_.prefs_.set('foreground-color', color_scheme.base05);
term_.prefs_.set('cursor-color', "rgba(230, 225, 220, 0.5)");

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
