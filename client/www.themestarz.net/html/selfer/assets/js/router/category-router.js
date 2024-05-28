//sual 2-menasi nedir?

const generateResponse = require("../utils/responseGenerator");

const { HTTP_METHODS } = request("../utils/enums.js");

const handleCategoryRouter = (req, res) => {
  const { method } = req;
  switch (method) {
    case HTTP_METHODS.GET:
       categoryController.getAllCategories(req,res);
        break;
  }
}
module.exports={handleCategoryRouter};
//end sual 2