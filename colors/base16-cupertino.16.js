// Base16 Cupertino
// Scheme: Defman21

var color_scheme = {
        'base00': '#ffffff',
        'base01': '#c0c0c0',
        'base02': '#c0c0c0',
        'base03': '#808080',
        'base04': '#808080',
        'base05': '#404040',
        'base06': '#404040',
        'base07': '#5e5e5e',
        'base08': '#c41a15',
        'base09': '#eb8500',
        'base0A': '#826b28',
        'base0B': '#007400',
        'base0C': '#318495',
        'base0D': '#0000ff',
        'base0E': '#a90d91',
        'base0F': '#826b28',
};

term_.prefs_.set('background-color', color_scheme.base00);
term_.prefs_.set('foreground-color', color_scheme.base05);
term_.prefs_.set('cursor-color', "rgba(64, 64, 64, 0.5)");

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
