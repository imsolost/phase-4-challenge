CREATE TABLE albums (
  album_id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  artist VARCHAR(255) NOT NULL
);

CREATE TABLE users (
  user_id SERIAL PRIMARY KEY,
  username VARCHAR(20) NOT NULL UNIQUE,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  picture VARCHAR(255) DEFAULT 'http://www.pieglobal.com/wp-content/uploads/2015/10/placeholder-user.png',
  join_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE reviews (
  review_id SERIAL PRIMARY KEY,
  user_id INT,
  album_id INT,
  content VARCHAR(1000) NOT NULL,
  review_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(user_id),
  FOREIGN KEY (album_id) REFERENCES albums(album_id)
);
