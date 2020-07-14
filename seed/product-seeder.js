var Product = require('../models/product');
var mongoose = require('mongoose');
mongoose.connect("mongodb+srv://taher:github@cluster0.77i05.mongodb.net/shopping-cart",
   // mongoose.connect("mongodb://localhost:27017/shopping-cart",
   { useNewUrlParser: true })
   .then(() => { console.log("DataBase Connected") })
   .catch((error) => { console.log("DataBase Not Connected" + error) });

var products = [
         new Product({
            imagePath: 'https://i.imgur.com/CjzipPTl.jpg',
            title: 'Dell Laptop',
            description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.Aenean commodo ligula eget dolor.Aenean massa.Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.Donec quam felis, ultricies nec, pellentesque',
            price: 400
         }),
         new Product({
            imagePath: 'https://i.imgur.com/OiJYbuBl.jpg',
            title: 'Laptop',
            description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.Aenean commodo ligula eget dolor.Aenean massa.Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.Donec quam felis, ultricies nec, pellentesque',
            price: 700
         }),
         new Product({
            imagePath: 'https://i.imgur.com/FPEDSoBl.jpg',
            title: 'Desktop Computer',
            description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.Aenean commodo ligula eget dolor.Aenean massa.Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.Donec quam felis, ultricies nec, pellentesque',
            price: 500
         }),
         new Product({
            imagePath: 'https://i.imgur.com/ZMrJYsul.jpg',
            title: 'Android Phone',
            description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.Aenean commodo ligula eget dolor.Aenean massa.Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.Donec quam felis, ultricies nec, pellentesque',
            price: 100
         }),
         new Product({
            imagePath: 'https://i.imgur.com/lZl6QjCl.jpg',
            title: 'Android Phone',
            description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.Aenean commodo ligula eget dolor.Aenean massa.Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.Donec quam felis, ultricies nec, pellentesque',
            price: 80
         }),
         new Product({
            imagePath: 'https://i.imgur.com/eAwumKFl.jpg',
            title: 'Camera',
            description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.Aenean commodo ligula eget dolor.Aenean massa.Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.Donec quam felis, ultricies nec, pellentesque',
            price: 200
         }),
         new Product({
            imagePath: 'https://i.imgur.com/mftClBal.jpg',
            title: 'Processor',
            description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.Aenean commodo ligula eget dolor.Aenean massa.Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.Donec quam felis, ultricies nec, pellentesque',
            price: 250
         }),
         new Product({
            imagePath: 'https://i.imgur.com/VOygi01l.jpg',
            title: 'RAM',
            description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.Aenean commodo ligula eget dolor.Aenean massa.Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.Donec quam felis, ultricies nec, pellentesque',
            price: 80
         }),
         new Product({
            imagePath: 'https://i.imgur.com/UZ51ytwl.jpg',
            title: 'Processor',
            description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.Aenean commodo ligula eget dolor.Aenean massa.Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.Donec quam felis, ultricies nec, pellentesque',
            price: 400
         }),
         new Product({
            imagePath: 'https://i.imgur.com/Tk1IDgYl.jpg',
            title: 'Android Phone',
            description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.Aenean commodo ligula eget dolor.Aenean massa.Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.Donec quam felis, ultricies nec, pellentesque',
            price: 600
         }),
         new Product({
            imagePath: 'https://i.imgur.com/rlco7nkl.jpg',
            title: 'DSLR Camera',
            description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.Aenean commodo ligula eget dolor.Aenean massa.Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.Donec quam felis, ultricies nec, pellentesque',
            price: 450
         }),
         new Product({
            imagePath: 'https://i.imgur.com/pZ4BHkRl.jpg',
            title: 'Headphone',
            description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.Aenean commodo ligula eget dolor.Aenean massa.Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.Donec quam felis, ultricies nec, pellentesque',
            price: 50
         }),
         new Product({
            imagePath: 'https://i.imgur.com/HzX8O0el.jpg',
            title: 'iPhone',
            description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.Aenean commodo ligula eget dolor.Aenean massa.Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.Donec quam felis, ultricies nec, pellentesque',
            price: 900
         }),
         new Product({
            imagePath: 'https://i.imgur.com/SbHTNHGl.jpg',
            title: 'Headphone',
            description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.Aenean commodo ligula eget dolor.Aenean massa.Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.Donec quam felis, ultricies nec, pellentesque',
            price: 90
         }),
         new Product({
            imagePath: 'https://i.imgur.com/Bf26Fs7l.jpg',
            title: 'Headphone',
            description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.Aenean commodo ligula eget dolor.Aenean massa.Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.Donec quam felis, ultricies nec, pellentesque',
            price: 400
         }),
         new Product({
            imagePath: 'https://i.imgur.com/c7vehiZl.jpg',
            title: 'DSLR Camera',
            description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.Aenean commodo ligula eget dolor.Aenean massa.Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.Donec quam felis, ultricies nec, pellentesque',
            price: 400
         }),


   ];

   var done = 0;
   for (let product of products ) {
      product.save((err, result) => {
         done++;
         if(done === products.length) {
            exit();
         }
      });
   }

function exit() {
      mongoose.disconnect();
      console.log('disconnect')
   }

