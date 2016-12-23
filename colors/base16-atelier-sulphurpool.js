// Base16 Atelier Sulphurpool
// Scheme: Bram de Haan (http://atelierbramdehaan.nl)

var color_scheme = {
        'base00': '#202746',
        'base01': '#293256',
        'base02': '#5e6687',
        'base03': '#6b7394',
        'base04': '#898ea4',
        'base05': '#979db4',
        'base06': '#dfe2f1',
        'base07': '#f5f7ff',
        'base08': '#c94922',
        'base09': '#c76b29',
        'base0A': '#c08b30',
        'base0B': '#ac9739',
        'base0C': '#22a2c9',
        'base0D': '#3d8fd1',
        'base0E': '#6679cc',
        'base0F': '#9c637a',
};

term_.prefs_.set('background-color', color_scheme.base00);
term_.prefs_.set('foreground-color', color_scheme.base05);
term_.prefs_.set('cursor-color', "rgba(151, 157, 180, 0.5)");

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
