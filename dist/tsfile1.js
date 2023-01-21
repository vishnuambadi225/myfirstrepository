"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const tsfile2_1 = __importDefault(require("./tsfile2"));
const app = (0, express_1.default)();
const port = 3000;
app.get('/', (req, res) => {
    let studentObj = new tsfile2_1.default("vishnu", "prakash", "dps");
    res.send(studentObj.getfullname());
});
app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
