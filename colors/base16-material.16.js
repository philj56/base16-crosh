// Base16 Material
// Scheme: Nate Peterson

var color_scheme = {
        'base00': '#263238',
        'base01': '#2E3C43',
        'base02': '#314549',
        'base03': '#546E7A',
        'base04': '#B2CCD6',
        'base05': '#EEFFFF',
        'base06': '#EEFFFF',
        'base07': '#FFFFFF',
        'base08': '#F07178',
        'base09': '#F78C6C',
        'base0A': '#FFCB6B',
        'base0B': '#C3E88D',
        'base0C': '#89DDFF',
        'base0D': '#82AAFF',
        'base0E': '#C792EA',
        'base0F': '#FF5370',
};

term_.prefs_.set('background-color', color_scheme.base00);
term_.prefs_.set('foreground-color', color_scheme.base05);
term_.prefs_.set('cursor-color', "rgba(238, 255, 255, 0.5)");

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
