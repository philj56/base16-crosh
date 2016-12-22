// Base16 Paraiso
// Scheme: Jan T. Sott

var colour_scheme = {
        'base00': '#2f1e2e',
        'base01': '#41323f',
        'base02': '#4f424c',
        'base03': '#776e71',
        'base04': '#8d8687',
        'base05': '#a39e9b',
        'base06': '#b9b6b0',
        'base07': '#e7e9db',
        'base08': '#ef6155',
        'base09': '#f99b15',
        'base0A': '#fec418',
        'base0B': '#48b685',
        'base0C': '#5bc4bf',
        'base0D': '#06b6ef',
        'base0E': '#815ba4',
        'base0F': '#e96ba8',
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

