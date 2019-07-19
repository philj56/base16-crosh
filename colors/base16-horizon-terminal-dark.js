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
        'base08': '#E95678',
        'base09': '#FAB795',
        'base0A': '#FAC29A',
        'base0B': '#29D398',
        'base0C': '#59E1E3',
        'base0D': '#26BBD9',
        'base0E': '#EE64AC',
        'base0F': '#F09383',
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
