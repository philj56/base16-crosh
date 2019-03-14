// Base16 Dracula
// Scheme: Mike Barkmin (http://github.com/mikebarkmin) based on Dracula Theme (http://github.com/dracula)

var color_scheme = {
        'base00': '#282936',
        'base01': '#3a3c4e',
        'base02': '#4d4f68',
        'base03': '#626483',
        'base04': '#62d6e8',
        'base05': '#e9e9f4',
        'base06': '#f1f2f8',
        'base07': '#f7f7fb',
        'base08': '#ea51b2',
        'base09': '#b45bcf',
        'base0A': '#00f769',
        'base0B': '#ebff87',
        'base0C': '#a1efe4',
        'base0D': '#62d6e8',
        'base0E': '#b45bcf',
        'base0F': '#00f769',
};

term_.prefs_.set('background-color', color_scheme.base00);
term_.prefs_.set('foreground-color', color_scheme.base05);
term_.prefs_.set('cursor-color', "rgba(233, 233, 244, 0.5)");

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
