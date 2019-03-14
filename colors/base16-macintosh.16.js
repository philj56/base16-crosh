// Base16 Macintosh
// Scheme: Rebecca Bettencourt (http://www.kreativekorp.com)

var color_scheme = {
        'base00': '#000000',
        'base01': '#404040',
        'base02': '#404040',
        'base03': '#808080',
        'base04': '#808080',
        'base05': '#c0c0c0',
        'base06': '#c0c0c0',
        'base07': '#ffffff',
        'base08': '#dd0907',
        'base09': '#ff6403',
        'base0A': '#fbf305',
        'base0B': '#1fb714',
        'base0C': '#02abea',
        'base0D': '#0000d3',
        'base0E': '#4700a5',
        'base0F': '#90713a',
};

term_.prefs_.set('background-color', color_scheme.base00);
term_.prefs_.set('foreground-color', color_scheme.base05);
term_.prefs_.set('cursor-color', "rgba(192, 192, 192, 0.5)");

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
