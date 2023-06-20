// const express = require("express");
// const puppeteer = require("puppeteer");
// const handlebars = require("handlebars");

// const app = express();
// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());

// app.get("/resume", async (req, res) => {
//   const source = `
//   <!doctype html>
//   <html>
//       <head>
//           <!-- Font Awesome -->
//           <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css">
//           <!-- Bootstrap core CSS -->
//           <link href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css" rel="stylesheet">
//           <!-- Material Design Bootstrap -->
//           <link href="https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.7.5/css/mdb.min.css" rel="stylesheet">

//           <style>

//             html{
//                 zoom: 0.55;
//                 margin-left:1.5in;
//                 margin-right:1in;
//                 margin-top: 2in;
//                 margin-botton:2in;
//             }

//             .rule{
//               border-bottom: 1px solid black;
//               width:80%;
//             }
//             .mobile{
//               margin-top:-10px;
//             }
//             .email{
//               margin-bottom: 0;
//             }
//             .sideby-side{
//               display:flex;
//               flex-direction: row;
//               gap:55px;

//             }
//             body{
//               font-family: 'Garamond';
//             }
//           </style>

//       </head>
//       <body>

//       <div class="col-lg-8">
//       <br/><br/>
//       <div class="row text-center">
//           <div class="col-lg-6">
//               <h1><b>name shiva</b></h1>
//               <p class="lead email"><strong>Email:</strong> email shiva</p>
//               <p class="lead"><strong>Contact:</strong> (+92) phone no</p>
//               <p class="lead"><strong>LinkedIn:</strong> linkedin</p>
//               <p class="lead"><strong>Github:</strong> github</p>
//           </div>
//       </div>

//       <hr/>
//       <div class="col-lg-8 mx-auto bg-light">
//             <h3><b>Skills</b></h3>
//       </div>
//       <div class='sideby-side'>
//         <p class='display-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
//         <p class='display-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
//       </div>
//       <div class="container">
//         <p class="left">This is the left paragraph.</p>
//         <p class="right">This is the right paragraph.</p>
//       </div>
//       <div class="col-lg-8 row mx-auto">
//           <p class="lead">skills</p>
//           <p class='display-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
//           <p class='display-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
//           <p class='display-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
//           <p class='display-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

//       </div>
//           <!-- JQuery -->
//           <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
//           <!-- Bootstrap tooltips -->
//           <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.4/umd/popper.min.js"></script>
//           <!-- Bootstrap core JavaScript -->
//           <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/js/bootstrap.min.js"></script>
//           <!-- MDB core JavaScript -->
//           <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.7.5/js/mdb.min.js"></script>
//       </body>
//   </html>
// `;

//   const template = handlebars.compile(source);
//   const data = { name: "shiva aade" };
//   const html = template(data);

//   const browser = await puppeteer.launch({
//     headless: "new",
//   });
//   const page = await browser.newPage();

//   await page.setContent(html);

//   const pdf = await page.pdf({
//     format: "A4",
//     margin: {
//       top: "20mm",
//       bottom: "20mm",
//     },
//   });
//   await browser.close();

//   res.set("Content-Type", "application/pdf");
//   console.log(pdf);
//   res.send(pdf);
// });
// app.listen(5000, () => {
//   console.log("app is running on port 5000");
// });

import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import userRoutes from "./routes/user.js";

const app = express();
const port = 5000;

app.use(bodyParser.json());

app.use(cors());

app.use("/", userRoutes);

app.get("/", (req, res) => res.send("hello from express"));
app.all("*", (req, res) => res.send("That routes doesn't exist"));

app.listen(port, () => console.log(`server is running ${port}`));
