# Concentration Game

## Running the application

### Development Mode

Clone or download the project to your local drive <br />

On your command line <br />

Run the command `npm install` to install necessary node_modules<br />

Run the command `npm run dev`. This will run the app in the development mode<br />

Open [http://localhost:5173](http://localhost:5173/) to view the game in the browser.<br />

Run the command `npm test` to run the tests also run the command `npm test --coverage` and to have the coverage about the tests

### Setup

To ensure the proper functioning of the application, you must follow these steps:

```bash
// .env file
VITE_FE_URL_ENDPOINT=https://URL-backend
```

To create the .env file, you should follow these steps:

1. Create a file named ".env" in the root directory of your project.
2. Copy the example .env file found in this README file.
3. Replace "https://URL-backend" with the URL of your backend service or as shown in the .env.example file.
4. Save the file.
