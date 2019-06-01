## makandikantin restsapi
the database file is in the database folder. please edit the db connection auth in the .env file.

**LIST OF ROUTES**
- . / -- method **GET** | **return** : "hello word" (dummy)
- . /canteen -- method **GET** | to get all canteen data | **return** : canteen data (json)
- . /canteen -- method **POST** | to adding new canteen | **what to send** : canteen_name, canteen_img (file upload). **pls match the name** | **return** : inserted canteen data, if success (json)
- . /canteen/**$1** -- method **GET** | to find specific canteen | **$1** is the canteen id u want to find | **return** : canteen data (json)
- . /canteen/**$1** -- method **PUT** | to update/edit a specific canteen | **$1** is the canteen id u want to edit | **what to send** : canteen_name, canteen_img (file upload). **pls match the name** | **return** : a msg if succeeded or not (json)
- . /canteen/**$1** == metohd **DELETE** | to delete a specific canteen | **$1** is the canteen id u want to delete | **return** : msg (json)
