// Base16 Mocha
// Scheme: Chris Kempson (http://chriskempson.com)

var color_scheme = {
        'base00': '#3B3228',
        'base01': '#534636',
        'base02': '#645240',
        'base03': '#7e705a',
        'base04': '#b8afad',
        'base05': '#d0c8c6',
        'base06': '#e9e1dd',
        'base07': '#f5eeeb',
        'base08': '#cb6077',
        'base09': '#d28b71',
        'base0A': '#f4bc87',
        'base0B': '#beb55b',
        'base0C': '#7bbda4',
        'base0D': '#8ab3b5',
        'base0E': '#a89bb9',
        'base0F': '#bb9584',
};

term_.prefs_.set('background-color', color_scheme.base00);
term_.prefs_.set('foreground-color', color_scheme.base05);
term_.prefs_.set('cursor-color', "rgba(208, 200, 198, 0.5)");

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
