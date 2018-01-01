// Base16 Brush Trees
// Scheme: Abraham White &lt;abelincoln.white@gmail.com&gt;

var color_scheme = {
        'base00': '#E3EFEF',
        'base01': '#C9DBDC',
        'base02': '#B0C5C8',
        'base03': '#98AFB5',
        'base04': '#8299A1',
        'base05': '#6D828E',
        'base06': '#5A6D7A',
        'base07': '#485867',
        'base08': '#b38686',
        'base09': '#d8bba2',
        'base0A': '#aab386',
        'base0B': '#87b386',
        'base0C': '#86b3b3',
        'base0D': '#868cb3',
        'base0E': '#b386b2',
        'base0F': '#b39f9f',
};

term_.prefs_.set('background-color', color_scheme.base00);
term_.prefs_.set('foreground-color', color_scheme.base05);
term_.prefs_.set('cursor-color', "rgba(109, 130, 142, 0.5)");

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
