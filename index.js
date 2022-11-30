import { connect } from './config/db.config.js';
import Recipe from './models/Recipe.model.js';
import origindata from './data.json' assert { type: 'json' };
import { disconnect } from 'mongoose';

const data = origindata;
connect()
  .then((x) => Recipe.deleteMany())
  .then((x) =>
    Recipe.create({
      title: 'PopCorn',
      level: 'UltraPro Chef',
      ingredients: [
        '1/2 cup oil',
        '3 cups of Premium PopCorn Corn',
        '8 spoons of salt',
        '1 cup of melted butter',
        '2l of Coca-Cola (or Coca Cola Zero)',
      ],
      cuisine: 'Good',
      dishType: 'main_course',
      duration: 10,
      creator: 'Chef Ignacio',
    })
  )
  .then((x) => console.log(x.title))
  .then((x) => Recipe.insertMany(data))
  .then(async (x) => {
    try {
      let dbData = await Recipe.find();
      dbData.forEach((element) => {
        console.log(element.title);
      });
    } catch (err) {
      console.log(err);
    }
  })
  .then((x) =>
    Recipe.findOneAndUpdate(
      { title: 'Rigatoni alla Genovese' },
      { duration: 100 },
      { new: true, runValidators: true }
    )
  )
  .then((x) => console.log(`sucess ${x.title} is now updated on database`))
  .then((x) => Recipe.deleteOne({ title: 'Carrot Cake' }))
  .then((x) =>
    console.log(
      `sucess ${x} document is now out of our database, what a prick it was`
    )
  )
  .then((x) => disconnect())
  .catch((err) => console.log(err));
