#!/bin/bash

docker run -p 8080:80 -v $(pwd)/pwiki/:/var/www/html/ php:5.5.23-apache