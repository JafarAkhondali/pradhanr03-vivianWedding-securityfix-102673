var db = require('./db.js');

var categories = ['Mathematics', 'History', 'Science', 'Technology'];

var about = ['Wikipedia is a multilingual, web-based, free-content encyclopedia project supported by the Wikimedia Foundation and based on a model of openly editable content. The name Wikipedia is a portmanteau of the words wiki (a technology for creating collaborative websites, from the Hawaiian word wiki, meaning quick) and encyclopedia. Wikipedias articles provide links designed to guide the user to related pages with additional information.'];


var names = ['Will I Am', 'David Guetta', 'Akira Knightly', 'Pavan Bro'];

var emails = ['swag@gmail.com', 'poop@gmail.com', 'sushi@gmail.com', 'pradhanr03@gmail.com'];

var passwords = ['test1', 'test2', 'test3', 'test4'];

var articleTitle = ['The New Age', 'A Famous Woman', 'Happy Song', 'Jatra'];

var description = ['The New Age was a British literary magazine, noted for its wide influence under the editorship of A. R. Orage from 1907 to 1922. It began life in 1894 as a publication of the Christian Socialist movement; but in 1907 as a radical weekly edited by Joseph Clayton, it was struggling.[1] In May of that year, Alfred Orage and Holbrook Jackson, who had been running the Leeds Arts Club, took over the journal with financial help from George Bernard Shaw. Jackson acted as co-editor only for the first year, after which Orage edited it alone until he sold it in 1922.[2][3] By that time his interests had moved towards mysticism, and the quality and circulation of the journal had declined. According to a Brown University press release, "The New Age helped to shape modernism in literature and the arts from 1907 to 1922".[4][5] It ceased publication in 1938. Orage was also associated with the New English Weekly (1932–49) as editor during its first two years of operation (Philip Mairet took over at his death in 1934).',
    'Born in Moscow and educated at the Gnessin State Musical College (1971–88), she rose to prominence after winning the 1987 Concorso Busoni.[1] This triumph opened up the Italian halls to her, and as soon as she graduated she embarked on a tour, debuting in the Maggio Musicale Fiorentino. She finished with her German debut in Munich and she was immediately contracted by Deutsche Grammophon. She settled in Hamburg two years later, where she still lives with her husband and her two sons, Daniel and Anton. She has since had a successful concert career.',
    'Happy is a song written, produced, and performed by American singer and producer Pharrell Williams from the Despicable Me 2 soundtrack album. It also served as the lead single from Williams second studio album, Girl (2014). It was first released on November 21, 2013, alongside a long-form music video. The song was reissued on December 16, 2013, by Back Lot Music under exclusive license to Columbia Records, a division of Sony Music.[1]',
    'Zatra is the Konkani language term for the pilgrimage festivals celebrated at Hindu temples in Goa; the Hindi and Marathi language equivalents are Yatra and Jatra.'
]


var category1 = {
    category: categories[0]
}

var will = {
    name: names[0],
    email: emails[0],
    password: passwords[0]
}

var willArticle = {
    article_title: articleTitle[0],
    article_desc: description[0],
    author_id: 1,
    category_id: 1
};

db.create('categories', category1, function(category) {
    db.create('authors', will, function(author) {
        db.create('articles', willArticle, function(article) {
            console.log(category);
            console.log(author);
            console.log(article);
        });
    });
});


var category2 = {
    category: categories[1]
}

var david = {
    name: names[1],
    email: emails[1],
    password: passwords[1]
}

var davidArticle = {
    article_title: articleTitle[1],
    article_desc: description[1],
    author_id: 2,
    category_id: 2
};

db.create('categories', category2, function(category) {
    db.create('authors', david, function(author) {
        db.create('articles', davidArticle, function(article) {
            console.log(category);
            console.log(author);
            console.log(article);
        });
    });
});


var category3 = {
    category: categories[2]
}

var akira = {
    name: names[2],
    email: emails[2],
    password: passwords[2]
}

var akiraArticle = {
    article_title: articleTitle[2],
    article_desc: description[2],
    author_id: 3,
    category_id: 3
};

db.create('categories', category3, function(category) {
    db.create('authors', akira, function(author) {
        db.create('articles', akiraArticle, function(article) {
            console.log(category);
            console.log(author);
            console.log(article);
        });
    });
});

var category4 = {
    category: categories[3]
}

var pavan = {
    name: names[3],
    email: emails[3],
    password: passwords[3]
}

var pavanArticle = {
    article_title: articleTitle[3],
    article_desc: description[3],
    author_id: 4,
    category_id: 4
};

db.create('categories', category4, function(category) {
    db.create('authors', pavan, function(author) {
        db.create('articles', pavanArticle, function(article) {
            console.log(category);
            console.log(author);
            console.log(article);
        });
    });
});

var aboutWiki = {
    description: about[0]
};

db.create('abouts', aboutWiki, function(about) {
    console.log(about);
});
