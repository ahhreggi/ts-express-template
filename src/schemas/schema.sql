-- Database setup/reset (npm run setup-db)

-- Destroy the db if it already exists
DROP DATABASE IF EXISTS database_name;

-- Create the db
CREATE DATABASE database_name;

-- Move into the db
\c database_name;

DROP TABLE IF EXISTS TableName;

-- Create our table if it doesn't already exist
CREATE TABLE IF NOT EXISTS TableName
(
  id SERIAL PRIMARY KEY,
  name VARCHAR(30),
  description VARCHAR(255)
);

-- Insert seed data into the db
INSERT INTO TableName (name, description)
VALUES
  ('Name1', 'Description1'),
  ('Name2', 'Description2'),
  ('Name3', 'Description3');
