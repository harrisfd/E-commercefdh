const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  Tag.findAll({
    include: [Product]
  })
    .then(tagdata => {
      res.json(tagdata)
    })
    .catch(err => {
      res.status(500).json(err)
    })
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  const id = req.params.id
  Tag.findOne({
    where: {
      id: id
      //first id is pointing tag tab 2nd id is about the variable declared above
    }
  })
    .then(tagdata => {
      res.json(tagdata)
    })
    .catch(err => {
      res.status(500).json(err)
    })
});

router.post('/', (req, res) => {
  // create a new tag (add something to our database)
  Tag.create({
    tag_name: req.body.tag_name
    //shortcut: req.body
  })
    .then(tagdata => {
      res.json(tagdata)
    })
    .catch(err => {
      res.status(500).json(err)
    })
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  const id = req.params.id
  Tag.update({
    tag_name: req.body.tag_name
  }, {
    where: {
      id: id
      //first id is pointing tag tab 2nd id is about the variable declared above
    }
  })
.then(tagdata => {
  res.json(tagdata)
})
.catch(err => {
  res.status(500).json(err)
})
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  const id = req.params.id
  Tag.destroy({
    where: {
      id: id
      //first id is pointing tag tab 2nd id is about the variable declared above
    }
  })
    .then(tagdata => {
      res.json(tagdata)
    })
    .catch(err => {
      res.status(500).json(err)
    })
});

module.exports = router;
