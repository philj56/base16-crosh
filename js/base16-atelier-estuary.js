// Base16 Atelier Estuary
// Scheme: Bram de Haan (http://atelierbramdehaan.nl)

var colour_scheme = {
        'base00': '#22221b',
        'base01': '#302f27',
        'base02': '#5f5e4e',
        'base03': '#6c6b5a',
        'base04': '#878573',
        'base05': '#929181',
        'base06': '#e7e6df',
        'base07': '#f4f3ec',
        'base08': '#ba6236',
        'base09': '#ae7313',
        'base0A': '#a5980d',
        'base0B': '#7d9726',
        'base0C': '#5b9d48',
        'base0D': '#36a166',
        'base0E': '#5f9182',
        'base0F': '#9d6c7c',
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

