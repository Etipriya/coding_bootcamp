# Help for the Homework 11

## A mixture of hints, and guidance:

For this homework, you're being asked to save some short notes to a json file (POST), as well as read from that file to then display them (GET). We'll be using a mix of routing and fs methods. Good news! We've got some starter code this week! In the public folder you'll find index.html and notes.html - you do NOT need to do anything with these, leave them as they are.

There are no tests required for this homework.

You do NOT need to create a video for this

You'll need to install express as a dev dependency for this homework. There is another package you can install called uuid (https://www.npmjs.com/package/uuid) which you can use to generate unique ids for each note you create.

Although you've been given starter code, you still need to to create your server from scratch as well your routes and handler methods.

Try to keep your handler in the same place. You can export them all individually... Or! Why not create one be Class object, add them all as methods, and just export the class object (store.js)

For your routes, you'll need seperate routing to serve the html files and to serve your actual data/content. You can see the routes you need to create in the README for this homework.
    (For each step of your middleware, a really good idea is to add a console log so you know all the steps are connected and talking to each other)

All of the functionality for connecting the frontend your your server has already been created for you in public\assets\js\index.js file. Think of the flow like this:

Request from the frontend -> index.js -> your server file -> your router files -> file for reading/writing files to db.json

Suggested folder structure:

```
db/
    db.json
    (file for your reading and writing to file functions)
public/
    assets/
        css
        js/
            index.js
        index.html
        notes.html
routes/
    (file for serving html files)
    (file for serving getting/posting data)
(file for your server)

```

---



### Specific things for Homework 11:

1. You MUST deploy this homework to Heroku and submit the URL for this (as well as the Github repo link)
2. There are "bonus" marks for adding a route for DELETE, however this is NOT a requirment!! More like a nice to have
3. All the usual stuff:
    * No errors in the console
    * Frequent commits
    * Solid code commenting
    * README MUST contains Description, Screenshot (of the frontend showing the note you've just saved) and link to deployed app