//requiring = loading mongoose module.
const mongoose = require("mongoose");

//connecting to localhost and creating 'fruits' database.
mongoose.connect("mongodb://localhost:27017/fruitsDB", {useNewUrlParser: true});

//creating a blueprint(=skeleton) which will be followed by each collection.
const fruitSchema = new mongoose.Schema({
  name: String,
  rating: {
    type: Number,
    min: 1,
    max: 10
  },
  review: String
});

//loading the blueprint "fruitSchema" into a "Fruits" model(=creating the collection).
//mongoose automatically converts the name of the collection to its plural form.
const Fruit = mongoose.model("Fruit", fruitSchema);

//creating data to put fruits collection
const fruit = new Fruit({
  name: "peach",
  rating: 9,
  review: "pretty great"
});

////saving it inside the collection
fruit.save();

//creating a blueprint for 'people' collection
const personSchema = new mongoose.Schema({
  name: String,
  age: Number
});

//creating the 'people' collection
const Person = mongoose.model("Person", personSchema)

//creating data which is to be added in 'people' collection
const john = new Person({
  name: "john",
  age: 23
});

////saving it in 'people' collection
//john.save()

// //creating kiwi data for fruits collection
// const kiwi = new Fruit({
//   name: "kiwi",
//   rating: 6,
//   review: "awesome!"
// })
//
// //creating orange data for fruits collection
// const orange = new Fruit({
//   name: "orange",
//   rating: 7,
//   review: "okay"
// })
//
// //creating banana data for fruits collection
// const banana = new Fruit({
//   name: "banana",
//   rating: 8,
//   review: "just nutritious."
// })

////saving the 3 datas simultaneously into fruits collection
// Fruit.insertMany([kiwi, orange, banana], function(err){
//   if (err){
//     console.log(err);
//   }
//   else {
//     console.log("successfully saved all the fruits to fruitsDB");
//   }
// });

//code snipet to find the data of fruits using mongoose
Fruit.find(function(err, fruits){
  if(err){
    console.log(err);
  }
  else{
    //console.log(fruits);
      fruits.forEach(function(fruit){
      console.log(fruit.name);

    });

    }

});
