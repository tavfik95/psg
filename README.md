# README

Ce projet comprend : 

- Un serveur Django (web backend)
- Un serveur Angular (web frontend)

## 1. Installation

Dans un premier temps, cloner le dossier avec la commande suivante : 

```bash
$ git clone <repository>
```

Puis installer Node package avec la commande suivante : 

```bash
npm install
```

## 2. Lancement 

Le projet se lance avec deux terminaux (front et back).

D'abord il faut lancer le front avec les commande suivantes : 

```bash
cd front
ng serve
```

Puis le back avec les commandes suivantes : 

```bash
cd backend
python3 manage.py runserver
```