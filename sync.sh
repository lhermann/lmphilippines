#!/bin/bash

# rm -r _site

bundle exec jekyll build

rsync -avz -L --stats --rsh='ssh -p22007' ~/htdocs/lmphilippines/_site/ lukas@host1.codethink.de:/var/customers/webs/codethink/lmphilippines.org
