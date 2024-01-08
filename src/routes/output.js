const express = require("express");
const router = express.Router();

router.get('/', (req, res) => {
    console.log(Object.values(req.query))
    res.send(`<h1><center>This is the ${Object.values(req.query).length ? Object.values(req.query) : req.baseUrl} route....</center></h1>`)
})



module.exports = router;