// Base16 Macintosh
// Scheme: Rebecca Bettencourt (http://www.kreativekorp.com)

var colour_scheme = {
        'base00': '#000000',
        'base01': '#404040',
        'base02': '#404040',
        'base03': '#808080',
        'base04': '#808080',
        'base05': '#c0c0c0',
        'base06': '#c0c0c0',
        'base07': '#ffffff',
        'base08': '#dd0907',
        'base09': '#ff6403',
        'base0A': '#fbf305',
        'base0B': '#1fb714',
        'base0C': '#02abea',
        'base0D': '#0000d3',
        'base0E': '#4700a5',
        'base0F': '#90713a',
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

