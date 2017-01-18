# Camper Leaderboard

Final project visible at [https://MFogleman.com](https://www.mfogleman.com/FCC/camper_leaderboard/)

## A [FreeCodeCamp](https://www.freecodecamp.com) project

**Objective**: Build a CodePen.io app that is functionally similar to this: https://codepen.io/FreeCodeCamp/full/eZGMjp/.

**Rule #1**: Don't look at the example project's code. Figure it out for yourself.

**Rule #2**: Fulfill the below user stories. Use whichever libraries or APIs you need. Give it your own personal style.

**Rule #3**: You must use both Sass and React to build this project.  

**User Story**: I can see a table of the Free Code Camp campers who've earned the most brownie points in the past 30 days.

**User Story**: I can see how many brownie points they've earned in the past 30 days, and how many they've earned total.

**User Story**: I can toggle between sorting the list by how many brownie points they've earned in the past 30 days and by how many brownie points they've earned total.

**Hint**: To get the top 100 campers for the last 30 days: https://fcctop100.herokuapp.com/api/fccusers/top/recent.

**Hint**: To get the top 100 campers of all time: https://fcctop100.herokuapp.com/api/fccusers/top/alltime.

## Design 

~~As opposed to a column and row layout the example uses, this will be a user-card system.  Each card will have the user's logo, and below that a footer with their username, last 30 day score, and all time score.~~

The users' images range in size from very small to very large.  Attempting to scale the images up or down to a uniform card size can cause significant image distortion.  Instead, the design and color scheme is based off of [Free Code Camp's](https://www.FreeCodeCamp.com) UI.  

The API is called twice, once for each of the 2 JSONS (Top Most Recent and Top All Time), then populates the rows.


## Tools and Libraries
* React / JSX
* whatwg-fetch

