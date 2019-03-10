// Base16 Material Lighter
// Scheme: Nate Peterson

var color_scheme = {
        'base00': '#FAFAFA',
        'base01': '#E7EAEC',
        'base02': '#CCEAE7',
        'base03': '#CCD7DA',
        'base04': '#8796B0',
        'base05': '#80CBC4',
        'base06': '#80CBC4',
        'base07': '#FFFFFF',
        'base08': '#FF5370',
        'base09': '#F76D47',
        'base0A': '#FFB62C',
        'base0B': '#91B859',
        'base0C': '#39ADB5',
        'base0D': '#6182B8',
        'base0E': '#7C4DFF',
        'base0F': '#E53935',
};

term_.prefs_.set('background-color', color_scheme.base00);
term_.prefs_.set('foreground-color', color_scheme.base05);
term_.prefs_.set('cursor-color', "rgba(128, 203, 196, 0.5)");

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
