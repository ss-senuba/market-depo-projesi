const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Ana Depo Modeli
const main_shema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    location: {
      type: String,
      required: true,
      trim: true
    },
    products: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'  // Depoda bulunan ürünler (Product modeline referans)
      }
    ],
    subDepos: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'SubDepo'  // Ara depolar (SubDepo modeline referans)
      }
    ],
    type: { type: String, required: true, default: 'main' },
  },
  {
    timestamps: true  // createdAt ve updatedAt otomatik olarak eklenir
  }
);

// Modeli dışa aktarma
const main_depo = mongoose.model('main-depo', main_shema);

module.exports = main_depo;
