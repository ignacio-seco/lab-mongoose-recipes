import { connect } from './config/db.config.js';
import Recipe from './models/Recipe.model.js';
import origindata from './data.json' assert { type: 'json' };
import { disconnect } from 'mongoose';

const data = origindata;
connect()
  .then((x) => Recipe.deleteMany())
  .then((x) => Recipe.insertMany(data))
  .then((x) =>
    Recipe.findOneAndUpdate(
      { title: 'Rigatoni alla Genovese' },
      { duration: 100 },
      { new: true, runValidators: true }
    )
  )
  .then((x) => Recipe.deleteOne({ title: 'Carrot Cake' }))
  .then((x) => disconnect())
  .catch((err) => console.log(err));
