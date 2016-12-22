// Base16 Solar Flare
// Scheme: Chuck Harmston (https://chuck.harmston.ch)

var colour_scheme = {
        'base00': '#18262F',
        'base01': '#222E38',
        'base02': '#586875',
        'base03': '#667581',
        'base04': '#85939E',
        'base05': '#A6AFB8',
        'base06': '#E8E9ED',
        'base07': '#F5F7FA',
        'base08': '#EF5253',
        'base09': '#E66B2B',
        'base0A': '#E4B51C',
        'base0B': '#7CC844',
        'base0C': '#52CBB0',
        'base0D': '#33B5E1',
        'base0E': '#A363D5',
        'base0F': '#D73C9A',
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

