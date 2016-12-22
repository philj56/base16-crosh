// Base16 PhD
// Scheme: Hennig Hasemann (http://leetless.de/vim.html)

var colour_scheme = {
        'base00': '#061229',
        'base01': '#2a3448',
        'base02': '#4d5666',
        'base03': '#717885',
        'base04': '#9a99a3',
        'base05': '#b8bbc2',
        'base06': '#dbdde0',
        'base07': '#ffffff',
        'base08': '#d07346',
        'base09': '#f0a000',
        'base0A': '#fbd461',
        'base0B': '#99bf52',
        'base0C': '#72b9bf',
        'base0D': '#5299bf',
        'base0E': '#9989cc',
        'base0F': '#b08060',
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

