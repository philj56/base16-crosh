// Base16 Grayscale Dark
// Scheme: Alexandre Gavioli (https://github.com/Alexx2/)

var color_scheme = {
        'base00': '#101010',
        'base01': '#252525',
        'base02': '#464646',
        'base03': '#525252',
        'base04': '#ababab',
        'base05': '#b9b9b9',
        'base06': '#e3e3e3',
        'base07': '#f7f7f7',
        'base08': '#7c7c7c',
        'base09': '#999999',
        'base0A': '#a0a0a0',
        'base0B': '#8e8e8e',
        'base0C': '#868686',
        'base0D': '#686868',
        'base0E': '#747474',
        'base0F': '#5e5e5e',
};

term_.prefs_.set('background-color', color_scheme.base00);
term_.prefs_.set('foreground-color', color_scheme.base05);
term_.prefs_.set('cursor-color', "rgba(185, 185, 185, 0.5)");

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
