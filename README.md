<img width="300" height="200" src="https://raw.githubusercontent.com/echin522/amoGuS/main/app/assets/images/amogus_logo.png" >

# [AmoBnB](https://amobnb.herokuapp.com/#/)

AmoBnB is a full stack clone of [AirBnB](https://www.airbnb.com/), an online marketplace for vacation rental homes and lodges. It allows users to create accounts and share (fake) listings of their homes as well as book reservations and write reviews for other homes. 

# Technologies

AmoBnB is built with a React/Redux frontend and a Ruby on Rails backend. All frontend styling was done with vanilla CSS and HTMLM. PostgreSQL was used in conjunction with AWS S3 (and the Active Storage Ruby Gem) for data and image storage respectively. The Google Maps API was used to give a visual of where each listing is geographically. The jQuery library was used to improve website responsiveness and simplify DOM traversal and create a much more dynamic UI/UX.

# Key Features

## User Authentication

At the top right of the page, there is a hamburger icon that reveals a drop-down menu when clicked. You will be given the option to either log in or sign up, both of which will reveal a modal to enter your information.

![Dropdown](https://i.imgur.com/sTKEFXo.png[/img])

![Modal](https://i.imgur.com/fPRfQjZ.png[/img])

## Creating and Editing Listings

Once signed in, the drop-down menu will reveal the option to create a new listing. Filling out the form as seen below will redirect you to the listing show page. At the bottom of the show page, you will also have the option to edit or delete this listing (as long as you are the owner!)

![Create Listing](https://i.imgur.com/ASJrIaJ.png[/img])

![Listing](https://i.imgur.com/MBBUBVD.png[/img])

## Writing and Editing Reviews

Each listing show page will have a section for users to write and edit reviews. Users will have the option to rate the cleanliness of the location, its value, the accuracy of the listing, as well as many more.

![Review](https://i.imgur.com/KBm7CdN.png[/img])

![Edit Review](https://i.imgur.com/n5G6e5Y.png[/img])

## Booking Reservations

Each listing show page will also have a section for booking a reservation. Reservations can be made as long as there are no conflicting reservation dates.

![Reservations](https://i.imgur.com/Zp0K9Ub.png[/img])

## Managing Reservations

The drop-down menu will also give you the option to view reservations that you've made. This page also gives the option to edit or delete any reservations

![Manage Reservations](https://i.imgur.com/drFqd5o.png[/img])

## Maps

At the bottom of each listing show page as well as the home page, a map will be present for the users' convenience. There will be a pin for the location of each listing.

![Imgur](https://i.imgur.com/dLu1kFX.png[/img])

## Search Functionality

![Search](https://i.imgur.com/TcoErDV.png[/img])
