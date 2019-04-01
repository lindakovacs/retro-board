# Retro-Board
**[AlbanyCanCode Course](https://albanycancode.org/)**
- Projects: [1 Retrospective Board](https://docs.google.com/document/d/1ePLNNU1BKLD9WByelb7WyfdGpntwhpDIKn0KkhGxboI/edit?usp=sharing)
- Instructors: [Matina Patsos](https://github.com/matinaspatsos) and [Jamal Taylor](https://github.com/Louis345)
- [AlbanyCanCode's JavaScript Frameworks Class Spring 2019](https://github.com/AlbanyCanCodeCourses/JavaScript2019)
- Inspired by the [FunRetro retrospective board](https://funretro.io)
- [Demo Retro Board on codesandbox.io](https://codesandbox.io/s/q706r0o5p6)

## Introduction

**Retro-Board** is a *ReactJS* application that sets up a retrospective dashboard tool that can de used for sprint sessions keep track and discuss what went well and what didn’t. The tool allows teams to easily identify obstacles and discuss ideas for improvements in sprint projects.

There are three caterories:

    - Worked Well: identify items that worked well
    - To Improve: identify items that need to be improved
    - Action Items: identify items that need to addressed and follwed up on in future sprints

Each category contains various cards of items that can be inserted, deleted and moved from category to another category.

![Retro Board](/src/boardExample.png)

## Installation

Clone or Download the `github` repo into your local computer directory. Make sure that `yarn` is installed.

### Install Packages

Change directory into the `retro-board` directory and install packages:

    $>cd retro-board
    $>yarn install

### Starting Application

After the installation of the packages, start the ReactJS Server to run on your computer at `http://localhost:3000`

    $>yarn start

## Getting Started

Each category allows you to add a new card, delete existing cards, and move cards to the right or left category colum.

### Add New Card

Click on `+` above the category to add a new card and enter text for the item. Click on `ADD` button to save the item content. The new card textbox is toggled on via the `+` button or you can remove it with the `delete` button.

The textbox validates that it is not empty with an `alert`.

### Delete Card

Click on `x` at the bottom of each card to delete the card.

### Move Card

Click on `<` to move the current card to the category to the left or `>` to move the current card to the category to the right. The cards will be moved around when at the front or at the end of the columns.

For example, if the card is in the last column or `Action Items` category, moving to the right will push the card to the first column or `Went Well` category. Also, if the card is in the first column or `Went Well` category, moving to the left will push the card to the last column or `Action Items` category.

### Toggle between horizontal and vertical board display
Description - coming soon

### Likes and Dislikes
Description - coming soon

# Retro Board App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

## Author

**[Linda Kovacs](https://github.com/lindakovacs)**

## Acknowledgments

* A big Thank You to [Matina Patsos](https://github.com/matinaspatsos) and [Jamal Taylor](https://github.com/Louis345) for their expert instruction guidance in AlbanyCanCode Bootcamp!