const express = require('express');
const router = express.Router();

const receiptCtrl = require('../controllers/receipt')
const receiptRoutes = require('../routes/receipt');


router.get('/', receiptCtrl.getAllReceipt);
router.post('/', receiptCtrl.createReceipt);
router.get('/:id', receiptCtrl.getOneReceipt);
router.put('/:id', receiptCtrl.modifyReceipt);
router.delete('/:id', receiptCtrl.deleteReceipt);

module.exports = router;
