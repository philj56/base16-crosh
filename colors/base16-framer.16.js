// Base16 Framer
// Scheme: Framer (Maintained by Jesse Hoyos)

var color_scheme = {
        'base00': '#181818',
        'base01': '#151515',
        'base02': '#464646',
        'base03': '#747474',
        'base04': '#B9B9B9',
        'base05': '#D0D0D0',
        'base06': '#E8E8E8',
        'base07': '#EEEEEE',
        'base08': '#FD886B',
        'base09': '#FC4769',
        'base0A': '#FECB6E',
        'base0B': '#32CCDC',
        'base0C': '#ACDDFD',
        'base0D': '#20BCFC',
        'base0E': '#BA8CFC',
        'base0F': '#B15F4A',
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
                        color_scheme.base09,
                        color_scheme.base01,
                        color_scheme.base02,
                        color_scheme.base04,
                        color_scheme.base06,
                        color_scheme.base0F,
                        color_scheme.base07]);
