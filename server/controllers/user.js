import puppeteer from "puppeteer";
import handlebars from "handlebars";

import path from "path";
import fs from "fs-extra";
// import logo1 from "./logo1.svg";

let users = {};
let dataUrl1;
let firstpath1;
const filePathlogo = path.join(process.cwd(), "logo1.svg");
let newUsersData;
let backIscheckDataUrl;
let profileImageTrueLetMain = false;
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

  const data11 = {
    name: "shiva",
    phone: "999",
    profileImageTrueLet: profileImageTrueLetMain,
    inputValueMain: users.inputValueMain,
    usersData: users,
  };
  res.send("user added successfully");
};

export const getDataPdf = (req, res) => {
  const data11 = {
    name: "shiva",
    phone: "999",
  };
  res.json(data11);
};

const deleteFile = (filePath) => {
  fs.unlink(filePath, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log("File deleted successfully");
  });
};

export const profileCreate = (req, res) => {
  const dataUrl11 = req.file;
  firstpath1 = req.file.path;

  const fsfile = fs.readFileSync(`${req.file.path}`).toString("base64");
  dataUrl1 = fsfile;

  res.send("user added successfully");
};

export const getUsers = async (req, res) => {
  if (users.isProfileUrlUpdated === false) {
    dataUrl1 = "";
  }

  let source;

  if (users.selectResume === "Resume2") {
    source = `
    <!DOCTYPE html>
        <html>
          <head>
            <!-- Font Awesome -->
            <link
              rel="stylesheet"
              href="https://use.fontawesome.com/releases/v5.7.0/css/all.css"
            />
            <!-- Bootstrap core CSS -->
            <link
              href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css"
              rel="stylesheet"
            />
            <!-- Material Design Bootstrap -->
            <link
              href="https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.7.5/css/mdb.min.css"
              rel="stylesheet"
            />

            <style>
              html {
                -webkit-print-color-adjust: exact;
                margin-left: 75px;
                margin-right: 75px;
              }

              .main-cont {
                // font-family: "Cambria";
                // font-family: "Arial";
                font-family: ${users.selectedFontBack};

              }

              .img-text-cont {
                display: flex;
                flex-direction: row;
                gap: 35px;
                margin-bottom: 25px;
              }

              .profile-img {
                height: 200px;
                width: 200px;
                border-radius: 50%;
                object-fit: cover;
              }
              .main-head-name {
                font-size: 45px;
                font-weight: bold;
                margin-bottom: 0px;
                color: rgb(81, 81, 241);
              }

              .main-role {
                font-size: 28px;
                font-weight: 400;
                margin-bottom: 0px;
                margin-top: 0px;
              }

              .main-para {
                font-size: 20px;
                font-weight: 400;
                margin-top: 0px;
              }

              .all-side-head {
                font-size: 28px;
                font-weight: 600;
                margin-bottom: 0px;
                color: rgb(81, 81, 241);
              }

              .all-para-font {
                font-size: 22px;
                font-weight: 400;
                margin-bottom: 0px;
                margin-top: 0px;
              }

              .all-para-font-work {
                font-size: 22px;
                font-weight: 400;
                margin-bottom: 0px;
                margin-top: 0px;
                text-align: justify;
                text-justify: distribute;
              }

              .all-side-side-head-sub {
                font-size: 26px;
                font-weight: bold;
                margin-bottom: 0px;
                margin-top: 0px;
                color: black;
              }
              .all-side-side-head-sub2 {
                font-size: 24px;
                margin-bottom: 0px;
                margin-top: 0px;
                color: rgba(0, 0, 0, 0.63);
                // color:black;
                font-weight: 600;
              }

              .main-text-cont {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: flex-start;
              }

              .hr-line-top1 {
                border-width: 2px;
                border-color: rgb(81, 81, 241);
                margin: 0px;
                margin-bottom: 6px;
              }
              .hr-line-top2 {
                border-width: 2px;
                border-color: rgb(81, 81, 241);
                margin: 0px;
                margin-top: 6px;
              }

              .each-margin-email {
                margin-bottom: 0px;
              }

              .email-phone-cont {
                display: flex;
                flex-direction: row;
                justify-content: space-around;
              }

              .icon-text-cont {
                display: flex;
                flex-direction: row;
                gap: 5px;
              }

              .work-skills-cont {
                display: flex;
                flex-direction: row;
                gap: 45px;
              }
              .work-cont {
                width: 60%;
              }

              .skills-other-cont {
                width: 40%;
              }

              .skills-cont {
                margin-bottom: 25px;
              }
              .honour-cont {
                margin-bottom: 25px;
              }

              .each-skills-cont {
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
                gap: 10px;
              }
              .each-skills {
                font-size: 25px;
                background-color: #5c96f2;
                color: white;
                border-radius: 4px;
                padding-left: 8px;
                padding-right: 8px;
                margin-botton:-20px;
                margin-top:-10px;
              }
              .skills-margin{
                margin-bottom:20px;
              }
              .extra-para {
                text-align: justify;
                text-justify: distribute;
              }
             .extra-margin-map{
              margin-bottom: 10px;
             }

             .dis-element{
                display: none;
             }
            </style>
          </head>
          <body>
            <div class="main-cont">
              <div class="img-text-cont">
                <div id='disProfile' class=''>
                  <img
                    class="profile-img"
                    src="data:image/png;base64,${dataUrl1}"
                  />
                </div>
                <div class="main-text-cont">
                  <h1 class="main-head-name">${users.name}</h1>

                  <p id="disRole" class="main-role">${users.profession}</p>
                  <p id="disAbout" class="main-para">${users.aboutHeadline}</p>
                </div>
              </div>
              <div class="mb-3">
                <hr class="hr-line-top1" />
                <div class="email-phone-cont all-para-font">
                  <div id='disEmail' class="icon-text-cont">
                  <div>
                    <i class="fa-solid fa-envelope"></i>
                  </div>
                    <p  class="each-margin-email">${users.email}</p>
                  </div>
                  <div id='disPhone' class="icon-text-cont">
                    <div>
                      <i class="fa-solid fa-phone"></i>
                    </div>
                    <p  class="each-margin-email">${users.phone}</p>
                  </div>
                  <div id='disLinkedin' class="icon-text-cont">
                    <div>
                      <i class="fa-brands fa-linkedin"></i>
                    </div>
                    <p class="each-margin-email">${users.linkedin}</p>
                  </div>
                </div>
                <hr class="hr-line-top2" />
              </div>
              <div class="work-skills-cont">
                <div class="work-cont">
                  <h1 class="all-side-head">WORK EXPERIENCE</h1>
                  <div id='workExp'></div>
                </div>

                <div class="skills-other-cont">
                  <div id='disSkills' class="skills-cont">
                    <h1 class="all-side-head skills-margin">SKILLS</h1>
                    <div class="each-skills-cont" id='skills1'>

                      </div>

                  </div>
                  <div class="honour-cont" id="honorDis">
                  <h1 class="all-side-head">HONOR AWARDS</h1>
                  <div  id='honor'></div>
                  </div>

                  <div>
                    <h1 class="all-side-head">EDUCATION</h1>
                    <div id='education'></div>

                  </div>
                </div>
              </div>
            </div>

            <script>
            const skillsList = document.getElementById('skills1');
            const skillTotalList = ${JSON.stringify(users.totalSkills)}
            skillTotalList.forEach(num => {
              const skillEle = document.createElement('p');
              skillEle.innerText = num.skill
              skillEle.classList.add('each-skills')

              var hashtagSpan = document.createElement('span');
              hashtagSpan.style.fontSize = '1px';
              hashtagSpan.style.color = 'white';
              hashtagSpan.innerText = '#';
              skillEle.appendChild(hashtagSpan);

              skillsList.appendChild(skillEle);
            })

            const list1 = document.getElementById('education');
            const userExp1 = ${JSON.stringify(users.educationTotal)}
            userExp1.forEach(num => {
              const listItem1 = document.createElement('p');

              listItem1.innerText = num.degreeVal;
              listItem1.classList.add('all-side-side-head-sub')

              var hashtagSpan = document.createElement('span');
              hashtagSpan.style.fontSize = '1px';
              hashtagSpan.style.color = 'white';
              hashtagSpan.innerText = '#';
              listItem1.appendChild(hashtagSpan);

              list1.appendChild(listItem1);

              const listItem21 = document.createElement('p');

              listItem21.innerText = num.schoolVal;
              listItem21.classList.add('all-side-side-head-sub2')

              var hashtagSpan = document.createElement('span');
              hashtagSpan.style.fontSize = '1px';
              hashtagSpan.style.color = 'white';
              hashtagSpan.innerText = '#';
              listItem21.appendChild(hashtagSpan);

              list1.appendChild(listItem21);

              const listItem31 = document.createElement('p');

              listItem31.innerText = num.fromSchoolVal + ' - ' + num.toSchoolVal
              listItem31.classList.add('all-para-font','extra-margin-map')

              var hashtagSpan = document.createElement('span');
              hashtagSpan.style.fontSize = '1px';
              hashtagSpan.style.color = 'white';
              hashtagSpan.innerText = '#';
              listItem31.appendChild(hashtagSpan);

              list1.appendChild(listItem31);

            });

          const list = document.getElementById('workExp');
          const userExp = ${JSON.stringify(users.workExpTotal)}
          userExp.forEach(num => {
            const listItem = document.createElement('p');

            listItem.innerText = num.positionVal;
            listItem.classList.add('all-side-side-head-sub')

            var hashtagSpan = document.createElement('span');
            hashtagSpan.style.fontSize = '1px';
            hashtagSpan.style.color = 'white';
            hashtagSpan.innerText = '#';
            listItem.appendChild(hashtagSpan);

            list.appendChild(listItem);

            const listItem2 = document.createElement('p');

            listItem2.innerText = num.employerVal;
            listItem2.classList.add('all-side-side-head-sub2')

            var hashtagSpan = document.createElement('span');
            hashtagSpan.style.fontSize = '1px';
            hashtagSpan.style.color = 'white';
            hashtagSpan.innerText = '#';
            listItem2.appendChild(hashtagSpan);

            list.appendChild(listItem2);

            const listItem3 = document.createElement('p');

            listItem3.innerText = num.fromDateValue + '-' + num.toDateValue
            listItem3.classList.add('all-para-font')

            var hashtagSpan = document.createElement('span');
            hashtagSpan.style.fontSize = '1px';
            hashtagSpan.style.color = 'white';
            hashtagSpan.innerText = '#';
            listItem3.appendChild(hashtagSpan);

            list.appendChild(listItem3);

            const listItem4 = document.createElement('p');

            listItem4.innerText = num.workVal
            listItem4.classList.add('all-para-font-work','extra-margin-map')

            var hashtagSpan = document.createElement('span');
            hashtagSpan.style.fontSize = '1px';
            hashtagSpan.style.color = 'white';
            hashtagSpan.innerText = '#';
            listItem4.appendChild(hashtagSpan);

            list.appendChild(listItem4);
          });

          const honourAwardEle = document.getElementById('honor');
          const awardTotal =  ${JSON.stringify(users.awardTotal)}

          awardTotal.forEach(num => {

            const awardEle = document.createElement('p');
            awardEle.innerText = num.awardName
            awardEle.classList.add('all-side-side-head-sub')

            var hashtagSpan = document.createElement('span');
            hashtagSpan.style.fontSize = '1px';
            hashtagSpan.style.color = 'white';
            hashtagSpan.innerText = '#';
            awardEle.appendChild(hashtagSpan);

            honourAwardEle.appendChild(awardEle);

            const awardEle2 = document.createElement('p');
            awardEle2.innerText = num.Organization
            awardEle2.classList.add('all-side-side-head-sub2','extra-margin-map')

            var hashtagSpan = document.createElement('span');
            hashtagSpan.style.fontSize = '1px';
            hashtagSpan.style.color = 'white';
            hashtagSpan.innerText = '#';
            awardEle2.appendChild(hashtagSpan);

            honourAwardEle.appendChild(awardEle2);

          })

          

          if (${users.disProfilePic === false}){
            const profileDisEle = document.getElementById("disProfile");
            profileDisEle.classList.add("dis-element");

          }

          if (${users.disRole === false}){
            const disRoleDisEle = document.getElementById("disRole");
            disRoleDisEle.classList.add("dis-element");

          }

          if (${users.disAbout === false}){
            const disAboutDisEle = document.getElementById("disAbout");
            disAboutDisEle.classList.add("dis-element");

          }

          if (${users.disEmail === false}){
            const disEmailDisEle = document.getElementById("disEmail");
            disEmailDisEle.classList.add("dis-element");

          }

          if (${users.disPhone === false}){
            const disPhoneDisEle = document.getElementById("disPhone");
            disPhoneDisEle.classList.add("dis-element");

          }

          if (${users.disLinkedin === false}){
            const disLinkedinDisEle = document.getElementById("disLinkedin");
            disLinkedinDisEle.classList.add("dis-element");

          }
          

          if (${users.disSkills === false}){
            const disSkillsDisEle = document.getElementById("disSkills");
            disSkillsDisEle.classList.add("dis-element");

          }

          if (${users.disAwards === false}){
            const honorDisEle = document.getElementById("honorDis");
            honorDisEle.classList.add("dis-element");

          }


        </script>



            <!-- JQuery -->
            <script
              type="text/javascript"
              src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"
            ></script>
            <!-- Bootstrap tooltips -->
            <script
              type="text/javascript"
              src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.4/umd/popper.min.js"
            ></script>
            <!-- Bootstrap core JavaScript -->
            <script
              type="text/javascript"
              src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/js/bootstrap.min.js"
            ></script>
            <!-- MDB core JavaScript -->
            <script
              type="text/javascript"
              src="https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.7.5/js/mdb.min.js"
            ></script>
            <script
              src="https://kit.fontawesome.com/4d0b0ac83e.js"
              crossorigin="anonymous"
            ></script>
          </body>
        </html>

    `;
  } else if (users.selectResume === "Resume3") {
    source = `<!DOCTYPE html>
    <html>
      <head>
        <!-- Font Awesome -->
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.7.0/css/all.css"
        />
        <!-- Bootstrap core CSS -->
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css"
          rel="stylesheet"
        />
        <!-- Material Design Bootstrap -->
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.7.5/css/mdb.min.css"
          rel="stylesheet"
        />
    
        <!-- JQuery -->
        <script
          type="text/javascript"
          src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"
        ></script>
        <!-- Bootstrap tooltips -->
        <script
          type="text/javascript"
          src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.4/umd/popper.min.js"
        ></script>
        <!-- Bootstrap core JavaScript -->
        <script
          type="text/javascript"
          src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/js/bootstrap.min.js"
        ></script>
        <!-- MDB core JavaScript -->
        <script
          type="text/javascript"
          src="https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.7.5/js/mdb.min.js"
        ></script>
        <script
          src="https://kit.fontawesome.com/4d0b0ac83e.js"
          crossorigin="anonymous"
        ></script>
    
        <style>
          html {
            margin-left: 75px;
            margin-right: 75px;
            font-family: ${users.selectedFontBack};
          }
    
          .ss-image {
            height: 150px;
            width: 150px;
            border-radius: 50%;
            object-fit: cover;
          }
    
          .top-person-details-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
    
          .top-person-left-container {
            display: flex;
            gap: 10px;
            align-items: center;
          }
          .summary-text-t2 {
            margin-top: 10px; 
            font-size: 21px;
          }
    
          .skills-items {
            display: flex;
            gap: 10px;
            margin-bottom: 15px;
          }
    
          .languages-items {
            display: flex;
            gap: 60px;
            margin-bottom: 15px;
          }
          .name-t2 {
            font-size: 40px;
            font-weight: bold;
            margin: 0;
            color: #0560f0;
          }
          .role-t2 {
            font-size: 28px;
            margin: 0;
          }
          .contact-container-t2 {
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            align-items: flex-end;
          }
          .contact-t2 {
            font-size: 16px;
            margin: 0;
            align-self: flex-end;
          }
          .all-headings {
            font-size: 24px;
            font-weight: bold;
            margin: 0;
            padding: 0;
            color: #0560f0;
          }
          .individual-skills {
            background-color: grey;
            padding: 5px;
            border-radius: 5px;
            color: #fff; 
            font-size: 22px;
            padding-left: 15px;
            padding-right: 15px;
          }
          
          .proficiency-text-t2 {
            font-style: italic; 
            font-size: 21px;
          } 
          .work-description-t2 {
            font-size: 21px;
          }  
          .added-details-passage {
            font-size: 21px;
          } 
          .created-details-passage{
            font-size: 21px;
          }
          .school-text {
            font-size: 21px;
          }
          .work-exp-items {
            margin-bottom: 15px;
          }
          .work-exp-employer {
            font-size: 22px;
            font-weight: bold; 
            color: #686869;
          } 
          .col-proj-items {
            margin-bottom: 15px;
          } 
          .language-heading {
            font-size: 24px;
            font-weight: bold;
            margin: 0;
          }  
          .work-exp-position {
            font-size: 24px;
            font-weight: bold;
          }
          .proj-heading {
            font-size: 24px;
            font-weight: bold;
          }
          .school-heading {
            font-size: 24px;
            font-weight: bold;
            margin: 0;
          }
          .work-exp-pos-date-container {
            display: flex;
            justify-content: space-between;
          }
    
          .col-date-container {
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          .hr-tag {
            margin: 0;
            margin-bottom: 10px;
          } 
          .summary-hash-span {
            color:white;
            font-size:1px; 
          }
          .icon-text-cont {
              display: flex;
              flex-direction: row;
              gap: 5px;
            }

            .dis-element{
              display: none;
              }

              
        </style>
      </head>
    
      <body>
        <div class="a4-resume">
          <div class="top-container top-person-details-container">
            <div class="top-person-left-container">
             <div id='disProfile' class='' >
              <img  class="ss-image" src="data:image/png;base64,${dataUrl1}" >
             </div>
              
              <div>
                <h3 class="name-t2">${users.name}</h3>
                <p id='disRole' class="role-t2">${users.profession}</p>
              </div>
            </div>
            <div class="contact-container-t2">
                <div id='disEmail' class="icon-text-cont">
                    <p class="contact-t2">${users.email}</p>
                    <div>
                      <i class="fa-solid fa-envelope"></i>
                    </div>
                    
                </div>
                <div id='disPhone' class="icon-text-cont">
                    <p class="contact-t2">${users.phone}</p>
                    <div>
                      <i class="fa-solid fa-phone"></i>
                    </div>
                   
                </div>
                <div id='disLinkedin' class="icon-text-cont">
                    <p class="contact-t2">${users.linkedin}</p>
                    <div>
                      <i class="fa-brands fa-linkedin"></i>
                    </div>
                    
                </div>
             
              
              
            </div>
          </div>
          <div id='disSummary' class=''>
            <p class="summary-text-t2">${
              users.summary
            }<span class="summary-hash-span">#</span</p>
          </div>
          <div id='disSkills' class="skills-container">
            <h4 class="all-headings">SKILLS</h4>
            <hr color="black" class="hr-tag" />
            <div class="skills-items" id='skills'>
            </div>
           
          </div>
          <div id='disLanguages' class="languages-container">
            <h4 class="all-headings">LANGUAGES</h4>
            <hr color="black" class="hr-tag" />
            <div class="languages-items" id='language'></div>
            
          </div>
          <div class="workExp-container">
            <div>
              <h3 class="all-headings">WORK EXPERIENCE</h3>
              <hr color="black" class="hr-tag" />
              <div class="work-exp-items" id='work-exp'>
    
              </div>
    
              
            </div>
          </div>
          <div id='disPersonal' class="college-project-container">
            <h3 class="all-headings">PERSONAL PROJECTS</h3>
            <hr color="black" class="hr-tag" />
            <div id="personal"></div>
            
          </div>
          <div class="education-container">
            <h4 class="all-headings">EDUCATION</h4>
            <hr color="black" class="hr-tag" />
            <div id="education"></div>
            
          </div>
        </div>
    
        <script>
    
        const totalSkillsList = ${JSON.stringify(users.totalSkills)}
        totalSkillsList.forEach(num => {
    
        // Create the necessary elements
        var skillsItemsDiv = document.createElement('div');
        skillsItemsDiv.setAttribute('class', 'skills-items');
    
    
        var reactSkillsP = document.createElement('p');
        reactSkillsP.setAttribute('class', 'individual-skills');
        reactSkillsP.textContent = num.skill ;
    
    
        var hashtagSpan = document.createElement('span');
        hashtagSpan.style.fontSize = '1px';
        hashtagSpan.style.color = 'grey';
        hashtagSpan.innerText = '#';
        reactSkillsP.appendChild(hashtagSpan);
    
    
        skillsItemsDiv.appendChild(reactSkillsP);
    
        // Append the skillsItemsDiv to the desired parent element in your HTML
        var parentElement = document.getElementById('skills');
        parentElement.appendChild(skillsItemsDiv);
        });
    
        const languageTotalList = ${JSON.stringify(users.languageTotal)}
        languageTotalList.forEach(num => {
    
        // Create the necessary elements
        var englishDiv = document.createElement('div');
        var englishHeadingH5 = document.createElement('h5');
        englishHeadingH5.setAttribute('class', 'language-heading');
        englishHeadingH5.textContent = num.language ; 
    
        var hashtagSpan = document.createElement('span');
        hashtagSpan.style.fontSize = '1px';
        hashtagSpan.style.color = 'grey';
        hashtagSpan.innerText = '#';
        englishHeadingH5.appendChild(hashtagSpan);
    
        var englishProficiencyP = document.createElement('p');
        englishProficiencyP.setAttribute('class', 'proficiency-text-t2');
        englishProficiencyP.textContent = num.proficiency ; 
    
    
        var hashtagSpan = document.createElement('span');
        hashtagSpan.style.fontSize = '1px';
        hashtagSpan.style.color = 'grey';
        hashtagSpan.innerText = '#';
        englishProficiencyP.appendChild(hashtagSpan);
    
        englishDiv.appendChild(englishHeadingH5);
        englishDiv.appendChild(englishProficiencyP);
        
        
        
        // Append the created div elements to the desired parent element in your HTML
        var parentElement = document.getElementById('language');
        parentElement.appendChild(englishDiv);
        
        });
    
        const userExp3 = ${JSON.stringify(users.workExpTotal)}
        userExp3.forEach(num => {
        // Create the necessary elements
          var outerDiv = document.createElement('div');
          outerDiv.setAttribute('class', 'work-exp-pos-date-container');
    
          var positionHeadingH5 = document.createElement('h5');
          positionHeadingH5.setAttribute('class', 'work-exp-position');
          positionHeadingH5.textContent = num.positionVal; 
    
          var hashtagSpan = document.createElement('span');
          hashtagSpan.style.fontSize = '1px';
          hashtagSpan.style.color = 'grey';
          hashtagSpan.innerText = '#';
          positionHeadingH5.appendChild(hashtagSpan);
    
          var dateElement = document.createElement('date');
          dateElement.textContent = num.fromDateValue + ' - ' + num.toDateValue; 
    
          var hashtagSpan = document.createElement('span');
          hashtagSpan.style.fontSize = '1px';
          hashtagSpan.style.color = 'grey';
          hashtagSpan.innerText = '#';
          dateElement.appendChild(hashtagSpan);
    
          var employerHeadingH6 = document.createElement('h6');
          employerHeadingH6.setAttribute('class', 'work-exp-employer');
          employerHeadingH6.textContent = num.employerVal; 
    
          var hashtagSpan = document.createElement('span');
          hashtagSpan.style.fontSize = '1px';
          hashtagSpan.style.color = 'grey';
          hashtagSpan.innerText = '#';
          employerHeadingH6.appendChild(hashtagSpan);
    
          
          var descriptionParagraph = document.createElement('p');
          descriptionParagraph.innerHTML = num.workVal;  
          descriptionParagraph.setAttribute('class', 'work-description-t2');
    
          var hashtagSpan = document.createElement('span');
          hashtagSpan.style.fontSize = '1px';
          hashtagSpan.style.color = 'grey';
          hashtagSpan.innerText = '#';
          descriptionParagraph.appendChild(hashtagSpan);
    
    
          var parentElement = document.getElementById('work-exp');
          // Build the HTML structure
          outerDiv.appendChild(positionHeadingH5);
          outerDiv.appendChild(dateElement);
          parentElement.appendChild(outerDiv);
          parentElement.appendChild(employerHeadingH6);
          parentElement.appendChild(descriptionParagraph);    
          // Append the outerDiv to the desired parent element in your HTML
        });
            const userExp1 = ${JSON.stringify(users.educationTotal)}
            userExp1.forEach(num => {
    
    
              // Create the necessary elements
              var outerDiv = document.createElement('div');
              var innerDiv = document.createElement('div');
              innerDiv.setAttribute('class', 'col-date-container');
    
              var schoolHeadingH5 = document.createElement('h5');
              schoolHeadingH5.setAttribute('class', 'school-heading');
              schoolHeadingH5.textContent = num.degreeVal; 
    
              var hashtagSpan = document.createElement('span');
              hashtagSpan.style.fontSize = '1px';
              hashtagSpan.style.color = 'grey';
              hashtagSpan.innerText = '#';
              schoolHeadingH5.appendChild(hashtagSpan);
    
              var dateParagraph = document.createElement('p');
              dateParagraph.textContent = num.fromSchoolVal + '-' + num.toSchoolVal; 
    
              var hashtagSpan = document.createElement('span');
              hashtagSpan.style.fontSize = '1px';
              hashtagSpan.style.color = 'grey';
              hashtagSpan.innerText = '#';
              dateParagraph.appendChild(hashtagSpan);
    
              var sscParagraph = document.createElement('p');
              sscParagraph.textContent = num.schoolVal;  
              sscParagraph.setAttribute('class', 'school-text');
    
              var hashtagSpan = document.createElement('span');
              hashtagSpan.style.fontSize = '1px';
              hashtagSpan.style.color = 'white';
              hashtagSpan.innerText = '#';
              sscParagraph.appendChild(hashtagSpan);
    
              // Build the HTML structure
              innerDiv.appendChild(schoolHeadingH5);
              innerDiv.appendChild(dateParagraph);
              outerDiv.appendChild(innerDiv);
              outerDiv.appendChild(sscParagraph);
    
              // Append the outerDiv to the desired parent element in your HTML
              var parentElement = document.getElementById('education');
              parentElement.appendChild(outerDiv);
    
    
    
    
            });
    
    
    
    
          const personalEle = document.getElementById('personal');
          const personalTotalList = ${JSON.stringify(users.projectTotal)}
    
          personalTotalList.forEach(num => {
          const personalHead1 = document.createElement('h1');
          personalHead1.innerText = num.collegeProjName;
          personalHead1.classList.add('proj-heading')
            
    
            var hashtagSpan = document.createElement('span');
            hashtagSpan.style.fontSize = '1px';
            hashtagSpan.style.color = 'grey';
            hashtagSpan.innerText = '#';
            personalHead1.appendChild(hashtagSpan); 
    
            personalEle.appendChild(personalHead1); 
    
            const createDetEle = document.createElement('p');
            createDetEle.innerText = num.createDetails;
            createDetEle.classList.add('created-details-passage') 
    
            var hashtagSpan = document.createElement('span');
            hashtagSpan.style.fontSize = '1px';
            hashtagSpan.style.color = 'grey';
            hashtagSpan.innerText = '#';
            createDetEle.appendChild(hashtagSpan);
    
            personalEle.appendChild(createDetEle); 
            const addedDetEle = document.createElement('p');
            addedDetEle.innerText = num.addedDetails 
            addedDetEle.classList.add('added-details-passage') 
    
            var hashtagSpan = document.createElement('span');
            hashtagSpan.style.fontSize = '1px';
            hashtagSpan.style.color = 'grey';
            hashtagSpan.innerText = '#';
            addedDetEle.appendChild(hashtagSpan);
    
    
            personalEle.appendChild(addedDetEle);
    
    
    
          });



          if (${users.disProfilePic === false}){
            const profileDisEle = document.getElementById("disProfile");
            profileDisEle.classList.add("dis-element");

          }

          if (${users.disRole === false}){
            const disRoleDisEle = document.getElementById("disRole");
            disRoleDisEle.classList.add("dis-element");

          }

          if (${users.disSummary === false}){
            const disSummaryDisEle = document.getElementById("disSummary");
            disSummaryDisEle.classList.add("dis-element");

          }

          if (${users.disEmail === false}){
            const disEmailDisEle = document.getElementById("disEmail");
            disEmailDisEle.classList.add("dis-element");

          }

          if (${users.disPhone === false}){
            const disPhoneDisEle = document.getElementById("disPhone");
            disPhoneDisEle.classList.add("dis-element");

          }

          if (${users.disLinkedin === false}){
            const disLinkedinDisEle = document.getElementById("disLinkedin");
            disLinkedinDisEle.classList.add("dis-element");

          }
          

          if (${users.disSkills === false}){
            const disSkillsDisEle = document.getElementById("disSkills");
            disSkillsDisEle.classList.add("dis-element");

          }

          if (${users.disPersonal === false}){
            const disPersonalEle = document.getElementById("disPersonal");
            disPersonalEle.classList.add("dis-element");

          }

          if (${users.disLanguages === false}){
            const disLanguagesEle = document.getElementById("disLanguages");
            disLanguagesEle.classList.add("dis-element");

          }

          
          
        </script>
      </body>
    </html>
`;
  }

  const template = handlebars.compile(source);

  const html = template();

  const browser = await puppeteer.launch({
    headless: "new",
  });

  const url = "https://www.google.com";

  const page = await browser.newPage();

  const filePath = path.join(process.cwd(), "index.html");

  // await page.goto(`file://${filePath}`, { waitUntil: "networkidle0" });

  await page.setContent(html, { waitUntil: "networkidle0" });

  const pdf = await page.pdf({
    format: "A4",
    margin: {
      top: "20mm",
      bottom: "20mm",
    },
    printBackground: true,
  });
  await browser.close();

  res.set("Content-Type", "application/pdf");

  res.send(pdf);

  if (firstpath1 === undefined) {
    console.log("file not found");
  } else if (firstpath1 === "") {
    console.log("file not found empty");
  } else {
    deleteFile(firstpath1);
  }

  firstpath1 = "";
};

export const createUser = (req, res) => {
  const user = req.body;

  users = { ...user };
  res.send("user added successfully");
};
