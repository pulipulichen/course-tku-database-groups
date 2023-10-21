#!/bin/bash

cd "$(dirname "$0")"

gnome-terminal -- bash -c "./main.sh; read -n 1 -s -r -p \"Press any key to continue...\"; exec bash"