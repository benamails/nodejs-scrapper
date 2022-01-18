const Receipt = require('../models/receipt')

exports.createReceipt = (req, res, next) => {
  const receipt = new Receipt({
    _id: req.params.id,
    title: req.body.title,
    tags: req.body.tags,
    imageUrl: req.body.imageUrl,
    intro: req.body.intro,
    ingredients: req.body.ingredients,
    steps: req.body.steps
  });
  receipt.save().then(
    () => {
      res.status(201).json({
        message: 'Receipt saved successfully!'
      });
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};

exports.getOneReceipt = (req, res, next) => {
  Receipt.findOne({
    _id: req.params.id
  }).then(
    (receipt) => {
      res.status(200).json(receipt);
    }
  ).catch(
    (error) => {
      res.status(404).json({
        error: error
      });
    }
  );
};

exports.modifyReceipt = (req, res, next) => {
  const receipt = new receipt({
    _id: req.params.id,
    title: req.body.title,
    tags: req.body.tags,
    imageUrl: req.body.imageUrl,
    intro: req.body.intro,
    ingredients: req.body.ingredients,
    steps: req.body.steps
  });
  Receipt.updateOne({_id: req.params.id}, receipt).then(
    () => {
      res.status(201).json({
        message: 'receipt updated successfully!'
      });
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};

exports.deleteReceipt = (req, res, next) => {
  receipt.deleteOne({_id: req.params.id}).then(
    () => {
      res.status(200).json({
        message: 'Deleted!'
      });
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};

exports.getAllReceipt = (req, res, next) => {
  Receipt.find().then(
    (receipts) => {
      res.status(200).json(receipts);
    }
  ).catch(
    (error) => {
      res.status(404).json({
        error: error
      });
    }
  );
};
