templates
=========

Starting with LiveConfig v1.8.0-r3322 you can use your own, custom CSS templates for the web interface. This project provides all files necessary to create your own template.

## Architecture

All files required for a template are packed into a CDB file (Constant Database). When LiveConfig is started, this file is mmap()ed into memory for maximum performance.
So to provide your own template, you "just" have to create such a cdb file using the accompanied `maketemplate.php` script.

## First steps

1. create a full copy of the default template, eg. `cp -av default megacool`
2. modify `main.html` and `login.html` to reference to your new template (ie. change from `default/style.css` to `megacool/style.css`)
3. test & develop your style sheets
4. when done, run `./maketemplate.php megacool` to create the template file `megacool.tmpl`

## Using the template

1. copy the template file into `/usr/share/liveconfig/`
2. in the LiveConfig database, insert/update the record in LCDEFAULT:
   ```INSERT INTO LCDEFAULTS (LD_KEY, LD_VALUE) VALUES \
    ("liveconfig.web.template", "megacool");```
3. then restart LiveConfig

## Legal issues

The default template contains some icons which we have commercially licensed for LiveConfig. So it's important for you to either **not use** these icons or to **not sell** your template.
If you plan to sell your template, please use separate icons (either free ones, or appropriately licensed ones).

And of course, we have a copyright on the default template (a designer has produced this exclusively for LiveConfig). So it's not a good idea to copy that (or parts of it) for use in any other software. ;)
