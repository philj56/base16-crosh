// Base16 Heetch Light
// Scheme: Geoffrey Teale (tealeg@gmail.com)

var color_scheme = {
        'base00': '#feffff',
        'base01': '#392551',
        'base02': '#7b6d8b',
        'base03': '#9c92a8',
        'base04': '#ddd6e5',
        'base05': '#5a496e',
        'base06': '#470546',
        'base07': '#190134',
        'base08': '#27d9d5',
        'base09': '#bdb6c5',
        'base0A': '#5ba2b6',
        'base0B': '#f80059',
        'base0C': '#c33678',
        'base0D': '#47f9f5',
        'base0E': '#bd0152',
        'base0F': '#dedae2',
};

term_.prefs_.set('background-color', color_scheme.base00);
term_.prefs_.set('foreground-color', color_scheme.base05);
term_.prefs_.set('cursor-color', "rgba(90, 73, 110, 0.5)");

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
