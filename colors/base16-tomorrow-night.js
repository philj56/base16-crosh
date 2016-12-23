// Base16 Tomorrow Night
// Scheme: Chris Kempson (http://chriskempson.com)

var colour_scheme = {
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

var cursor_colour = "rgba(197, 200, 198, 0.5)";
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
