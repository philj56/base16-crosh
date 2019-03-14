// Base16 Grayscale Light
// Scheme: Alexandre Gavioli (https://github.com/Alexx2/)

var color_scheme = {
        'base00': '#f7f7f7',
        'base01': '#e3e3e3',
        'base02': '#b9b9b9',
        'base03': '#ababab',
        'base04': '#525252',
        'base05': '#464646',
        'base06': '#252525',
        'base07': '#101010',
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
term_.prefs_.set('cursor-color', "rgba(70, 70, 70, 0.5)");

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
