# sound-tune-instrument-hotel
Instrument check-in application and database for administrative use by a specialty instrument repair hotel. 

## Built With:
Angular, Node, Express, and SQL (SEAN Stack)

## Getting Started:
1. Fork & clone this repository
2. Open the database.sql file within the project and re-create the database (sound_tune) and tables via Postico.
3. Within the project, run `npm install express --save`
4. Run `npm install pg --save`
5. Run `npm start` to connect this project to Localhost

## Screenshot

##### Dash View:
<img width="1440" alt="screen shot 2018-08-26 at 11 10 46 pm" src="https://user-images.githubusercontent.com/34479779/44640125-62e94780-a985-11e8-90be-9cba21eba10c.png">

##### Dash View (con't)
<img width="1432" alt="screen shot 2018-08-26 at 11 13 58 pm" src="https://user-images.githubusercontent.com/34479779/44640181-da1edb80-a985-11e8-8c63-419aee8d009a.png">

##### Musicians/Owners Views (main content):
<img width="1439" alt="screen shot 2018-08-26 at 11 17 00 pm" src="https://user-images.githubusercontent.com/34479779/44640247-384bbe80-a986-11e8-9211-8cec1a5fb6dc.png">



## Completed Features
1. Two-view navigation
2. Input fields and drop-down menus to collect instrument and owner information
3. Cards to capture owner first name and instrument details
4. Instrument data can be deleted without deleting an owners' ID card
  4a. When another instrument is added to that owners' name, the empty card is updated instead of populating an unnecessary additional card
5. Multiple cards available per owner, per instrument
6. Check in / Check out toggle feature that changes the card's appearance if checked in or checked out and logs the status back to the database. 
7. On the Musicians/Owners view, a table populates with musicians' first names and the number of instruments on file per name. 

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
   - [x] dash - instruments
   - [x] Source dash controller into index.html
   - [x] owners
     - [x] Source into index.html

     
