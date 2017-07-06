#!/bin/sh
docker-compose -f stp-dev.yml kill
docker-compose -f stp-dev.yml up


##TODO: autoclone spr and tab repo's