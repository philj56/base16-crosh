// Base16 Atelier Cave
// Scheme: Bram de Haan (http://atelierbramdehaan.nl)

var colour_scheme = {
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

var cursor_colour = hexToRgba(colour_scheme.base05, 0.5);
term_.prefs_.set('background-color', colour_scheme.base00);
term_.prefs_.set('foreground-color', colour_scheme.base05);
term_.prefs_.set('cursor-color', cursor_colour);

term_.prefs_.set('color-palette-overrides', 
                [colour_scheme.base00,
                colour_scheme.base08,
                colour_scheme.base0B,
                colour_scheme.base0A,
                colour_scheme.base0D,
                colour_scheme.base0E,
                colour_scheme.base0C,
                colour_scheme.base05,
                colour_scheme.base03,
                colour_scheme.base08,
                colour_scheme.base0B,
                colour_scheme.base0A,
                colour_scheme.base0D,
                colour_scheme.base0E,
                colour_scheme.base0C,
                colour_scheme.base07,
                colour_scheme.base09,
                colour_scheme.base0F,
                colour_scheme.base01,
                colour_scheme.base02,
                colour_scheme.base04,
                colour_scheme.base06]);

function hexToRgba(hex, a) {
        hex = hex.replace(/[^0-9A-F]/gi, "");
        var bigint = parseInt(hex, 16);
        var r = (bigint >> 16) & 255;
        var g = (bigint >> 8) & 255;
        var b = bigint & 255;

        return ["rgba(", [r, g, b, a].join(), ")"].join('');
}

