// Base16 XCode Dusk
// Scheme: Elsa Gonsiorowski (https://github.com/gonsie)

var color_scheme = {
        'base00': '#282B35',
        'base01': '#3D4048',
        'base02': '#53555D',
        'base03': '#686A71',
        'base04': '#7E8086',
        'base05': '#939599',
        'base06': '#A9AAAE',
        'base07': '#BEBFC2',
        'base08': '#B21889',
        'base09': '#786DC5',
        'base0A': '#438288',
        'base0B': '#DF0002',
        'base0C': '#00A0BE',
        'base0D': '#790EAD',
        'base0E': '#B21889',
        'base0F': '#C77C48',
};

term_.prefs_.set('background-color', color_scheme.base00);
term_.prefs_.set('foreground-color', color_scheme.base05);
term_.prefs_.set('cursor-color', "rgba(147, 149, 153, 0.5)");

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
