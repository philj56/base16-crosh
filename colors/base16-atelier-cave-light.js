// Base16 Atelier Cave Light
// Scheme: Bram de Haan (http://atelierbramdehaan.nl)

var color_scheme = {
        'base00': '#efecf4',
        'base01': '#e2dfe7',
        'base02': '#8b8792',
        'base03': '#7e7887',
        'base04': '#655f6d',
        'base05': '#585260',
        'base06': '#26232a',
        'base07': '#19171c',
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
term_.prefs_.set('cursor-color', "rgba(88, 82, 96, 0.5)");

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
