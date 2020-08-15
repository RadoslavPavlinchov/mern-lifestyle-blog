# Lifestyle Blog


## Idea
The Lifestyle Blog is an application that helps the users to stay up to date with all important topics related to their lifestyles. All users can browse through all articles on the blog. A registration on the website allows them to like each individual article and also add comments.

## Public Part (Accessible without Authentication)
* Access to the Register Page
* Access to the Login Page
* Access to the Home Page, which displays all articles available
* Access to the Details Page for each individual article
* Access to the About Us Page
## Private part (Accessible with Authentication - Basic User)
* Access to the Profile Page
* Details Page now has two additional options:
  * Like the page
  * Write a comment / Delete your own comment
## Private part (Accessible with Authentication - Admin User)
* Access to the Admin Dashboard Page
  * Access to the Manage Articles (List with all articles)
    * Access to the Create Article Page
    * Access to the Edit Article Page
    * Access to the Delete Article
  
  * Access to the Manage Users (List with all users)
    * Access to the Create User Page
    * Access to the Edit User Page
    * Access to the Delete User
    
  * Access to the Manage Categories (List with all Categories Created)
    * Access to the Create Category Page
    * Access to the Edit Category Page
    * Access to the Delete Category
  
## Functionality
* Create your own Account (Basic User)

  * The Profile Page can be used for quick access to liked articles and logout button
  * Post a comment on each article
  * Delete your own comment
  * Like the article and add a quick link onto your Profile Page
  
* Admin Account
  * Create an Article
    * Upload an image with Cloudinary Widget
  * Edit an article
  * Delete an article
  
  * Create an User
    * Assign him a role (Admin Or Basic)
  * Edit an User
  * Delete an User
  
  * Create a Category
  * Edit a Category
  * Delete a Category
  
* Protected routes

  * Based on the roles
  * Based on the authentication
  
## Available Scripts

### REST API / Server
 * npm start (Starts the applicaiton in Development Mode)
    
### Client Side
 * npm start (Starts the applicaiton in Development Mode)
 * npm build (Builds the applicaiton in Production Folder)
 * npm test (Running the tests)
 * npm eject (Ejects the build in configurations)
 * npm cypress:open (Opens up Cypress for Unit Testing)
