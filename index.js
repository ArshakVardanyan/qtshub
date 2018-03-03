const express = require('express')
const path = require('path')
const PORT = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080,
const IP   = process.env.IP   || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0',
	
express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('index'))
  .listen(PORT, IP, () => console.log(`Listening on ${ PORT }`))
