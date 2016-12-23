// Base16 Embers
// Scheme: Jannik Siebert (https://github.com/janniks)

var color_scheme = {
        'base00': '#16130F',
        'base01': '#2C2620',
        'base02': '#433B32',
        'base03': '#5A5047',
        'base04': '#8A8075',
        'base05': '#A39A90',
        'base06': '#BEB6AE',
        'base07': '#DBD6D1',
        'base08': '#826D57',
        'base09': '#828257',
        'base0A': '#6D8257',
        'base0B': '#57826D',
        'base0C': '#576D82',
        'base0D': '#6D5782',
        'base0E': '#82576D',
        'base0F': '#825757',
};

term_.prefs_.set('background-color', color_scheme.base00);
term_.prefs_.set('foreground-color', color_scheme.base05);
term_.prefs_.set('cursor-color', "rgba(163, 154, 144, 0.5)");

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
