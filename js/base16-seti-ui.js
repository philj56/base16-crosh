// Base16 Seti UI
// Scheme: 

var colour_scheme = {
        'base00': '#151718',
        'base01': '#8ec43d',
        'base02': '#3B758C',
        'base03': '#41535B',
        'base04': '#43a5d5',
        'base05': '#d6d6d6',
        'base06': '#eeeeee',
        'base07': '#ffffff',
        'base08': '#Cd3f45',
        'base09': '#db7b55',
        'base0A': '#e6cd69',
        'base0B': '#9fca56',
        'base0C': '#55dbbe',
        'base0D': '#55b5db',
        'base0E': '#a074c4',
        'base0F': '#8a553f',
};

var cursor_colour = "rgba(214, 214, 214, 0.5)";
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
