#Primera app en amazon
##1. Descargar y conectar con la isntancia.
```
$ fab -H ubuntu@ec2-52-34-137-211.us-west-2.compute.amazonaws.com getDocker
$ fab -H ubuntu@ec2-52-34-137-211.us-west-2.compute.amazonaws.com runDocker

```
![app](https://i.gyazo.com/bb803905f237661c0b62cb695d57bb83.png)

##2. **ifconfig** para saber la ip de nuestra interface de red.

![ifcoinfig](https://i.gyazo.com/f6c1f311441b0acd3dd4f6747391d817.jpg)

##3. Conectamos al docker de la instancia

```
 $ ssh -i "alberto.pem" ubuntu@ec2-52-88-219-249.us-west-2.compute.amazonaws.com
```

![connect](https://i.gyazo.com/d2d8c7482970871d7ce6eff4842645b6.png)

##4. Debemos introducir el siguiente comando para introducir una ruta nueva en la tabla NAT para redirigir las peticiones.
```
$ sudo iptables -t nat -A PREROUTING -i eth0 -p tcp --dport 80 -j DNAT --to-destination 172.17.0.1:80
```
![NAT](https://i.gyazo.com/53f0e03433e983f2614d8a7a900e827f.png)

##5. Ya podemos entrar a nuestra aplicaciópn desde la dirección de amazon!

[Enlace](http://ec2-52-88-219-249.us-west-2.compute.amazonaws.com/)
![amazonapp](https://i.gyazo.com/11062a12a44f85330767da2ffbdf8a48.png)
