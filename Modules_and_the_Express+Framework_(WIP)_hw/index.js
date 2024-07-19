
const express = require('express');
const fs = require('fs');
const path = require('path');// путь к перезаписываемому файлу счётчика

const app = express();

const filePath = path.join(__dirname, 'count.json');

function loadCount() { //функция создания файла счётчика, либо его загрузки при запуске сервера
    try {
        const data = fs.readFileSync(filePath, 'utf-8');
        return JSON.parse(data);
    } catch (error) {
        console.log(error.message);
        console.log('Фаил не существует, вернём объект {"/":0,"/about":0}.');
        return { "/": 0, "/about": 0 };
    }
};

function saveCount(startCount) {// функция сохранения файла счётчика
    fs.writeFileSync(filePath, JSON.stringify(startCount), 'utf-8');
};


let countFile = loadCount();

app.get('/', (req, res) => {
    countFile['/'] += 1;
    saveCount(countFile);
    res.send(`
        <h1>Добро пожаловать на сайт!</h1>
        <p>Просмотров:${countFile['/']}</p>
        <a href="/about">Перейти на страницу About</a>
        `)
});

app.get('/about', (req, res) => {
    countFile['/about'] += 1;
    saveCount(countFile);
    res.send(`
        <h1>Страница обо мне!</h1>
        <p>Просмотров:${countFile['/about']}</p>
		<a href="/">Перейти на главную страницу</a>
        `)
});

const port = 3000;

app.listen(port, () => {
    console.log(`Сервер запущен на порту ${port}`);
});