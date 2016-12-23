// Base16 Hopscotch
// Scheme: Jan T. Sott

var color_scheme = {
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

term_.prefs_.set('background-color', color_scheme.base00);
term_.prefs_.set('foreground-color', color_scheme.base05);
term_.prefs_.set('cursor-color', "rgba(185, 181, 184, 0.5)");

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
