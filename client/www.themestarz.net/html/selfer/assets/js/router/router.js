//1-Ne ucun??
const urls = require("../utils/url_helper");
const categoryController=require("../controllers/category-controller")
const categoryRouter = require("./category-router");
const handleRoute = (req, res) => {
  const { method, url } = req;
  switch (url) {
    case urls.CATEGORY_ENDPOINT:
      categoryRouter.handleCategoryRouter(req, res);
      break;
    default:
        generateResponse(res,404,"Not Found");
  }
};
module.exports = { handleRoute };
