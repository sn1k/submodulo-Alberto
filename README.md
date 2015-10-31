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

[![Build Status](https://travis-ci.org/acasadoquijada/Aplicacion-Encuestas.svg?branch=master)](https://travis-ci.org/acasadoquijada/Aplicacion-Encuestas)

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


**[Licencia](https://github.com/acasadoquijada/pollaplication/blob/master/README.md)**
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

![travis](https://www.dropbox.com/s/uoyn00dq4dw8vph/img23.png?dl=1)

