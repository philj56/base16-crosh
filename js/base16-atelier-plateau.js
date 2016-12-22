// Base16 Atelier Plateau
// Scheme: Bram de Haan (http://atelierbramdehaan.nl)

var colour_scheme = {
        'base00': '#1b1818',
        'base01': '#292424',
        'base02': '#585050',
        'base03': '#655d5d',
        'base04': '#7e7777',
        'base05': '#8a8585',
        'base06': '#e7dfdf',
        'base07': '#f4ecec',
        'base08': '#ca4949',
        'base09': '#b45a3c',
        'base0A': '#a06e3b',
        'base0B': '#4b8b8b',
        'base0C': '#5485b6',
        'base0D': '#7272ca',
        'base0E': '#8464c4',
        'base0F': '#bd5187',
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

