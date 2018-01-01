// Base16 Seti UI
// Scheme: 

var color_scheme = {
        'base00': '#151718',
        'base01': '#282a2b',
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

term_.prefs_.set('background-color', color_scheme.base00);
term_.prefs_.set('foreground-color', color_scheme.base05);
term_.prefs_.set('cursor-color', "rgba(214, 214, 214, 0.5)");

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
