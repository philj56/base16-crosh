// Base16 Brogrammer
// Scheme: Vik Ramanujam (http://github.com/piggyslasher)

var color_scheme = {
        'base00': '#1f1f1f',
        'base01': '#f81118',
        'base02': '#2dc55e',
        'base03': '#ecba0f',
        'base04': '#2a84d2',
        'base05': '#4e5ab7',
        'base06': '#1081d6',
        'base07': '#d6dbe5',
        'base08': '#d6dbe5',
        'base09': '#de352e',
        'base0A': '#1dd361',
        'base0B': '#f3bd09',
        'base0C': '#1081d6',
        'base0D': '#5350b9',
        'base0E': '#0f7ddb',
        'base0F': '#ffffff',
};

term_.prefs_.set('background-color', color_scheme.base00);
term_.prefs_.set('foreground-color', color_scheme.base05);
term_.prefs_.set('cursor-color', "rgba(78, 90, 183, 0.5)");

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
