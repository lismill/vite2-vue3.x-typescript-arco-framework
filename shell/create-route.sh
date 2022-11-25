#!/bin/bash

read -p "Please enter route path: " path
read -p "Please enter route title: " title
echo "create:route: path: $path title: $title ..."
npm run create:route $path $title
echo ""
echo "✨ - ↓ Please waiting, lint:fix route files..."
npm run lint:fix
echo "😊 - √ Success: lint:fix route files done"
echo ""