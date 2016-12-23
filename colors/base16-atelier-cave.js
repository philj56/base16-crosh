// Base16 Atelier Cave
// Scheme: Bram de Haan (http://atelierbramdehaan.nl)

var color_scheme = {
        'base00': '#19171c',
        'base01': '#26232a',
        'base02': '#585260',
        'base03': '#655f6d',
        'base04': '#7e7887',
        'base05': '#8b8792',
        'base06': '#e2dfe7',
        'base07': '#efecf4',
        'base08': '#be4678',
        'base09': '#aa573c',
        'base0A': '#a06e3b',
        'base0B': '#2a9292',
        'base0C': '#398bc6',
        'base0D': '#576ddb',
        'base0E': '#955ae7',
        'base0F': '#bf40bf',
};

term_.prefs_.set('background-color', color_scheme.base00);
term_.prefs_.set('foreground-color', color_scheme.base05);
term_.prefs_.set('cursor-color', "rgba(139, 135, 146, 0.5)");

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
