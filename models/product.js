const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "please provide product name"],
    trim: true,
    maxlength: [120, "Product name should not be more than 120 characters"],
  },
  author: {
    type: String,
    required: [true, "please provide product name"],
    trim: true,
    maxlength: [40, "Author name should not be more than 40 characters"],
  },
  price: {
    type: Number,
    required: [true, "please provide product price"],
    maxlength: [6, "Product price should not be more than 6 digits"],
  },
  description: {
    type: String,
    required: [true, "please provide product description"],
  },
  photo: [
    {
      id: {
        type: String,
        required: true,
      },
      secure_url: {
        type: String,
        required: true,
      },
    },
  ],
  category: {
    type: String,
    required: [
      true,
      "please select category ONLY from - contemporary fiction, fiction, non fiction, acedemic book, children's book, poetry, short stories, quotes book ",
    ],
    enum: {
      values: ["contemporaryfiction", "fiction", "nonfiction", "acedemicbook", "childrensbook", "poetry", "shortstories", "quotesstories"],
      message:
        "please select category ONLY from - contemporary fiction, fiction, non fiction, acedemic book, childrens book, poetry, short stories, quotes book ",
    },
  },
  //this field was updated in order videos later
  stock: {
    type: Number,
    required: [true, "please add a number in stock"],
  },
  
  ratings: {
    type: Number,
    default: 0,
  },
  numberOfReviews: {
    type: Number,
    default: 0,
  },
  reviews: [
    {
      user: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      rating: {
        type: Number,
        required: true,
      },
      comment: {
        type: String,
        required: true,
      },
    },
  ],
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Product", productSchema);
