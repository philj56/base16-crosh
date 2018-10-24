// Base16 iA Dark
// Scheme: iA Inc. (modified by aramisgithub)

var color_scheme = {
        'base00': '#1a1a1a',
        'base01': '#222222',
        'base02': '#1d414d',
        'base03': '#767676',
        'base04': '#b8b8b8',
        'base05': '#cccccc',
        'base06': '#e8e8e8',
        'base07': '#f8f8f8',
        'base08': '#d88568',
        'base09': '#d86868',
        'base0A': '#b99353',
        'base0B': '#83a471',
        'base0C': '#7c9cae',
        'base0D': '#8eccdd',
        'base0E': '#b98eb2',
        'base0F': '#8b6c37',
};

term_.prefs_.set('background-color', color_scheme.base00);
term_.prefs_.set('foreground-color', color_scheme.base05);
term_.prefs_.set('cursor-color', "rgba(204, 204, 204, 0.5)");

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
