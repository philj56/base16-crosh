// Base16 Google Light
// Scheme: Seth Wright (http://sethawright.com)

var color_scheme = {
        'base00': '#ffffff',
        'base01': '#e0e0e0',
        'base02': '#c5c8c6',
        'base03': '#b4b7b4',
        'base04': '#969896',
        'base05': '#373b41',
        'base06': '#282a2e',
        'base07': '#1d1f21',
        'base08': '#CC342B',
        'base09': '#F96A38',
        'base0A': '#FBA922',
        'base0B': '#198844',
        'base0C': '#3971ED',
        'base0D': '#3971ED',
        'base0E': '#A36AC7',
        'base0F': '#3971ED',
};

term_.prefs_.set('background-color', color_scheme.base00);
term_.prefs_.set('foreground-color', color_scheme.base05);
term_.prefs_.set('cursor-color', "rgba(55, 59, 65, 0.5)");

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
