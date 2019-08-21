// Base16 Nova
// Scheme: George Essig (https://github.com/gessig), Trevor D. Miller (https://trevordmiller.com)

var color_scheme = {
        'base00': '#3C4C55',
        'base01': '#556873',
        'base02': '#6A7D89',
        'base03': '#899BA6',
        'base04': '#899BA6',
        'base05': '#C5D4DD',
        'base06': '#899BA6',
        'base07': '#556873',
        'base08': '#83AFE5',
        'base09': '#7FC1CA',
        'base0A': '#A8CE93',
        'base0B': '#7FC1CA',
        'base0C': '#F2C38F',
        'base0D': '#83AFE5',
        'base0E': '#9A93E1',
        'base0F': '#F2C38F',
};

term_.prefs_.set('background-color', color_scheme.base00);
term_.prefs_.set('foreground-color', color_scheme.base05);
term_.prefs_.set('cursor-color', "rgba(197, 212, 221, 0.5)");

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
