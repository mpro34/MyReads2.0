# MyReads Project

## Introduction
MyReads is a React Application for book tracking and searching. It utilizes a third party API to obtain book information and allows a user to search for interesting books and add those to certain shelves on their home page. The shelves include the following: Currently Reading, Read, Want to Read. These are used to help organize the books chosen by the user.

The application consists of two main pages: / and /search. The root (/) page is composed of the users' selected books arranged by Shelf, explained above. The search (/search) page consists of a search bar which can be used to search for a book title. Once books are searched they can be added to the users' Main page by selected an appropriate book shelf on the chosen book. This will change the description of the book on the search page (ie. change shelf from 'None' to 'Want to Read') and display that book in one of the users' shelves. To enter the search page from the Root page, clicking on the Green Plus symbol at the bottom right of the Root page will accomplish this. To move back from the Search page to the Root page, simply click the Back Arrow in the Search Bar to perform this action.

Want to make changes? Please see the Contributing section for information.

## Installation
```bash
git clone https://github.com/mpro34/MyReads2.0.git
cd MyReads2.0
npm install
```

## Usage
```bash
npm start
```

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Contributing

For details, check out [CONTRIBUTING.md](CONTRIBUTING.md).

## License

MyReads is licensed under the MIT License. Please see [LICENSE.txt](LICENSE.txt) for further details.
