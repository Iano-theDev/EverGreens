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
exports.getReviewByProductId = exports.deleteReview = exports.updateReview = exports.createReview = void 0;
const review_validate_1 = __importDefault(require("../helpers/review.validate"));
const uuid_1 = require("uuid");
const db_connection_1 = __importDefault(require("../Databasehelper/db-connection"));
const createReview = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const review = {
            id: (0, uuid_1.v4)(),
            user_id: req.body.user_id,
            product_id: req.body.product_id,
            rating: req.body.rating,
            review: req.body.review,
            is_deleted: req.body.is_deleted,
            created_at: new Date().toISOString()
        };
        const { error } = (0, review_validate_1.default)(review);
        if (error)
            return res.status(400).send(error.details[0].message);
        if (db_connection_1.default.checkConnection()) {
            const insertedReview = yield db_connection_1.default.exec("InsertOrUpdateReview", Object.assign({}, review));
            if (insertedReview) {
                res.status(200).send(insertedReview);
            }
            else {
                res.status(500).send("Error creating review");
            }
        }
        else {
            res.status(500).send("Error creating review");
        }
    }
    catch (error) {
        res.status(500).send("Error creating review");
    }
});
exports.createReview = createReview;
const updateReview = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const review = {
            id: req.body.id,
            user_id: req.body.user_id,
            product_id: req.body.product_id,
            rating: req.body.rating,
            review: req.body.review,
            is_deleted: req.body.is_deleted,
            created_at: new Date().toISOString()
        };
        const { error } = (0, review_validate_1.default)(review);
        if (error)
            return res.status(400).send(error.details[0].message);
        if (db_connection_1.default.checkConnection()) {
            const updatedReview = yield db_connection_1.default.exec("InsertOrUpdateReview", Object.assign({}, review));
            if (updatedReview) {
                res.status(200).send(updatedReview);
            }
            else {
                res.status(500).send("Error updating review");
            }
        }
        else {
            res.status(500).send("Error updating review");
        }
    }
    catch (error) {
        res.status(500).send("Error updating review");
    }
});
exports.updateReview = updateReview;
const deleteReview = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        if (db_connection_1.default.checkConnection()) {
            const deletedReview = yield db_connection_1.default.exec("DeleteReview", { id });
            if (deletedReview) {
                res.status(200).send(deletedReview);
            }
            else {
                res.status(500).send("Error deleting review");
            }
        }
        else {
            res.status(500).send("Error deleting review");
        }
    }
    catch (error) {
        console.log(error);
        res.status(500).send("Error deleting review");
    }
});
exports.deleteReview = deleteReview;
const getReviewByProductId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const product_id = req.params.product_id;
        if (db_connection_1.default.checkConnection()) {
            const reviews = yield db_connection_1.default.exec("GetReviewByProductId", { product_id });
            if (reviews) {
                res.status(200).send(reviews);
            }
            else {
                res.status(500).send("Error getting reviews");
            }
        }
        else {
            res.status(500).send("Error getting reviews");
        }
    }
    catch (error) {
        console.log(error);
        res.status(500).send("Error getting reviews");
    }
});
exports.getReviewByProductId = getReviewByProductId;
