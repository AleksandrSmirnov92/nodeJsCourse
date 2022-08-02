import superagent from 'superagent';
const fs = require('fs');
const readfilePro = (file: string) => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, (err: Error, data: string) => {
      if (err) reject(err);
      resolve(data);
    });
  });
};
const writeFilePro = (file: string, data: string) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(file, data, (err: Error) => {
      if (err) {
        reject('error');
      }
      resolve('succes');
    });
  });
};

// const readNameDogs = fs.readFile(
//   /**При помощи callback */
//   './dist/text/dogs.txt',
//   'utf-8',
//   (err: Error, data: string) => {
//     console.log(data);
//     superagent
//       .get(`https://dog.ceo/api/breed/${data}/images/random`)
//       .end((err, res) => {
//         console.log(res.body);
//         fs.writeFile('./dist/text/dog-images.txt', res.body.message, (err) => {
//           console.log('new file created');
//         });
//       });
//   }
// );
/**При помощи promises */
// readfilePro('./dist/text/dogs.txt')
//   .then((data) => {
//     return superagent.get(`https://dog.ceo/api/breed/${data}/images/random`);
//   })
//   .then((res) => {
//     console.log(res.body);
//     return writeFilePro('./dist/text/dog-images.txt', res.body.message);
//   })
//   .catch((err) => {
//     console.log(err.message);
//   });
/**Async await */
const getDogPig = async () => {
  try {
    const data = await readfilePro('./dist/text/dogs.txt');
    const res1 = await superagent.get(
      `https://dog.ceo/api/breed/${data}/images/random`
    );
    const res2 = await superagent.get(
      `https://dog.ceo/api/breed/${data}/images/random`
    );
    const res3 = await superagent.get(
      `https://dog.ceo/api/breed/${data}/images/random`
    );
    const all = await Promise.all([res1, res2, res3]);
    let imgs = all.map((el) => el.body.message);
    console.log(res1.body);
    await writeFilePro('./dist/text/dog-images.txt', imgs.join('\n'));
    console.log('created file');
  } catch (err) {
    console.log(err);
  }
};
getDogPig();
