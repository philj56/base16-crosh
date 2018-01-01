// Base16 Porple
// Scheme: Niek den Breeje (https://github.com/AuditeMarlow)

var color_scheme = {
        'base00': '#292c36',
        'base01': '#333344',
        'base02': '#474160',
        'base03': '#65568a',
        'base04': '#b8b8b8',
        'base05': '#d8d8d8',
        'base06': '#e8e8e8',
        'base07': '#f8f8f8',
        'base08': '#f84547',
        'base09': '#d28e5d',
        'base0A': '#efa16b',
        'base0B': '#95c76f',
        'base0C': '#64878f',
        'base0D': '#8485ce',
        'base0E': '#b74989',
        'base0F': '#986841',
};

term_.prefs_.set('background-color', color_scheme.base00);
term_.prefs_.set('foreground-color', color_scheme.base05);
term_.prefs_.set('cursor-color', "rgba(216, 216, 216, 0.5)");

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
