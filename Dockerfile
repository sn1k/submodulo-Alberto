FROM ubuntu:latest

MAINTAINER Alberto Romero <albertoromeroca@gmail.com> 

RUN apt-get update
RUN apt-get install -y nodejs
RUN apt-get install -y npm
RUN echo 'alias node="nodejs"' >> ~/.bashrc
RUN . ~/.bashrc

RUN cd /home/ && git clone https://github.com/sn1k/submodulo-Alberto  

RUN cd /home/libros && npm install
