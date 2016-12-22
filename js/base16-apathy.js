// Base16 Apathy
// Scheme: Jannik Siebert (https://github.com/janniks)

var colour_scheme = {
        'base00': '#031A16',
        'base01': '#0B342D',
        'base02': '#184E45',
        'base03': '#2B685E',
        'base04': '#5F9C92',
        'base05': '#81B5AC',
        'base06': '#A7CEC8',
        'base07': '#D2E7E4',
        'base08': '#3E9688',
        'base09': '#3E7996',
        'base0A': '#3E4C96',
        'base0B': '#883E96',
        'base0C': '#963E4C',
        'base0D': '#96883E',
        'base0E': '#4C963E',
        'base0F': '#3E965B',
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

