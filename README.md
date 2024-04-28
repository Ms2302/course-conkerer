Course Conkerer can only be run locally and would require changes to the code base to be run on any other computer(s) than the one it was developed on. 
The  hardcoded file paths in server\index.js would have to be changed for the system it is hosted on. 
The MySQL Database Schema can be found in the MySQL Table Schema Dumps folder, these can be used to recreate the local database used for the application. Without this database and data, the program will fail to compile


If there pre-requisites are the met, the project can be run using the following commands:
1. Run "npm install" to install all dependencies
2. In one console, navigate to the client folder, from here run "npm start"
3. In another console, navigate to the server folder, from here run "node .\index.js" to start the server
4. The application should launch in browser or at http://localhost:3000/
