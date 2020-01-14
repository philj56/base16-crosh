// Base16 Hardcore
// Scheme: Chris Caller

var color_scheme = {
        'base00': '#212121',
        'base01': '#303030',
        'base02': '#353535',
        'base03': '#4A4A4A',
        'base04': '#707070',
        'base05': '#cdcdcd',
        'base06': '#e5e5e5',
        'base07': '#ffffff',
        'base08': '#f92672',
        'base09': '#fd971f',
        'base0A': '#e6db74',
        'base0B': '#a6e22e',
        'base0C': '#708387',
        'base0D': '#66d9ef',
        'base0E': '#9e6ffe',
        'base0F': '#e8b882',
};

term_.prefs_.set('background-color', color_scheme.base00);
term_.prefs_.set('foreground-color', color_scheme.base05);
term_.prefs_.set('cursor-color', "rgba(205, 205, 205, 0.5)");

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
