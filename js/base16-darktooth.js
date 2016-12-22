// Base16 Darktooth
// Scheme: Jason Milkins (https://github.com/jasonm23)

var colour_scheme = {
        'base00': '#1D2021',
        'base01': '#32302F',
        'base02': '#504945',
        'base03': '#665C54',
        'base04': '#928374',
        'base05': '#A89984',
        'base06': '#D5C4A1',
        'base07': '#FDF4C1',
        'base08': '#FB543F',
        'base09': '#FE8625',
        'base0A': '#FAC03B',
        'base0B': '#95C085',
        'base0C': '#8BA59B',
        'base0D': '#0D6678',
        'base0E': '#8F4673',
        'base0F': '#A87322',
};

var cursor_colour = "rgba(168, 153, 132, 0.5)";
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
