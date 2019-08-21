// Base16 Sandcastle
// Scheme: George Essig (https://github.com/gessig)

var color_scheme = {
        'base00': '#282c34',
        'base01': '#2c323b',
        'base02': '#3e4451',
        'base03': '#665c54',
        'base04': '#928374',
        'base05': '#a89984',
        'base06': '#d5c4a1',
        'base07': '#fdf4c1',
        'base08': '#83a598',
        'base09': '#a07e3b',
        'base0A': '#a07e3b',
        'base0B': '#528b8b',
        'base0C': '#83a598',
        'base0D': '#83a598',
        'base0E': '#d75f5f',
        'base0F': '#a87322',
};

term_.prefs_.set('background-color', color_scheme.base00);
term_.prefs_.set('foreground-color', color_scheme.base05);
term_.prefs_.set('cursor-color', "rgba(168, 153, 132, 0.5)");

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
