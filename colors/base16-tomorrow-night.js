// Base16 Tomorrow Night
// Scheme: Chris Kempson (http://chriskempson.com)

var color_scheme = {
        'base00': '#1d1f21',
        'base01': '#282a2e',
        'base02': '#373b41',
        'base03': '#969896',
        'base04': '#b4b7b4',
        'base05': '#c5c8c6',
        'base06': '#e0e0e0',
        'base07': '#ffffff',
        'base08': '#cc6666',
        'base09': '#de935f',
        'base0A': '#f0c674',
        'base0B': '#b5bd68',
        'base0C': '#8abeb7',
        'base0D': '#81a2be',
        'base0E': '#b294bb',
        'base0F': '#a3685a',
};

term_.prefs_.set('background-color', color_scheme.base00);
term_.prefs_.set('foreground-color', color_scheme.base05);
term_.prefs_.set('cursor-color', "rgba(197, 200, 198, 0.5)");

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
