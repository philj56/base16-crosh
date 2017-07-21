// Base16 Circus
// Scheme: Stephan Boyer (https://github.com/stepchowfun) and Esther Wang (https://github.com/ewang12)

var color_scheme = {
        'base00': '#191919',
        'base01': '#202020',
        'base02': '#303030',
        'base03': '#5f5a60',
        'base04': '#505050',
        'base05': '#a7a7a7',
        'base06': '#808080',
        'base07': '#ffffff',
        'base08': '#dc657d',
        'base09': '#4bb1a7',
        'base0A': '#c3ba63',
        'base0B': '#84b97c',
        'base0C': '#4bb1a7',
        'base0D': '#639ee4',
        'base0E': '#b888e2',
        'base0F': '#b888e2',
};

term_.prefs_.set('background-color', color_scheme.base00);
term_.prefs_.set('foreground-color', color_scheme.base05);
term_.prefs_.set('cursor-color', "rgba(167, 167, 167, 0.5)");

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
