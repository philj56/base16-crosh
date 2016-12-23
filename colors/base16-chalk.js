// Base16 Chalk
// Scheme: Chris Kempson (http://chriskempson.com)

var color_scheme = {
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

term_.prefs_.set('background-color', color_scheme.base00);
term_.prefs_.set('foreground-color', color_scheme.base05);
term_.prefs_.set('cursor-color', "rgba(208, 208, 208, 0.5)");

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
