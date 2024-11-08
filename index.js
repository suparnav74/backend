"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_1 = __importDefault(require("./db"));
const cors_1 = __importDefault(require("cors"));
// connecting Database
(0, db_1.default)();
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.json());
app.use((0, cors_1.default)());
// //Routes
// app.use('/api',ProductRoutes);
app.get('/', (req, res) => {
    res.send("Hi");
});
app.listen(port, () => {
    console.log(`Server listening in http://localhost:${port}`);
});
