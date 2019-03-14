// Base16 Twilight
// Scheme: David Hart (https://github.com/hartbit)

var color_scheme = {
        'base00': '#1e1e1e',
        'base01': '#323537',
        'base02': '#464b50',
        'base03': '#5f5a60',
        'base04': '#838184',
        'base05': '#a7a7a7',
        'base06': '#c3c3c3',
        'base07': '#ffffff',
        'base08': '#cf6a4c',
        'base09': '#cda869',
        'base0A': '#f9ee98',
        'base0B': '#8f9d6a',
        'base0C': '#afc4db',
        'base0D': '#7587a6',
        'base0E': '#9b859d',
        'base0F': '#9b703f',
};

term_.prefs_.set('background-color', color_scheme.base00);
term_.prefs_.set('foreground-color', color_scheme.base05);
term_.prefs_.set('cursor-color', "rgba(167, 167, 167, 0.5)");

term_.prefs_.set('color-palette-overrides',
                        [color_scheme.base00,
                        color_scheme.base08,
                        color_scheme.base0B,
                        color_scheme.base0A,
                        color_scheme.base0D,
                        color_scheme.base0E,
                        color_scheme.base0C,
                        color_scheme.base05,
                        color_scheme.base03,
                        color_scheme.base09,
                        color_scheme.base01,
                        color_scheme.base02,
                        color_scheme.base04,
                        color_scheme.base06,
                        color_scheme.base0F,
                        color_scheme.base07]);
