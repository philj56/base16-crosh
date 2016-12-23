// Base16 Isotope
// Scheme: Jan T. Sott

var colour_scheme = {
        'base00': '#000000',
        'base01': '#404040',
        'base02': '#606060',
        'base03': '#808080',
        'base04': '#c0c0c0',
        'base05': '#d0d0d0',
        'base06': '#e0e0e0',
        'base07': '#ffffff',
        'base08': '#ff0000',
        'base09': '#ff9900',
        'base0A': '#ff0099',
        'base0B': '#33ff00',
        'base0C': '#00ffff',
        'base0D': '#0066ff',
        'base0E': '#cc00ff',
        'base0F': '#3300ff',
};

var cursor_colour = "rgba(208, 208, 208, 0.5)";
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
