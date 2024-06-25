const express = require('express');
const router = express.Router();

const {
    createBlog,
    getAllBlog,
    getBlog,
} = require('../controllers/controller');

router.route('/').get(getAllBlog).post(createBlog);
router.route('/:id').get(getBlog);

module.exports = router;
