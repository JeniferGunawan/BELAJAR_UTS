const mongoose = require('mongoose');

const supplierSchema = new mongoose.Schema({
    nama_supplier:{
        type: String,
    },

    alamat :{
        type: String,
    },

    kontak:{
        type: String,
    },

    email:{
        type: String,
    },

    tanggal_mendaftar:{
        type: Date,
    },
});
const Supplier = mongoose.model ('Supllier', supplierSchema);
module.exports = Supplier;