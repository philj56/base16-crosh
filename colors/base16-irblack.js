// Base16 IR Black
// Scheme: Timothée Poisot (http://timotheepoisot.fr)

var color_scheme = {
        'base00': '#000000',
        'base01': '#242422',
        'base02': '#484844',
        'base03': '#6c6c66',
        'base04': '#918f88',
        'base05': '#b5b3aa',
        'base06': '#d9d7cc',
        'base07': '#fdfbee',
        'base08': '#ff6c60',
        'base09': '#e9c062',
        'base0A': '#ffffb6',
        'base0B': '#a8ff60',
        'base0C': '#c6c5fe',
        'base0D': '#96cbfe',
        'base0E': '#ff73fd',
        'base0F': '#b18a3d',
};

term_.prefs_.set('background-color', color_scheme.base00);
term_.prefs_.set('foreground-color', color_scheme.base05);
term_.prefs_.set('cursor-color', "rgba(181, 179, 170, 0.5)");

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
