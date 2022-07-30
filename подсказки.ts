/**
 Чтение файлов 
 поключаем через модуль fs
 const fs = require ("fs") - получаем доступ к файловой системе
 const path =require ("path") - работа с путями 
 path.extname() - показывает раширение например (txt)



fs.readFile - асинхронная функция (не блокирует поток)
fs.readFile("путь","utf8" (err,data)=> {
   console.log(data) - в дату прихоидт наш текст 
})
fs.readFileSync ("путь","utf8") - синхронная функция блокирующая поток 
const text = fs.readFileSync ('путь', "utf8")
console.log(text)
Чтение папок 
fs.readdir ("называние папки" (err, data) => {
   console.log(data) -получим массив из файлов 
})

Запись файлов 
fs.writeFile("путь","название сообщения",(err) => { создает новый файл с сообщением которое мы укажем (и здесь только один параметр ошибка)
   if (err) {
      console.log(err)
   }
})

Создание простого сервера 
запришваем http модуль
const http = require("http") - этот модуль дает нам возможности такие как создание http сервера 
const sever = http.createServer((reqest,response) => { принимает функцию callback с аргументами reqest и responce это два обьекта 
response.end("Hello this is my first server") - тут мы формируем ответ севрема в нашем случае он вернет строку Привет это мой первый сервер 
})

sever.listen(3003) - это мы делаем чтобы прослушивать наш ответ пользователю 
вторым аргументом мы указываем на каком host будет размещен наш сервер по умолчани localhost - означает текущий компьютер 
третий параметр функция callback которая будет запущенна как только наш сервер запустится (обычно в ней пишут что сервер запущен)
server.listen(3003,"127.0.0.1", () => {
   console.log(sever listening)
})

Роутинг 
чтобы анализировать url адресса мы url модуль
const url = require("url")
если мы запустим console.log(request.url) - мы увидим что сервер обрабатывает два раза вначале запрос потом /favicon.ico
Свойство response.writeHead() (добавлено в v1..0) является встроенным свойством модуля 'http', которое отправляет заголовок ответа на запрос
response.writeHead(404) а вторым параметром принимает обьект в котором мы указываем свойства для браузера 
response.writeHead(404,{
   "content-text" : "text/html"
})

ОТладка чтобы научиться дебажить нашу программу нужно прописать флаг --inspect

Events
const EventEmitter = require("events") - стандартный запрос на события и стандартное имя 
чтобы создать emmitter мы создаем в сновном из класса

const myEmitter = new EventEmitter()
Эмитеры чем то похожи на события в dom элементах 

myEmitter.emit()

Streams - Потоки
Например youtube или netflix называют стиминговыми компаниями  так как они могут воспроизводить видео по частям тоесть видео еще полностью
не загрузилось а начать просмотр вы уже можите так оно загружает видео по частям 
есть четыре вида потоков
Readeble strem (читаемый поток) - важные функции pipe()-позволяет обьединять потоки read() events:data и end
writeble stream (записываемый поток) - write() и end() events: drain и finish
duplex stream (дюплексные потоки) - одновременно доступны для чтения  и записи 
transform stream (поток преоброзования) - также что дюпликсные только могут изменять данные 
все потоки наследуются от скласса eventemmiter так что на них можно вешать обрабочики 

console.log(
  arguments
); /**если выдает нам обьект значений значит мы находимся в функции */
/**
 первый аргумент который мы видим это экпорт он пуст поскольку мы ничего не экспортируем
 второй это фукнция запроса
 третий это модуль 









































































 */
