"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProductInTopLevelCategory = exports.getProductByCategory = exports.updateProduct = exports.deleteProduct = exports.getProductById = exports.getAllProducts = exports.createProduct = void 0;
const uuid_1 = require("uuid");
const db_connection_1 = __importDefault(require("../Databasehelper/db-connection"));
const product_validate_1 = require("../helpers/product.validate");
const createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // validate product fields
        const product = {
            id: (0, uuid_1.v4)(),
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            created_at: new Date().toISOString(),
            category_id: req.body.category_id,
            product_image_url: req.body.product_image_url,
            recently_added: req.body.recently_added,
            featured: req.body.featured,
            is_deleted: req.body.is_deleted
        };
        const { error } = (0, product_validate_1.validateProduct)(product);
        if (error)
            return res.status(400).send(error.details[0].message);
        if (db_connection_1.default.checkConnection()) {
            const insertedProduct = yield db_connection_1.default.exec("InsertOrUpdateProduct", Object.assign({}, product));
            if (insertedProduct) {
                res.status(200).send(insertedProduct);
            }
            else {
                res.status(500).send("Error creating product");
            }
        }
        else {
            res.status(500).send("Error creating product");
        }
    }
    catch (error) {
        console.log(error);
        res.status(500).send("Error creating product");
    }
});
exports.createProduct = createProduct;
const getAllProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (db_connection_1.default.checkConnection()) {
            const products = yield db_connection_1.default.exec("GetAllProducts", {});
            if (products) {
                if (products.length > 0) {
                    res.status(200).send(products);
                }
                else {
                    res.status(200).send("No products found");
                }
            }
            else {
                res.status(500).send("Error getting products");
            }
        }
        else {
            res.status(500).send("Error getting products");
        }
    }
    catch (error) {
        res.status(500).send("Error getting products");
    }
});
exports.getAllProducts = getAllProducts;
const getProductById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        if (db_connection_1.default.checkConnection()) {
            const product = yield db_connection_1.default.exec("GetProductById", { id });
            if (product) {
                if (product.length > 0) {
                    res.status(200).send(product);
                }
                else {
                    res.status(200).send("No product found");
                }
            }
            else {
                res.status(500).send("Error getting product");
            }
        }
        else {
            res.status(500).send("Error getting product");
        }
    }
    catch (error) {
        res.status(500).send("Error getting product");
    }
});
exports.getProductById = getProductById;
const deleteProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        if (db_connection_1.default.checkConnection()) {
            const deletedProduct = yield db_connection_1.default.exec("DeleteProduct", { id });
            if (deletedProduct) {
                if (deletedProduct.length > 0) {
                    res.status(200).send(deletedProduct);
                }
                else {
                    res.status(200).send("No product found");
                }
            }
            else {
                res.status(500).send("Error deleting product");
            }
        }
        else {
            res.status(500).send("Error deleting product");
        }
    }
    catch (error) {
        res.status(500).send("Error deleting product");
    }
});
exports.deleteProduct = deleteProduct;
const updateProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const productToUpdate = yield db_connection_1.default.exec("GetProductById", { id });
        if (productToUpdate) {
            if (productToUpdate.length > 0) {
                const updated = Object.assign(Object.assign({}, productToUpdate), req.body);
                const { error } = (0, product_validate_1.validateProduct)(updated);
                if (error)
                    return res.status(400).send(error.details[0].message);
                if (db_connection_1.default.checkConnection()) {
                    const updatedProduct = yield db_connection_1.default.exec("InsertOrUpdateProduct", Object.assign({}, updated));
                    if (updatedProduct) {
                        res.status(200).send(updatedProduct);
                    }
                    else {
                        res.status(500).send("Error updating product");
                    }
                }
                else {
                    res.status(500).send("Error updating product");
                }
            }
            else {
                res.status(500).send("Error updating product");
            }
        }
    }
    catch (error) {
        res.status(500).send("Error updating product");
    }
});
exports.updateProduct = updateProduct;
const getProductByCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const category_id = req.params.category_id;
        if (db_connection_1.default.checkConnection()) {
            const products = yield db_connection_1.default.exec("GetProductByCategory", { category_id });
            if (products.length > 0) {
                res.status(200).send(products);
            }
            else {
                res.status(500).send({ message: "Error getting products" });
            }
        }
        else {
            res.status(500).send({ message: "Error getting products" });
        }
    }
    catch (error) {
        console.log(error);
        res.status(500).send({ message: "Error getting products" });
    }
});
exports.getProductByCategory = getProductByCategory;
const getProductInTopLevelCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const category_id = req.params.category_id;
        if (db_connection_1.default.checkConnection()) {
            const products = yield db_connection_1.default.exec("GetProductInTopLevelCategory");
            if (products.length > 0) {
                res.status(200).send(products);
            }
            else {
                res.status(500).send("Error getting  products");
            }
        }
        else {
            res.status(500).send("Error getting products");
        }
    }
    catch (error) {
        console.log(error);
        res.status(500).send("Error getting products");
    }
});
exports.getProductInTopLevelCategory = getProductInTopLevelCategory;
