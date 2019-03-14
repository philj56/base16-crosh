// Base16 Paraiso
// Scheme: Jan T. Sott

var color_scheme = {
        'base00': '#2f1e2e',
        'base01': '#41323f',
        'base02': '#4f424c',
        'base03': '#776e71',
        'base04': '#8d8687',
        'base05': '#a39e9b',
        'base06': '#b9b6b0',
        'base07': '#e7e9db',
        'base08': '#ef6155',
        'base09': '#f99b15',
        'base0A': '#fec418',
        'base0B': '#48b685',
        'base0C': '#5bc4bf',
        'base0D': '#06b6ef',
        'base0E': '#815ba4',
        'base0F': '#e96ba8',
};

term_.prefs_.set('background-color', color_scheme.base00);
term_.prefs_.set('foreground-color', color_scheme.base05);
term_.prefs_.set('cursor-color', "rgba(163, 158, 155, 0.5)");

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
