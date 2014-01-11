#!/usr/bin/env bash
set -e
lein clean
lein cljsbuild once prod
TMP=`mktemp -d /tmp/asteroids.XXXXXX`
git clone git@github.com:johntrimble/asteroids.git "$TMP"
GIT="git --git-dir $TMP/.git --work-tree $TMP "
$GIT checkout gh-pages
$GIT rm -r .
cp -rn resources/public/* "${TMP}"
cp -rn target/prod/resources/public/* "${TMP}"
$GIT add -A
$GIT commit -m "Site update"
$GIT push
rm -rf "$TMP"
