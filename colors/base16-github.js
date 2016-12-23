// Base16 Github
// Scheme: Defman21

var color_scheme = {
        'base00': '#ffffff',
        'base01': '#f5f5f5',
        'base02': '#c8c8fa',
        'base03': '#969896',
        'base04': '#e8e8e8',
        'base05': '#333333',
        'base06': '#ffffff',
        'base07': '#ffffff',
        'base08': '#ed6a43',
        'base09': '#0086b3',
        'base0A': '#795da3',
        'base0B': '#183691',
        'base0C': '#183691',
        'base0D': '#795da3',
        'base0E': '#a71d5d',
        'base0F': '#333333',
};

term_.prefs_.set('background-color', color_scheme.base00);
term_.prefs_.set('foreground-color', color_scheme.base05);
term_.prefs_.set('cursor-color', "rgba(51, 51, 51, 0.5)");

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
