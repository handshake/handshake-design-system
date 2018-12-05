#!/usr/bin/env bash

sketchtool=/Applications/Sketch.app/Contents/Resources/sketchtool/bin/sketchtool
plugins="$($sketchtool show plugins)"

sketch () {
    plugin=$1
    command=$2
    paramName=$3
    paramValue=$4

    if [ -n $paramName ]; then
        $sketchtool run "$plugins/$plugin.sketchplugin" $command \
            --context="{\"$paramName\":\"$paramValue\"}"
    else
        $sketchtool run "$plugins/$plugin.sketchplugin" $command
    fi
}

import2sketch () {
    sketch page_utils setOrAddPage target "$(node -p "require('./$1.asketch.json').name")"
    cat ./$1.asketch.json | pbcopy
    sketch asketch2sketch paste
}

# Install the Almost Sketch 2 Sketch plugin if it's not already installed:
ls "$plugins/asketch2sketch.sketchplugin" 2>/dev/null > /dev/null || \
    open ./storybook/asketch2sketch.sketchplugin

# Install the Page Utils plugin if it's not already installed:
ls "$plugins/page_utils.sketchplugin" 2>/dev/null > /dev/null || \
    open ./storybook/page_utils.sketchplugin

# Run the Story2Sketch export:
story2sketch

# Split the export into multiple pages:
./bin/sketch_postprocess.js

for file in ./*.asketch.json; do
    if [[ $file != "./stories.asketch.json" ]]; then
        import2sketch $(echo $file | cut -d "/" -f2 | cut -d "." -f1)
        rm $file
    fi
done