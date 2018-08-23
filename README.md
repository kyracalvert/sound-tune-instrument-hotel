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
- [ ] Initialize NG-app via index.html and client.js

  #### Database 
  - [ ] Create a database called "sound_tune_hotel"
    - [ ] Create a table called "instruments"
    - [ ] Create a table called "owners"
    - [ ] Add all SQL queries to file called 'database.sql' within VSC project 

 #### Router - Server Logic
 - [ ] Home
 - [ ] Instruments
 - [ ] Owners
 
 #### HTML
 ###### Index.html:
   - [ ] NAVIGATION
       - [ ] Home
       - [ ] Instruments dashboard
       - [ ] Owners
   - [ ] Section Container
       - [ ] ng-view  
   
  ###### Views: 
   - [ ] home.html
     - [ ] defaults to instruments.html
     - [ ] instruments_dashboard.html
       - [ ] displays owners and instrument table information
       - [ ] delete button populates for each table entry
     - [ ] owners.html
      - [ ] Input field for owner name
      - [ ] Submit button 
      - [ ] Populates table with owners' name and number of instruments
      - [ ] delete button populates for each table entry
     - [ ] 404.html
      - [ ] stretch goal: design 404 page
     
   ###### Controllers:
   - [ ] instruments
   - [ ] owners
     - [x] Source into index.html

     
