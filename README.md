templates
=========

Starting with LiveConfig v1.8.0-r3322 you can use your own, custom CSS templates for the web interface. This project provides all files necessary to create your own template.

## CSS override

If you want to do only minor modifications to the default template, you can define an "override CSS". Create a custom CSS file (eg. `custom.css`) and include this into the `main.html` file **after** the `default/style.css`. Define all your CSS overrides there.
When you're done, copy this file to your LiveConfig server to `/usr/lib/liveconfig/htdocs/`. If not done yet, upload your own logo image to LiveConfig (log in as *admin*, go to *Settings* -> *Reseller* and upload your image file). You will find this file on the server at `/var/lib/liveconfig/html/<Logo>.png`. Now rename your CSS file to the same name (but keep the file extension at `.css`). For example, if you logo file is named `logo1234567890.png`, then your CSS must be at `logo1234567890.css`. That's it - LiveConfig will now automatically include your override CSS.

## Custom template

### Architecture

All files required for a template are packed into a CDB file (Constant Database). When LiveConfig is started, this file is mmap()ed into memory for maximum performance.
So to provide your own template, you "just" have to create such a cdb file using the accompanied `maketemplate.php` script.

### First steps

1. create a full copy of the default template, eg. `cp -av default megacool`
2. modify `main.html` and `login.html` to reference to your new template (ie. change from `default/style.css` to `megacool/style.css`)
3. test & develop your style sheets
4. when done, run `./maketemplate.php megacool` to create the template file `megacool.tmpl`

### Using the template

1. copy the template file into `/usr/share/liveconfig/`
2. in the LiveConfig database, insert/update the record in LCDEFAULTS:

```
INSERT INTO LCDEFAULTS (LD_KEY, LD_VALUE) VALUES \
  ("liveconfig.web.template", "megacool");
```

3. then restart LiveConfig

## Legal issues

The default template contains a custom web icon font (*lcicons*). The icons come from:
* [iconmonstr](http://iconmonstr.com/): box-checked, box-empty, box-some, check, database, info, license, php-code, question, warning
* [Material Design Icons](https://materialdesignicons.com/):
  * Austin Andrews (@Templarian): calculator, chart-bar, close-circle, comment-text-outline, file-document, key-variant, login, logout, server-network, package-variant, xml
  * Cody: certificate, file-multiple, sitemap
* LiveConfig: blank, liveconfig, loading
* [Material icons](https://www.google.com/design/icons/)
  * all other icons

The license terms of several icons prohibit detached redistribution, rental and reselling. If you plan to do so, you need to check the licenses first and eventually create or license your own icon font (or individual icons). Usage of the *lcicons* web font is no problem as long as you don't modify, resell, rent or sub-license it.

And of course, we have a copyright on the default template (a designer has produced this exclusively for LiveConfig). So it's not a good idea to copy that (or parts of it) for use in any other software. ;)
