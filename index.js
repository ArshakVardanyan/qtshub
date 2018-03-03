var express = require('express')
var path = require('path')
var PORT = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080,
var IP   = process.env.IP   || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0',
	
express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('index'))
  .listen(PORT, IP, () => console.log(`Listening on ${ PORT }`))
