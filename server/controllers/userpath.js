import puppeteer from "puppeteer";
import handlebars from "handlebars";

import path from "path";

import fs from "fs-extra";
import url from "url";

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

let backIscheckDataUrl;
let dataUrl1;
let filef;
let filePath123;
let filenameBack;

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
let fileDataForm;
let profileImageTrueLetMain = false;
const font11 = 1;
const font112 = 2;
const pathfont = path.join(process.cwd(), "Quicksand2.ttf");
console.log(fileDataForm, 1);

let newUsersData;

export const getDataPdfJson = (req, res) => {
  const data11 = {
    name: "shiva",
    phone: "999",
    profileImageTrueLet: profileImageTrueLetMain,
    inputValueMain: users.inputValueMain,
    usersData: users,
    newUsersDataFront: newUsersData,
    frontIscheckDataUrl: backIscheckDataUrl,
  };
  res.json(data11);
};

export const sendTotalData = (req, res) => {
  newUsersData = req.body;
  backIscheckDataUrl = req.body.isDataUrlCheck;
  console.log(newUsersData);
  const data11 = {
    name: "shiva",
    phone: "999",
    profileImageTrueLet: profileImageTrueLetMain,
    inputValueMain: users.inputValueMain,
    usersData: users,
  };
  res.send("user added successfully");
};

// export const getDataPdf = (req, res) => {
//   // Assuming you have already processed the file and have the data available

//   try {
//     const fileData = filef;
//     if (fileData !== undefined) {
//       console.log(filef, 3);
//       // Set the appropriate headers for the response

//       // Send the file data as the response
//       res.send(fileData);
//     }
//   } catch (error) {
//     // Handle any errors that occur during the process
//     console.log(error);
//     res.status(500).send("Internal Server Error");
//   }
//   if (firstpath1 !== undefined) {
//     res.sendFile(firstpath1);
//   }
// };

export const getDataPdf = (req, res) => {
  // Assuming you have already processed the file and have the data available
  const filePathfin = path.join(process.cwd(), "uploads2", filenameBack);

  if (fileDataForm !== undefined) {
    res.sendFile(filePathfin);
  }
};

const dataURLtoFile = (dataURL, filename) => {
  const arr = dataURL.split(",");
  const mime = arr[0].match(/:(.*?);/)[1];
  const bstr = atob(arr[1]);
  let n = bstr.length;
  const u8arr = new Uint8Array(n);

  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }

  return new File([u8arr], filename, { type: mime });
};

export const profileCreate = async (req, res) => {
  fileDataForm = req.file;
  filenameBack = req.file.filename;
  console.log(filenameBack, "filenameBack1234");
  const filename1 = req.file.filename;
  // const filePath123 = path.join(
  //   __dirname,
  //   fileDataForm.destination,
  //   fileDataForm.filename
  // );

  // filePath123 = path.join(process.cwd(), filename1);
  // console.log(filePath123, 12344321);

  // const fsfile = fs.readFileSync(`${req.file.path}`).toString("base64");
  // dataUrl1 = fsfile;
  // console.log(fsfile);
  // // filef = await dataURLtoFile(fsfile, filename1);
  if (fileDataForm !== undefined) {
    profileImageTrueLetMain = true;
    console.log(fileDataForm, 2);
  }

  res.send("user added successfully");
};

export const getUsers = async (req, res) => {
  const browser = await puppeteer.launch();

  const page = await browser.newPage();

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
