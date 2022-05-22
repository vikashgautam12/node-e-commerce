const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()


// get seller
const getSellers =  async (req, res) => {
    try {
      const resp = await prisma.seller.findMany({})
      res.status(200).json({ msg: "Success", data: resp});
    } catch (err) {
      console.log(err);
      res.status(400).json({ msg: err.message, data: err.data});
    }
  }


// create seller
const createSellers =  async (req, res) => {
    console.log("create seller running");
    console.log(req.body);
    const { name, email, gstNumber, phoneNumber } = req.body;

    try{
        const seller = await prisma.seller.create({
            data: {
                name, email, gstNumber, phoneNumber
            },
          })
          res.status(200).json({ msg: "Successfully Added seller!"});

    }
    catch(err){
        console.log(err);
        res.status(400).json({ msg: err.message, data: err.data});
    }
}


// delete seller
const deleteSellers = async (req, res) => {
    console.log("Initiating create seller")
    // console.log(req.body);
    // console.log("sdfghjk");
    // id = parseInt(req.params.id)
    // console.log(id);
    try{
        const deleteUser = await prisma.seller.deleteMany
        ({
            where: {
                email: {
                    contains: 'p@gmail.com',
                  },
                  gstNumber:{
                    contains:"1234"
                  }

            },
          })
          res.status(400).json({
            msg: `Successfully deleted all`
              

          })

    }
    catch(err){
        console.log(err);

    }

}



module.exports = {
    getSellers,createSellers,deleteSellers
}
