import express from "express";
import { createProxyMiddleware } from "http-proxy-middleware";
import dotenv from "dotenv"

dotenv.config()

const app = express();
const PORT = process.env.PORT || 8080 ;

app.use(express.json());

// app.use("/api", routes);

app.use(
  "/",
  createProxyMiddleware({
    target: "http://localhost:5173", 
    changeOrigin: true
  })
);

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});