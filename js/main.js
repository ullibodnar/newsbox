var url = 'https://newsapi.org/v2/top-headlines?' +
          'sources=bbc-news&' +
          'apiKey=fdfb5c333b1e4f05b4bdf8346627b44d';

var req = new Request(url);

fetch(req)
    .then(function(response) {
        console.log(response.json());
    })
