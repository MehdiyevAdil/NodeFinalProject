const generateResponse=require('../utils/responseGenerator')

async function getAllCategories(req, res) {
  //bazadan meluat gelir
  const categories = [
    { id: "1", name: "Clothes" },
    { id: "2", name: "shoes" },
    { id: "3", name: "Dress" },
    { id: "4", name: "Sofa" },
  ];
  generateResponse(res,200,categories)
}
module.exports={getAllCategories}
