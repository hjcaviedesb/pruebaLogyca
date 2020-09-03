# Descripción

Solución a Ejercicios prueba logyca. Las soluciones se pueden dividir en dos partes,La primera parte consiste en una carpeta que contiene los ejercicios 1 y 2 escritos en lenguaje python. La segunda parte de las soluciones contiene el resto del desarrollo de los ejercicios, un API REST escrito con el framework DJANGO, el cual expone cuatro endpoints dando solución a los puntos 3 y 4. Por último el punto 5 se realizó en Angular 7, el cuál consume los endpoints del API REST escrito en DJANGO.


## Instalación

Instalando DJANGO

```bash
sudo apt-get install python3
sudo apt-get install -y python3-pip
pip3 install virtualenv
pip install django
```

Instalando Angular

```bash
 apt-get install nodejs
npm install -g @angular/cli
```

## Construido

* [Django](https://www.djangoproject.com/) - El framework para el API 
* [Angular](https://angular.io/) - El framework para aplicación web

## Consideraciones

Enpoints API

* http://localhost:8000/api/primes/n
* http://localhost:8000/api/pairs/n
* http://localhost:8000/api/primesDB/n
* http://localhost:8000/api/pairsDB/n

Dirección Aplicación Web

* http://localhost:4200
