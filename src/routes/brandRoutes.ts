import { Router } from 'express';
import Brand from '../models/Brand';

const router = Router();

router.get('/brands', async (req, res) => {
  const { sort, published } = req.query;

  let query = published ? { published: published === 'true' } : {};
  let brands = await Brand.find(query);

  if (sort === 'alphabetical') {
    brands = brands.sort((a, b) => a.name.localeCompare(b.name));
  }

  res.json(brands);
});

export default router;
