#NUEVA APP HITO 3
[![Build Status](https://snap-ci.com/sn1k/submodulo-alberto/branch/master/build_image)](https://snap-ci.com/sn1k/submodulo-alberto/branch/master)

[![Build Status](https://travis-ci.org/sn1k/submodulo-alberto.svg?branch=master)](https://travis-ci.org/sn1k/submodulo-alberto)

[![Heroku](https://www.herokucdn.com/deploy/button.png)](https://young-brook-3499.herokuapp.com/)

## **Proyecto de IV infraestructura Virtual junto con DAI DESARROLO DE APLICACIONES DE INTERNET** ##

Este módulo se dedicará del alojamiento de nuestro sistema web en el servidor, por lo que conectará la aplicación con las bases de datos y realizará el despliegue de la misma.

=======
# submodulo-Alberto
## **Proyecto de IV junto con DAI** ##


###Breve Descripción/Introducción:

El proyecto consiste en una plataforma de compra/venta de productos on-line. La plataforma contiene varias secciones para la venta de todo tipo de productos. La plataforma consiste en una página web donde cualquiera podra ver los productos que se venden, pero para poder vender o comprar será necesario registro. Si el vendedor se encuentra conectado, cualquier comprador potencial podrá chatear con el para preguntarle sobre el productos.

Cada anuncio vendra acompañado de una foto y una descripcion del producto que se ajuste a la realidad. Cada producto deberá estar bien situado en su sección correspondiente.

Cada usuario podrá tener una lista de productos favoritos.

Habrá moderadores que podrán eliminar cualquier anuncio de material fuera de la ley o que no se ajuste a la política de la plataforma.

La plataforma albergará un foro donde poder opinar sobre las diferentes transacciones.


Este proyecto está inscrito en el certamen de proyectos de la UGR organizado por la OSL con el nombre de ALJALO PROJECT.

#### submodulo-alberto

Este módulo abarcará el servidor de la base de datos en el cual se almacenarán los anuncios, mensajes del foro, usuarios, moderadores, lista de productos favoritos, registro de compras, etc.. Todo esto ser realizará en MySQL.

**Toda está sujeto a cambios, puesto que en DAI aún no nos han dicho nada.


##Segundo hito

# Lista de libros deseados

Con esta aplicación podremos crear la lista de libros deseados para futuras compras en nuestro portal



##Uso

Consiste en una lista donde podemos ir añadiendo los libros que deseemos. Para ello seleccionaremos "Insertar título".

![app](https://i.gyazo.com/2904ee94caa4e23ba27d2998b670342b.png)

Una vez dentro podemos añadir el titulo que deseemos.

![libro](https://i.gyazo.com/9ee26579a6cb474142b033d502107a2a.png)

Pulsamos Aceptar y ya lo tendremos en nuestra lista de deseos.

![addbook](https://i.gyazo.com/96ac3a8fafe7befdbb9e847c9cfde3c4.png)


##Herramienta de construcción:

Para este hito hemos creado un makefile que reune las siaguientes ordenes:


- install: instalamos todo lo necesario **make install**

- test: pasaremos el test previamente creado. **make test**

- run: ponemos en marcha la aplicación. **make run**

- doc: generarermos la documentación. **make doc**

- clean: se borran los archivos generados. **make clean**

~~~
#Makefile 
#clean install test run doc

clean:
	- rm -rf *~*
	- find . -name '*.pyc' -exec rm {} \;

install: 
	python setup.py install
	
test: 
	python manage.py test
	
run:
	python manage.py runserver
doc:
	epydoc --html librosmasvendidos/*.py 
~~~
###Tests


Los test nos permiten comprobar que todas las funciones de nuestros proyectos funcionen a lo largo de su desarrollo.

Para ejecutarlo utilizaremos el comando:
 **python manage.y test**.
 
#Tests
Para realizar los tests hemos realizado test básicos en la clase "User" nombrada añadido:
```
import test
import datetime

from django.utils import timezone
from django.test import TestCase

from .models import Question, Choice

# Create your tests here.

class QuestionMethodTests(TestCase):

    def test_create_question(self):
        q = Task(description = "Nuevo libro", is_done = True)

        self.assertEqual(q.description, "Nuevo libro")


```

Aquí se ubica mi archivo [test.py](https://github.com/sn1k/submodulo-alberto/blob/master/tasks/tests.py).

Este fichero inicial, se ha realizado a través del tutorial de django, su funcionalidad inicial básica que presenta esta pequeña aplicación se piensa mantener para nuestro proyecto, por eso lo he añadido como trabajo de mi proyecto.

###Integración continua

Para esta integración contínua usaremos travis [travis](https://travis-ci.org/) ya que es fácil de usar y entender( es similar a Shippable, que también lo he usado en los ejercicios).

Para poder usar travis:

-He creado un fichero llamado [setup.py](aplicacion/setup.py)

También he creado un fichero **.travis.ym**, el cual está en el directorio raíz.
Fichero travis.yml:

~~~
language: python
python:
 - "2.7"
# command to install dependencies
install:
 - python aplicacion/setup.py install
 - pip install -r aplicacion/requirements.txt
# command to run tests
script:
 - cd aplicacion/pollaplication
 - python manage.py test
~~~


Una vez subido a github, e indicado travis que trabaje con repositorio correspondiente debe salir esto:

![travis](https://i.gyazo.com/c1361cfcd8a1122644241ec491767f89.png)
![travis2](http://i.imgur.com/PNcRhcn.png)


#Hito 3
## Despliegue en un Paas
En esta práctica desplegaremos nuestra aplicación en un Paas. Usaremos Heroku para dicha tarea. Dicha plataforma permite usar python y el Framework Django. Para su despliegue he necesitado modificar o crear los siguientes ficheros:

- Procfile, el cual indica a heroku que tiene que lanzar:
```
web: gunicorn librosdeseados.wsgi --log-file -

#foreman
#web: django-admin.py runserver --settings=librosdeseados.settings

```
- requirements.txt: usado para especificar todo lo necesario para nuestra aplicación vaya, en mi caso es:
```
Django==1.8.6
argparse==1.2.1
dj-database-url==0.3.0
dj-static==0.0.6
django-toolbelt==0.0.1
djangorestframework==3.3.1
foreman==0.9.7
futures==3.0.3
gunicorn==19.3.0
psycopg2==2.6.1
requests==2.8.1
requests-futures==0.9.5
static3==0.6.1
wheel==0.26.0
whitenoise==2.0.4
wsgiref==0.1.2

```
Despues de esto nos registramos en Heroku. Una vez registrados tendríamos que ejecutar una serie de comandos que ahora se especifican, para lanzar nuestra aplicación en heroku:
```

heroku login
heroku create
git push heroku master

```
La base de datos que utlizaremos es **PostgreSQL**. 

- Necesitamos *psycopg2*
- Editaremos *setting.py* con la configuracion de la base de datos creada en heroku [enlace](http://stackoverflow.com/questions/26080303/improperlyconfigured-settings-databases-is-improperly-configured-please-supply):

```
import dj_database_url



SECURE_PROXY_SSL_HEADER = ('HTTP_X_FORWARDED_PROTO', 'https')
ALLOWED_HOSTS = ['*']
ON_HEROKU = os.environ.get('PORT')
if ON_HEROKU:
    DATABASE_URL='postgres://uhaxlowwnbgqrv:3decYI2il-srwwKVSDV6a4G-xQ@ec2-54-83-36-203.compute-1.amazonaws.com:5432/da2k9559f8odld'
    DATABASES = {'default': dj_database_url.config(default=DATABASE_URL)}


DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': os.path.join(BASE_DIR, 'db.sqlite3'),
    }
}

```
- DATABASE_URL ponemos el enlace obtenido en heroku.

[Aplicación](http://young-brook-3499.herokuapp.com/)

Ahora añadiremos snap-ci. Para ello nos registraremos en dicha web.

![snap_pipeline](https://i.gyazo.com/36597a69996fc2b212550234b8eda784.png)
![snap](https://i.gyazo.com/2877551b25f3f695fa84c372da063a8b.png)


- Compruebo que el repositorio esta conectado con **Github** y que tiene el despliegue automático ( consultar pestaña Deploy ).

![github](https://i.gyazo.com/7e00c7ae2240e3c38e7a7e07cb89a391.png)

- Ahora, cada vez que realicemos un push a nuestro reopsitorio, se realizará un testeo previo a su posterior despliegue.


- Aquí tenemos la etiqueta de Snap-ci, de que todo ha ido correctamente.
[![Build Status](https://snap-ci.com/sn1k/submodulo-alberto/branch/master/build_image)](https://snap-ci.com/sn1k/submodulo-alberto/branch/master)


Con este último paso en snap-ci, damos por concluida la integración continua de mi aplicación, cada vez que haga un push se pasarán los test y se desplegará automáticamente.







