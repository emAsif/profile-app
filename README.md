# About The Project

Profile-app uses the latest angular version and displays the list of profiles using an open source API. Project has following features:

- displaying list of profiles on landing page. Also profile remains **same** after refreshing page.
- using 'Add profile' button new **random** profiles can be added increasing count with each click. To avoid infinite calls limit is set to 30 clicks and also displaying a warning message after 25 clicks.
- 'renew profile' button can be used to load a **random** list of 20 new profiles.
- single record can be deleted using the delete icon shown under actions column.
- view icon under actions column toggle the details of each profile. Record can also be deleted using buttons displayed inside record details.
- 'Delete all' clears the list.
- Responsive design for mobile and desktop.

Following technical featuers are also covered:

- unit test for component and service
- rxjs
- transition effects

### Note

I assumed some of the requirements to make project more user friendly. I implemented all the required features however, because of large list of records I wanted to implement pagination or virtual scroll but due to time constraint couldn't complete that.

### Built With

- Angular
- Bootstrap
- ng bootstrap

<!-- GETTING STARTED -->

## Getting Started

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.0.3.

### Prerequisites

To run project successfully make sure to install latest node version **20.x.x** or version **^18.13**

- npm
  ```
  npm install npm@latest -g
  ```

### Installation

1. Clone the repo
   ```
   git clone https://github.com/github_username/repo_name.git
   ```
2. Install NPM packages
   ```
   npm install
   ```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Further help

If there are any question, please reach out to me **asifamin184@gmail.com**
