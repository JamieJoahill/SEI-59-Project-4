
# Project 4 - Rice (Dice clone)

![home page](https://res.cloudinary.com/dmpvulj3q/image/upload/v1641911141/ReadMe%20images/Project%204%20-%20Rice%20/homepage_tm59bb.png)



## Overview

This was my final project with General Assembly’s Software Engineering Immersive. I chose to take on the project solo and the timeline was 7 days. The purpose of the application was for users to view events which were taking place and to create their own event which people could attend. It is a full stack application built with a React front end and using Django and Python on the backend.

## Brief

* Build a full-stack application.
* Must have full CRUD(Create, Read, Update, Delete) functionality.
* Must have a Django back-end and React front-end.
* Have a visually impressive design.

## Deployment

[Deployed project link](https://sei-59-project-4-rice.herokuapp.com/)
## Time frame

7 Days
## Tech Stack


| Front-end | Back-end | Other tools | Version Control | APIs used|
|:----------| :---- |:-----------| :-------------| :---|
| JavaScript (ES6) | Python | Google dev tools | Git| Mapbox |
| React | Django | Insomnia | GitHub | Cloudinary |
| React Router | Django rest-framework | Tableplus |
| Axios | Postgresql | Figma |
| CSS | Bcrypt | Yarn | 
| Semantic UI | JSON web token | Slack 
| Font awesome| ||Zoom|
| Babel |  |
| Webpack|

## Approach taken

I knew from the beginning this was going to be a challenging task. So I made sure I had spent a long time planning to make sure I could hit my target MVP. 

I decided to build a site which would be very similar to Dice.fm as I admired the styling of their application. 

The application should allow the user to:
* See any events that are taking place
* See any venues which are hosting events 
* Create an event 
* Create a Venue 
* Edit an Event
* Edit a Venue
* Delete an event 

One of the main reasons I chose Dice was because I enjoyed how they did not force a user to login to view their content. 

## Planning

Even though I was working alone. I used a Trello board to track my progress to see where I was at in the project and what else needed to be done. I wanted to make it clear what my MVP was for the project so I could hit it by the end of the project. So I included it within my Trello board as a daily reminder when I came back to it. 

![trello](https://res.cloudinary.com/dmpvulj3q/image/upload/v1641911143/ReadMe%20images/Project%204%20-%20Rice%20/Trello_j1vtya.png)

**DB Models**

I used a database modelling tool to plan the different types of relationships within my database. This helped me gain a much deeper understanding of how the database would connect with each table. The time I spent creating these view models meant when it came to writing them in Django, it was more straightforward and clear.

![db model](https://res.cloudinary.com/dmpvulj3q/image/upload/v1641911139/ReadMe%20images/Project%204%20-%20Rice%20/dbmodels_dyjgup.png)
## Back-end

I first focused on getting the back-end setup as without this I wouldn't be able to display any data on screen. I looked at the Dice events and constructed my models in a similar fashion.

![event model](https://res.cloudinary.com/dmpvulj3q/image/upload/v1641911139/ReadMe%20images/Project%204%20-%20Rice%20/event_model_w4qvto.png)

I didn't want to over complicate my data structure for this event model, So I tried to keep it as simple as possible. I also had a category, venue and owner attached to this model and they were all foreign keys. The owner model uses the built in Django user model. 

They are as follows: 

![cat model](https://res.cloudinary.com/dmpvulj3q/image/upload/v1641911139/ReadMe%20images/Project%204%20-%20Rice%20/cat_model_tjhzx6.png)

![ven model](https://res.cloudinary.com/dmpvulj3q/image/upload/v1641911143/ReadMe%20images/Project%204%20-%20Rice%20/ven_model_gtvv51.png)

Once I had sorted out my models and the relationships between them. I then worked on Creating the serializers and a populated serializer which would populate all my relevant data on the event. 

![pop serializer](https://res.cloudinary.com/dmpvulj3q/image/upload/v1641911140/ReadMe%20images/Project%204%20-%20Rice%20/pop_serializer_rdkva5.png)

After being happy with my progress on all the models. I then wanted to work on the views of my application to start to see some data.

I created two event views and they were EventListView and EventDetailView.

The EventListView was responsible for the following: 
* Getting all events.
* Create/Post an event.

The EventDetailView was responsible for the following:
* Get a single event by ID.
* Update a single event by ID.
* Delete a single event by ID.

Once I had these views set up. I created some seed data using the built in Django admin portal, but to do that I would have to register my models in my admin.py file. Here is an example registering the event model.

![admin portal event](https://res.cloudinary.com/dmpvulj3q/image/upload/v1641911139/ReadMe%20images/Project%204%20-%20Rice%20/admin_portal_event_bnxlj0.png)

I then started to input some seed data and could begin to test my views using insomnia. Once I was happy with the data I was getting back. I moved onto building out the front-end components. 


## Front-end


I started by creating my components folder and adding the relevant components that I would need. I referred back to my wireframes to see what I needed to create. I then created the following components: 
* NavBar.js
* Footer.js
* Home.js
* Login.js
* Register.js
* NotFound.js
* Search.js
* ShowEvent.js
* ShowEvents.js
* ShowVenue.js
* UpdateEvent.js
* ScrollToTop.js
* ImageUploadField.js
* ImageVenueUploadField.js
* AddEvent.js

I kept the initial styling very simple and just did the barebones layout first as I wanted to reach my MVP and get all the functionality working before starting on the final design of the project. 

**Wireframes**

These are some wireframes I put together using Figma. The final product did vary slightly as I built out the application. As detailed in ‘styling’ below.

![wireframes](https://res.cloudinary.com/dmpvulj3q/image/upload/v1641911142/ReadMe%20images/Project%204%20-%20Rice%20/wireframes_edx9rb.png)

One of the biggest tasks I faced during this build was within the AddEvent.js component. I didn't want to make the user have to add a venue and add a category separately before they added the event as this would have been a terrible user experience. So I decided to create a form that would work in a similar fashion to the Django admin portal. 

To get this to work I had to create three separate forms. If the user wanted to choose a category that was already available they could select it from the drop down but if they wanted to add their own category they would need to add it using the modal I have created. This modal contained a form which would then send a post request to the back end allowing them to create their own category. Once they had closed this modal the category list would then be populated with their newly created category. The venue modal worked in a similar fashion, they could choose a venue from the list or choose to create their own venue using the venue modal. 

![cat ven dropdown](https://res.cloudinary.com/dmpvulj3q/image/upload/v1641911139/ReadMe%20images/Project%204%20-%20Rice%20/catven_dropdown_rjc0qr.png)

Example of the venue modal:

![venue modal](https://res.cloudinary.com/dmpvulj3q/image/upload/v1641911142/ReadMe%20images/Project%204%20-%20Rice%20/venue_modal_lqgzi5.png)

Example of the code for submitting the venue:

![venue submitfunc](https://res.cloudinary.com/dmpvulj3q/image/upload/v1641911139/ReadMe%20images/Project%204%20-%20Rice%20/handleVenueSubmit_function_bxufeu.png)


**Styling**

When I  was happy with how the application was functioning. I then moved on to the part of the project that I knew would be challenging and could take the most time, but I would enjoy it the most. 

The design of the Dice site looks so simple, but it all comes together in seamless fashion. That is what I believe good design to be about. 

The two components I enjoyed creating the most were the NavBar and the Search components. 


**Navbar**

The Navbar had this cool little touch to it. When you were at the top of the page it was transparent. But as soon as you scrolled down it would turn black. I found this so cool and I couldn't wait to try and implement it within my own build. I haven't used anything like this with any of my previous projects, so it was something I would have to research and learn. When I did find out how I could implement it. 

![clear navbar](https://res.cloudinary.com/dmpvulj3q/image/upload/v1641911139/ReadMe%20images/Project%204%20-%20Rice%20/clear_nav_q18vwq.png)

![black navbar](https://res.cloudinary.com/dmpvulj3q/image/upload/v1641911139/ReadMe%20images/Project%204%20-%20Rice%20/black_nav_tj3evd.png)


I used the built in onscroll, which is stored on the window object. I would then console.log the scrollY coordinates to work out the point I would need to navbar to change from transparent to black. I then used a queryselector to select the navbar and then add or remove the black class I created within my CSS. 

![nav scroll func](https://res.cloudinary.com/dmpvulj3q/image/upload/v1641911140/ReadMe%20images/Project%204%20-%20Rice%20/nav_scroll_func_c4vqsy.png)

**Search**

This part of the application was one of the trickiest but most satisfying to achieve. When a user wants to search for an event. They would type their query in the search form which was located in the navbar. It would then take them to a new search page which would dynamically display their results.

![search](https://res.cloudinary.com/dmpvulj3q/image/upload/v1641911142/ReadMe%20images/Project%204%20-%20Rice%20/search_tzm9cp.png)

I placed a form inside the Navbar so I could access the user's input from anywhere within the application, allowing them to search at any point.

![search submit](https://res.cloudinary.com/dmpvulj3q/image/upload/v1641911140/ReadMe%20images/Project%204%20-%20Rice%20/handleSearchSubmit_cd6euu.png)

![search nav jsx](https://res.cloudinary.com/dmpvulj3q/image/upload/v1641911140/ReadMe%20images/Project%204%20-%20Rice%20/Navjsx_hrycff.png)

Once the user pressed enter it would overlay the search component on top of whatever component that was previously displayed. Then the user could navigate to their search result. 

I also included another feature that was on Dice. If a user did not input anything into the search field then it would just display all the events they had listed. 

I also included some error handling. If an event couldnt be found it would let the user know. 

![error handling code](https://res.cloudinary.com/dmpvulj3q/image/upload/v1641911140/ReadMe%20images/Project%204%20-%20Rice%20/nav_error_handle_code_k61ox0.png)

![error handling](https://res.cloudinary.com/dmpvulj3q/image/upload/v1641911140/ReadMe%20images/Project%204%20-%20Rice%20/error_handle_ss_nrmopq.png)


## Visuals

I knew that one of the biggest challenges I would face in this project is getting the styling on point and looking slick. I knew that if I didn’t achieve this within the timeframe it would be detrimental to the final product. Below I have included some screen shots of the final application. 

![alt text](https://res.cloudinary.com/dmpvulj3q/image/upload/v1641911141/ReadMe%20images/Project%204%20-%20Rice%20/homepage_tm59bb.png)

![alt text](https://res.cloudinary.com/dmpvulj3q/image/upload/v1641911142/ReadMe%20images/Project%204%20-%20Rice%20/searchpage_qebzb3.png)

![alt text](https://res.cloudinary.com/dmpvulj3q/image/upload/v1641911142/ReadMe%20images/Project%204%20-%20Rice%20/search_event_xzjyfh.png)

![alt text](https://res.cloudinary.com/dmpvulj3q/image/upload/v1641911140/ReadMe%20images/Project%204%20-%20Rice%20/error_handle_ss_nrmopq.png)

![alt text](https://res.cloudinary.com/dmpvulj3q/image/upload/v1641911140/ReadMe%20images/Project%204%20-%20Rice%20/register_mnaa93.png)

![alt text](https://res.cloudinary.com/dmpvulj3q/image/upload/v1641911140/ReadMe%20images/Project%204%20-%20Rice%20/login_evswx7.png)

![alt text](https://res.cloudinary.com/dmpvulj3q/image/upload/v1641911140/ReadMe%20images/Project%204%20-%20Rice%20/create_event_lnpqnj.png)

![alt text](https://res.cloudinary.com/dmpvulj3q/image/upload/v1641911142/ReadMe%20images/Project%204%20-%20Rice%20/show_delete_and_edit_buttons_ytpqmi.png)

![alt text](https://res.cloudinary.com/dmpvulj3q/image/upload/v1641911141/ReadMe%20images/Project%204%20-%20Rice%20/update_event_mgi12g.png)

![alt text](https://res.cloudinary.com/dmpvulj3q/image/upload/v1641911142/ReadMe%20images/Project%204%20-%20Rice%20/show_venue_j0dstj.png)

![alt text](https://res.cloudinary.com/dmpvulj3q/image/upload/v1641911141/ReadMe%20images/Project%204%20-%20Rice%20/show_venue_bottom_gc2xqo.png)


## Bugs

When deploying the site I did run into a big bug which I’m not quite sure I understand fully. As the site worked on my local machine. I have taken some screen shots of the bug. 

This function takes in all the events, then filters them based on matching names.

![venue filter bug](https://res.cloudinary.com/dmpvulj3q/image/upload/v1641911140/ReadMe%20images/Project%204%20-%20Rice%20/filter_venue_bug_msfczf.png)

This is the useEffect that pulls in the event data: 

![venue useEffect](https://res.cloudinary.com/dmpvulj3q/image/upload/v1641911142/ReadMe%20images/Project%204%20-%20Rice%20/venue_useEffect_yinlzn.png)


This is the JSX code which displays them on screen:

![jsx venue code](https://res.cloudinary.com/dmpvulj3q/image/upload/v1641911141/ReadMe%20images/Project%204%20-%20Rice%20/Jsx_venue_code_bug_bi7fva.png)

I ran into an issue when I was using the build files. I kept getting back an error saying this is not a function. But it worked when I was hosting it on my local machine. 



## Blockers

One of the main blockers I faced with this application was understanding query strings.




## Wins

* Working with Python, it was a new challenge that I really enjoyed.
* I was really pleased with how I got the styling to look very close to Dice. 

## Challenges

* Learning about currying and curried functions.
* I found semantic UI to be extremely challenging to use. 
* I felt really intimidated by the design of Airbnb and trying to create an application that matched their style was challenging. 
* As it was the first time using Git and GitHub within a team, and also using multiple branches this was quite challenging at times. But it was a great way to really build a solid foundation of why it’s used within software development. 

## Future features

* Comments: When an event has passed a user could then comment on that event. 
* Leaving a comment on a venue would also be a nice touch. 
* It isn't on the dice site, but a feature that would allow the user to filter events by a category. 
* Ability to view another user's profile.
* A counter so a user can click on ‘attending event’ 


## Future Improvements

* Making the site fully responsive.
* Fix the filter error function on build.
* Allow a user to leave a review on the event once it has passed.
* Allow a user to leave a review on a venue.

## Key Learnings

Planning was a key to getting the final product looking how it did. Going into future projects or work I will look forward to taking this same approach. 
I mentioned previously that a blocker in this project was using and understanding query strings. But now I feel more confident using them. I am looking forward to implementing them more within other projects I take on. 

