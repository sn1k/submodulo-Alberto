#Dock download & install
def getDocker():
	run('sudo apt-get update')
	run('sudo apt-get install -y docker.io')
	run('sudo docker pull sn1k/submodulo-alberto')

#Ejecucion de docker
def runDocker():
	run('sudo docker run -p 80:80 -i -t sn1k/submodulo-alberto')
