const Ingredient = require('../models/ingredient');

// exports.postIngredient = async (ctx) => {
//   try {
//     console.log(ctx.request.body);

//     let banana = await Ingredient.insertMany(ctx.request.body);
//     console.log(banana)
//     ctx.body = banana
//     console.log(ctx.body);
//     ctx.status = 201;    
//   } catch (error) {
//     ctx.status = 500;
//     console.error(error);
//   }
// };

exports.getIngredients = async (ctx) => {
  try {
    const ingredients = await Ingredient.find();
    ctx.body = ingredients;    
    ctx.status = 200;    
  } catch (error) {
    ctx.status = 500;
    console.error(error);
  }
};