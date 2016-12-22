// Base16 Grayscale Dark
// Scheme: Alexandre Gavioli (https://github.com/Alexx2/)

var colour_scheme = {
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

var cursor_colour = "rgba(185, 185, 185, 0.5)";
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
