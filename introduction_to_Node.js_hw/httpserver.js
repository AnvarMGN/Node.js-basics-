const http = require('http');

const countArray = [0, 0];

const server = http.createServer((req, res) => {
    console.log('Запрос получен');

    switch (req.url) {
        case '/':
            countArray[0]++;
            res.writeHead(200, {
                'content-Type': 'text/html; charset=UTF-8',
            });
            res.end(`<h1>Корневая страница</h1><br></br><p>Просмотров:${countArray[0]}</p><br></br><a href="http://127.0.0.1:3000/about">Ссылка на страницу /about</a>`)
            break;

        case '/about':
            countArray[1]++;
            res.writeHead(200, {
                'content-Type': 'text/html; charset=UTF-8',
            });
            res.end(`<h1>Cтраница about</h1><br></br><p>Просмотров:${countArray[1]}</p><br></br><a href="http://127.0.0.1:3000/">Ссылка на корневую страницу /</a>`)
            break;

        default:
            res.writeHead(200, {
                'content-Type': 'text/html; charset=UTF-8',
            });
            res.end('<h1>Страница не найдена. Ошибка 404.</h1>')
            break;
    }
});

const port = 3000;

server.listen(port, () => {
    console.log(`Сервер запущент на порту ${port}.`);
});
