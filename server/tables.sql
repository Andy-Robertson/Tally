
DROP TABLE IF EXISTS user CASCADE;
DROP TABLE IF EXISTS tracked_application CASCADE;
DROP TABLE IF EXISTS bug CASCADE;

CREATE TABLE user (
  id                        SERIAL PRIMARY KEY,
  name                      VARCHAR(300) NOT NULL,
);

CREATE TABLE tracked_application (
  id                        SERIAL PRIMARY KEY,
  user_id                   INTEGER NOT NULL
  name                      VARCHAR(300) NOT NULL,
  url                       VARCHAR(600),
  description               VARCHAR(1000),
  FOREIGN KEY (user_id)     REFERENCES user(id)
);

CREATE TABLE bug (
  id                        SERIAL PRIMARY KEY,
  created_by_user_id        INTEGER NOT NULL
  name                      VARCHAR(300) NOT NULL,
  description               VARCHAR(1500),
  recreation_steps          VARCHAR(1500),
  version                   VARCHAR(200),
  assigned_to_name          TEXT(30) NOT NULL,
  priority                  TEXT(10) NOT NULL,
  FOREIGN KEY (created_by_user_id)     REFERENCES user(id)                 
);

