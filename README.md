### Commands to run in Docker

`yarn install` - installing dependencies

`docker pull cypress/included:13.6.3` - downloading the required docker image

`docker run -it -v $PWD:/e2e -w /e2e --name cypress-tests --rm cypress/included:13.6.3` - run tests in docker without a visual GUI

After the command data, tests will be executed and the result will be displayed in the console

### In summary, commands to run locally, without Docker

`yarn install` - installing dependencies

`yarn test` - run tests without an external GUI, the result will be displayed in the console

`yarn open` - run tests with a graphical interface (the browser will open and test actions will be performed)

or

`yarn test` - run tests without a GUI (the tests will be executed and the result will be output to the console)

### Variables

Variables are in .env

URL_WIDGET - URL of the widget for testing, the rest of the variables are data to be entered during testing

###Node version

The project is made on nodejs v18.18.2, yarn v1.22.19, any current version will do

### About the project

Project - autotests for the project front, variables in .env, config in cypress.config.js, tests themselves in cypress/e2e. Folder widget - tests for b2b widget (https://widget.mgc-loyalty.ru/demo/landing).

The reuse folder stores reused functions so as not to duplicate code

Prettier - formatting code according to the rules

### Manual

Running Cypress autotests in Docker containers using various Docker images - https://habr.com/ru/articles/734820/

### Stack

JavaScript, Cypress

### Autotests in Docker, information

For Cypress testing, there are already configured and ready-made dockers with the necessary environment and dependencies

1. First you need to install the dependencies using the `yarn install` command

2. Then you need to download the image from the Docker Hub image repository
    Run the command: `docker pull cypress/included:13.6.3`

3. Optional. The presence of the specified image after it has finished downloading can be checked using the command: `docker images`

4. Optional: To find out what this image includes, just run the following command: `docker run -it --entrypoint=cypress cypress/included:13.6.3 info`

5. To create a container from the downloaded image and run the available Cypress autotests in it, run the following command: `docker run -it -v $PWD:/e2e -w /e2e cypress/included:13.6.3`

docker run means creating and running a container based on the specified image

`-it` - interactive terminal

`-v $PWD:/e2e` - replacing the contents of the directory inside the container with the contents of the current project directory, where $PWD is the absolute path to the current directory (project root folder), /e2e is the path to the directory inside the container

`-w /e2e` - defining the working directory inside the container, where /e2e is the path to the specified directory

`cypress/included:13.6.3` - an indication of the image on the basis of which the container will be created.

When executing this command, a Docker container will be created in which Cypress will run tests on the built-in Electron browser. It is important to note that the cypress/included image includes the ENTRYPOINT ["cypress" "run"] statement, which ensures that Cypress is automatically launched inside the container created from this image.

If desired, it is possible to supplement the command with the --name flag to specify a specific name for the container being created, as well as the --rm flag to automatically delete the container after it is stopped: `docker run -it -v $PWD:/e2e -w /e2e --name cypress -tests --rm cypress/included:13.6.3`

### Running in other browsers, not in the built-in Electron:

At the same time, to control the behavior of Cypress, you can specify additional parameters, similar to how we run Cypress in headless mode without using Docker. So, you can specify a specific browser or spec file to launch, configure recording parameters, parallel launch of tests, etc. For example, to run tests in any of the browsers preinstalled in the image (Chrome, Edge, Firefox), just add the CLI flag -b to the command indicating the name of the browser: `docker run -it -v $PWD:/e2e -w /e2e cypress/included :13.6.3 -b chrome`

### Run tests multiple times in the same container

It is important to note that each time you run Cypress autotests based on the docker run... command used, a new container will be created and launched. To avoid this and be able to run tests multiple times inside the same container, we need to connect to a process inside the container to control the running of tests from the container. To do this, just add the command with the --entrypoint flag with the /bin/bash parameter: `docker run -it -v $PWD:/e2e -w /e2e --entrypoint=/bin/bash cypress/included:13.6.3`

As a result, we have the opportunity to control the re-run of tests from the container using the cypress run command or, for example, to view files and folders inside the container using the standard ls -la command.