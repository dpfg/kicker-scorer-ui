FROM busybox

MAINTAINER Aliaksandr Ch <xander.blr@gmail.com>

RUN mkdir -p /code/ui

COPY ./dist/prod /code/ui

VOLUME ["/code/ui"]