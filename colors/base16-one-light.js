// Base16 One Light
// Scheme: Daniel Pfeifer (http://github.com/purpleKarrot)

var color_scheme = {
        'base00': '#fafafa',
        'base01': '#f0f0f1',
        'base02': '#e5e5e6',
        'base03': '#a0a1a7',
        'base04': '#696c77',
        'base05': '#383a42',
        'base06': '#202227',
        'base07': '#090a0b',
        'base08': '#ca1243',
        'base09': '#d75f00',
        'base0A': '#c18401',
        'base0B': '#50a14f',
        'base0C': '#0184bc',
        'base0D': '#4078f2',
        'base0E': '#a626a4',
        'base0F': '#986801',
};

term_.prefs_.set('background-color', color_scheme.base00);
term_.prefs_.set('foreground-color', color_scheme.base05);
term_.prefs_.set('cursor-color', "rgba(56, 58, 66, 0.5)");

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
