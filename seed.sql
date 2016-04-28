INSERT INTO authors (name, email, password) VALUES ('Will I Am', 'swag@gmail.com', 'test1');
INSERT INTO authors (name, email, password) VALUES ('Phill I Am', 'hug@gmail.com', 'test2');
INSERT INTO authors (name, email, password) VALUES ('Grill I Am', 'rug@gmail.com', 'test3');
INSERT INTO authors (name, email, password) VALUES ('Jill I Am', 'qug@gmail.com', 'test4');


INSERT INTO categories (category) VALUES ('Mathematics');
INSERT INTO categories (category) VALUES ('History');
INSERT INTO categories (category) VALUES ('Science');
INSERT INTO categories (category) VALUES ('Technology');

INSERT INTO abouts (description) VALUES ('Wicki is a web-based, free-content encyclopedia project. This project was highly influenced by the Wikipedia website based on a model of openly editable content.');


INSERT INTO articles (article_title, article_desc, author_id, category_id) VALUES ('The New Age', 'The New Age was a British literary magazine, noted for its wide influence under the editorship of A. R. Orage from 1907 to 1922. It began life in 1894 as a publication of the Christian Socialist movement; but in 1907 as a radical weekly edited by Joseph Clayton, it was struggling.[1] In May of that year, Alfred Orage and Holbrook Jackson, who had been running the Leeds Arts Club, took over the journal with financial help from George Bernard Shaw. Jackson acted as co-editor only for the first year, after which Orage edited it alone until he sold it in 1922.[2][3] By that time his interests had moved towards mysticism, and the quality and circulation of the journal had declined. According to a Brown University press release, "The New Age helped to shape modernism in literature and the arts from 1907 to 1922".[4][5] It ceased publication in 1938. Orage was also associated with the New English Weekly (1932–49) as editor during its first two years of operation (Philip Mairet took over at his death in 1934).', 1, 1);



INSERT INTO articles (article_title, article_desc, author_id, category_id) VALUES ('A Famous Woman', 'Born in Moscow and educated at the Gnessin State Musical College (1971–88), she rose to prominence after winning the 1987 Concorso Busoni.[1] This triumph opened up the Italian halls to her, and as soon as she graduated she embarked on a tour, debuting in the Maggio Musicale Fiorentino. She finished with her German debut in Munich and she was immediately contracted by Deutsche Grammophon. She settled in Hamburg two years later, where she still lives with her husband and her two sons, Daniel and Anton. She has since had a successful concert career.', 2, 2);

INSERT INTO articles (article_title, article_desc, author_id, category_id) VALUES ('Happy Song','Happy is a song written, produced, and performed by American singer and producer Pharrell Williams from the Despicable Me 2 soundtrack album. It also served as the lead single from Williams second studio album, Girl (2014). It was first released on November 21, 2013, alongside a long-form music video. The song was reissued on December 16, 2013, by Back Lot Music under exclusive license to Columbia Records, a division of Sony Music.[1]', 3, 3);

INSERT INTO articles (article_title, article_desc, author_id, category_id) VALUES ('Jatra', 'Zatra is the Konkani language term for the pilgrimage festivals celebrated at Hindu temples in Goa; the Hindi and Marathi language equivalents are Yatra and Jatra.', 4, 4);
