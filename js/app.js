
var APPLICATION_ID = 'D8A9CC24-CE48-279A-FFA9-85B03E507000',
    SECRET_KEY = 'AE635105-3DFF-11C9-FF02-394AD2FE8000',
    VERSION = 'v3'; //default application version;
Backendless.initApp(APPLICATION_ID, SECRET_KEY, VERSION);

var user = new Backendless.User();
user.email = "jmtaylorson@gmail.com";
user.password = "PW";
Backendless.UserService.register(user);