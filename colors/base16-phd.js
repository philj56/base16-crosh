// Base16 PhD
// Scheme: Hennig Hasemann (http://leetless.de/vim.html)

var color_scheme = {
        'base00': '#061229',
        'base01': '#2a3448',
        'base02': '#4d5666',
        'base03': '#717885',
        'base04': '#9a99a3',
        'base05': '#b8bbc2',
        'base06': '#dbdde0',
        'base07': '#ffffff',
        'base08': '#d07346',
        'base09': '#f0a000',
        'base0A': '#fbd461',
        'base0B': '#99bf52',
        'base0C': '#72b9bf',
        'base0D': '#5299bf',
        'base0E': '#9989cc',
        'base0F': '#b08060',
};

term_.prefs_.set('background-color', color_scheme.base00);
term_.prefs_.set('foreground-color', color_scheme.base05);
term_.prefs_.set('cursor-color', "rgba(184, 187, 194, 0.5)");

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
