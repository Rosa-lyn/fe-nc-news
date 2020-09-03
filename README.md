# The News Den

A social news aggregation site, similar to [Reddit](https://www.reddit.com/), which I created with [React](https://reactjs.org/). You can see the live site [here](https://thenewsden.netlify.app/).

Users are presented with a list of all articles on arrival to the site, which can be filtered by topic, and sorted by date, the number of 'upvotes', or the number of comments. Visitors are automatically logged-in as user 'jessjelly', but they can change user to have different permissions.

Users can read a full article and its comments, and vote on it. They can post new comments and delete their own comments as a logged-in user.

I used my own server as a back-end to add the data to the site. You can see the code for the back-end [here](https://github.com/Rosa-lyn/be-nc-news) and the live site [here](https://thenewsden.herokuapp.com/api).

## Getting Started

To get a copy of this project onto your own machine, fork the repo, then clone it into your local directory:

```
git clone <URL-of-your-forked-repo>
```

### Installing

To install all the necessary dependencies, run `npm i`. This will install:

```
Axios v0.20.0
Moment v2.27.0
Reach Router v1.3.4
React v16.13.1
React DOM v16.13.1
React Scripts v3.4.3
Styled Components v5.1.1
```

and the following testing dependencies:

```
Jest DOM Testing Library v4.2.4
React Testing Library v9.3.2
User Event Testing Library v7.1.2
```

### Previewing the App

In the project directory, run `yarn start` or `npm start` to run the app in development mode. To see the app in the browser, open http://localhost:3000.

## Built with

- JavaScript
- [React](https://reactjs.org/) - JavaScript UI library
- [Axios](https://github.com/axios/axios) - HTTP client
- [Moment](https://momentjs.com/) - Date formatting
- [Styled Components](https://styled-components.com/) - Styling
- [Netlify](https://www.netlify.com/) - Hosting

## Author

Rosalyn Land | [Portfolio](https://rosa-lyn.github.io/) | [GitHub](https://github.com/Rosa-lyn) | [LinkedIn](https://linkedin.com/in/rosalynland)

## Acknowledgements

A big thank you to [Northcoders](https://github.com/northcoders) for providing the data for this project and to the Northcoders tutors for all their help and support.
