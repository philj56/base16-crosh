// Base16 Atelier Sulphurpool
// Scheme: Bram de Haan (http://atelierbramdehaan.nl)

var colour_scheme = {
        'base00': '#202746',
        'base01': '#293256',
        'base02': '#5e6687',
        'base03': '#6b7394',
        'base04': '#898ea4',
        'base05': '#979db4',
        'base06': '#dfe2f1',
        'base07': '#f5f7ff',
        'base08': '#c94922',
        'base09': '#c76b29',
        'base0A': '#c08b30',
        'base0B': '#ac9739',
        'base0C': '#22a2c9',
        'base0D': '#3d8fd1',
        'base0E': '#6679cc',
        'base0F': '#9c637a',
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

