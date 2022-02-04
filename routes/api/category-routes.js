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

router.get('/:id', async (req, res) => {
  const categoriesData = await Category.findByPk(req.params.id, {
    include: [{ model: Product}]
  });
  res.json(categoriesData);
  // find one category by its `id` value
  // be sure to include its associated Products
});

router.post('/', async (req, res) => {
  // create a new category
  const categoriesData = await Category.create({
    category_name: req.body.category_name,
  });
  res.json(categoriesData);
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  const categoriesData = await Category.update(
    {
      category_name: req.body.category_name,
    },
    {
      where: {
        id: req.params.id
      }
    }
  );
  res.json(categoriesData);
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  const categoriesData = await Category.destroy({ 
    where: {
      id: req.params.id
    }
  });
  res.json(categoriesData);
});

module.exports = router;
