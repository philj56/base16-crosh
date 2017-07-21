// Base16 Classic Dark
// Scheme: Jason Heeris (http://heeris.id.au)

var color_scheme = {
        'base00': '#151515',
        'base01': '#202020',
        'base02': '#303030',
        'base03': '#505050',
        'base04': '#B0B0B0',
        'base05': '#D0D0D0',
        'base06': '#E0E0E0',
        'base07': '#F5F5F5',
        'base08': '#AC4142',
        'base09': '#D28445',
        'base0A': '#F4BF75',
        'base0B': '#90A959',
        'base0C': '#75B5AA',
        'base0D': '#6A9FB5',
        'base0E': '#AA759F',
        'base0F': '#8F5536',
};

term_.prefs_.set('background-color', color_scheme.base00);
term_.prefs_.set('foreground-color', color_scheme.base05);
term_.prefs_.set('cursor-color', "rgba(208, 208, 208, 0.5)");

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
