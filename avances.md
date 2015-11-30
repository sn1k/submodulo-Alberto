Nuestros avances realizados con respecto a la práctica anterior han sido los siguientes:

- Partiendo de la aplicación sencilla que nos daba el tutorial de django:

![cuestiones](https://www.dropbox.com/s/59ub4jgzz3gj20a/img2.png?dl=1)

![opciones](https://www.dropbox.com/s/al4a94ahj3ggo4k/img3.png?dl=1)

![resultados](https://www.dropbox.com/s/j5372jejykzz880/img4.png?dl=1)

- Le hemos dado forma a nuestra aplicación, la cual se dedicará a la compra y venta de productos online, en este caso hemos empezado por unos productos en concreto, los cuales son libros. Para ello hemos creado una nueva aplicación en nuestro proyecto, denominada [autores](apps/autores). En ella se permitirá la creación de nuevos autores y ver todos los autores creados:
![ingresar_autor](https://www.dropbox.com/s/fva9yulfuo2e9cw/ingresar_autor.png?dl=1)
![mostrar_autores](https://www.dropbox.com/s/x4zqihjj34pz40w/mostrar_autores.png?dl=1)

Como se puede apreciar en la imagen, hay fotos que se ven y otras que no, no entendemos porque ya que se dirigen a las mismas rutas, investigaremos el error durante esta semana. Si lo ejecutamos de manera local ("localhost" con python manage.py runserver), este error no ocurre.

- También hemos creado una pagina de inicio, la cual permite loguearse, registrarse, y abrir y cerrar sesión.

![inicio](https://www.dropbox.com/s/scay7hv89rga6ld/inicio.png?dl=1)

- Hemos usado plantillas **bootstrap**, para saber su funcionamiento hemos consultado ![librosweb](https://librosweb.es/libro/bootstrap_3/), en la sección específica de bootstrap.

- También añadimos nuevas funcionalidades a nuestros test acorde a nuestro avance, en los cuales comprobamos la creación de uno y varios usuarios( en el caso de la app de [inicio](apps/inicio/tests.py)), y lo mismo con los [autores](apps/autores/tests.py). En el caso de la comprobación de varios elementos hacemos uso de la serialización, la cual hemos trabajado en los ejercicios del tema 3.

- Hay otros elementos destacables, como puede ser el uso de Ajax, el cual lo especificaremos con mas detalle en el siguiente avance, e intentaremos resolver el problema de las imágenes.


**Próximos objetivos**: crear la clase libros, en la cual un autor pueda tener muchos libros( relación uno a muchos), permitir añadir nuevos libros y mostrarlos, y resolver los problemas que hemos ido teniendo.




