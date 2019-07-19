// Base16 Horizon Light
// Scheme: Michaël Ball (http://github.com/michael-ball/)

var color_scheme = {
        'base00': '#FDF0ED',
        'base01': '#FADAD1',
        'base02': '#F9CBBE',
        'base03': '#BDB3B1',
        'base04': '#948C8A',
        'base05': '#403C3D',
        'base06': '#302C2D',
        'base07': '#201C1D',
        'base08': '#E95678',
        'base09': '#F9CEC3',
        'base0A': '#FADAD1',
        'base0B': '#29D398',
        'base0C': '#59E1E3',
        'base0D': '#26BBD9',
        'base0E': '#EE64AC',
        'base0F': '#F9CBBE',
};

term_.prefs_.set('background-color', color_scheme.base00);
term_.prefs_.set('foreground-color', color_scheme.base05);
term_.prefs_.set('cursor-color', "rgba(64, 60, 61, 0.5)");

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
