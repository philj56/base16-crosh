// Base16 Outrun Dark
// Scheme: Hugo Delahousse (http://github.com/hugodelahousse/)

var color_scheme = {
        'base00': '#00002A',
        'base01': '#20204A',
        'base02': '#30305A',
        'base03': '#50507A',
        'base04': '#B0B0DA',
        'base05': '#D0D0FA',
        'base06': '#E0E0FF',
        'base07': '#F5F5FF',
        'base08': '#FF4242',
        'base09': '#FC8D28',
        'base0A': '#F3E877',
        'base0B': '#59F176',
        'base0C': '#0EF0F0',
        'base0D': '#66B0FF',
        'base0E': '#F10596',
        'base0F': '#F003EF',
};

term_.prefs_.set('background-color', color_scheme.base00);
term_.prefs_.set('foreground-color', color_scheme.base05);
term_.prefs_.set('cursor-color', "rgba(208, 208, 250, 0.5)");

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
