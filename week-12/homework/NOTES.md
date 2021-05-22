## Setup

- package.json
- packages
  - inquirer
  - mysql
  - console.table 
  - nodemon (dev)
  - jest (dev)


## Tables

- employee
- role
- department

NOTE: write SQL code to create and configure tables
NOTE: seed file to seed the tables with some mock data


Role -> Department
Network Engineer -> Network Team
Sales Manager -> Sales

Employee -> Role -> Department
Bob Smith -> Sales Rep -> Sales
Alice Smith -> Sales Manager -> Sales

Figure OUT
- How to add foreign keys to table during configuration

What kind of data do I need?

## Add Actions

- Add departments
  - Department name (insert to department table)

- Add roles
  - title
  - salary
  - What department does the role belong to: (get all departments)
    - Department 1
    - Department 2
    - .... (insert to role table)

- Add employees
  - fname
  - lname
  - isManager (T/F) (OPTIONAL)
  - What role does the employee belong to: (get all roles)
    - Role 1
    - Role 2
    - ....
  - Does the employee have a manager:
    - No (move on)
    - Yes 
      - Select the manager (get all employees who are managers)
        - Employee 1
        - Employee 2
        - ...(insert to employee table)

## View Actions

- View departments
  - get all departments (join with role)

Department | Role
_________________
Sales | Sales Rep
Sales | Sales Manager

- View roles
  - get all roles (join with departments)

Role | Department
_________________
Sales Rep | Sales
Sales Manager | Sales

- View employees
  - get all employees (join with roles and join department)

- View employees by manager
  - Select the manager (get all employees who are managers)
    - Manager 1
    - Manager 2
    - ...
  Display all employees that have the same manager_id

Employee | Role | Department
____________________________
Bob | Sales Rep | Sales
Alice | Sales Manager | Sales

## Update Actions

- Update employee roles
  - Select the employee (get all employees)
    - Employee 1
    - Employee 2
    - ...
  - Select the role (get all roles)
    - Role 1
    - Role 2
    - .... (update the role_id in the employee table)

- Update employee's manager
  - Select the employee (get all employees)
    - Employee 1
    - Employee 2
    - ...
  - Select the manager (get all employees)
    - Employee 1
    - Employee 2
    - ...

## Delete Actions

- Delete departments
  - What department to delete: (get all departments)
    - Department 1
    - Department 2
    - .... (delete from department table) [CASCADING DELETE]

- Delete roles
  - What role to delete: (get all roles)
    - Role 1
    - Role 2
    - .... (delete from role table) [CASCADING DELETE] ??

- Delete employees
  - What employee to delete: (get all employees)
    - Employee 1
    - Employee 2
    - .... (delete from employee table)

## Budget Action

- View department budget
  - Select the department (get all departments)
    - Department 1
    - Department 2
  - Get all employees in the selected department
  - For all the employees aggregate their salaries [SUM, AGGR, AVG]

## Files and Folders

```
src
  |__db
  |   |__all your db classes and or queries, etc
  |
  |__schema
  |       |__schema.sql
  |       |__seed.sql
  |
  |__utils
  |      |__all your util functions for the app
  |
  |__index.js
```
