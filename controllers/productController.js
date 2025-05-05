const Product = require('../models/product');

/*    FEATURES
1. get all the products
2. get a product by id
3. create a product
4. update a product
5. delete a product
*/

const getAllProducts = async(req,res) =>{
    try {
        const products = await Product.find();
        if (!products) {
            res.status(404).json({
                success: false,
                message: "No product found"
            })
        }
        
        res.status(200).json({
            success: true,
            message: "Successfully fetched all the products",
            data: products
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        })
    }
};

const getProductById = async(req,res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            res.status(404).json({
                success: false,
                message: "No product found"
            })
        }
        res.status(200).json({
            success: true,
            message: "Successfully fetched the product",
            data: product
        });
        
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        })
    }
};

const createProduct = async(req,res) => {
    try {
        const newProduct = new Product ({
            ...req.body
        });

        if(!newProduct){
            res.status(404).json({
                success: false,
                message: "Failed to create a new product"
            })
        };

        await newProduct.save();

        res.status(200).json({
            success: true,
            message: "successfully created the new product"
        });

    } catch(error) {
        res.status(500).json({
            success: false,
            message: "Internal Server error"
        })
    }
};

const updateProduct = async(req,res) => {
    try {
        const updatedata = req.body;
        const product = await Product.findByIdAndUpdate(
            req.params.id,
            updatedata,
            {new:true}
        );

        if(!product){
            res.status(404).json({
                success: false,
                message: "Failed to update data"
            })
        };

        res.status(200).json({
            success: true,
            message: "Successfully updated the product data"
        })
    } catch(error) {
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        })
    }
};

const deleteProduct = async(req,res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);

        if(!product) {
            res.status(404).json({
                success: false,
                message: "Failed to delete product"
            })
        }

        res.status(200).json({
            success: true,
            message: "Successfully deleted the product"
        });

    } catch(error) {
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        })
    }
}

module.exports = {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
};