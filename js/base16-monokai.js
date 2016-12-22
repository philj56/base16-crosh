// Base16 Monokai
// Scheme: Wimer Hazenberg (http://www.monokai.nl)

var colour_scheme = {
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

var cursor_colour = "rgba(248, 248, 242, 0.5)";
term_.prefs_.set('background-color', colour_scheme.base00);
term_.prefs_.set('foreground-color', colour_scheme.base05);
term_.prefs_.set('cursor-color', cursor_colour);

term_.prefs_.set('color-palette-overrides', 
                        [colour_scheme.base00,
                        colour_scheme.base08,
                        colour_scheme.base0B,
                        colour_scheme.base0A,
                        colour_scheme.base0D,
                        colour_scheme.base0E,
                        colour_scheme.base0C,
                        colour_scheme.base05,
                        colour_scheme.base03,
                        colour_scheme.base08,
                        colour_scheme.base0B,
                        colour_scheme.base0A,
                        colour_scheme.base0D,
                        colour_scheme.base0E,
                        colour_scheme.base0C,
                        colour_scheme.base07,
                        colour_scheme.base09,
                        colour_scheme.base0F,
                        colour_scheme.base01,
                        colour_scheme.base02,
                        colour_scheme.base04,
                        colour_scheme.base06]);
