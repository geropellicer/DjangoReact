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


# Local testing implementation

### Clone repo
```git clone https://github.com/geropellicer/DjangoReactAdmin.git
```

### Create virtual enviroment and install Python dependencies
Use your favourite venv tool like pipenv or simply the built in venv:
```
   python -m venv venvname
   source ./venv/bin/activate
   pip install -r requirements.txt
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
   python manage.py migrate
   python manage.py createsuperuser
   python manage.py runserver
```
