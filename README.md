# Christopher Baker & Chris Hoggan - T3A2-B
---

## Resources:

Deployed Front-End: https://uqlc.netlify.app/

Deployed API: https://uqlc-api.herokuapp.com/

Trello: https://trello.com/b/b6CfYCxG/uqlc-website

Source Control Front-End: https://github.com/ChrisBaker-dev/uqlc-website
Source Control Back-End: https://github.com/ChrisBaker-dev/uqlc-api

---

## How to use this app:

This app is for organising events and signing up players to the UQLC club.

There is an admin login for the live demo:

    username: admin@admin.com
    password: admin

When logged in as an admin, you can post news to the front page by clicking *"New Post"*

There is also a link in the navbar called *"Administration"* where you can select player cards to show on the front page.

When logged in as a user, click on *"profile"* to upload your picture and information as a player card, for the admin to approve and show your player card on the front page.

## ENV variables for local build

API_URL=https://floating-fortress-68492.herokuapp.com/
G_API_KEY=AIzaSyCaoMGb4nhdIivxfXkRp8NW4DS2q2VNv44
G_CAL_ID=uqlacrosse@gmail.com
PORT=3000

---
## Front-end React Libraries

### Cypress:
Cypress is used in order to complete automated testing on the site. These tests include testing the ability to login, register and create a player profile. 

### styled-components:
React styled components allows for easier styling on the react components.

### Modal:
React modal allows for the login/register action to display as a dismissible pop-up for a better user flow experience

### Cloudinary:
Cloudinary is used in order to handle image upload to the webpage. Image upload is used for both the player profile and posts made by an admin.

### JWT-decode
Javascript web tokens is a feature to encrypt JSON objects to be stored in the local browser cache for session tracking and authentication

### React-bootstrap
Bootstrap is a CSS framework to assist in styling and making the elements responsive on the website

### React-Google-Calendar
React Google Calendar is an NPM package to structure Google calendar API queries into a single React component that is pre-styled

### React-Dotenv
Dotenv is a package for setting environment variables so that sensitive keys are not exposed in the source code

### React-Router-Dom
React Router is a ubiquitous package for rendering pages dynamically within the javascript of the 

## Back-end API libraries

### bcrypt

bcrypt is an industry standard password hashing algorithm that is fully secure to modern requirements

### jwt

Javascript web tokens are encrypted and decrypted on the back end for securely authenticating browser sessions

---

## Agile Project Workflow

Development began on 16th July, divided into three sprints to finish and deploy the minimum viable product for the client. 

Front end development assigned to Chris H

Back en API development assigned to Chris B

## Sprint 1 - 16th July - 20th July (5 days)

### **Goal:** Begin building MVP features, writing API calls and building database.

<br>

**20th July Result: Our team completed all delegated tasks well before the deadline:**

## Front-end tasks Assigned to Chris H:

**finish all pages: About us, Contact, Events, Login and signup (no styling)**

> *Chris completed all pages needed, we decided to remove Signup as a page and move this into a modal instead*

**write all API calls (using stubs at first)**

> *Chris completed writing stubs for the Home page, listing placeholder images and posts*

**build modals for login and new posts**

> *Completed*

<br>

## Back-end tasks Assigned to Chris B:

**build all database models for Users and blog posts**

> *Completed and added a new model for players, a model for users to set their player information for the club*

**install devise and handle authentication POST requests**

> *Devise was not needed for the back-end API, we instead used bcrypt directly and encrypted the passwords*

**install cloudinary and handle image uploading POST requests**

> *This was instead completed on the final third sprint*

## Sprint 2 - 21st July - 23rd July (3 days)

### **Goal:** Connect API end-to-end, making sure to handle any errors thrown by the API, complete MVP product.

<br>

**23rd July results - Most tasks done, some tricky bugs have used up development time:**

## Front-end tasks assigned to Chris H
**remove stubs and test API handling for sign-up, authentication, and writing new blog posts**

> *Half-completed, user sign up working now, posts can be created, read, and deleted. Player profile updating yet to be finished*

**build event API to google calendar, for adding new events and displaying on events page**

> *Google embed calandar has been added, but the styling is not very good. Chris will be researching a better way to integrate the Google calendar API with styling*

## API tasks assigned to Chris Baker

**Test API handling for authentication end-to-end**

> *Completed, sign up and login functionality fully working, need to add admin privileges to the API*

**Test database queries for posts and image uploading**

> *API queries are all working for creating and updating*

**Start writing rspec or unit-tests to satisfy rubric**

> *rspec testing was too tricky and cumbersome to implement so we've opted to use mini test instead*

## Sprint 3 - 23th July - 26th July (4 days)

### **Goal:** Style the front-end web pages and polish the app for release 1.0

<br>

**27th July results: some features that were dependent on others were left to the end (such as the player cards feature) - the MVP was achieved before the deadline and user testing was carried out, results below:**

## Front-end (Assigned to CH)
**Add styling to components to make the site aesthetic**

> *Basic styling was completed but was de-prioritised for core functionality and additional features*

**Build responsive components for mobile and tablet screens**

> *Completed as a final task*

**Finish any remaining features**

> *Implementation of cloudinary was moved to the front-end instead, React uses an API call with Form Data to upload the image and saves the URL in the API to render the image*

> *The client would need a way to publish their team's information as profile cards, we added a feature as an admin to select player cards to publish*

## Back-end (Assigned to CB)
**Optimise database queries to make sure there are no redundant operations**

> *This was completed, no redundant queries, though we seperated image uploading API call from the profile update API call as cloudinary operations would often take a lot longer to complete*

**Assigned to Both CH and CB to be done:**

**Do user testing for the app and record any UI/UX problems to be fixed**

> *User testing was carried out and polishing features were implemented, such as the function to log in the user when they sign up:*

## User testing record:

![](usertesting26july.png)


**Notes from user testing:**

*When signing up, the user has to log in again, which is a bad user experience, we implemented a change to make this better.*

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



