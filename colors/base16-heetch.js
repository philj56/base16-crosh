// Base16 Heetch Dark
// Scheme: Geoffrey Teale (tealeg@gmail.com)

var color_scheme = {
        'base00': '#190134',
        'base01': '#392551',
        'base02': '#5A496E',
        'base03': '#7B6D8B',
        'base04': '#9C92A8',
        'base05': '#BDB6C5',
        'base06': '#DEDAE2',
        'base07': '#FEFFFF',
        'base08': '#27D9D5',
        'base09': '#5BA2B6',
        'base0A': '#8F6C97',
        'base0B': '#C33678',
        'base0C': '#F80059',
        'base0D': '#BD0152',
        'base0E': '#82034C',
        'base0F': '#470546',
};

term_.prefs_.set('background-color', color_scheme.base00);
term_.prefs_.set('foreground-color', color_scheme.base05);
term_.prefs_.set('cursor-color', "rgba(189, 182, 197, 0.5)");

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
