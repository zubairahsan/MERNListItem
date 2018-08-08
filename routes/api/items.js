const express = require('express');
const router = express.Router();


//Item Model
const Item = require('../../models/item');

//@route GET  api/items
//@desc Get All Items
//@access Public

router.get('/', (req, res) => {
    Item.find()
        .sort({ date: -1 })
        .then(items => { res.json(items) })
})

//@route POST  api/items
//@desc Create Item
//@access Public
router.post('/', (req, res) => {
    const newItem = new Item({
        name: req.body.name
    });
    newItem.save()
        .then(item => res.json(item))

})

//Update the Item

// router.put("/:id", (req, res) => {
//     var item = req.body;
//     var query = req.param.id;
//     var update = {
//         '$set': {
//             name: item.name
//         }
//     };
//     var option = { new: true };
//     Item.findOneAndUpdate(query, update, option)
//         .then((items) => {
//             res.json(items)
//         }).catch(err => res.json({ success: false }))
// })
// router.put('/:id', (req, res) => {
//     Item.findByIdAndUpdate(req.params.id,req.body)
//         .then(item => {

//              res.json(item)
//         })
//         .then(item => res.json({ success: true }))
//         .catch(err => res.status(404).json({ success: false }))

// })



//@route DELETE  api/items
//@desc DELETE Items
//@access Public

router.delete('/:id', (req, res) => {
    Item.findById(req.params.id)
        .then(item => item.remove())
        .then(item => res.json({ success: true }))
        .catch(err => res.status(404).json({ success: false }))

})
module.exports = router;