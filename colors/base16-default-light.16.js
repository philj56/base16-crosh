// Base16 Default Light
// Scheme: Chris Kempson (http://chriskempson.com)

var color_scheme = {
        'base00': '#f8f8f8',
        'base01': '#e8e8e8',
        'base02': '#d8d8d8',
        'base03': '#b8b8b8',
        'base04': '#585858',
        'base05': '#383838',
        'base06': '#282828',
        'base07': '#181818',
        'base08': '#ab4642',
        'base09': '#dc9656',
        'base0A': '#f7ca88',
        'base0B': '#a1b56c',
        'base0C': '#86c1b9',
        'base0D': '#7cafc2',
        'base0E': '#ba8baf',
        'base0F': '#a16946',
};

term_.prefs_.set('background-color', color_scheme.base00);
term_.prefs_.set('foreground-color', color_scheme.base05);
term_.prefs_.set('cursor-color', "rgba(56, 56, 56, 0.5)");

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
