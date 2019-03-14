// Base16 Atelier Plateau Light
// Scheme: Bram de Haan (http://atelierbramdehaan.nl)

var color_scheme = {
        'base00': '#f4ecec',
        'base01': '#e7dfdf',
        'base02': '#8a8585',
        'base03': '#7e7777',
        'base04': '#655d5d',
        'base05': '#585050',
        'base06': '#292424',
        'base07': '#1b1818',
        'base08': '#ca4949',
        'base09': '#b45a3c',
        'base0A': '#a06e3b',
        'base0B': '#4b8b8b',
        'base0C': '#5485b6',
        'base0D': '#7272ca',
        'base0E': '#8464c4',
        'base0F': '#bd5187',
};

term_.prefs_.set('background-color', color_scheme.base00);
term_.prefs_.set('foreground-color', color_scheme.base05);
term_.prefs_.set('cursor-color', "rgba(88, 80, 80, 0.5)");

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
                        color_scheme.base09,
                        color_scheme.base01,
                        color_scheme.base02,
                        color_scheme.base04,
                        color_scheme.base06,
                        color_scheme.base0F,
                        color_scheme.base07]);
