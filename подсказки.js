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
fs.writeFile("путь","название сообщения",(err) => {
   if (err) {
      console.log(err)
   }
})


























































































 */
