// Base16 PaperColor Light
// Scheme: Jon Leopard (http://github.com/jonleopard) based on PaperColor Theme (https://github.com/NLKNguyen/papercolor-theme)

var color_scheme = {
        'base00': '#eeeeee',
        'base01': '#af0000',
        'base02': '#008700',
        'base03': '#5f8700',
        'base04': '#0087af',
        'base05': '#878787',
        'base06': '#005f87',
        'base07': '#444444',
        'base08': '#bcbcbc',
        'base09': '#d70000',
        'base0A': '#d70087',
        'base0B': '#8700af',
        'base0C': '#d75f00',
        'base0D': '#d75f00',
        'base0E': '#005faf',
        'base0F': '#005f87',
};

term_.prefs_.set('background-color', color_scheme.base00);
term_.prefs_.set('foreground-color', color_scheme.base05);
term_.prefs_.set('cursor-color', "rgba(135, 135, 135, 0.5)");

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
