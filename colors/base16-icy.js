// Base16 Icy Dark
// Scheme: icyphox (https://icyphox.ga)

var color_scheme = {
        'base00': '#222222',
        'base01': '#424242',
        'base02': '#616161',
        'base03': '#757575',
        'base04': '#9e9e9e',
        'base05': '#bdbdbd',
        'base06': '#e0e0e0',
        'base07': '#eeeeee',
        'base08': '#0097a7',
        'base09': '#00acc1',
        'base0A': '#00bcd4',
        'base0B': '#26c6da',
        'base0C': '#4dd0e1',
        'base0D': '#80deea',
        'base0E': '#b3ebf2',
        'base0F': '#e0f7fa',
};

term_.prefs_.set('background-color', color_scheme.base00);
term_.prefs_.set('foreground-color', color_scheme.base05);
term_.prefs_.set('cursor-color', "rgba(189, 189, 189, 0.5)");

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
