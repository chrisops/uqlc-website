# Christopher Baker - T3A2-A
---
## Resources:

Deployed Front-End: https://uqlc.netlify.app/
Deployed Back-End:
Trello: https://trello.com/b/b6CfYCxG/uqlc-website

Source Control Front-End: https://github.com/ChrisBaker-dev/uqlc-website
Source Control Back-End: https://github.com/ChrisBaker-dev/uqlc-api

---
## Libraries


### Cloudinary:
Cloudinary is used in order to handle image upload to the webpage. Image upload is used for both the player profile and posts made by an admin.

### Cypress:
Cypress is used in order to complete automated testing on the site. These tests include testing the ability to login, register and create a player profile. 

### styled-components:
React styled components allows for easier styling on the react components.

### Modal:
React modal allows for the login/register action to 

---


> ## R1	Description of your website, including:
> - Purpose
> - Functionality / features
> - Target audience
> - Tech stack

## **Lacrosse Club Web App**

As a sports club, it's important to be able to organise and broadcast events to your team, and have a way to communicate changes and cancellations. Often teams will use a facebook page for this, but the features are limited, and don't provide a targeted experience for sport organisations.

We will be designing and building a web app for the UQLC to use, with a suite of features to make it easy for the team to communicate and set up events.

<br>

## **Feature list:**

<br>

**Event calendar**

Our web app will provide an event calendar to plan and broadcast events to the team, there will be a set of admin permissions assigned to certain users that allow them to create, update and delete entries in the event calendar, and the calendar will be publicly readable.

**Player sign up**

New players can sign up to join the lacrosse team, this section will redirect to the sportstg form, so payment will be handled by the third-party software.

**Blog posts**

The site's admin can create, update and delete blog posts that are publicly available on the site, with an optional uploaded image. As an optional feature, signed-in players can post comments on the blog posts (probably with moderation by the admin)

**Player profiles**

Players that sign up can optionally fill out stat cards, which will contain information like a photo, height, position etc. so that coaches will have a summary of information of the people on their team.

**About**

The about page will contain information on the UQLC team, with a club location and phone number.

**Contact**

The contact page will provide an email form to submit emails to the club manager's email address, with a captcha for anti-spam.

<br>

## **Target audience**

The primary stakeholder will be the UQLC team, they will have admin credentials for access to a content management page, where they can create blog posts, and post calendar events. The web app will also be targeted for members of the team, and new members interested in joining.

<br>

## **Tech stack**

This web app will be built with a React front-end, interfacing with a Ruby on Rails API using a PostgreSQL relational database, with embedded third-party components on the front-end such as google maps and google calendar. The stack components will be hosted on various cloud hosting platforms.

The React front end engine will be broken down into React components, using the browser router package to render the components depending on the URL request. React will use state to render information queried from the Rails API, and will also use the Google API to read and write calendar entries for the team's public calendar. The React server will be hosted on Netlify.

The Rails API will store a PostgreSQL database model of stored information such as user credentials, player profiles, and blog posts. This information will be queried using the React Fetch API. The Rails gem Devise will be used for user credential encryption. This back end will be deployed and cloud hosted on Heroku.

> ## R2 Dataflow Diagram

![](./docs/dfd_v0.3.png)

> ## R3 Application Architecture Diagram

![](./docs/arch_v0.3.png)

> ## R4 User stories

### **As a user, I want to be able to register with the lacrosse club to be a member.**

Players should be able to register with the club in order to view more detailed content. Admins to the club do not want all of their information to be displayed and registered players will gain more access.

### **As a club admin, I want to be able to post announcements to the team in order to keep them updated on events.**

Admins of the club want to be able to post text announcements with details. This includes a title and description.

Possibly can specify which team, men's or women's, and who sees the post. Or all.

### **As a user, I want to be able to contact the club in order to gain more information on them.**

### **As a user, I want to be able to make a profile in order to update my information.**

Users want to add details for their profile. This includes, photos, description, number, positions, etc.

### **As a user, I want to be able to find out more about the club on their website.**

Need to create About me page to give more information to possible future members.

### **As an admin of the club, I want to be able to update a calendar in order to give players more notice of upcoming events.**

Create calendar view that all members can see but only admins can edit.

### **As a user, I want to be able to register with the league through their website.**

Link should forward to sportstg registration site

Contact UQLC for their link

> ## R5	Wireframes for multiple standard screen sizes, created using industry standard software

## *Meeting 12th July*

**Created feature list for MVP:**

- Blog
- Event Calendar
- Player sign up
- Player cards
- Contact page
- About us

Outlined MVP pages:

- **Home page**

![](./docs/Homepage_v0.1.png)

- **Login page**

![](./docs/Login_v0.1.png)

- **Contact page**

![](./docs/Contact_v0.1.png)

- **Player Card**

![](./docs/PlayerCard_v0.1.png)

- **Event Calendar**

![](./docs/Events_v0.1.png)

<br>

## *Meeting 13th July*

Client wanted a new feature page - CMS page for editing front page:

![](./docs/NewPost_v0.2.png)

<br>

## *Meeting 16th July*

Client wanted a new feature on the Home page - a "view team" dropdown on the About Us page:

![](./docs/Homepage_v0.3.png)

Also, we've removed the **Login** and **new post** page - these will instead be implemented as **modals**:

![](./docs/Login_v0.3.png)



> ## R6: Screenshots of your Trello board throughout the duration of the project

## Project Methodology

We will be using a Kanban board (Trello) with user stories labeled for priority and weight, assigned between each developer according to respective roles.

Deadlines will be set at the start of the project, and revised at the end of each Sprint:

- CB: back end development, building Ruby on Rails API and database models.

- CH: Front end development, building React components and implementing API calls.

## Sprint 1 - 16th July - 20th July (5 days)

### Begin building MVP features, writing API calls and building database.

**To be done by 20th July:**

> Front-end (Assigned to CH)
> - finish all pages: About us, Contact, Events, Login and signup (no styling)
> - write all API calls (using stubs at first)
> - build modals for login and new posts

> Back-end (Assigned to CB)
> - build all database models for Users and blog posts
> - install devise and handle authentication POST requests
> - install cloudinary and handle image uploading POST requests

## Sprint 2 - 21st July - 23rd July (3 days)

### Connect API end-to-end, making sure to handle any errors thrown by the API, complete MVP product.

**To be done by 23rd July:**

> Front-end (Assigned to CH)
> - remove stubs and test API handling for sign-up, authentication, and writing new blog posts
> - build event API to google calendar, for adding new events and displaying on events page

> Back-end (Assigned to CB)
> - Test API handling for authentication end-to-end
> - Test database queries for posts and image uploading
> - Start writing rspec or unit-tests to satisfy rubric

## Sprint 3 - 23th July - 26th July (4 days)

### Style the front-end web pages and polish the app for release 1.0

**To be done by 26th July:**

> Front-end (Assigned to CH)
> - Add styling to components to make the site aesthetic
> - Build responsive components for mobile and tablet screens

> Back-end (Assigned to CB)
> - Optimise database queries to make sure there are no redundant operations

> Both to be done:
> - Do user testing for the app and record any UI/UX problems to be fixed
> - Satisfy any remaining rubric conditions

![](./docs/Trello_1.png)



