# Base16 crosh
[Base16](https://github.com/chriskempson/base16) themes for crosh.

![Base16 crosh](https://raw.github.com/philj56/base16-crosh/master/base16-crosh.png)

### Installation:
1. Open crosh with **Ctrl-Alt-T**.
2. Open the developer console with **Ctrl-Shift-J**.
3. Paste the contents of `colors/base16-{theme}.js` into the console and press Enter.

To return to the crosh defaults, use colors/crosh-default.js. You may need to open
a new crosh window for all changes to take effect.

### 16 ANSI Color Variant
The default files map the base16 colors into the 256 color palette. The files
`colors/base16-{theme}.16.js` map only to the 16 ANSI colors. Since they
(mis)use the bright color variants the display of some terminal programs may be
undesirable.
