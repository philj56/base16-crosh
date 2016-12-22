// Base16 Chalk
// Scheme: Chris Kempson (http://chriskempson.com)

var colour_scheme = {
        'base00': '#151515',
        'base01': '#202020',
        'base02': '#303030',
        'base03': '#505050',
        'base04': '#b0b0b0',
        'base05': '#d0d0d0',
        'base06': '#e0e0e0',
        'base07': '#f5f5f5',
        'base08': '#fb9fb1',
        'base09': '#eda987',
        'base0A': '#ddb26f',
        'base0B': '#acc267',
        'base0C': '#12cfc0',
        'base0D': '#6fc2ef',
        'base0E': '#e1a3ee',
        'base0F': '#deaf8f',
};

var cursor_colour = "rgba(208, 208, 208, 0.5)";
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
