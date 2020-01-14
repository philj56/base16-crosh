// Base16 Edge Dark
// Scheme: cjayross (https://github.com/cjayross)

var color_scheme = {
        'base00': '#262729',
        'base01': '#88909f',
        'base02': '#b7bec9',
        'base03': '#3e4249',
        'base04': '#73b3e7',
        'base05': '#b7bec9',
        'base06': '#d390e7',
        'base07': '#3e4249',
        'base08': '#e77171',
        'base09': '#e77171',
        'base0A': '#dbb774',
        'base0B': '#a1bf78',
        'base0C': '#5ebaa5',
        'base0D': '#73b3e7',
        'base0E': '#d390e7',
        'base0F': '#5ebaa5',
};

term_.prefs_.set('background-color', color_scheme.base00);
term_.prefs_.set('foreground-color', color_scheme.base05);
term_.prefs_.set('cursor-color', "rgba(183, 190, 201, 0.5)");

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
