
[![Heroku](https://www.herokucdn.com/deploy/button.png)](https://protected-ocean-7223.herokuapp.com/)

[![Build Status](https://snap-ci.com/sn1k/submodulo-Alberto/branch/master/build_image)](https://snap-ci.com/sn1k/submodulo-Alberto/branch/master)


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

# Encuestas sitio web

Pequeña aplicación web que permite crear y votar encuestas.

La aplicación web ha sido creada usando el tutorial de [Django](https://docs.djangoproject.com/en/1.8/intro/tutorial01/) para la asignatura infraestructura virtual


##Uso

Para ejecutar la aplicación una vez descargada hay que usar `python manage.py runserver`

Una vez levantada podemos gestionar las encuestas escribiendo `http://127.0.0.1:8000/admin/` en nuestro navegador

El usuario es `admin` y la contraseña `hola`

![admin](http://i1045.photobucket.com/albums/b460/Alejandro_Casado/pollaplication/admin_zps4vvtzbcr.png)


Para crear y borrar encuestas vamos a `http://127.0.0.1:8000/createpoll/` y `http://127.0.0.1:8000/deletepoll/` respectivamente


Para votar encuestas vamos a `http://127.0.0.1:8000` donde nos aparecerán todas las que hayamos creado

![cuestiones](http://i1045.photobucket.com/albums/b460/Alejandro_Casado/pollaplication/cuestiones_zpsixvqb8yb.png)

Seleccionamos una y nos mostrará las opciones posibles

![opciones](http://i1045.photobucket.com/albums/b460/Alejandro_Casado/pollaplication/cuestion1_zpskbbylwgw.png)

Tras esto, se almacenará nuestro voto

![resultados](http://i1045.photobucket.com/albums/b460/Alejandro_Casado/pollaplication/resultado_zpsnyo2sp0p.png)


##Herramienta de construcción:

Para este segundo apartado del hito he creado un Makefile, con las siguientes opciones:


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
	epydoc --html polls/*.py 
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
		q = Question(question_text = "Test question",pub_date=timezone.now())

		q.save()

		c = Choice(question = q , choice_text = "Choice test 1", votes=2)

		c.save()

		c = Choice(question = q , choice_text = "Choice test 2", votes=6)

		c.save()

		c = Choice(question = q , choice_text = "Choice test 3", votes=8)

		c.save()

		
		self.assertEqual(q.question_text, "Test question")

	def test_was_published_recently_with_future_question(self):
 
		time = timezone.now() + datetime.timedelta(days=30)
		future_question = Question(pub_date=time)
		self.assertEqual(future_question.was_published_recently(), False)


```

Aquí se ubica mi archivo [test.py](aplicacion/pollaplication/polls/tests.py).

Este fichero inicial, se ha realizado a través del tutorial de django, su funcionalidad inicial básica que presenta esta pequeña aplicación se piensa mantener para nuestro proyecto, por eso lo he añadido como trabajo de mi proyecto.

###Integración continua

Para la integración contínua usaremos travis [travis](https://travis-ci.org/) ya que es fácil de usar y entender( es similar a Shippable, que también lo he usado en los ejercicios).

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



## Despliegue en un Paas
Esta práctica consistía en desplegar nuestra aplicación en un PaaS. Hemos dicidido usar Heroku, debido a que es fácil y gratuito, además del usado en los ejercicios del tema. Permite usar python y el Framework Django. Para su despliegue he necesitado modificar o crear los siguientes ficheros:

- Procfile, el cual indica a heroku que tiene que lanzar:
```
web: gunicorn pollaplication.wsgi --log-file -

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
wget -O- https://toolbelt.heroku.com/install-ubuntu.sh | sh   
heroku login
heroku create
git add .
git commit -m "upload v2
git push heroku master

```
La base de datos que voy a usar en Heroku es **PostgreSQL**. Para ello:

- Tengo *psycopg2* para poder usarla.
- También tengo *dj_database_url*, tambien necesario para PostgreSQL.
- Edité el archivo *setting.py* del proyecto y añadí lo siguiente( sacado del siguiente [enlace](http://stackoverflow.com/questions/26080303/improperlyconfigured-settings-databases-is-improperly-configured-please-supply):
```

import dj_database_url

...

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

.....

STATIC_ROOT = 'staticfiles'
STATIC_URL = '/static/'

STATICFILES_DIRS = (
    os.path.join(BASE_DIR, 'static'),
)


```

- En **wsgi.py** puse lo siguiente:
```
import os

from django.core.wsgi import get_wsgi_application
from dj_static import Cling
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "apuestas.settings")

#from whitenoise.django import DjangoWhiteNoise
application = get_wsgi_application()


application = Cling(get_wsgi_application())
#application = DjangoWhiteNoise(application)
```
- Destacar que en DATABASE_URL se indica la url que sale para la base de datos postgreSQL que Heroku nos ofrece, hay que darle a show para verlo.
- Subí cambios a github y hacer **git push heroku master**.
- Ejecutar los comando **heroku run python manage.py makemigrations**, **heroku run python manage.py migrate** y **heroku run python manage.py createsuperuser** para sincronizar la base de datos PostgreSQL.

Aplicación [desplegada](http://thawing-springs-6556.herokuapp.com/).

Se añade el proceso de integración continua con snap-ci, para ello:

- Nos registramos en  [https://snap-ci.com](https://snap-ci.com) y conectamos a nuestro repo.

![snap_pipeline](https://i.gyazo.com/256f449541778eac2c1a4b60d25181c1.png)

- Compruebo que el repositorio esta conectado con **Github** y que tiene el despliegue automático ( consultar pestaña Deploy ).

![github](https://i.gyazo.com/7e00c7ae2240e3c38e7a7e07cb89a391.png)

- Ahora, cada vez que realicemos un push a nuestro reopsitorio, se realizará un testeo previo a su posterior despliegue.


- Aquí tenemos la etiqueta de Snap-ci, de que todo ha ido correctamente.

[![Build Status](https://snap-ci.com/sn1k/submodulo-Alberto/branch/master/build_image)](https://snap-ci.com/sn1k/submodulo-Alberto/branch/master)


Con este último paso en snap-ci, se ha realizado la integración continua de mi aplicación, cada vez que haga un push se pasarán los test y se desplegará mi aplicación.

**AVANCES** se pueden ver en [avances.md](avances.md).


Nota: **ESTRUCTURA DEL PROYECTO**: nuestra aplicación sigue la estructura siguiente: 
-  Carpeta **COMBOOK**: la cual será la carpeta proyecto de la aplicación. Tendrá un archivo con sus urls.py respectivas que nos dirigirán a las diferentes apps(presentes en las carpetas apps). Se crea con el comando **django-admin.py startproject COOMBOK**.
-  Carpeta **APPS**: la cual contendrá las aplicaciones de nuestra aplicación. Se crea introduciendo en la terminal **django-admin.py startapp "nombre_app"**
- La justificación de por qué hemos seguido esta estructura es la modularización, esto nos facilitará sobretodo la manera de trabajar y hará el código más entendible y sencillo. Además django nos afrece los comandos anteriormente dichos para tal objetivo.











