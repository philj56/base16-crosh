// Base16 Google Light
// Scheme: Seth Wright (http://sethawright.com)

var colour_scheme = {
        'base00': '#ffffff',
        'base01': '#e0e0e0',
        'base02': '#c5c8c6',
        'base03': '#b4b7b4',
        'base04': '#969896',
        'base05': '#373b41',
        'base06': '#282a2e',
        'base07': '#1d1f21',
        'base08': '#CC342B',
        'base09': '#F96A38',
        'base0A': '#FBA922',
        'base0B': '#198844',
        'base0C': '#3971ED',
        'base0D': '#3971ED',
        'base0E': '#A36AC7',
        'base0F': '#3971ED',
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

