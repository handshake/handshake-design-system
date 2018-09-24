#!/usr/bin/env bash

find ./node_modules/antd-mobile-rn/es -iname "*@2x.png" | \
    sed "p;s/@2x.png$/.png/" | \
    xargs -n2 cp