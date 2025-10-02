import express from "express";
import { createProxyMiddleware } from "http-proxy-middleware";
import dotenv from "dotenv"
import path from "path";

dotenv.config()

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());

// app.use("/api", routes);
const NODE_ENV=process.env.NODE_ENV

if (NODE_ENV === "development") {
  app.use(
    "/",
    createProxyMiddleware({
      target: "http://localhost:5173",
      changeOrigin: true
    })
  );
}
else if (NODE_ENV === "production") {
  const frontendPath = path.join(__dirname, "frontend-dist");
  app.use("/", express.static(frontendPath));
}
else{
  console.log("please set NODE_ENV variable")
  process.exit(1);
}

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});