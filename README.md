# Vinyl

A community for record enthusiasts to review their favorite albums.

Part of the application has already been built for you. Your job is to take it to completion.

## Quick Start
The quickest way to get everything up and running is to run `$ npm run setup`. Then go to http://localhost:3000/ in your browser.

For more information on what is occurring in that setup script, continue reading below.

### Getting Started

Run `$ npm run` to see the list of commands available. To see what each command does, look at `package.json`.

The app uses a basic Express file structure, and includes SQL files to set up the schema and import data.


#### Setting Up Your Database

If you ran `$ npm run setup`, your database should be setup and ready to go but if you're having difficulties or want to know more about what that setup command did, here's a breakdown:

1. `npm install` This gives you all the node modules you need.
1. `npm run db:drop` If you already have a db called Vinyl on your machine, this will delete it.
1. `npm run db:create` This will create a new database called Vinyl.
1. `npm run db:schema` This will create tables in your database for users, reviews, and albums.
1. `npm run db:seed` This populates the users, reviews, and albums tables with seed data.
1. `npm run load-session-store` This creates a table called session that will be used for session storage with express-session and connect-pg-simple
1. `npm run dev` This starts the server using nodemon so you can run Vinyl in your browser at http://localhost:3000/

#### Reset Database
If you find yourself playing around with the schema or adding and deleting so many reviews that you just want to reset the database to its original seed data, run `npm run db:reset`

This command will:
1. `npm run db:drop` Drop existing vinyl database
1. `npm run db:create` Create vinyl database
1. `npm run db:schema` Create tables
1. `npm run db:seed` Populate seed-data
1. `npm run load-session-store` Create session storage table
