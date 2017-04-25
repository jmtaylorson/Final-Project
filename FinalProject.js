var APPLICATION_ID = '7C2BAE9A-51F8-96AA-FF5F-E3E7501C4B00',
    SECRET_KEY = '2196C0EF-A742-B1C0-FF61-4721833B9C00',
    VERSION = 'v1'; //default application version;
Backendless.initApp(APPLICATION_ID, SECRET_KEY, VERSION);


var user = new Backendless.User();
user.email = "michael@backendless.com";
user.password = "my_super_password";
Backendless.UserService.register(user);
