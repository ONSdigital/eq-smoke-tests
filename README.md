<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Thanks again! Now go create something AMAZING! :D
-->

<!-- PROJECT LOGO -->

<h3 align="center">EQ Smoke Tests</h3>

<p align="center">The repository for EQs smoke tests.</p>



<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

> This project does not functionally test Electronic Questionnaire (EQ). If you are looking for those tests, they can be found in the [EQ GitHub repo](https://github.com/ONSdigital/eq-survey-runner).

This project supplements the [Author](https://github.com/ONSdigital/eq-author-app#eq-author) product, serving to test all of its most important features from the users perspective. They run as part of our deployment pipeline against our Staging environment, [but can also be ran manually through GitHub Actions or against a local instance of the product](#usage).

### Built With

* [NodeJS](https://nodejs.org/en/)
* [Yarn](https://yarnpkg.com/)
* [Cypress](https://www.cypress.io/)

<!-- GETTING STARTED -->
## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

## Prerequisites

Author uses [Firebase](https://firebase.google.com/) to authenticate users. If using the included Docker Compose configuration to spin up the application, you must have an account with Firebase and register an application.

1. Go to [https://firebase.google.com/](https://firebase.google.com/)
2. Click "Get started".
3. Click "Add project".
4. Give your project a name; click "Continue".
5. You will be given an option to enable Google Analytics. Whether you do this or not is up to you.
6. Click 'Create project'.

You will now have a Firebase project and will be taken to its home screen. Author uses email and password to authenticate its users, so you must add this capability to the project you have just created.

1. On the left hand side there is a navigation bar. On this, click "Authentication".
2. You will be taken to a landing page. Click "Get started".
3. You will be taken to a list of sign-in methods, all of which will be disabled.
4. Click "Email/Password".
5. Click the slider next to "Enable". Leave the "Email link (passwordless sign-in)" as disabled.
6. Click "Save".

You will need your project's ID and API key in order to allow Author to use it for authentication.

1. Click on the settings icon in the top left corner of the screen; a dropdown will appear.
2. Click 'Project settings'.

You will now be able to see a list of information about your project. Make a note of your "Project ID" and "Web API key".

### Installation

1. Install [NodeJS](https://nodejs.org/en/) and [Yarn](https://yarnpkg.com/).
2. Clone the repo
   ```sh
   ➜ git clone https://github.com/ONSdigital/eq-smoke-tests.git
   ```
3. Install Yarn packages
   ```sh
   ➜ yarn
   ```

These next steps should only be followed if you are spinning up the application using the `docker-compose.yml` file included within this repository. You may alternatively spin up the applications directly from their own repositories, which is useful if you want to run the smoke tests against a new feature you are developing.

1. Export the necessary environment variables
   ```sh
   ➜ export REACT_APP_FIREBASE_PROJECT_ID=<your project ID>
   ➜ export REACT_APP_FIREBASE_API_KEY=<your API key>
   ➜ export FIREBASE_PROJECT_ID=<your project ID>
   ```
2. Spin up the EQ products.
   ```sh
   ➜ docker-compose up --build
   ```


<!-- USAGE EXAMPLES -->
## Usage

Cypress supports running tests with an interactive user interface, or through the command line in headless mode. 

The user interface is helpful if you want to see how Cypress is interacting with the product, as it shows what it is doing in real time. It also outputs logs to the console.

Headless mode runs all the tests in succession and outputs the results to the console. It does not have any user interface attached and does not output logs to the console, other than the results of each test. If a test fails, it will, however, output why. When running in our deployment pipeline, the tests use this method.

To run the tests with the interactive user interface:

   ```sh
   ➜ yarn cypress:open
   ```

To run the tests in headless mode:

   ```sh
   ➜ yarn test_headless
   ```

You may also run the tests manually through GitHub Actions. To do this, navigate to the "Actions" tab on GitHub and click "Functional Tests". You will then be able to see a prompt allowing you to run the tests.

<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

> Developers within the EQ/Author team should follow the standard practice of including the Jira ticket number within your branch name.

1. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
2. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
3. Push to the Branch (`git push origin feature/AmazingFeature`)
4. Open a Pull Request

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.