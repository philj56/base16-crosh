// Base16 Twilight
// Scheme: David Hart (https://github.com/hartbit)

var colour_scheme = {
        'base00': '#1e1e1e',
        'base01': '#323537',
        'base02': '#464b50',
        'base03': '#5f5a60',
        'base04': '#838184',
        'base05': '#a7a7a7',
        'base06': '#c3c3c3',
        'base07': '#ffffff',
        'base08': '#cf6a4c',
        'base09': '#cda869',
        'base0A': '#f9ee98',
        'base0B': '#8f9d6a',
        'base0C': '#afc4db',
        'base0D': '#7587a6',
        'base0E': '#9b859d',
        'base0F': '#9b703f',
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

