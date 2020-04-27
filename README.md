# DjangoReactAdmin
Admin panel with Backend in Django using DRF and forntend with React (using hooks and Redux)


This project is a small arhchetype implementing the following technologies and features:

> It consists on two main applications, one set for the backend with Django a DRF. 
> The other one being the front-end client built with React and Redux

## Backend
The backend is pretty simple, it's a normal Django project consisting on one main app (endpoints) wich exposes several models with their related serializers and views.
It also implements the Django built-in User model for authentication and Rest-Auth package with token authentication. Every class uses the "Is authenticated" permission class.

## Frontend
The frontend application has been built with modern React and ES6 specifications in mind, working with latest React Hooks even for Redux. Every component is an arrow function component
and many of them utilize different hooks to provide functionalities in different ways, most used ones being `useDispatch` to dispatch actions with Redux and `useSelector` to read the state from Redux and use it in a component variable; and 'useEffect' and 'useState'.
It also utilizes React-Router-Dom with custom PrivateRoutes, which works together with Django permissions to provide a secure and private app.


# Requirements
You will need:
- Node installed (I recommend v10, v12 or anything newer and stable). I strongly recommend NVM.
- NPM (whichever version comes with above Node versions listed). I strongly recommend NVM.
- Python3 (I don't really know the minimum version that would work with this, but I recommend 3.7)
- In case you want to try the dockerized version, Docker (latest Community Edition) and docker-compose.

# Local testing implementation

### Clone repo
```
git clone https://github.com/geropellicer/DjangoReact.git
```

### Create virtual enviroment, activate and install Python dependencies
Use your favourite venv tool like pipenv or simply the built in venv:
```
   python3 -m venv venv
   source ./venv/bin/activate
   pip install -r ./backend/requirements.txt
   ```
   
### Install React dependencies with NPM
```
   cd frontend
   npm install
   ```
   

### Migrate database and start both developtment servers 
In frontend folder:
```
   npm start
```

In backend/admin folder (with venv activated):
```
   python3 manage.py migrate
   python3 manage.py createsuperuser
   python3 manage.py runserver
```

### Ready to go!

You can know check that the frontend app is working in the 3000 port at localhost and the backend in port 8000:
- localhost:3000
- localhost:8000 (localhost:8000/api for the DRF browsable API and localhost:8000/admin for Django admin)

This is an app I have that mainly served as a dashboard for showing tables of data. So if you go ahead in the admin and add new items for any of the models registered, you sould see them in the frontend. 


# Production

1) npm run build

2) copy build folder to nginx folder

3) rename from build to frontend

4) inside production folder

5) docker-compose -f docker-compose-prod.yml up -d --build

6) Enter to the production_web container with bash (docker container exec -it <id of the container> bash) and create a superuser.

7) Visit localhost and you should be able to login with the user you just created