// Base16 Horizon Dark
// Scheme: Michaël Ball (http://github.com/michael-ball/)

var color_scheme = {
        'base00': '#1C1E26',
        'base01': '#232530',
        'base02': '#2E303E',
        'base03': '#6F6F70',
        'base04': '#9DA0A2',
        'base05': '#CBCED0',
        'base06': '#DCDFE4',
        'base07': '#E3E6EE',
        'base08': '#E93C58',
        'base09': '#E58D7D',
        'base0A': '#EFB993',
        'base0B': '#EFAF8E',
        'base0C': '#24A8B4',
        'base0D': '#DF5273',
        'base0E': '#B072D1',
        'base0F': '#E4A382',
};

term_.prefs_.set('background-color', color_scheme.base00);
term_.prefs_.set('foreground-color', color_scheme.base05);
term_.prefs_.set('cursor-color', "rgba(203, 206, 208, 0.5)");

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
