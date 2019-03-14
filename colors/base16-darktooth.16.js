// Base16 Darktooth
// Scheme: Jason Milkins (https://github.com/jasonm23)

var color_scheme = {
        'base00': '#1D2021',
        'base01': '#32302F',
        'base02': '#504945',
        'base03': '#665C54',
        'base04': '#928374',
        'base05': '#A89984',
        'base06': '#D5C4A1',
        'base07': '#FDF4C1',
        'base08': '#FB543F',
        'base09': '#FE8625',
        'base0A': '#FAC03B',
        'base0B': '#95C085',
        'base0C': '#8BA59B',
        'base0D': '#0D6678',
        'base0E': '#8F4673',
        'base0F': '#A87322',
};

term_.prefs_.set('background-color', color_scheme.base00);
term_.prefs_.set('foreground-color', color_scheme.base05);
term_.prefs_.set('cursor-color', "rgba(168, 153, 132, 0.5)");

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
