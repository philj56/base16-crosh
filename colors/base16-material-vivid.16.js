// Base16 Material Vivid
// Scheme: joshyrobot

var color_scheme = {
        'base00': '#202124',
        'base01': '#27292c',
        'base02': '#323639',
        'base03': '#44464d',
        'base04': '#676c71',
        'base05': '#80868b',
        'base06': '#9e9e9e',
        'base07': '#ffffff',
        'base08': '#f44336',
        'base09': '#ff9800',
        'base0A': '#ffeb3b',
        'base0B': '#00e676',
        'base0C': '#00bcd4',
        'base0D': '#2196f3',
        'base0E': '#673ab7',
        'base0F': '#8d6e63',
};

term_.prefs_.set('background-color', color_scheme.base00);
term_.prefs_.set('foreground-color', color_scheme.base05);
term_.prefs_.set('cursor-color', "rgba(128, 134, 139, 0.5)");

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
