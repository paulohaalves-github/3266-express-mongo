import "dotenv/config";
//import http from "http";
import app from "./src/app.js";



 const PORT = 3000;

 const rotas = {
    "/": "Cursp de Node.js"
 };

app.listen(PORT, () => {
    console.log("servidor escutando!...")
})