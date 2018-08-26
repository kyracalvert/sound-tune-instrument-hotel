# sound-tune-instrument-hotel
Instrument check-in application and database for a specialty instrument repair hotel. 

## Built With:
Angular, Node, Express, and SQL (SEAN Stack)

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

     
