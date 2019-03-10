// Base16 Atelier Sulphurpool Light
// Scheme: Bram de Haan (http://atelierbramdehaan.nl)

var color_scheme = {
        'base00': '#f5f7ff',
        'base01': '#dfe2f1',
        'base02': '#979db4',
        'base03': '#898ea4',
        'base04': '#6b7394',
        'base05': '#5e6687',
        'base06': '#293256',
        'base07': '#202746',
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
term_.prefs_.set('cursor-color', "rgba(94, 102, 135, 0.5)");

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
