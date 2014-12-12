#!/usr/bin/php
<?php
#  _    _          ___           __ _     (R)
# | |  (_)_ _____ / __|___ _ _  / _(_)__ _
# | |__| \ V / -_) (__/ _ \ ' \|  _| / _` |
# |____|_|\_/\___|\___\___/_||_|_| |_\__, |
#                                    |___/
# Copyright (c) 2009-2014 Keppler IT GmbH.

if (sizeof($argv) != 2) {
  fwrite(STDERR, "Usage: $argv[0] <name>\n");
  exit(1);
}

$name = $argv[1];

# check if directory exists:
if (!is_dir($name)) {
  fwrite(STDERR, "$argv[0]: directory '$name' doesn't exist.\n");
  exit(1);
}

# compress .css and .js files
foreach (glob("$name/*.{css,js}", GLOB_BRACE) as $file) {
  echo "- compressing: $file\n";
  if (!($f_out = gzopen("$file.gz", 'wb9'))) {
    fwrite(STDERR, "$argv[0]: can't create $file.gz for compression.\n");
    exit(2);
  }
  if (!($f_in = fopen($file, 'rb'))) {
    fwrite(STDERR, "$argv[0]: can't open $file for reading.\n");
    exit(2);
  }
  while (!feof($f_in)) gzwrite($f_out, fread($f_in, 8192));
  fclose($f_in);
  gzclose($f_out);
}

# create CDB file
if (!($db = dba_open("$name.tmpl", 'n', 'cdb_make'))) {
  fwrite(STDERR, "$argv[0] can't create database file $name.tmpl\n");
  exit(2);
}

# get all files from the template directory:
foreach (scandir($name) as $file) {
  if (is_dir("$name/$file")) continue;
  echo "- $file\n";

  # add file to template database:
  if (!dba_insert("res/$file", file_get_contents("$name/$file"), $db)) {
    fwrite(STDERR, "$argv[0] error while adding file $file to template\n");
    exit(2);
  }
}

dba_close($db);

?>