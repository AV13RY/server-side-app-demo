import express from "express";
import path from "path";
import React from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import App from "../src/App";

const app = express();

// Serve static files from the build directory
app.use(express.static(path.resolve(__dirname, "../build")));

// Handle all routes with SSR
app.get("/*", (req, res) => {
    const entryPoint = ["/static/js/main.d6e61793.js"];

    const { pipe, abort: _abort } = ReactDOMServer.renderToPipeableStream(
        <StaticRouter location={req.url}>
            <App />
        </StaticRouter>,
        {
            bootstrapScripts: entryPoint,
            onShellReady() {
                res.statusCode = 200;
                res.setHeader("Content-type", "text/html");
                pipe(res);
            },
            onShellError() {
                res.statusCode = 500;
                res.send("<!doctype html><p>Loading...</p>");
            },
        }
    );
});

app.listen(3002, () => {
    console.log("App is running on http://localhost:3002");
});