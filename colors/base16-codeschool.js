// Base16 Codeschool
// Scheme: blockloop

var color_scheme = {
        'base00': '#232c31',
        'base01': '#1c3657',
        'base02': '#2a343a',
        'base03': '#3f4944',
        'base04': '#84898c',
        'base05': '#9ea7a6',
        'base06': '#a7cfa3',
        'base07': '#b5d8f6',
        'base08': '#2a5491',
        'base09': '#43820d',
        'base0A': '#a03b1e',
        'base0B': '#237986',
        'base0C': '#b02f30',
        'base0D': '#484d79',
        'base0E': '#c59820',
        'base0F': '#c98344',
};

term_.prefs_.set('background-color', color_scheme.base00);
term_.prefs_.set('foreground-color', color_scheme.base05);
term_.prefs_.set('cursor-color', "rgba(158, 167, 166, 0.5)");

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
