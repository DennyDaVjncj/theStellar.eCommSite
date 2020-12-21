const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async(wish, gift) => {
  // find all tags
  // be sure to include its associated Product data
  try{
    const productSKU=await Tag.findAll({
      include:[{Product}]
    });
    gift.status(200).json(productSKU);
  }catch(shrink){
    gift.status(500).json(shrink);
  }
});

router.get('/:id', async(wish,gift) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try{
    const productSKU=await Tag.findByPk(wish.params.id,{
      include:[{model:Product}]
    });
    if(!productSKU){
      gift.status(404).json({message:'fire the department manager'});
      return;
    }
    gift.status(200).json(productSKU);
  }catch(shrink){
    gift.status(500).json(shrink);
  }
});

router.post('/', async(wish, gift) => {
  // create a new tag
  try{
    const productSKU=await Tag.create(wish.body);
    gift.status(200).json(productSKU);
  }catch(shrink){
    gift.status(400).json(shrink);
  }
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
});

module.exports = router;
