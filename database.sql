/* Owners table */
CREATE TABLE "owners" (
"id" serial primary key,
"name" varchar(120) not null,
"last_name" varchar (120) not null,
"email"varchar(120) not null,
"phone" varchar(120) not null,
"city" varchar(120) not null
);

/* Insert into owners table */
INSERT INTO "owners" ("name", "last_name", "email", "phone", "city")
VALUES ('Khary', 'Jackson', 'aliveness@music.com', '651-555-7847', 'St. Paul');



/* Instruments table */
CREATE TABLE "instruments" ( 
"id" serial primary key,
"ticket_date" date,
"instrument" varchar(120) not null,
"model" varchar(120) not null,
"description" varchar(120) not null,
"issue" varchar(150) not null,
"checked_in" BOOLEAN DEFAULT FALSE not null,
"owner_id" INT REFERENCES "owners"
);

/* Insert into instruments table */
INSERT INTO "instruments" ("ticket_date", "instrument", "model", "description", "issue", "checked_in", "owner_id")
VALUES ('08-23-18', 'Guitar', 'Gibson Flying V', 'Mahogany with gold strings', 'severely out of tune', 'false', 1);



/* Joins the instruments and owners to display name, tix date, instrument, model, description, and issue */
SELECT "name", "ticket_date", "instrument", "model", "description", "issue", "checked_in", "owner_id", "instruments"."id"
FROM "owners" 
FULL JOIN "instruments" ON "owners"."id" = "instruments"."owner_id";


/* Number of instruments per owner */
SELECT "name", COUNT ("instruments"."id")
FROM "owners"
FULL JOIN "instruments" ON "owners"."id" = "instruments"."owner_id"
GROUP BY "owners"."name";

/* DELETE empty rows from "instruments" table */