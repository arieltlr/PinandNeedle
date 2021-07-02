<p align="center">
  <img src="https://github.com/arieltlr/PinandNeedle/blob/main/app/assets/images/logo_200x200.png" />
</p>

## Overview

<p align="center">
  <img src="https://github.com/arieltlr/PinandNeedle/blob/main/app/assets/images/pinandneedle.gif" />
</p>

PinandNeedle, a fullstack Pinterest clone, is a social media platform that allows users to search, save, and share URLs, represented by images. Saved URL/images are referred to as pins. Users can organize their pins into groups called boards, follow other users, and discover new content on the home feed.

[Click here to get new ideas!](https://pinandneedle.herokuapp.com/#/)

Pin and Needle was built using Ruby on Rails with a Postgres database on the backend and Javascript / React on the frontend. 

## Technologies
Backend
* Ruby on Rails
* Postgres
Frontend
* React
* Redux
API's
* AWS
Libraries
* React Masonry Css

## Key Features
* User authentication
* Full CRUD cycle for boards 
* Full CRUD cycle for pins
* * Upload image as part of pin creation. Image stored remotely using AWS
* User can save another users pin, and two levels of edit ability exist. Author can edit all details of the pin and delete. If user saves a pin from another user, only associated board can be modified. 
* Save pins directly from the feed
* Automatic board creation when user attempts to save a pin without an existing board
* Search feature for all pins
* Users can follow and unfollow other users



