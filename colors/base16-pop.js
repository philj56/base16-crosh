// Base16 Pop
// Scheme: Chris Kempson (http://chriskempson.com)

var color_scheme = {
        'base00': '#000000',
        'base01': '#202020',
        'base02': '#303030',
        'base03': '#505050',
        'base04': '#b0b0b0',
        'base05': '#d0d0d0',
        'base06': '#e0e0e0',
        'base07': '#ffffff',
        'base08': '#eb008a',
        'base09': '#f29333',
        'base0A': '#f8ca12',
        'base0B': '#37b349',
        'base0C': '#00aabb',
        'base0D': '#0e5a94',
        'base0E': '#b31e8d',
        'base0F': '#7a2d00',
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
