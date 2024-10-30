const express = require("express"); // Corrected the module name
const router = express.Router();
const supplierController = require("../controllers/controllerSupplier");

// Fungsi dan Rute Index digunakan untuk memanggil semua data dalam database mongodb
router.get("/supplier", supplierController.index);
router.post("/supplier/insert", supplierController.insert);
module.exports = router;