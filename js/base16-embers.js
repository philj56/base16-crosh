// Base16 Embers
// Scheme: Jannik Siebert (https://github.com/janniks)

var colour_scheme = {
        'base00': '#16130F',
        'base01': '#2C2620',
        'base02': '#433B32',
        'base03': '#5A5047',
        'base04': '#8A8075',
        'base05': '#A39A90',
        'base06': '#BEB6AE',
        'base07': '#DBD6D1',
        'base08': '#826D57',
        'base09': '#828257',
        'base0A': '#6D8257',
        'base0B': '#57826D',
        'base0C': '#576D82',
        'base0D': '#6D5782',
        'base0E': '#82576D',
        'base0F': '#825757',
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

