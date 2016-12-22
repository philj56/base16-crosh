// Base16 3024
// Scheme: Jan T. Sott (http://github.com/idleberg)

var colour_scheme = {
        'base00': '#090300',
        'base01': '#3a3432',
        'base02': '#4a4543',
        'base03': '#5c5855',
        'base04': '#807d7c',
        'base05': '#a5a2a2',
        'base06': '#d6d5d4',
        'base07': '#f7f7f7',
        'base08': '#db2d20',
        'base09': '#e8bbd0',
        'base0A': '#fded02',
        'base0B': '#01a252',
        'base0C': '#b5e4f4',
        'base0D': '#01a0e4',
        'base0E': '#a16a94',
        'base0F': '#cdab53',
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

