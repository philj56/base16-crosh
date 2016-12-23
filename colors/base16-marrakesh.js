// Base16 Marrakesh
// Scheme: Alexandre Gavioli (http://github.com/Alexx2/)

var color_scheme = {
        'base00': '#201602',
        'base01': '#302e00',
        'base02': '#5f5b17',
        'base03': '#6c6823',
        'base04': '#86813b',
        'base05': '#948e48',
        'base06': '#ccc37a',
        'base07': '#faf0a5',
        'base08': '#c35359',
        'base09': '#b36144',
        'base0A': '#a88339',
        'base0B': '#18974e',
        'base0C': '#75a738',
        'base0D': '#477ca1',
        'base0E': '#8868b3',
        'base0F': '#b3588e',
};

term_.prefs_.set('background-color', color_scheme.base00);
term_.prefs_.set('foreground-color', color_scheme.base05);
term_.prefs_.set('cursor-color', "rgba(148, 142, 72, 0.5)");

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
