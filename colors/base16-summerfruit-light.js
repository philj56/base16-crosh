// Base16 Summerfruit Light
// Scheme: Christopher Corley (http://christop.club/)

var color_scheme = {
        'base00': '#FFFFFF',
        'base01': '#E0E0E0',
        'base02': '#D0D0D0',
        'base03': '#B0B0B0',
        'base04': '#000000',
        'base05': '#101010',
        'base06': '#151515',
        'base07': '#202020',
        'base08': '#FF0086',
        'base09': '#FD8900',
        'base0A': '#ABA800',
        'base0B': '#00C918',
        'base0C': '#1FAAAA',
        'base0D': '#3777E6',
        'base0E': '#AD00A1',
        'base0F': '#CC6633',
};

term_.prefs_.set('background-color', color_scheme.base00);
term_.prefs_.set('foreground-color', color_scheme.base05);
term_.prefs_.set('cursor-color', "rgba(16, 16, 16, 0.5)");

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
