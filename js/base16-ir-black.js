// Base16 IR Black
// Scheme: Timothée Poisot (http://timotheepoisot.fr)

var colour_scheme = {
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

