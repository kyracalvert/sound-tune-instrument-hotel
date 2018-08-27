# sound-tune-instrument-hotel
Instrument check-in application and database for a specialty instrument repair hotel. 

## Built With:
Angular, Node, Express, and SQL (SEAN Stack)

## Getting Started:
1. Fork & clone this repository
2. Open the database.sql file within the project and re-create the database (sound_tune) and tables via Postico.
3. Within the project, run `npm install express --save`
4. Run `npm install pg --save`
5. Run `npm start` to connect this project to Localhost

## Completed Features
A. Two-view navigation
B. Input fields and drop-down menus to collect instrument and owner information
C. Cards to capture owner first name and instrument details
D. Instrument data can be deleted without deleting an owners' ID card
  D1. When another instrument is added to that owners' name, the card is updated
E. Multiple cards per owner, per instrument
F. Check in / Check out toggle feature that changes the card's appearance if checked in or checked out and logs the status back to the database. 
G. On the Musicians/Owners view, a table populates with musicians' first names and the number of instruments on file. 

## Next Steps
1. An 'edit' feature will populate on each card and that cards inputs can be updated.
2. Build a public view that allows clients to check their own instruments in to the database.
3. Consider a 'deleteOwner' function.

## Authors
Kyra Crawford Calvert

## To Do: 
- [x] Write to-do list
- [ ] Write README
- [x] Setup folders and static files 
- [x] Bring all angular files into Vendors folder
  - [x] Source each into index.html
- [ ] Image folder and image file for each instrument type
- [x] .gitignore
- [x] Install Express
- [x] Spin up server 
- [x] Initialize NG-app via index.html and client.js
    - [x] Ensure Angular is working
- [x] setup pool via modules / pool.js
  - [x] npm install PG


  #### Database 
  - [x] Create a database called "sound_tune"
    - [x] Create a table called "instruments"
    - [x] Create a table called "owners"
    - [x] Insert database.sql file into project
      - [x] Add all SQL queries to file called 'database.sql' within VSC project 

 #### Router - Server Logic
 - [x] Instruments
 - [x] Owners
 - [x] Configure view routes via client.js

 
 #### HTML
 ###### Index.html:
   - [x] NAVIGATION
       - [x] Instruments dashboard
       - [x] Owners
   - [ ] Section Container
       - [x] ng-view  
   
  ###### Views: 
   - [x] home.html
     - [x] defaults to dash.html
      - [x] displays owners and instrument table information
       - [x] delete button populates for each table entry
     - [x] owners.html
      - [x] Input field for owner name
      - [x] Submit button 
      - [x] Populates table with owners' name and number of instruments
      - [x] delete button populates for each table entry
     - [ ] 404.html
      - [ ] stretch goal: design 404 page
     
   ###### Controllers:
   - [x] dash - nstruments
    - [x] Source into index.html
   - [x] owners
     - [x] Source into index.html

     
