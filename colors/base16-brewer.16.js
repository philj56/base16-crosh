// Base16 Brewer
// Scheme: Timothée Poisot (http://github.com/tpoisot)

var color_scheme = {
        'base00': '#0c0d0e',
        'base01': '#2e2f30',
        'base02': '#515253',
        'base03': '#737475',
        'base04': '#959697',
        'base05': '#b7b8b9',
        'base06': '#dadbdc',
        'base07': '#fcfdfe',
        'base08': '#e31a1c',
        'base09': '#e6550d',
        'base0A': '#dca060',
        'base0B': '#31a354',
        'base0C': '#80b1d3',
        'base0D': '#3182bd',
        'base0E': '#756bb1',
        'base0F': '#b15928',
};

term_.prefs_.set('background-color', color_scheme.base00);
term_.prefs_.set('foreground-color', color_scheme.base05);
term_.prefs_.set('cursor-color', "rgba(183, 184, 185, 0.5)");

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
