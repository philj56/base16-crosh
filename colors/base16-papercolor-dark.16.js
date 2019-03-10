// Base16 PaperColor Dark
// Scheme: Jon Leopard (http://github.com/jonleopard) based on PaperColor Theme (https://github.com/NLKNguyen/papercolor-theme)

var color_scheme = {
        'base00': '#1c1c1c',
        'base01': '#af005f',
        'base02': '#5faf00',
        'base03': '#d7af5f',
        'base04': '#5fafd7',
        'base05': '#808080',
        'base06': '#d7875f',
        'base07': '#d0d0d0',
        'base08': '#585858',
        'base09': '#5faf5f',
        'base0A': '#afd700',
        'base0B': '#af87d7',
        'base0C': '#ffaf00',
        'base0D': '#ff5faf',
        'base0E': '#00afaf',
        'base0F': '#5f8787',
};

term_.prefs_.set('background-color', color_scheme.base00);
term_.prefs_.set('foreground-color', color_scheme.base05);
term_.prefs_.set('cursor-color', "rgba(128, 128, 128, 0.5)");

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
