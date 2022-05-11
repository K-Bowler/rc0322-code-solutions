insert into "actors" ("firstName", "lastName")
values ('Nick', 'Cage'),
       ('Tator', 'Mits')
returning *;
