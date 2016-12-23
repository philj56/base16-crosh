// Base16 Pico
// Scheme: PICO-8 (http://www.lexaloffle.com/pico-8.php)

var color_scheme = {
        'base00': '#000000',
        'base01': '#1d2b53',
        'base02': '#7e2553',
        'base03': '#008751',
        'base04': '#ab5236',
        'base05': '#5f574f',
        'base06': '#c2c3c7',
        'base07': '#fff1e8',
        'base08': '#ff004d',
        'base09': '#ffa300',
        'base0A': '#fff024',
        'base0B': '#00e756',
        'base0C': '#29adff',
        'base0D': '#83769c',
        'base0E': '#ff77a8',
        'base0F': '#ffccaa',
};

term_.prefs_.set('background-color', color_scheme.base00);
term_.prefs_.set('foreground-color', color_scheme.base05);
term_.prefs_.set('cursor-color', "rgba(95, 87, 79, 0.5)");

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
                        color_scheme.base08,
                        color_scheme.base0B,
                        color_scheme.base0A,
                        color_scheme.base0D,
                        color_scheme.base0E,
                        color_scheme.base0C,
                        color_scheme.base07,
                        color_scheme.base09,
                        color_scheme.base0F,
                        color_scheme.base01,
                        color_scheme.base02,
                        color_scheme.base04,
                        color_scheme.base06]);
