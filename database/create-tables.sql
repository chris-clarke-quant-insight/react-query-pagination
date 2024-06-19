CREATE TABLE Users (
  user_id INT PRIMARY KEY,
  username VARCHAR(50) UNIQUE,
  email VARCHAR(255) UNIQUE,
  password_hash VARCHAR(255),
  created_at DATETIME,
  updated_at DATETIME,
);
---
CREATE TABLE Profiles (
  profile_id INT PRIMARY KEY,
  user_id INT FOREIGN KEY REFERENCES Users(user_id),
  display_name VARCHAR(255),
  bio TEXT,
  location VARCHAR(255),
  profile_picture VARCHAR(255),
  background_image VARCHAR(255),
);
---
CREATE TABLE Disciplines (
  discipline_id INT PRIMARY KEY,
  name VARCHAR(255),
);
---
CREATE TABLE User_Disciplines (
  user_id INT FOREIGN KEY REFERENCES Users(user_id),
  discipline_id INT FOREIGN KEY REFERENCES Disciplines(discipline_id),
);
---
CREATE TABLE Portfolio (
  portfolio_id INT PRIMARY KEY,
  profile_id INT FOREIGN KEY REFERENCES Profiles(profile_id),
  type ENUM('image', 'video', 'audio', 'link'),
  title VARCHAR(255),
  description TEXT,
  data VARCHAR(255),
);
---