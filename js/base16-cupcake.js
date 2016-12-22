// Base16 Cupcake
// Scheme: Chris Kempson (http://chriskempson.com)

var colour_scheme = {
        'base00': '#fbf1f2',
        'base01': '#f2f1f4',
        'base02': '#d8d5dd',
        'base03': '#bfb9c6',
        'base04': '#a59daf',
        'base05': '#8b8198',
        'base06': '#72677E',
        'base07': '#585062',
        'base08': '#D57E85',
        'base09': '#EBB790',
        'base0A': '#DCB16C',
        'base0B': '#A3B367',
        'base0C': '#69A9A7',
        'base0D': '#7297B9',
        'base0E': '#BB99B4',
        'base0F': '#BAA58C',
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

