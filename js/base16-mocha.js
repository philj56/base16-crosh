// Base16 Mocha
// Scheme: Chris Kempson (http://chriskempson.com)

var colour_scheme = {
        'base00': '#3B3228',
        'base01': '#534636',
        'base02': '#645240',
        'base03': '#7e705a',
        'base04': '#b8afad',
        'base05': '#d0c8c6',
        'base06': '#e9e1dd',
        'base07': '#f5eeeb',
        'base08': '#cb6077',
        'base09': '#d28b71',
        'base0A': '#f4bc87',
        'base0B': '#beb55b',
        'base0C': '#7bbda4',
        'base0D': '#8ab3b5',
        'base0E': '#a89bb9',
        'base0F': '#bb9584',
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

