#!/bin/bash
sudo apt-get update
sudo apt-get install -y docker.io
sudo docker pull sn1k/submodulo-alberto
sudo docker run -i -t sn1k/submodulo-alberto /bin/bash
