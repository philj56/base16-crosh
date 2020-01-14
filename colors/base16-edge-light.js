// Base16 Edge Light
// Scheme: cjayross (https://github.com/cjayross)

var color_scheme = {
        'base00': '#fafafa',
        'base01': '#7c9f4b',
        'base02': '#d69822',
        'base03': '#5e646f',
        'base04': '#6587bf',
        'base05': '#5e646f',
        'base06': '#b870ce',
        'base07': '#5e646f',
        'base08': '#db7070',
        'base09': '#db7070',
        'base0A': '#d69822',
        'base0B': '#7c9f4b',
        'base0C': '#509c93',
        'base0D': '#6587bf',
        'base0E': '#b870ce',
        'base0F': '#509c93',
};

term_.prefs_.set('background-color', color_scheme.base00);
term_.prefs_.set('foreground-color', color_scheme.base05);
term_.prefs_.set('cursor-color', "rgba(94, 100, 111, 0.5)");

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
