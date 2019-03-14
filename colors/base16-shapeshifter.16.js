// Base16 Shapeshifter
// Scheme: Tyler Benziger (http://tybenz.com)

var color_scheme = {
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

term_.prefs_.set('background-color', color_scheme.base00);
term_.prefs_.set('foreground-color', color_scheme.base05);
term_.prefs_.set('cursor-color', "rgba(16, 32, 21, 0.5)");

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
