// Base16 Material
// Scheme: Phil Jones

var color_scheme = {
        'base00': '#212121',
        'base01': '#424242',
        'base02': '#616161',
        'base03': '#757575',
        'base04': '#BDBDBD',
        'base05': '#E0E0E0',
        'base06': '#EEEEEE',
        'base07': '#F5F5F5',
        'base08': '#E57373',
        'base09': '#FFB74D',
        'base0A': '#FFF176',
        'base0B': '#81C784',
        'base0C': '#4DD0E1',
        'base0D': '#64B5F6',
        'base0E': '#F06292',
        'base0F': '#A1887F',
};

term_.prefs_.set('background-color', color_scheme.base00);
term_.prefs_.set('foreground-color', color_scheme.base05);
term_.prefs_.set('cursor-color', "rgba(224, 224, 224, 0.5)");

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
