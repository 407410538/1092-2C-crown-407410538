const Category = require('../../models/categoryModel_xx');

exports.fetchcategories = async (req, res) => {
    try{
        const [rows] = await Category.fetchAll();
        return rows;
    }catch(err){
        return {message: error on fetchcategory};
    }
};