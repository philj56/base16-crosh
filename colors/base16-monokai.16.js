// Base16 Monokai
// Scheme: Wimer Hazenberg (http://www.monokai.nl)

var color_scheme = {
        'base00': '#272822',
        'base01': '#383830',
        'base02': '#49483e',
        'base03': '#75715e',
        'base04': '#a59f85',
        'base05': '#f8f8f2',
        'base06': '#f5f4f1',
        'base07': '#f9f8f5',
        'base08': '#f92672',
        'base09': '#fd971f',
        'base0A': '#f4bf75',
        'base0B': '#a6e22e',
        'base0C': '#a1efe4',
        'base0D': '#66d9ef',
        'base0E': '#ae81ff',
        'base0F': '#cc6633',
};

term_.prefs_.set('background-color', color_scheme.base00);
term_.prefs_.set('foreground-color', color_scheme.base05);
term_.prefs_.set('cursor-color', "rgba(248, 248, 242, 0.5)");

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
