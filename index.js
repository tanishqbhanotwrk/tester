import express from "express";

const PORT = 8090;
const app = express();

app.use(express.json());

app.get("/test", (req, res) => {
    return res.status(200).json({success: true, message: "Everything works fine here"});
})

app.listen(PORT, () => {
    console.log("Everything works really well here as well.");
})