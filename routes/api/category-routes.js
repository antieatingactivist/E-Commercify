const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  const catagoriesData = await Category.findAll({
    include: [{ model: Product}]
  });
  res.json(catagoriesData);
  // find all categories
  // be sure to include its associated Products
});

router.get('/:id', (req, res) => {
  const catagoriesData = await Category.findByPk(req.params.id ,{
    include: [{ model: Product}]
  });
  // find one category by its `id` value
  // be sure to include its associated Products
});

router.post('/', (req, res) => {
  // create a new category
  Category.create({
    category_name: req.body.name
  });
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(
    {
      category_name: req.body.name
    },
    {
      where: {
        id: req.params.id
      }
    }
  );
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({ 
    where: {
      id: req.params.id
    }
  })
});

module.exports = router;
