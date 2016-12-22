// Base16 Shapeshifter
// Scheme: Tyler Benziger (http://tybenz.com)

var colour_scheme = {
        'base00': '#f9f9f9',
        'base01': '#e0e0e0',
        'base02': '#ababab',
        'base03': '#555555',
        'base04': '#343434',
        'base05': '#102015',
        'base06': '#040404',
        'base07': '#000000',
        'base08': '#e92f2f',
        'base09': '#e09448',
        'base0A': '#dddd13',
        'base0B': '#0ed839',
        'base0C': '#23edda',
        'base0D': '#3b48e3',
        'base0E': '#f996e2',
        'base0F': '#69542d',
};

var cursor_colour = "rgba(16, 32, 21, 0.5)";
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
