import puppeteer from "puppeteer";
import handlebars from "handlebars";

import path from "path";
import fs from "fs-extra";

const skillsTotalList = [
  { skill: "React Js" },
  { skill: "Node js" },
  { skill: "SQL" },
  { skill: "Python" },
  { skill: "MongoDB" },
  { skill: "HTML" },
  { skill: "CSS" },
];

const intialAdd = [
  {
    workVal:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    positionVal: "React Developer",
    employerVal: "Senior Lead",
    scrollDum2Height: "100px",
    fromDateValue: "2020",
    toDateValue: "2021",
    actualFromDateValue: "2022",
    actualToDateValue: "2023",
  },
  {
    workVal:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy",
    positionVal: "Full Stack Developer",
    employerVal: "Assistant Manager",
    scrollDum2Height: "100px",
    fromDateValue: "2020",
    toDateValue: "2021",
    actualFromDateValue: "2022",
    actualToDateValue: "2023",
  },
  {
    workVal:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
    positionVal: "Full Stack Developer",
    employerVal: "Manager",
    scrollDum2Height: "100px",
    fromDateValue: "2020",
    toDateValue: "2021",
    actualFromDateValue: "2022",
    actualToDateValue: "2023",
  },
];

const intialAddEducation = [
  {
    degreeVal: "SSC",
    schoolVal: "Telangana State Residential",
    fromSchoolVal: "2015",
    toSchoolVal: "2016",
  },
  {
    degreeVal: "Diploma",
    schoolVal: "Jawaharlal Nehru Govt Polytechnic",
    fromSchoolVal: "2016",
    toSchoolVal: "2019",
  },
  {
    degreeVal: "Btech",
    schoolVal: "Nalla Narasimha Reddy Group Of Instituitions",
    fromSchoolVal: "2019",
    toSchoolVal: "2022",
  },
];

const intialHonorAwards = [
  {
    awardName: "Award name1",
    Organization: "Company name",
  },
  {
    awardName: "Best Employ",
    Organization: "Organisation",
  },
  {
    awardName: "Name award",
    Organization: "Sathy Resource",
  },
];

let dataUrl1;
console.log(dataUrl1);
const data1 = {
  name: "Shiva Aade",
  phone: "+91 9441112347",
  email: "aadeshiva1234@gmail.com",
  linkedin: "linkedin-link-aade-shiva-link",
  selectResume: "Resume2",
  totalSkills: skillsTotalList,
  awardTotal: intialHonorAwards,
  educationTotal: intialAddEducation,
  workExpTotal: intialAdd,
  profession: "React Developer",
  dataUrl12: dataUrl1,
  aboutHeadline:
    "my future goal is to build big Application My own There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
};

let users = { name: "shiva", profession: "react developer" };
let filePath1;
let profilepicpath = {};
let namefile;
let finalpath;
let firstpath1;
let path1122;

const font11 = 1;
const font112 = 2;
const pathfont = path.join(process.cwd(), "Quicksand2.ttf");
console.log(pathfont, "pathfont");

export const getDataPdf = (req, res) => {
  const data11 = {
    name: "shiva",
    phone: "999",
  };
  res.json(data1);
};

export const profileCreate = (req, res) => {
  const dataUrl11 = req.file;
  firstpath1 = req.file.path;

  const fsfile = fs.readFileSync(`${req.file.path}`).toString("base64");
  dataUrl1 = fsfile;
  console.log(dataUrl1);

  res.send("user added successfully");
};

export const getUsers = async (req, res) => {
  console.log(users);
  console.log(users.selectedFontBack);

  const minimal_args = [
    "--autoplay-policy=user-gesture-required",
    "--disable-background-networking",
    "--disable-background-timer-throttling",
    "--disable-backgrounding-occluded-windows",
    "--disable-breakpad",
    "--disable-client-side-phishing-detection",
    "--disable-component-update",
    "--disable-default-apps",
    "--disable-dev-shm-usage",
    "--disable-domain-reliability",
    "--disable-extensions",
    "--disable-features=AudioServiceOutOfProcess",
    "--disable-hang-monitor",
    "--disable-ipc-flooding-protection",
    "--disable-notifications",
    "--disable-offer-store-unmasked-wallet-cards",
    "--disable-popup-blocking",
    "--disable-print-preview",
    "--disable-prompt-on-repost",
    "--disable-renderer-backgrounding",
    "--disable-setuid-sandbox",
    "--disable-speech-api",
    "--disable-sync",
    "--hide-scrollbars",
    "--ignore-gpu-blacklist",
    "--metrics-recording-only",
    "--mute-audio",
    "--no-default-browser-check",
    "--no-first-run",
    "--no-pings",
    "--no-sandbox",
    "--no-zygote",
    "--password-store=basic",
    "--use-gl=swiftshader",
    "--use-mock-keychain",
  ];

  const browser = await puppeteer.launch();

  const page = await browser.newPage();
  // await page.waitForFunction("document.fonts.ready");
  // await page.addStyleTag({
  //   content: `
  //     @font-face {
  //       font-family: 'Quicksand Light Light';
  //       src: url(./Quicksand2.ttf);

  //     }
  //     body {
  //       font-family: 'Quicksand Light Light';
  //     }
  //   `,
  // });

  // const filePath = path.join(process.cwd(), "test1.html");

  // await page.goto(`file://${filePath}`, { waitUntil: "networkidle2" });
  await page.goto(`http://localhost:3000/mypdf`, { waitUntil: "networkidle2" });

  const pdf = await page.pdf({
    format: "A4",
    margin: {
      top: "10mm",
      bottom: "10mm",
    },
    printBackground: true,
  });

  await browser.close();

  res.set("Content-Type", "application/pdf");

  res.send(pdf);
};

export const createUser = (req, res) => {
  const user = req.body;

  users = { ...user };
  res.send("user added successfully");
};
