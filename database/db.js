const mongoose = require("mongoose");
const connectdb = () => {
  mongoose.set("strictQuery", false);
  mongoose.connect('mongodb+srv://verma_99:firstecommercehai@cluster0.mfuuhm2.mongodb.net/?retryWrites=true&w=majority').then(() => {
    console.log("db connect successfully..");
  });
  // .catch((err) => {
  //   console.log(err); // commeted this because we want to unhandled promice rejuction
  // });
};
module.exports = connectdb;
