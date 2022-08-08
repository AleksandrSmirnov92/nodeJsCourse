import path from 'path';
const fs = require('fs');
const toursjson = JSON.parse(
  fs.readFileSync(
    `${path.join(__dirname, '../../dev-data', '/tourssimple.json')}`
  )
);
exports.getAllTours = (req: any, res: any) => {
  console.log(req.requestTime);
  //**получаем данные */
  res.status(200).json({
    status: 'success',
    requestedaAt: req.requestTime,
    results: toursjson.length,
    data: {
      tours: toursjson,
    },
  });
};
exports.getTour = (req: any, res: any) => {
  //**получаем данные */
  console.log(req.params);
  let paramNumber = Number(req.params.id);
  if (paramNumber > toursjson.length) {
    return res.status(404).json({
      status: 'fail',
      message: 'invalid ID',
    });
  }
  let tour = toursjson.find((el: any) => Number(el.id) === paramNumber);
  res.status(200).json({
    status: 'success',
    data: {
      tours: tour,
    },
  });
};
exports.createTour = (req: any, res: any) => {
  //отправляем данные ,добовляем новый тур для этого мы теперь используем request чтобы
  // чтобы добвать запрос мы должны добавить промежуточное окружение app.use(express.json())
  const newId = toursjson[toursjson.length - 1].id + 1;
  const newObj = Object.assign({ id: newId }, req.body);
  toursjson.push(newObj);
  fs.writeFile(
    `${path.join(__dirname, '../../dev-data', '/tourssimple.json')}`,
    JSON.stringify(toursjson),
    (err: Error) => {
      res.status(201).json({
        status: 'success',
        data: {
          tours: newObj,
        },
      });
    }
  );
  console.log(req.body);
  // res.send('done');
};
exports.updateTour = (req: any, res: any) => {
  let paramNum = Number(req.params.id) * 1;
  if (toursjson.length < paramNum) {
    return res.status(404).json({
      status: 'fail',
      message: 'not found params in DB',
    });
  }
  console.log(req.params, req.body);
  res.status(200).json({
    status: 'success',
    data: 'there will update params',
  });
};
exports.deleteTour = (req: any, res: any) => {
  let paramNum = Number(req.params.id) * 1;
  if (toursjson.length < paramNum) {
    return res.status(404).json({
      status: 'fail',
      message: 'not found params in DB',
    });
  }
  res.status(204).json({
    status: 'success',
    data: 'null',
  });
};
