// Base16 Ashes
// Scheme: Jannik Siebert (https://github.com/janniks)

var color_scheme = {
        'base00': '#1C2023',
        'base01': '#393F45',
        'base02': '#565E65',
        'base03': '#747C84',
        'base04': '#ADB3BA',
        'base05': '#C7CCD1',
        'base06': '#DFE2E5',
        'base07': '#F3F4F5',
        'base08': '#C7AE95',
        'base09': '#C7C795',
        'base0A': '#AEC795',
        'base0B': '#95C7AE',
        'base0C': '#95AEC7',
        'base0D': '#AE95C7',
        'base0E': '#C795AE',
        'base0F': '#C79595',
};

term_.prefs_.set('background-color', color_scheme.base00);
term_.prefs_.set('foreground-color', color_scheme.base05);
term_.prefs_.set('cursor-color', "rgba(199, 204, 209, 0.5)");

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
