// Base16 iA Light
// Scheme: iA Inc. (modified by aramisgithub)

var color_scheme = {
        'base00': '#f6f6f6',
        'base01': '#dedede',
        'base02': '#bde5f2',
        'base03': '#898989',
        'base04': '#767676',
        'base05': '#181818',
        'base06': '#e8e8e8',
        'base07': '#f8f8f8',
        'base08': '#9c5a02',
        'base09': '#c43e18',
        'base0A': '#c48218',
        'base0B': '#38781c',
        'base0C': '#2d6bb1',
        'base0D': '#48bac2',
        'base0E': '#a94598',
        'base0F': '#8b6c37',
};

term_.prefs_.set('background-color', color_scheme.base00);
term_.prefs_.set('foreground-color', color_scheme.base05);
term_.prefs_.set('cursor-color', "rgba(24, 24, 24, 0.5)");

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
