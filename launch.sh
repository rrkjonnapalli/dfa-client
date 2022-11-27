#!/bin/bash
#############################
## Script To Start Service ##
#############################

function log() {
echo "$1" >&2
}

function die() {
log "$1"
exit 1
}

function check_exist() {
[ ! -z "$(command -v docker)" ] || die "The the 'docker' command is missing - Please install and try again"
[ ! -z "$(command -v docker-compose)" ] || die "The the 'docker-compose' command is missing - Please install and try again"
}

check_exist

docker-compose up -d
