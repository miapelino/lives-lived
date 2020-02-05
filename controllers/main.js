const getTableData = (req, res, db) => {
  db.select('*').from('lives')
    .then(items => {
  	  if(items.length){
  	  res.json(items)
			} else {
				res.json({dataExists: 'false'})
			}
  	})
  	.catch(err => res.status(400).json({dbError: 'db error'}))
}

const postTableData = (req, res, db) => {
	let { life, title, medium } = req.body
	medium = "book"
	const added = new Date().toISOString().slice(0, 10)
	db('lives').insert({life, title, medium})
	  .returning('*')
	  .then(item => {
	  	res.json(item)
	  })
	  .catch(err => res.status(400).json({dbError: 'db error'}))
}

const putTableData = (req, res, db) => {
	const { id, life, title, medium } = req.body
	db('lives').where({id}).update({life, title, medium})
		.returning('*')
	  .then(item => {
	  	res.json(item)
	  })
	  .catch(err => res.status(400).json({dbError: 'db error'}))
}

const deleteTableData = (req, res, db) => {
  const { id } = req.body
  db('lives').where({id}).del()
    .then(() => {
      res.json({delete: 'true'})
    })
    .catch(err => res.status(400).json({dbError: 'db error'}))
}

const getQuoteData = (req, res, db) => {
	db.select('*').from('quotes')
		.then(quotes => {
			if(quotes.length) {
				res.json(quotes)
			} else {
				res.json({dataExists: 'false'})
			}
		})
		.catch(err => res.status(400).json({dbError: 'db error'}))
}

module.exports = {
  getTableData,
  postTableData,
	putTableData,
	deleteTableData,
	getQuoteData
}