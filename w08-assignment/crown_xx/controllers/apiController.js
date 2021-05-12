const Categoriesser = require('./server/categoriesser');

exports.getcategory = async () => {
    try(
        const data = await Categoriesser.fetchcategories();
        res.json(data);  
    )catch(err){
        res.status(404).json(error);
    }
};
  