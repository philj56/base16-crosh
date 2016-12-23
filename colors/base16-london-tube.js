// Base16 London Tube
// Scheme: Jan T. Sott

var colour_scheme = {
        'base00': '#231f20',
        'base01': '#1c3f95',
        'base02': '#5a5758',
        'base03': '#737171',
        'base04': '#959ca1',
        'base05': '#d9d8d8',
        'base06': '#e7e7e8',
        'base07': '#ffffff',
        'base08': '#ee2e24',
        'base09': '#f386a1',
        'base0A': '#ffd204',
        'base0B': '#00853e',
        'base0C': '#85cebc',
        'base0D': '#009ddc',
        'base0E': '#98005d',
        'base0F': '#b06110',
};

var cursor_colour = "rgba(217, 216, 216, 0.5)";
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
