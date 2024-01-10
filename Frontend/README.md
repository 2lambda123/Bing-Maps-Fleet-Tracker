# Bing Maps Fleet Tracker - Administration Portal

The Administration portal project is an angular 4 project that exposes the functionalities of the backend to the deployment administrators. It can be used to view reports, track and provision assets, and compare dispatching routes.

## Getting the sources

## Capturing and Providing Error Logs

To capture and provide the error logs, follow these steps:
1. Navigate to the root directory of the project.
2. Run the GitHub Actions workflow locally using the following command:

    ```
    npm run build
    ```
3. If the build fails, copy the error logs from the console and paste them into the "error_logs.txt" file created earlier.
4. Commit and push the "error_logs.txt" file to the repository.

The sources of the Administration Portal of Bing Maps Fleet Tracker are included in this repository. If you already downloaded the sources skip this step, otherwise clone the repository to a folder of your choosing and move to the `Frontend/` folder.

``` Bash
git clone https://github.com/Microsoft/Bing-Maps-Fleet-Tracker/
cd Bing-Maps-Fleet-Tracker/Frontend
```

## Prerequisites

* [Git](https://git-scm.com/)
* [Node.JS](https://nodejs.org/en/)
* [Yarn](https://yarnpkg.com/lang/en/docs/install/)
* [Angular CLI](https://github.com/angular/angular-cli#installation)

Once you have these tools set up, from the `Frontend/` folder run the following command to install the remaining dependencies:

``` Bash
npm install -P -D
```

## Build and Run

To build the portal use the following command:

1. Navigate to the root directory of the project.
2. Run the GitHub Actions workflow locally using the following command:

        ```
        npm run build
        ```
3. If the build fails, copy the error logs from the console and paste them into the "error_logs.txt" file created earlier.
4. Commit and push the "error_logs.txt" file to the repository.

``` Bash
ng build
```

To run the portal:

1. Navigate to "Frontend\src\environments\environment.ts"
2. Fill the "backendUrl" with the url of any running backend. By default this points to localhost.
3. Fill the "frontendUrl" with the url of the frontend server. By default this points to localhost.
4. Use the following command to run the frontend.

    ``` Bash
    ng serve
    ```