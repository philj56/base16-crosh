// Base16 Woodland
// Scheme: Jay Cornwall (https://jcornwall.com)

var color_scheme = {
        'base00': '#231e18',
        'base01': '#302b25',
        'base02': '#48413a',
        'base03': '#9d8b70',
        'base04': '#b4a490',
        'base05': '#cabcb1',
        'base06': '#d7c8bc',
        'base07': '#e4d4c8',
        'base08': '#d35c5c',
        'base09': '#ca7f32',
        'base0A': '#e0ac16',
        'base0B': '#b7ba53',
        'base0C': '#6eb958',
        'base0D': '#88a4d3',
        'base0E': '#bb90e2',
        'base0F': '#b49368',
};

term_.prefs_.set('background-color', color_scheme.base00);
term_.prefs_.set('foreground-color', color_scheme.base05);
term_.prefs_.set('cursor-color', "rgba(202, 188, 177, 0.5)");

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
