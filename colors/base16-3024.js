// Base16 3024
// Scheme: Jan T. Sott (http://github.com/idleberg)

var color_scheme = {
        'base00': '#090300',
        'base01': '#3a3432',
        'base02': '#4a4543',
        'base03': '#5c5855',
        'base04': '#807d7c',
        'base05': '#a5a2a2',
        'base06': '#d6d5d4',
        'base07': '#f7f7f7',
        'base08': '#db2d20',
        'base09': '#e8bbd0',
        'base0A': '#fded02',
        'base0B': '#01a252',
        'base0C': '#b5e4f4',
        'base0D': '#01a0e4',
        'base0E': '#a16a94',
        'base0F': '#cdab53',
};

term_.prefs_.set('background-color', color_scheme.base00);
term_.prefs_.set('foreground-color', color_scheme.base05);
term_.prefs_.set('cursor-color', "rgba(165, 162, 162, 0.5)");

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
