// Base16 Apathy
// Scheme: Jannik Siebert (https://github.com/janniks)

var color_scheme = {
        'base00': '#031A16',
        'base01': '#0B342D',
        'base02': '#184E45',
        'base03': '#2B685E',
        'base04': '#5F9C92',
        'base05': '#81B5AC',
        'base06': '#A7CEC8',
        'base07': '#D2E7E4',
        'base08': '#3E9688',
        'base09': '#3E7996',
        'base0A': '#3E4C96',
        'base0B': '#883E96',
        'base0C': '#963E4C',
        'base0D': '#96883E',
        'base0E': '#4C963E',
        'base0F': '#3E965B',
};

term_.prefs_.set('background-color', color_scheme.base00);
term_.prefs_.set('foreground-color', color_scheme.base05);
term_.prefs_.set('cursor-color', "rgba(129, 181, 172, 0.5)");

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
