const express = require('express')
const router = express.Router()
const checkLogin = require('../middlewares/check').checkLogin

// POST /comments 创建一条留言
router.post('/', checkLogin, function (req, res, next) {
  res.send('创建留言')
})


router.get('/', function (req, res, next) {
    res.send('创建留言--get')
})

router.get('/hello', function (req, res, next) {
    res.send('创建留言--hello')
})

router.get('/hello/baby', function (req, res, next) {
    res.send('创建留言--hello,baby')
})


// GET /comments/:commentId/remove 删除一条留言
router.get('/:commentId/remove', checkLogin, function (req, res, next) {
  res.send('删除留言')
})

module.exports = router