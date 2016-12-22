// Base16 Pico
// Scheme: PICO-8 (http://www.lexaloffle.com/pico-8.php)

var colour_scheme = {
        'base00': '#000000',
        'base01': '#1d2b53',
        'base02': '#7e2553',
        'base03': '#008751',
        'base04': '#ab5236',
        'base05': '#5f574f',
        'base06': '#c2c3c7',
        'base07': '#fff1e8',
        'base08': '#ff004d',
        'base09': '#ffa300',
        'base0A': '#fff024',
        'base0B': '#00e756',
        'base0C': '#29adff',
        'base0D': '#83769c',
        'base0E': '#ff77a8',
        'base0F': '#ffccaa',
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

