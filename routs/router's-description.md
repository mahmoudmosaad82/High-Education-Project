## description of code 
This code defines a router object named addStudentRouter and registers HTTP methods (GET, POST, PUT, DELETE) for the corresponding paths.

addStudentRouter.get('/'): This sets up a GET request handler for the root path of the router, which will invoke the getAllstudents function defined in addNewStudent_controller module when a GET request is made to the router.

addStudentRouter.get('/:id'): This sets up a GET request handler for the path /:id, which will invoke the getStudentById function defined in addNewStudent_controller module when a GET request is made to the router with a parameter in the URL.

addStudentRouter.post('/'): This sets up a POST request handler for the root path of the router, which will invoke the addStudent function defined in addNewStudent_controller module when a POST request is made to the router.

addStudentRouter.put('/:id'): This sets up a PUT request handler for the path /:id, which will invoke the editStudent function defined in addNewStudent_controller module when a PUT request is made to the router with a parameter in the URL.

addStudentRouter.delete('/:id'): This sets up a DELETE request handler for the path /:id, which will invoke the deleteStudent function defined in addNewStudent_controller module when a DELETE request is made to the router with a parameter in the URL.

Overall, this router is used to handle HTTP requests for managing student information in a computer department.
