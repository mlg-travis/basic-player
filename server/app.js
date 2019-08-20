const express 		= require('express');
const path 			= require('path');
const router 		= express.Router();
const app 			= express();
const port 			= 3000;

router.route('/').get((req, res) => {
    res.sendFile(path.join(__dirname, './views/index.html'));
});

router.route('/src/:asset').get((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', "*");
    res.sendFile(path.join(__dirname, '../dist/src/' + req.params.asset));
});

app.use(router);

app.listen(port, function() {
	return console.log(`server is listening on ${port}`);
});
