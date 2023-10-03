const mongoose = require("mongoose")
const Schema = mongoose.Schema

const MenuItemsSchema = new Schema(
  {
    "name": { type: String },
    "description": { type: String },
    "ingridients": { type: Number },
    "restaurantId": { type: String },
    "image": { type: String },
    "qty": { type: Number },
    "price": { type: Number }
  }
)

const MenuItemsModel = mongoose.model("meali", MenuItemsSchema, "MenuItems")

module.exports = MenuItemsModel

/*

Restaurats Collection restaurant name:-

name = Domino's       --> id = 64c6a30b974df5c49afa99a5
name = KFC            --> id = 64c6a30b974df5c49afa99a6
name = Burger King    --> id = 64c6a30b974df5c49afa99a7
name = Baba Ka Dhaba  --> id = 64c6a30b974df5c49afa99a8

Now replace this id in meniitems json data and then insert in mongodb compas:-

*/
/*
for domino restaurant id replace all pizza items restaurant id
so,
Restaurant ----------rest_id--------->MenuItems

[
  {
    "name": "Kadhai Paneer",
    "description": "Made with paneer and some quick spicy content like chilly and flakes.",
    "ingridients": ["Paneer", "Tomato"],
    "restaurantId": "64c6a30b974df5c49afa99a8",
    "image": "assets/breakfast.jpg",
    "qty": 0,
    "price": "200"
  },
  {
    "name": "Butter Paneer",
    "description": "Made with paneer and some quick spicy content like chilly and flakes.",
    "ingridients": ["Paneer", "Tomato"],
    "restaurantId": "64c6a30b974df5c49afa99a8",
    "image": "assets/breakfast.jpg",
    "qty": 0,
    "price": "230"
  },
  {
    "name": "Butter Chicken ",
    "description": "Made with paneer and some quick spicy content like chilly and flakes.",
    "ingridients": ["Paneer", "Tomato"],
    "restaurantId": "64c6a30b974df5c49afa99a83",
    "image": "assets/snacks.png",
    "qty": 0,
    "price": "420"
  },
  {
    "name": "Margerita",
    "description": "Made with paneer and some quick spicy content like chilly and flakes.",
    "ingridients": ["Paneer", "Tomato"],
    "restaurantId": "64c6a30b974df5c49afa99a5",
    "image": "assets/drinks.png",
    "qty": 0,
    "price": "299"
  },
  {
    "name": "Cheese Pizza",
    "description": "Made with paneer and some quick spicy content like chilly and flakes.",
    "ingridients": ["Paneer", "Tomato"],
    "restaurantId": "64c6a30b974df5c49afa99a5",
    "image": "assets/drinks.png",
    "qty": 0,
    "price": "199"
  },
  {
    "name": "Evergreen Chicken Pizza",
    "description": "Made with paneer and some quick spicy content like chilly and flakes.",
    "ingridients": ["Paneer", "Tomato"],
    "restaurantId": "64c6a30b974df5c49afa99a5",
    "image": "assets/drinks.png",
    "qty": 0,
    "price": "265"
  },
  {
    "name": "Chicken Bucket 8 Pcs",
    "description": "Made with paneer and some quick spicy content like chilly and flakes.",
    "ingridients": ["Paneer", "Tomato"],
    "restaurantId": "64c6a30b974df5c49afa99a6",
    "image": "assets/dinner.png",
    "qty": 0,
    "price": "799"
  },
  {
    "name": "Chicken Bucket 4 Pcs",
    "description": "Made with paneer and some quick spicy content like chilly and flakes.",
    "ingridients": ["Paneer", "Tomato"],
    "restaurantId": "64c6a30b974df5c49afa99a6",
    "image": "assets/dinner.png",
    "qty": 0,
    "price": "399"
  },
  {
    "name": "Chicken Bucket 16 Pcs",
    "description": "Made with paneer and some quick spicy content like chilly and flakes.",
    "ingridients": ["Paneer", "Tomato"],
    "restaurantId": "64c6a30b974df5c49afa99a6",
    "image": "assets/dinner.png",
    "qty": 0,
    "price": "999"
  },
  {
    "name": "Veg Cheese Burger",
    "description": "Made with paneer and some quick spicy content like chilly and flakes.",
    "ingridients": ["Paneer", "Tomato"],
    "restaurantId": "64c6a30b974df5c49afa99a7",
    "image": "assets/dinner.png",
    "qty": 0,
    "price": "99"
  },
  {
    "name": "Chicken Burger",
    "description": "Made with paneer and some quick spicy content like chilly and flakes.",
    "ingridients": ["Paneer", "Tomato"],
    "restaurantId": "64c6a30b974df5c49afa99a7",
    "image": "assets/dinner.png",
    "qty": 0,
    "price": "149"
  }
]
*/











