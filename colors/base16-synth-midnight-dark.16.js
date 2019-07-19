// Base16 Synth Midnight Dark
// Scheme: Michaël Ball (http://github.com/michael-ball/)

var color_scheme = {
        'base00': '#040404',
        'base01': '#141414',
        'base02': '#242424',
        'base03': '#61507A',
        'base04': '#BFBBBF',
        'base05': '#DFDBDF',
        'base06': '#EFEBEF',
        'base07': '#FFFBFF',
        'base08': '#B53B50',
        'base09': '#E4600E',
        'base0A': '#DAE84D',
        'base0B': '#06EA61',
        'base0C': '#7CEDE9',
        'base0D': '#03AEFF',
        'base0E': '#EA5CE2',
        'base0F': '#9D4D0E',
};

term_.prefs_.set('background-color', color_scheme.base00);
term_.prefs_.set('foreground-color', color_scheme.base05);
term_.prefs_.set('cursor-color', "rgba(223, 219, 223, 0.5)");

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
