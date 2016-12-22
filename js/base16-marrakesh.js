// Base16 Marrakesh
// Scheme: Alexandre Gavioli (http://github.com/Alexx2/)

var colour_scheme = {
        'base00': '#201602',
        'base01': '#302e00',
        'base02': '#5f5b17',
        'base03': '#6c6823',
        'base04': '#86813b',
        'base05': '#948e48',
        'base06': '#ccc37a',
        'base07': '#faf0a5',
        'base08': '#c35359',
        'base09': '#b36144',
        'base0A': '#a88339',
        'base0B': '#18974e',
        'base0C': '#75a738',
        'base0D': '#477ca1',
        'base0E': '#8868b3',
        'base0F': '#b3588e',
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

