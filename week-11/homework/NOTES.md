
REPO NAME: note-taker-app

deploy to Heroku??

Backend
  - express
  - route to write note (POST)
    - save note to .json file
    - return all notes from .json file including the new one
  - route to get all notes (GET)
    - return all notes from .json file
  - route to get a single note (GET)
    - return the single requested note
  - route to delete a single note (DELETE)
    - delete the single note
    - return all notes without the one you deleted


What does a note look like?
  - title
  - text
  - id (server-side)

Possible Future Work
  - organize your notes (by datetime or by id)


Tasks
  - add a db.json with some notes
  - add scripts to package.json (start, dev)

Modules
  - fs
  - express
  - uuid
  - nodemon (dev dep)

View Routes
  - /notes -> notes.html (Notes page)
  - / -> index.html (Landing page)

Api Routes
  - /api/notes -> GET (all notes from db.json)
  - /api/notes -> POST (with note in body, should save ot db.json and return all notes)
  - /api/notes/:id -> DELETE (remove a single note from db.json and return all notes)
  - /api/notes/:id -> GET (specific note from db.json)


Getting Starter

git clone <YOUR_REPO>
cd <YOUR_REPO>
npm install
