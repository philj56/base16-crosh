// Base16 Rebecca
// Scheme: Victor Borja (http://github.com/vic) based on Rebecca Theme (http://github.com/vic/rebecca-theme)

var color_scheme = {
        'base00': '#292a44',
        'base01': '#663399',
        'base02': '#383a62',
        'base03': '#666699',
        'base04': '#a0a0c5',
        'base05': '#f1eff8',
        'base06': '#ccccff',
        'base07': '#53495d',
        'base08': '#a0a0c5',
        'base09': '#efe4a1',
        'base0A': '#ae81ff',
        'base0B': '#6dfedf',
        'base0C': '#8eaee0',
        'base0D': '#2de0a7',
        'base0E': '#7aa5ff',
        'base0F': '#ff79c6',
};

term_.prefs_.set('background-color', color_scheme.base00);
term_.prefs_.set('foreground-color', color_scheme.base05);
term_.prefs_.set('cursor-color', "rgba(241, 239, 248, 0.5)");

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
