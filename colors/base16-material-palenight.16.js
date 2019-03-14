// Base16 Material Palenight
// Scheme: Nate Peterson

var color_scheme = {
        'base00': '#292D3E',
        'base01': '#444267',
        'base02': '#32374D',
        'base03': '#676E95',
        'base04': '#8796B0',
        'base05': '#959DCB',
        'base06': '#959DCB',
        'base07': '#FFFFFF',
        'base08': '#F07178',
        'base09': '#F78C6C',
        'base0A': '#FFCB6B',
        'base0B': '#C3E88D',
        'base0C': '#89DDFF',
        'base0D': '#82AAFF',
        'base0E': '#C792EA',
        'base0F': '#FF5370',
};

term_.prefs_.set('background-color', color_scheme.base00);
term_.prefs_.set('foreground-color', color_scheme.base05);
term_.prefs_.set('cursor-color', "rgba(149, 157, 203, 0.5)");

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
