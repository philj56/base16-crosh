// Base16 Default Dark
// Scheme: Chris Kempson (http://chriskempson.com)

var colour_scheme = {
        'base00': '#181818',
        'base01': '#282828',
        'base02': '#383838',
        'base03': '#585858',
        'base04': '#b8b8b8',
        'base05': '#d8d8d8',
        'base06': '#e8e8e8',
        'base07': '#f8f8f8',
        'base08': '#ab4642',
        'base09': '#dc9656',
        'base0A': '#f7ca88',
        'base0B': '#a1b56c',
        'base0C': '#86c1b9',
        'base0D': '#7cafc2',
        'base0E': '#ba8baf',
        'base0F': '#a16946',
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

