// Base16 Ashes
// Scheme: Jannik Siebert (https://github.com/janniks)

var colour_scheme = {
        'base00': '#1C2023',
        'base01': '#393F45',
        'base02': '#565E65',
        'base03': '#747C84',
        'base04': '#ADB3BA',
        'base05': '#C7CCD1',
        'base06': '#DFE2E5',
        'base07': '#F3F4F5',
        'base08': '#C7AE95',
        'base09': '#C7C795',
        'base0A': '#AEC795',
        'base0B': '#95C7AE',
        'base0C': '#95AEC7',
        'base0D': '#AE95C7',
        'base0E': '#C795AE',
        'base0F': '#C79595',
};

var cursor_colour = "rgba(199, 204, 209, 0.5)";
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
