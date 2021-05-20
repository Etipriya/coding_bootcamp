# Help for the Homework 12

## A mixture of hints, and guidance:

For this homework, your being asked to create a databse that will store info about company's emplyees using node, Inquirer and MySQL. The database should hold 3 tables: department, role and employee.

You'll be tasked with using Inquirer to allow a user to add, view and update these tables. You'll also need to perform JOINS to complete this homework, so hope you've all been paying attention :D

You'll use the MySQL npm package to connect to your DB, Inquirer to interact with it via the terminal, and the npm package console.table ( npm install console.table ) to print the tables to the terminal (there is an inbuilt console.table but the npm version formats it a little nicer)

A good idea for this homework is to include use a seed file to prepopulate your database. This will save you constantly having to add entries manually. Also don't forget the cheatsheets link Suraj posted at the start of the week https://devhints.io/mysql !

You must submit a video of the app. If you fail to submit a video.. we can't mark it! Please don't forget :) 

Suggested folder structure:

```
db/
    index.js
    schema.sql
    seed.sql
package.json
package-lock.json
README.md
.gitignore
index.js

```

---


## Submission Requirements

As usual, you'll need a README for your project. Usual suspects: Description, Screenshot and a link to the deployed app. For your actual app, you need to allow users to:

```
  * Add departments, roles, employees

  * View departments, roles, employees

  * Update employee roles
```

You just need to submit 2 things for this homework: the URL of your github repo, and a video showing the app working in full.

For the video, please, keep it concise. Please, no 20 minutes masterpieces! We just need to see the homework in action:
1. Inquirer prompts to add departments, roles & employees to their respective tables
2. Console.table to view those tables
3. Update employee roles via Inquirer
4. console.table to show the updated table


There is a 'Bonus' section, however it IS NOT A REQUIRMENT. Please only attempt it if you have fully completed everything else, otherwise don't worry about it!
