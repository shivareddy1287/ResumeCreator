const express = require("express");
const app = express();
const port = 3006;

const cors = require("cors");
app.use(cors());

const multer = require("multer");
const upload = multer({ dest: "uploads/" });

const fs = require("fs");
const pdfparse = require("pdf-parse");
const { count } = require("console");
// const textApiRouter = require("./textApi");

app.post("/upload", upload.single("pdfFile"), (req, res) => {
  const file = req.file;
  const pdffile = fs.readFileSync(file.path);

  pdfparse(pdffile).then(function (data) {
    const text = data.text;
    console.log("Start");
    console.log(text);
    console.log("End");

    const emailRegex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g;
    const linkedinRegex = /linkedin\.com\/[A-Za-z0-9-._\/]+/g;
    const nameRegex = /\b[A-Z][a-z]+ [A-Z][a-z]+(?: [A-Z][a-z]+)?\b/g;

    const emailMatches = text.match(emailRegex);
    const linkedinMatches = text.match(linkedinRegex);
    const nameMatches = text.match(nameRegex);

    const email = emailMatches ? emailMatches[0] : null;
    const initiallinkedinUrl = linkedinMatches ? linkedinMatches[0] : null;
    linkedinUrl = "www." + initiallinkedinUrl;
    const name = nameMatches ? nameMatches[0] : null;

    console.log(linkedinMatches);

    const roleRegex =
      /\b[A-Z][a-z]+\s(?:[A-Z][a-z]+\s?){0,2}(?:Engineer|Developer|Architect|Manager)\b/g;
    const roleMatches = text.match(roleRegex);
    // const role = roleMatches ? roleMatches[1] : null;

    const roleAccess = roleMatches ? roleMatches[0] : null;
    null;
    let nameRole = ["", ""];
    console.log(roleAccess);
    if (roleAccess !== null) {
      nameRole = roleAccess.split("\n");
    }

    const role = nameRole ? nameRole[1] : null;
    null;

    const mobileRegex =
      /(?:\+?\d{1,3}[- ]?)?\(?\d{3}\)?[- ]?\d{3}[- ]?\d{4}\b/g;
    const mobileMatches = text.match(mobileRegex);
    const mobileNumber = mobileMatches ? mobileMatches[0] : null;

    const summaryRegex =
      /linkedin\.com\/in\/[^\n]*\n([^\n]*\n)+(?=Skills:|Skills\n|Skills$)/i;
    const summaryMatch = data.text.match(summaryRegex);
    let summaryText = "";

    if (summaryMatch && summaryMatch.length > 0) {
      const summaryValue = summaryMatch[0]
        .replace(/linkedin\.com\/in\/[^\n]*\n/i, "")
        .replace(/(Skills:|Skills\n|Skills$)/i, "")
        .trim(); // Extract the value of the field (the captured group) and remove the LinkedIn URL, "Skills" section, and leading/trailing whitespace

      if (summaryValue.toLowerCase().startsWith("work experience")) {
        summaryText = ""; // Set summary text to empty if it starts with "WORK EXPERIENCE"
      } else {
        // console.log(`Summary: ${summaryValue}`);

        if (summaryValue.endsWith("#")) {
          summaryText = summaryValue.slice(0, -1);
        }
      }
    } else {
      console.log("Summary not found in PDF");
    }

    const skillsRegex =
      /Skills([\s\S]*)(Languages|languag|Language|WorkExperience|Honor Awards)/i;

    const skillsMatch = data.text.match(skillsRegex); // Search for the regex in the text
    let skillsText = "";

    if (skillsMatch && skillsMatch.length > 1) {
      const skillsValue = skillsMatch[1].trim(); // Extract the value of the field (the captured group) and remove leading/trailing whitespace
      // console.log(`Skills: ${skillsValue}`);
      skillsText = skillsValue;
    } else {
      console.log("Skills not found in PDF");
    }

    const languagesRegex =
      /Languages([\s\S]*?)(Work experience|Skills|Languag|languag|Language|Honor Awards|Personal Projects)/i;

    const languagesMatch = data.text.match(languagesRegex); // Search for the regex in the text
    let languagesList = [];

    if (languagesMatch && languagesMatch.length > 1) {
      const languagesValue = languagesMatch[1].trim(); // Extract the value of the field (the captured group) and remove leading/trailing whitespace
      // console.log("123123");
      // console.log(languagesValue);
      // Split the language string into an array of languages and trim each item
      const languagesArray = languagesValue
        .split("#")
        .map((lang) => lang.trim());

      // Create an array of objects with "Language" and "Proficiency" properties
      for (let i = 0; i < languagesArray.length; i += 2) {
        const language = languagesArray[i];
        const proficiency = languagesArray[i + 1];
        const languageObject = { Language: language, Proficiency: proficiency };
        if (languageObject.Language !== "" && languagesValue.endsWith("#")) {
          languagesList.push(languageObject);
        }
      }
      // console.log(`Languages: ${JSON.stringify(languagesList)}`);
    } else {
      console.log("Languages not found in PDF");
    }
    // console.log(skillsText);
    let skillsList = [];
    if (skillsText.endsWith("#")) {
      skillsList = skillsText
        .split("#")
        .map((item) => item.trim())
        .filter(Boolean); // Split the skillsText string by whitespace
      // console.log(skillsList);
    }

    const educationRegex =
      /EDUCATION([\s\S]*?)(Personal Projects|Qualifications|Skills|Languages|Honor Awards|$)/i;
    const educationMatch = data.text.match(educationRegex);

    let educationObjectsList = [];

    if (educationMatch && educationMatch.length > 1) {
      const educationValue = educationMatch[1].trim();
      // console.log(educationValue);
      if (educationValue.endsWith("#")) {
        const educationList = educationValue
          .split("#")
          .map((item) => item.trim())
          .filter(Boolean);

        for (let i = 0; i < educationList.length; i += 3) {
          const degree = educationList[i];
          let duration = educationList[i + 1];
          let collegeName = educationList[i + 2];
          // let duration = "2018-2021";
          let pattern = /^\d{4}-\d{4}$/;
          console.log("duration:", duration);

          let dur22 = duration;
          let col22 = collegeName;

          if (pattern.test(duration)) {
            console.log("The duration is in the correct format");
            // [duration, collegeName] = [collegeName, duration];
          } else {
            console.log("The duration is not in the correct format");
            [duration, collegeName] = [collegeName, duration];
          }

          if (
            (degree !== undefined,
            collegeName !== undefined,
            duration !== undefined)
          ) {
            educationObjectsList.push({
              degree: degree,
              collegeName: collegeName,
              duration: duration,
            });
          }
        }
      }
    } else {
      console.log("Education not found in the text");
    }
    // console.log("123456789");
    // console.log(educationObjectsList);

    const honorAwardsRegex =
      /Honor Awards([\s\S]*?)(EDUCATION|Skills|Languag|languag|Language|Honor Awards|Personal Projects)/i;

    const honorAwardsMatch = data.text.match(honorAwardsRegex); // Search for the regex in the text
    let honorAwardsResumeList = [];

    if (honorAwardsMatch && honorAwardsMatch.length > 1) {
      const honorAwardsValue = honorAwardsMatch[1].trim(); // Extract the value of the field (the captured group) and remove leading/trailing whitespace

      // Split the honor awards string into an array of awards and trim each item
      const honorAwardsArray = honorAwardsValue
        .split("#")
        .map((award) => award.trim());

      // Create an array of objects with "award" and "organization" properties
      for (let i = 0; i < honorAwardsArray.length; i += 2) {
        const award = honorAwardsArray[i];
        const organization = honorAwardsArray[i + 1];
        const awardObject = { award, organization };
        if (awardObject.award !== "" && honorAwardsValue.endsWith("#")) {
          honorAwardsResumeList.push(awardObject);
        }
      }

      console.log(`Honor Awards: ${JSON.stringify(honorAwardsResumeList)}`);
    } else {
      console.log("Honor Awards not found in PDF");
    }

    // console.log("123456789");

    const workExperienceRegex =
      /Work experience([\s\S]*?)(Education|Qualifications|Skills|Languages|Honor Awards|Personal Projects|$)/i;

    const workExperienceMatch = data.text.match(workExperienceRegex);
    // console.log("111222");
    // console.log(workExperienceMatch.length);
    // console.log("111222");

    let workExperienceText = "";
    let filteredWorkExpObj = [];

    if (workExperienceMatch && workExperienceMatch.length > 1) {
      const workExperienceValue = workExperienceMatch[1].trim();
      // console.log(`Work Experience: ${workExperienceValue}`);
      workExperienceText = workExperienceValue;

      const workExperienceList = workExperienceText
        .split("#")
        .map((item) => item.trim())
        .filter(Boolean);
      // console.log(workExperienceList);
      console.log("length", workExperienceList.length);

      const nestedList = [];
      for (let i = 0; i < workExperienceList.length; i += 4) {
        nestedList.push(workExperienceList.slice(i, i + 4));
      }
      // console.log(nestedList);

      const workExpObjects = nestedList.map((item) => {
        let [firstItem, secondItem, thirdItem, fourthItem] = item;

        let secondItem22 = secondItem;
        let thirdItem22 = thirdItem;

        const pattern = /^\d{2}\/\d{4} - ((Till Date)|(\d{2}\/\d{4}))$/;

        console.log(pattern.test(secondItem));
        console.log(secondItem);
        if (pattern.test(secondItem)) {
          console.log("yessssssssssssss");
        } else {
          console.log("nooooooooooooooo");
        }

        if (pattern.test(secondItem)) {
          // console.log("The duration is in the correct format");
        } else {
          // console.log("The duration is not in the correct format");
          // [secondItem, thirdItem] = [thirdItem, secondItem];
          secondItem22 = thirdItem;
          thirdItem22 = secondItem;
        }
        // console.log(secondItem22, thirdItem22);
        if (
          firstItem !== undefined &&
          secondItem !== undefined &&
          thirdItem !== undefined &&
          fourthItem !== undefined
        ) {
          return {
            position: firstItem,
            duration: secondItem22,
            company: thirdItem22,
            description: fourthItem,
          };
        }
        return {
          position: "",
          duration: "",
          company: "",
          description: "",
        };
      });

      filteredWorkExpObj = workExpObjects.filter(
        (eachWorkExp) =>
          eachWorkExp.position !== "" && eachWorkExp.duration !== undefined
      );

      // console.log(filteredWorkExpObj);

      // console.log(workExpObjects);
    } else {
      console.log("Work experience not found in PDF");
    }
    console.log("111");

    const projectRegex =
      /Personal Projects([\s\S]*?)(Education|Qualifications|Skills|Languages|Honor Awards|$)/i;

    const projectMatch = data.text.match(projectRegex);

    let projectObjectsList = [];
    let projectText = "";

    if (projectMatch && projectMatch.length > 1) {
      const projectValue = projectMatch[1].trim();
      // console.log(`Personal Projects: ${projectValue}`);
      projectText = projectValue;

      const projectList = projectText
        .split("#")
        .map((item) => item.trim())
        .filter(Boolean);
      // console.log(projectList);

      const nestedList = [];
      for (let i = 0; i < projectList.length; i += 3) {
        nestedList.push(projectList.slice(i, i + 3));
      }
      // console.log(nestedList);

      const projectObjects = nestedList.map((item) => {
        const [firstItem, secondItem, thirdItem] = item;

        return {
          projectTitle: firstItem,
          createdTheDeatils: secondItem,
          addedTheDetais: thirdItem,
        };
      });
      const filteredPersonalProjectsList = projectObjects.filter(
        (eachProj) => eachProj.createdTheDeatils !== undefined
      );
      projectObjectsList = filteredPersonalProjectsList;
      // console.log(projectObjectsList);
    } else {
      console.log("Personal projects not found in PDF");
    }

    const extractedData = {
      skillsText: skillsText,
      summaryText: summaryText,
      listOfLanguages: languagesList,
      workExpObjectsList: filteredWorkExpObj,
      projectObjectsList: projectObjectsList,
      honorAwardsResumeList: honorAwardsResumeList,
      educList: educationObjectsList,
      skillsList: skillsList,
      text: text,
      name: name,
      role: role,
      email: email,
      mobileNumber: mobileNumber,
      linkedinUrl: linkedinUrl,
    };
    res.json(extractedData);
  });
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
