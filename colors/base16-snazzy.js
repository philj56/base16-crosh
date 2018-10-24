// Base16 Snazzy
// Scheme: Chawye Hsu (https://github.com/h404bi) based on Hyper Snazzy Theme (https://github.com/sindresorhus/hyper-snazzy)

var color_scheme = {
        'base00': '#282a36',
        'base01': '#34353e',
        'base02': '#43454f',
        'base03': '#78787e',
        'base04': '#a5a5a9',
        'base05': '#e2e4e5',
        'base06': '#eff0eb',
        'base07': '#f1f1f0',
        'base08': '#ff5c57',
        'base09': '#ff9f43',
        'base0A': '#f3f99d',
        'base0B': '#5af78e',
        'base0C': '#9aedfe',
        'base0D': '#57c7ff',
        'base0E': '#ff6ac1',
        'base0F': '#b2643c',
};

term_.prefs_.set('background-color', color_scheme.base00);
term_.prefs_.set('foreground-color', color_scheme.base05);
term_.prefs_.set('cursor-color', "rgba(226, 228, 229, 0.5)");

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
