'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const router = express.Router();
router.get('/', (req, res, next) => {
    res.render('index', { title: 'Hello ! นะ  Tong' });
});
exports.default = router;
//# sourceMappingURL=Tongtong.js.map