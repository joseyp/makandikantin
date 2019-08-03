## makandikantin restapi
#### Notes
* the database file is in the **database folder**, edit the db connection auth in the .**env** file. please redownload the sql file everytime i posted an update to this repo
* all datas and responses are in **json**, please make sure you are sending data to the server as json, u will get json as a return as well
* the colon `:` in the routes is a parameter, it's not a static url

#### List of routes
**Canteen routes**
* `/canteen` method **GET**  
to get all canteen data  
**return** : canteen data
* `/canteen/:canteen_id` method **GET**  
to get a specific canteen data. pass the **canteen_id** as a parameter  
**return** : canteen data if found, a msg if not
* `/canteen` method **POST**  
to add a new canteen data  
**what to send** : canteen_name, canteen_img (file upload). **pls match the name**  
**return** : instered canteen data
* `canteen/:canteen_id` method **PUT**  
to update / edit a specific canteen. pass the **canteen_id** as a parameter  
**what to send** : canteen_name, canteen_img (file upload). **pls match the name**  
**return** : the id of updated canteen if success, a msg if not
* `canteen/:canteen_id` method **DELETE**  
to delete a specific canteen. pass the **canteen_id** as a parameter  
**return** : a msg

**Seller routes**
* `/seller` method **GET**  
to get all seller data  
**return** : seller data
* `/seller/:seller_id` method **GET**  
to get a specific seller data. pass the **seller_id** as a parameter  
**return** : seller data if found, a msg if not
* `/seller` method **POST**  
to add a new seller data  
**what to send** : seller_name, seller_password, seller_img (file upload), canteen_id. **pls match the name**  
**return** : instered seller data
* `seller/:seller_id` method **PUT**  
to update / edit a specific seller. pass the **seller_id** as a parameter  
**what to send** : seller_name, seller_username, seller_password, seller_img (file upload), canteen_id. **pls match the name**  
**return** : the id of updated seller if success, a msg if not
* `seller/:seller_id` method **DELETE**  
to delete a specific seller. pass the **seller_id** as a parameter  
**return** : a msg

**Customer routes**
* `/customer` method **GET**  
to get all customer data  
**return** : customer data
* `/customer/:customer_id` method **GET**  
to get a specific customer data. pass the **customer_id** as a parameter  
**return** : customer data if found, a msg if not
* `/customer` method **POST**  
to add a new customer data  
**what to send** : customer_name, customer_email, customer_password. **pls match the name**  
**return** : instered customer data
* `customer/:customer_id` method **PUT**  
to update / edit a specific customer. pass the **customer_id** as a parameter  
**what to send** : customer_name, customer_email, customer_password. **pls match the name**  
**return** : the id of updated customer if success, a msg if not
* `customer/:customer_id` method **DELETE**  
to delete a specific customer. pass the **customer_id** as a parameter  
**return** : a msg

**Menu routes**
* `/menu` method **GET**  
to get all menu data  
**return** : menu data
* `/menu/:menu_id` method **GET**  
to get a specific menu data. pass the **menu_id** as a parameter  
**return** : menu data if found, a msg if not
* `/menu` method **POST**  
to add a new menu data  
**what to send** : menu_name, menu_price, menu_img (file upload), canteen_id. **pls match the name**  
**return** : instered menu data
* `menu/:menu_id` method **PUT**  
to update / edit a specific menu. pass the **menu_id** as a parameter  
**what to send** : menu_name, menu_price, menu_img (file upload), canteen_id. **pls match the name**  
**return** : the id of updated menu if success, a msg if not
* `menu/:menu_id` method **DELETE**  
to delete a specific menu. pass the **menu_id** as a parameter  
**return** : a msg
