import { model, Schema } from "mongoose";
import { formatDateToDefault } from "../helpers/helpers.js";

const recipeSchema = new Schema({
  // TODO: write the schema
  title:{type:String,
    unique:true,
  },
  level:{type:String,
  enum:["Easy Peasy", "Amateur Chef", "UltraPro Chef"]},
  ingredients:[String],
  cuisine:{type:String,
  required:true},
  dishType:{type:String,
  enum:["breakfast", "main_course", "soup", "snack", "drink", "dessert", "other"]},
  image:{type:String,
    default:"https://images.media-allrecipes.com/images/75131.jpg"
  },
  duration:{type:Number,
  min:0},
  creator:{type:String},
  created:{type:Date,
    default:formatDateToDefault(Date.now())
    }
});

const Recipe = model('Recipe', recipeSchema);

export default Recipe;
