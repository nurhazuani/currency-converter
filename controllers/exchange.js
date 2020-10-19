var Model = require('../models')

const exchange = {

     getAllExchange: async (req, res) => {
        let exchange = []
        // console.log(res)
		try {
            exchange = await Model.Exchange.findAll()
		} catch(e) {
				console.log(e)
		}

		res.json(exchange)
    },

    getExchange: async (req, res) => {
        let exchange = []
        
        // console.log(req)

		try {
			exchange = await Model.Exchange.findOne({
				where: {
					id: req.params.id
				}
			})
		} catch(e) {
				console.log(e)
		}

		res.json(exchange)
	},

    createExchange: async (req, res) => {
        let exchange = {}

        // console.log(req)

        try{
            exchange = await Model.Exchange.create({
                country: req.body.country,
                code: req.body.code,
                rate: req.body.rate,
                flag: req.body.flag
            })
        } catch(e){
            console.log(e)
        }
        res.json(exchange) //insert data in DB s
    },

    updateExchange: async (req, res) => {
        let exchange = {}

        try{
            exchange = await Model.Exchange.update(
                req.body, {
                    where:{
                        id: req.params.id
                    }

            })

        }catch(e){
            console.log(e)
        }
        res.json(exchange)

    },

    deleteExchange: async (req,res) => {

        await Model.Exchange.destroy({
			where: {
				id: req.params.id
			}	
		})

		res.status(204).json({
			status: 'Success Delete'
		})
    }
}


module.exports = exchange