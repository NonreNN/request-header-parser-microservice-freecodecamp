const express = require('express');
const app = express();

const parenthesesReg = /\(([^)]+)\)/;
 

app.get('/', function (req, res) {
    let ip = req.headers['x-forwarded-for'].split(',');
    let software = req.get('User-Agent').match(parenthesesReg);
    let language = req.get('Accept-Language').split(',');
    res.json({
        ipaddress :  ip[0],
        language : language[0], 
        software : software[1]
	})
})

app.listen(process.env.PORT);
