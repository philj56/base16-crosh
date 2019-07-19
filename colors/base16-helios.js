// Base16 Helios
// Scheme: Alex Meyer (https://github.com/reyemxela)

var color_scheme = {
        'base00': '#1d2021',
        'base01': '#383c3e',
        'base02': '#53585b',
        'base03': '#6f7579',
        'base04': '#cdcdcd',
        'base05': '#d5d5d5',
        'base06': '#dddddd',
        'base07': '#e5e5e5',
        'base08': '#d72638',
        'base09': '#eb8413',
        'base0A': '#f19d1a',
        'base0B': '#88b92d',
        'base0C': '#1ba595',
        'base0D': '#1e8bac',
        'base0E': '#be4264',
        'base0F': '#c85e0d',
};

term_.prefs_.set('background-color', color_scheme.base00);
term_.prefs_.set('foreground-color', color_scheme.base05);
term_.prefs_.set('cursor-color', "rgba(213, 213, 213, 0.5)");

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
