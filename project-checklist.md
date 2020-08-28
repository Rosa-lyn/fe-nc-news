# React Project Checklist

Here's a guide to approaching any React project. It's not an absolutely strict set of rules, but you can use it to help you avoid getting distracted by things that are likely to be a waste of time if done too early.

## Planning

- [x] Copy this list into your project
- [x] Outline functionality of your app
- [x] Draw main views of app
- [x] Break out components from your views
- [x] Name your components
- [x] Draw component hierarchy
- [ ] Plan routing
- [x] Label where you will require functions that change state
- [ ] Label where you will require data
- [ ] Determine from this where you will require state & hold functions

## Setup

- [x] Create your app directory (e.g. with create-react-app)
- [ ] Run your app
- [ ] Git init (unless cloned!), gitignore config, make an initial commit
- [ ] Ensure you have React DevTools running

## Static

- [ ] Make blank components (functional or class?) as per your plan
- [ ] Create reuasable components e.g. buttons, inputs
- [ ] Export and import components as per your hierarchy
- [ ] Check everything is hooked up
  - [ ] you may want to add positional styling here to match your planned layout. DO NOT do any cosmetic styling yet!
- [ ] Write static render methods with mock data

## Dynamic (order may be a bit looser here!)

- [ ] Create .api file
- [ ] Construct componentDidMount functions
- [ ] Create functions that setState
- [ ] Add expected props to component instantiation
- [ ] Add mapping / looping for creating multiple components
- [ ] Deal with component lifecycle issues, e.g. making new api calls on componentDidUpdate
- [ ] Add event handlers

## Style

- [ ] Add classNames
- [ ] Create and .css files
- [ ] Write application CSS - sitewide styling choices like fonts, colour pallettes
- [ ] Write component specific CSS
