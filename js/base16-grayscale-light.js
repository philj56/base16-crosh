// Base16 Grayscale Light
// Scheme: Alexandre Gavioli (https://github.com/Alexx2/)

var colour_scheme = {
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

var cursor_colour = "rgba(70, 70, 70, 0.5)";
term_.prefs_.set('background-color', colour_scheme.base00);
term_.prefs_.set('foreground-color', colour_scheme.base05);
term_.prefs_.set('cursor-color', cursor_colour);

term_.prefs_.set('color-palette-overrides', 
                        [colour_scheme.base00,
                        colour_scheme.base08,
                        colour_scheme.base0B,
                        colour_scheme.base0A,
                        colour_scheme.base0D,
                        colour_scheme.base0E,
                        colour_scheme.base0C,
                        colour_scheme.base05,
                        colour_scheme.base03,
                        colour_scheme.base08,
                        colour_scheme.base0B,
                        colour_scheme.base0A,
                        colour_scheme.base0D,
                        colour_scheme.base0E,
                        colour_scheme.base0C,
                        colour_scheme.base07,
                        colour_scheme.base09,
                        colour_scheme.base0F,
                        colour_scheme.base01,
                        colour_scheme.base02,
                        colour_scheme.base04,
                        colour_scheme.base06]);
