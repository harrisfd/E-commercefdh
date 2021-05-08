const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint
//This is endpoint is /api/categories
router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  Category.findAll({
    include: [Product]
  })
    .then(categorydata => {
      res.json(categorydata)
    })
    .catch(err => {
      res.status(500).json(err)
    })
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  const id = req.params.id
  Category.findOne({
    where: {
      id: id
    }
  })

    .then(tagdata => {
      res.json(tagdata)
    })
    .catch(err => {
      res.status(500).json(err)
    });
})
router.post('/', (req, res) => {
  // create a new category
  Category.create({
    category_name: req.body.category_name
  })

  .then(tagdata => {
    res.json(tagdata)
  })
  .catch(err => {
    res.status(500).json(err)
  });
})
router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update({
    category_name: req.body.category_name
  }, {
    where: {
      id: req.params.id
    }
  })

  .then(tagdata => {
    res.json(tagdata)
  })
  .catch(err => {
    res.status(500).json(err)
  });
})
router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where: {
      id: req.params.id 
    }
  })

  .then(tagdata => {
    res.json(tagdata)
  })
  .catch(err => {
    res.status(500).json(err)
  });
})
module.exports = router;
