# React Project Checklist

Here's a guide to approaching any React project. It's not an absolutely strict set of rules, but you can use it to help you avoid getting distracted by things that are likely to be a waste of time if done too early.

## Planning

- [x] Copy this list into your project
- [x] Outline functionality of your app
- [x] Draw main views of app
- [x] Break out components from your views
- [x] Name your components
- [x] Draw component hierarchy
- [x] Plan routing
- [x] Label where you will require functions that change state
- [x] Label where you will require data
- [x] Determine from this where you will require state & hold functions

## Setup

- [x] Create your app directory (e.g. with create-react-app)
- [x] Run your app
- [x] Git init (unless cloned!), gitignore config, make an initial commit
- [x] Ensure you have React DevTools running

## Static

- [x] Make blank components (functional or class?) as per your plan
- [x] Create reuasable components e.g. buttons, inputs
- [x] Export and import components as per your hierarchy
- [x] Check everything is hooked up
  - [x] you may want to add positional styling here to match your planned layout. DO NOT do any cosmetic styling yet!
- [x] Write static render methods with mock data

## Dynamic (order may be a bit looser here!)

- [x] Create .api file
- [x] Construct componentDidMount functions
- [x] Create functions that setState
- [x] Add expected props to component instantiation
- [x] Add mapping / looping for creating multiple components
- [x] Deal with component lifecycle issues, e.g. making new api calls on componentDidUpdate
- [x] Add event handlers

## Style

- [ ] Add classNames
- [x] Create any .css files
- [ ] Write application CSS - sitewide styling choices like fonts, colour pallettes
- [x] Write component specific CSS

## User Stories

### As a user, I should be able to...

- [x] view a list of all articles
- [x] view a page for each topic with a list of related articles.
- [x] view an individual article.
- [x] view an individual article's comments.
- [x] sort articles by:
  - [x] date created
  - [x] comment_count
  - [x] votes
- [x] post a new comment to an existing article (as a default logged in user. e.g. 'jessjelly').
- [x] delete my own comments (as a default logged in user. e.g. 'jessjelly').
- [x] vote on an article and immediately see the change.
- [x] vote on a comment and immediately see the change.

### Error-handling: As a user, I should...

- [x] see a 404 error if I go on a non-existent path/a path for a non-existent article/topic.
- [x] see a 400 error if I go on a invalid article ID.
- [x] not be allowed to post a comment if I have not filled in all of the form boxes.

### As a hiring partner, I should be able to...

- [x] use the site on my mobile without sacrificing style or functionality (as I may not have my laptop nearby).
- [x] follow the readme instructions to easily run the project locally.
- [x] find a link to the hosted version of the project in the readme. (use a placeholder if not yet hosted!)
- [x] find a link to the back-end repository of the project in the readme.
- [x] find a link to the hosted version of the back-end project in the readme.
