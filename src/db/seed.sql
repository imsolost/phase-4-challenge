INSERT INTO
  albums (title, artist)
VALUES
  ('Malibu', 'Anderson .Paak'),
  ('A Seat at the Table', 'Solange Knowles'),
  ('Melodrama', 'Lorde'),
  ('In Rainbows', 'Radiohead')
;

INSERT INTO
  users (username, email, password)
VALUES
  ('a', 'a@a.com', 'a'),
  ('b', 'b@b.com', 'b')
;

INSERT INTO
  reviews (user_id, album_id, content)
VALUES
  (1, 1, 'A review of Malibu. It was great!'),
  (1, 2, 'A review of A Seat at the Table. It was great!'),
  (1, 3, 'A review of Melodrama. It was ok.'),
  (2, 1, 'A review of Malibu. It was ok.')
;
