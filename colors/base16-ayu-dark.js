// Base16 3024
// Scheme: Jan T. Sott (http://github.com/idleberg)

var color_scheme = {
        'base00': '#0A0E14',
        'base01': '#C2D94C',
        'base02': '#FFB454',
        'base03': '#626A73',
        'base04': '#59C2FF',
        'base05': '#CBCCC6',
        'base06': '#FFEE99',
        'base07': '#FFFFFF',
        'base08': '#F07178',
        'base09': '#F07178',
        'base0A': '#FFB454',
        'base0B': '#91B362',
        'base0C': '#95E6CB',
        'base0D': '#59C2FF',
        'base0E': '#FFEE99',
        'base0F': '#95E6CB',
};

term_.prefs_.set('background-color', color_scheme.base00);
term_.prefs_.set('foreground-color', color_scheme.base05);
term_.prefs_.set('cursor-color', "rgba(179, 177, 173)");

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
