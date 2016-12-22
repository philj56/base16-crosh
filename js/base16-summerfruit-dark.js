// Base16 Summerfruit Dark
// Scheme: Christopher Corley (http://christop.club/)

var colour_scheme = {
        'base00': '#151515',
        'base01': '#202020',
        'base02': '#303030',
        'base03': '#505050',
        'base04': '#B0B0B0',
        'base05': '#D0D0D0',
        'base06': '#E0E0E0',
        'base07': '#FFFFFF',
        'base08': '#FF0086',
        'base09': '#FD8900',
        'base0A': '#ABA800',
        'base0B': '#00C918',
        'base0C': '#1FAAAA',
        'base0D': '#3777E6',
        'base0E': '#AD00A1',
        'base0F': '#CC6633',
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

