#!/usr/bin/env bash

# Install the Almost Sketch 2 Sketch plugin if it's not already installed:
ls ~/Library/Application\ Support/com.bohemiancoding.sketch3/Plugins/asketch2sketch.sketchplugin || \
    open ./storybook/asketch2sketch.sketchplugin

# Run the Story2Sketch export:
story2sketch

# Fix some minor issues in the export:
./bin/tweak_sketch_export.js

# Copy export to clipboard
cat ./stories.asketch.json | pbcopy

# Import into sketch
/Applications/Sketch.app/Contents/Resources/sketchtool/bin/sketchtool run \
    ~/Library/Application\ Support/com.bohemiancoding.sketch3/Plugins/asketch2sketch.sketchplugin \
    paste