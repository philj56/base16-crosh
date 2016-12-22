// Base16 OneDark
// Scheme: Lalit Magant (http://github.com/tilal6991)

var colour_scheme = {
        'base00': '#282c34',
        'base01': '#353b45',
        'base02': '#3e4451',
        'base03': '#545862',
        'base04': '#565c64',
        'base05': '#abb2bf',
        'base06': '#b6bdca',
        'base07': '#c8ccd4',
        'base08': '#e06c75',
        'base09': '#d19a66',
        'base0A': '#e5c07b',
        'base0B': '#98c379',
        'base0C': '#56b6c2',
        'base0D': '#61afef',
        'base0E': '#c678dd',
        'base0F': '#be5046',
};

var cursor_colour = "rgba(171, 178, 191, 0.5)";
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
