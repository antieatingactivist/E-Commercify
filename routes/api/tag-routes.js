const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  const tagData = await Tag.findAll({
    include: [{ model: Product}]
  });
  res.json(tagData);
  // find all tags
  // be sure to include its associated Product data
});

router.get('/:id', async (req, res) => {
  const tagData = await Tag.findByPk(req.params.id, {
    include: [{ model: Product}]
  });
  res.json(tagData);
  // find a single tag by its `id`
  // be sure to include its associated Product data
});

router.post('/', (req, res) => {
  // create a new tag
  Tag.create({
    tag_name: req.body.name
  });
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  Tag.update(
    {
      tag_name: req.body.name
    },
    {
      where: {
        id: req.params.id
      }
    }
  );
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  Tag.destroy({
    where: {
      id: req.params.id
    }
  });
});

module.exports = router;
