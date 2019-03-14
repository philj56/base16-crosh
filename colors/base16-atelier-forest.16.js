// Base16 Atelier Forest
// Scheme: Bram de Haan (http://atelierbramdehaan.nl)

var color_scheme = {
        'base00': '#1b1918',
        'base01': '#2c2421',
        'base02': '#68615e',
        'base03': '#766e6b',
        'base04': '#9c9491',
        'base05': '#a8a19f',
        'base06': '#e6e2e0',
        'base07': '#f1efee',
        'base08': '#f22c40',
        'base09': '#df5320',
        'base0A': '#c38418',
        'base0B': '#7b9726',
        'base0C': '#3d97b8',
        'base0D': '#407ee7',
        'base0E': '#6666ea',
        'base0F': '#c33ff3',
};

term_.prefs_.set('background-color', color_scheme.base00);
term_.prefs_.set('foreground-color', color_scheme.base05);
term_.prefs_.set('cursor-color', "rgba(168, 161, 159, 0.5)");

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
