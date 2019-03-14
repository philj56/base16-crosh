// Base16 London Tube
// Scheme: Jan T. Sott

var color_scheme = {
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

term_.prefs_.set('background-color', color_scheme.base00);
term_.prefs_.set('foreground-color', color_scheme.base05);
term_.prefs_.set('cursor-color', "rgba(217, 216, 216, 0.5)");

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
