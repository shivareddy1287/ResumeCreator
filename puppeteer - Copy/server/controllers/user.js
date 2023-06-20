import puppeteer from "puppeteer";
import handlebars from "handlebars";

import path from "path";

let users = {};

export const getUsers = async (req, res) => {
  console.log(users);

  // const val = userDet.map((each) => each.positionVal);
  // console.log(val);
  console.log(users);
  let source;

  const source12 = `
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
          font-family: arial;
        }
  
        .img-text-cont {
          display: flex;
          flex-direction: row;
          gap: 35px;
        }
        .img-width-cont {
          width: 30%;
        }
  
        .profile-img {
          height: 200px;
          width: 200px;
          border-radius: 50%;
        }
        .main-text-cont {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          width: 70%;
        }
        .main-head-name {
          font-size: 55px;
          font-weight: bold;
          margin-bottom: 0px;
          color: rgb(81, 81, 241);
        }
  
        .main-role {
          font-size: 26px;
          font-weight: 400;
          margin-bottom: 0px;
          margin-top: 0px;
        }
  
        .main-para {
          font-size: 18px;
          font-weight: 400;
          margin-top: 0px;
        }
  
        .all-side-head {
          font-size: 28px;
          font-weight: 600;
          margin-bottom: 0px;
          color: rgb(81, 81, 241);
          margin-top: 30px;
        }
  
        .all-para-font {
          font-size: 18px;
          font-weight: 400;
          margin-bottom: 0px;
          margin-top: 0px;
        }
  
        .all-side-side-head-sub {
          font-size: 26px;
          font-weight: 600;
          margin-bottom: 0px;
          margin-top: 0px;
          color: rgba(0, 0, 0, 0.63);
        }
        .all-side-side-head-sub2 {
          font-size: 24px;
          margin-bottom: 0px;
          margin-top: 0px;
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
          margin-top: 20px;
          margin-bottom: -20px;
        }
  
        .each-margin-email {
          margin-bottom: 0px;
        }
  
        .email-phone-cont {
          display: flex;
          flex-direction: column;
        }
  
        .icon-text-cont {
          display: flex;
          flex-direction: row;
          gap: 5px;
        }
  
        .work-skills-cont {
          display: flex;
          flex-direction: row;
          gap: 35px;
        }
        .work-cont {
          width: 70%;
        }
  
        .skills-other-cont {
          width: 30%;
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
        }
        .extra-para {
          text-align: justify;
          text-justify: distribute;
        }
        .extra-margin-map{
          margin-bottom: 10px;
         }
      </style>
    </head>
    <body>
      <div class="main-cont">
        <div class="img-text-cont">
          <div class="img-width-cont">
            <img
              class="profile-img"
              src="https://res.cloudinary.com/dnm22sfwx/image/upload/v1681475468/IMG_20220612_153745_x83mee.jpg"
            />
          </div>
          <div class="main-text-cont">
            <h1 class="main-head-name">${users.name}</h1>
            <p class="main-role">${users.profession}</p>
          </div>
        </div>
        <!-- <hr class="hr-line-top2" /> -->
  
        <div class="work-skills-cont">
          <div class="skills-other-cont">
            <div>
              <h1 class="all-side-head">SUMMARY</h1>
              <p class="all-para-font">${users.summary}</p>
            </div>
            <div>
              <h1 class="all-side-head">EDUCATION</h1>
             <div id='education'>
             
             </div>
            </div>
  
            <div>
              <h1 class="all-side-head">SKILLS</h1>
              <div class="each-skills-cont" id='skills1'>
              
              </div>
              
            </div>
            <div>
              <div class="email-phone-cont all-para-font">
                <h1 class="all-side-head">CONTACTS</h1>
                <div class="icon-text-cont">
                  <div>
                    <i class="fa-solid fa-envelope"></i>
                  </div>
                  <p class="each-margin-email">${users.email}</p>
                </div>
                <div class="icon-text-cont">
                  <div>
                    <i class="fa-solid fa-phone"></i>
                  </div>
                  <p class="each-margin-email">${users.phone}</p>
                </div>
                <div class="icon-text-cont">
                  <div>
                    <i class="fa-brands fa-linkedin"></i>
                  </div>
                  <p class="each-margin-email">${users.linkedin}</p>
                </div>
                <div class="icon-text-cont">
                  <div>
                    <i class="fa-brands fa-github"></i>
                  </div>
                  <p class="each-margin-email">${users.github}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="work-cont" >
            <h1 class="all-side-head">WORK EXPERIENCE</h1>
            <div id='workExp'>
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
  
        skillsList.appendChild(skillEle);
      })
  
  
  
  
      const list1 = document.getElementById('education');
      const userExp1 = ${JSON.stringify(users.educationTotal)}
      userExp1.forEach(num => {
        const listItem1 = document.createElement('p');
        
        listItem1.innerText = num.degreeVal;
        listItem1.classList.add('all-side-side-head-sub')
        
        list1.appendChild(listItem1);
  
        const listItem21 = document.createElement('p');
        
        listItem21.innerText = num.schoolVal;
        listItem21.classList.add('all-side-side-head-sub2')
        
        list1.appendChild(listItem21);
  
        const listItem31 = document.createElement('p');
        
        listItem31.innerText = num.fromSchoolVal + '-' + num.toSchoolVal
        listItem31.classList.add('all-para-font','extra-margin-map')
        
        list1.appendChild(listItem31);
  
        
  
      });
    
    const list = document.getElementById('workExp');
    const userExp = ${JSON.stringify(users.workExpTotal)}
    userExp.forEach(num => {
      const listItem = document.createElement('p');
      
      listItem.innerText = num.positionVal;
      listItem.classList.add('all-side-side-head-sub')
      
      list.appendChild(listItem);
  
      const listItem2 = document.createElement('p');
      
      listItem2.innerText = num.employerVal;
      listItem2.classList.add('all-side-side-head-sub2')
      
      list.appendChild(listItem2);
  
      const listItem3 = document.createElement('p');
      
      listItem3.innerText = num.fromDateValue + '-' + num.toDateValue
      listItem3.classList.add('all-para-font')
      
      list.appendChild(listItem3);
  
      const listItem4 = document.createElement('p');
      
      listItem4.innerText = num.workVal
      listItem4.classList.add('all-para-font','extra-margin-map')
      
      list.appendChild(listItem4);
  
  
  
    });
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

  if (users.selectResume === "Resume1") {
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
        font-family: arial;
      }

      .img-text-cont {
        display: flex;
        flex-direction: row;
        gap: 35px;
      }
      .img-width-cont {
        width: 30%;
      }

      .profile-img {
        height: 200px;
        width: 200px;
        border-radius: 50%;
      }
      .main-text-cont {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        width: 70%;
      }
      .main-head-name {
        font-size: 55px;
        font-weight: bold;
        margin-bottom: 0px;
        color: rgb(81, 81, 241);
      }

      .main-role {
        font-size: 26px;
        font-weight: 400;
        margin-bottom: 0px;
        margin-top: 0px;
      }

      .main-para {
        font-size: 18px;
        font-weight: 400;
        margin-top: 0px;
      }

      .all-side-head {
        font-size: 28px;
        font-weight: 600;
        margin-bottom: 0px;
        color: rgb(81, 81, 241);
        margin-top: 30px;
      }

      .all-para-font {
        font-size: 18px;
        font-weight: 400;
        margin-bottom: 0px;
        margin-top: 0px;
      }

      .all-side-side-head-sub {
        font-size: 26px;
        font-weight: 600;
        margin-bottom: 0px;
        margin-top: 0px;
        color: rgba(0, 0, 0, 0.63);
      }
      .all-side-side-head-sub2 {
        font-size: 24px;
        margin-bottom: 0px;
        margin-top: 0px;
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
        margin-top: 20px;
        margin-bottom: -20px;
      }

      .each-margin-email {
        margin-bottom: 0px;
      }

      .email-phone-cont {
        display: flex;
        flex-direction: column;
      }

      .icon-text-cont {
        display: flex;
        flex-direction: row;
        gap: 5px;
      }

      .work-skills-cont {
        display: flex;
        flex-direction: row;
        gap: 35px;
      }
      .work-cont {
        width: 70%;
      }

      .skills-other-cont {
        width: 30%;
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
      }
      .extra-para {
        text-align: justify;
        text-justify: distribute;
      }
      .extra-margin-map{
        margin-bottom: 10px;
       }
    </style>
  </head>
  <body>
    <div class="main-cont">
      <div class="img-text-cont">
        <div class="img-width-cont">
          <img
            class="profile-img"
            src="https://res.cloudinary.com/dnm22sfwx/image/upload/v1681475468/IMG_20220612_153745_x83mee.jpg"
          />
        </div>
        <div class="main-text-cont">
          <h1 class="main-head-name">${users.name}</h1>
          <p class="main-role">${users.profession}</p>
        </div>
      </div>
      <!-- <hr class="hr-line-top2" /> -->

      <div class="work-skills-cont">
        <div class="skills-other-cont">
          <div>
            <h1 class="all-side-head">SUMMARY</h1>
            <p class="all-para-font">${users.summary}</p>
          </div>
          <div>
            <h1 class="all-side-head">EDUCATION</h1>
           <div id='education'>
           
           </div>
          </div>

          <div>
            <h1 class="all-side-head">SKILLS</h1>
            <div class="each-skills-cont" id='skills1'>
            
            </div>
            
          </div>
          <div>
            <div class="email-phone-cont all-para-font">
              <h1 class="all-side-head">CONTACTS</h1>
              <div class="icon-text-cont">
                <div>
                  <i class="fa-solid fa-envelope"></i>
                </div>
                <p class="each-margin-email">${users.email}</p>
              </div>
              <div class="icon-text-cont">
                <div>
                  <i class="fa-solid fa-phone"></i>
                </div>
                <p class="each-margin-email">${users.phone}</p>
              </div>
              <div class="icon-text-cont">
                <div>
                  <i class="fa-brands fa-linkedin"></i>
                </div>
                <p class="each-margin-email">${users.linkedin}</p>
              </div>
              <div class="icon-text-cont">
                <div>
                  <i class="fa-brands fa-github"></i>
                </div>
                <p class="each-margin-email">${users.github}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="work-cont" >
          <h1 class="all-side-head">WORK EXPERIENCE</h1>
          <div id='workExp'>
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

      skillsList.appendChild(skillEle);
    })




    const list1 = document.getElementById('education');
    const userExp1 = ${JSON.stringify(users.educationTotal)}
    userExp1.forEach(num => {
      const listItem1 = document.createElement('p');
      
      listItem1.innerText = num.degreeVal;
      listItem1.classList.add('all-side-side-head-sub')
      
      list1.appendChild(listItem1);

      const listItem21 = document.createElement('p');
      
      listItem21.innerText = num.schoolVal;
      listItem21.classList.add('all-side-side-head-sub2')
      
      list1.appendChild(listItem21);

      const listItem31 = document.createElement('p');
      
      listItem31.innerText = num.fromSchoolVal + '-' + num.toSchoolVal
      listItem31.classList.add('all-para-font','extra-margin-map')
      
      list1.appendChild(listItem31);

      

    });
  
  const list = document.getElementById('workExp');
  const userExp = ${JSON.stringify(users.workExpTotal)}
  userExp.forEach(num => {
    const listItem = document.createElement('p');
    
    listItem.innerText = num.positionVal;
    listItem.classList.add('all-side-side-head-sub')
    
    list.appendChild(listItem);

    const listItem2 = document.createElement('p');
    
    listItem2.innerText = num.employerVal;
    listItem2.classList.add('all-side-side-head-sub2')
    
    list.appendChild(listItem2);

    const listItem3 = document.createElement('p');
    
    listItem3.innerText = num.fromDateValue + '-' + num.toDateValue
    listItem3.classList.add('all-para-font')
    
    list.appendChild(listItem3);

    const listItem4 = document.createElement('p');
    
    listItem4.innerText = num.workVal
    listItem4.classList.add('all-para-font','extra-margin-map')
    
    list.appendChild(listItem4);



  });
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
  } else if (users.selectResume === "Resume2") {
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
            font-family: arial;
          }
    
          .img-text-cont {
            display: flex;
            flex-direction: row;
            gap: 35px;
            margin-bottom: 40px;
          }
    
          .profile-img {
            height: 200px;
            width: 200px;
            border-radius: 50%;
          }
          .main-head-name {
            font-size: 45px;
            font-weight: bold;
            margin-bottom: 0px;
            color: rgb(81, 81, 241);
          }
    
          .main-role {
            font-size: 26px;
            font-weight: 400;
            margin-bottom: 0px;
            margin-top: 0px;
          }
    
          .main-para {
            font-size: 18px;
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
            font-size: 18px;
            font-weight: 400;
            margin-bottom: 0px;
            margin-top: 0px;
          }
    
          .all-side-side-head-sub {
            font-size: 26px;
            font-weight: 600;
            margin-bottom: 0px;
            margin-top: 0px;
            color: rgba(0, 0, 0, 0.63);
          }
          .all-side-side-head-sub2 {
            font-size: 24px;
            margin-bottom: 0px;
            margin-top: 0px;
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
            gap: 35px;
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
          }
          .extra-para {
            text-align: justify;
            text-justify: distribute;
          }
         .extra-margin-map{
          margin-bottom: 10px;
         }
        </style>
      </head>
      <body>
        <div class="main-cont">
          <div class="img-text-cont">
            <div>
              <img
                class="profile-img"
                src="https://res.cloudinary.com/dnm22sfwx/image/upload/v1681475468/IMG_20220612_153745_x83mee.jpg"
              />
            </div>
            <div class="main-text-cont">
              <h1 class="main-head-name">${users.name}</h1>
    
              <p class="main-role">${users.profession}</p>
              <p class="main-para">${users.aboutHeadline}</p>
            </div>
          </div>
          <div class="mb-3">
            <hr class="hr-line-top1" />
            <div class="email-phone-cont all-para-font">
              <div class="icon-text-cont">
                <div>
                  <i class="fa-solid fa-envelope"></i>
                </div>
                <p class="each-margin-email">${users.email}</p>
              </div>
              <div class="icon-text-cont">
                <div>
                  <i class="fa-solid fa-phone"></i>
                </div>
                <p class="each-margin-email">${users.phone}</p>
              </div>
              <div class="icon-text-cont">
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
              <div class="skills-cont">
                <h1 class="all-side-head">SKILLS</h1>
                <div class="each-skills-cont" id='skills1'>
                  
                  </div>
               
              </div>
              <div class="honour-cont">
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
        listItem4.classList.add('all-para-font','extra-margin-map') 

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
      }

      .ss-image {
        height: 150px;
        width: 150px;
        border-radius: 50%;
        object-fit: fill;
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
      }

      .skills-items {
        display: flex;
        gap: 10px;
        margin-bottom: 15px;
      }

      .languages-items {
        display: flex;
        gap: 40px;
        margin-bottom: 15px;
      }
      .name-t2 {
        font-size: 40px;
        font-weight: bold;
        margin: 0;
        color: blue;
      }
      .role-t2 {
        font-size: 28px;
        margin: 0;
      }
      .contact-container-t2 {
        display: flex;
        flex-direction: column;
      }
      .contact-t2 {
        font-size: 14px;
        margin: 0;
        align-self: flex-end;
      }
      .all-headings {
        font-size: 24px;
        font-weight: bold;
        margin: 0;
        padding: 0;
        color: blue;
      }
      .individual-skills {
        background-color: grey;
        padding: 5px;
        border-radius: 5px;
        color: #fff;
        padding-left: 15px;
        padding-right: 15px;
      }
      .language-heading {
        font-size: 18px;
        font-weight: bold;
        margin: 0;
      }
      .proficiency-text-t2 {
        font-style: italic;
      }
      .work-exp-items {
        margin-bottom: 15px;
      }
      .work-exp-position {
        font-size: 18px;
        font-weight: bold;
      }
      .work-exp-employer {
        font-size: 16px;
        font-weight: bold;
      }
      .col-proj-items {
        margin-bottom: 15px;
      }
      .proj-heading {
        font-size: 18px;
        font-weight: bold;
      }
      .school-heading {
        font-size: 18px;
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
    </style>
  </head>

  <body>
    <div class="a4-resume">
      <div class="top-container top-person-details-container">
        <div class="top-person-left-container">
          <img
            class="ss-image"
            src="https://res.cloudinary.com/dzrc9ejln/image/upload/v1663746672/samples/people/kitchen-bar.jpg"
          />
          <div>
            <h3 class="name-t2">${users.name}</h3>
            <p class="role-t2">${users.profession}</p>
          </div>
        </div>
        <div class="contact-container-t2">
          <p class="contact-t2">${users.email}</p>
          <p class="contact-t2">${users.phone}</p>
          <p class="contact-t2">${users.linkedin}</p>
        </div>
      </div>
      <div>
        <p class="summary-text-t2">${
          users.summary
        }<span class="summary-hash-span">#</span</p>
      </div>
      <div class="skills-container">
        <h4 class="all-headings">SKILLS</h4>
        <hr color="black" class="hr-tag" />
        <div class="skills-items" id='skills'>
        </div>
       
      </div>
      <div class="languages-container">
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
      <div class="college-project-container">
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

        var hashtagSpan = document.createElement('span');
        hashtagSpan.style.fontSize = '1px';
        hashtagSpan.style.color = 'grey';
        hashtagSpan.innerText = '#';
        createDetEle.appendChild(hashtagSpan);

        personalEle.appendChild(createDetEle); 
        const addedDetEle = document.createElement('p');
        addedDetEle.innerText = num.addedDetails 

        var hashtagSpan = document.createElement('span');
        hashtagSpan.style.fontSize = '1px';
        hashtagSpan.style.color = 'grey';
        hashtagSpan.innerText = '#';
        addedDetEle.appendChild(hashtagSpan);


        personalEle.appendChild(addedDetEle);



      });
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

  // await page.goto(`file://${filePath}`, { waitUntil: "networkidle2" });

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
};

export const createUser = (req, res) => {
  const user = req.body;
  console.log(user);

  users = { ...user };
  res.send("user added successfully");
};

// import puppeteer from "puppeteer";
// import handlebars from "handlebars";

// import path from "path";

// let users = {};

// export const getUsers = async (req, res) => {
//   console.log(users.name);

//   const source1 = `
//   <!DOCTYPE html>
//   <html>
//     <head>
//       <!-- Font Awesome -->
//       <link
//         rel="stylesheet"
//         href="https://use.fontawesome.com/releases/v5.7.0/css/all.css"
//       />
//       <!-- Bootstrap core CSS -->
//       <link
//         href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css"
//         rel="stylesheet"
//       />
//       <!-- Material Design Bootstrap -->
//       <link
//         href="https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.7.5/css/mdb.min.css"
//         rel="stylesheet"
//       />

//       <style>
//         html {
//           -webkit-print-color-adjust: exact;
//           margin-left: 75px;
//           margin-right: 75px;
//         }

//         .main-cont {
//           font-family: arial;
//         }

//         .img-text-cont {
//           display: flex;
//           flex-direction: row;
//           gap: 35px;
//         }
//         .img-width-cont {
//           width: 30%;
//         }

//         .profile-img {
//           height: 200px;
//           width: 200px;
//           border-radius: 50%;
//         }
//         .main-text-cont {
//           display: flex;
//           flex-direction: column;
//           justify-content: center;
//           align-items: flex-start;
//           width: 70%;
//         }
//         .main-head-name {
//           font-size: 55px;
//           font-weight: bold;
//           margin-bottom: 0px;
//           color: rgb(81, 81, 241);
//         }

//         .main-role {
//           font-size: 26px;
//           font-weight: 400;
//           margin-bottom: 0px;
//           margin-top: 0px;
//         }

//         .main-para {
//           font-size: 18px;
//           font-weight: 400;
//           margin-top: 0px;
//         }

//         .all-side-head {
//           font-size: 28px;
//           font-weight: 600;
//           margin-bottom: 0px;
//           color: rgb(81, 81, 241);
//           margin-top: 30px;
//         }

//         .all-para-font {
//           font-size: 18px;
//           font-weight: 400;
//           margin-bottom: 0px;
//           margin-top: 0px;
//         }

//         .all-side-side-head-sub {
//           font-size: 26px;
//           font-weight: 600;
//           margin-bottom: 0px;
//           margin-top: 0px;
//           color: rgba(0, 0, 0, 0.63);
//         }
//         .all-side-side-head-sub2 {
//           font-size: 24px;
//           margin-bottom: 0px;
//           margin-top: 0px;
//         }

//         .hr-line-top1 {
//           border-width: 2px;
//           border-color: rgb(81, 81, 241);
//           margin: 0px;
//           margin-bottom: 6px;
//         }
//         .hr-line-top2 {
//           border-width: 2px;
//           border-color: rgb(81, 81, 241);
//           margin: 0px;
//           margin-top: 20px;
//           margin-bottom: -20px;
//         }

//         .each-margin-email {
//           margin-bottom: 0px;
//         }

//         .email-phone-cont {
//           display: flex;
//           flex-direction: column;
//         }

//         .icon-text-cont {
//           display: flex;
//           flex-direction: row;
//           gap: 5px;
//         }

//         .work-skills-cont {
//           display: flex;
//           flex-direction: row;
//           gap: 35px;
//         }
//         .work-cont {
//           width: 70%;
//         }

//         .skills-other-cont {
//           width: 30%;
//         }

//         .honour-cont {
//           margin-bottom: 25px;
//         }

//         .each-skills-cont {
//           display: flex;
//           flex-direction: row;
//           flex-wrap: wrap;
//           gap: 10px;
//         }
//         .each-skills {
//           font-size: 25px;
//           background-color: #5c96f2;
//           color: white;
//           border-radius: 4px;
//           padding-left: 8px;
//           padding-right: 8px;
//         }
//         .extra-para {
//           text-align: justify;
//           text-justify: distribute;
//         }
//       </style>
//     </head>
//     <body>
//       <div class="main-cont">
//         <div class="img-text-cont">
//           <div class="img-width-cont">
//             <img
//               class="profile-img"
//               src="https://res.cloudinary.com/dnm22sfwx/image/upload/v1681475468/IMG_20220612_153745_x83mee.jpg"
//             />
//           </div>
//           <div class="main-text-cont">
//             <h1 class="main-head-name">Shiva Aade</h1>
//             <p class="main-role">Software Developer</p>
//           </div>
//         </div>
//         <!-- <hr class="hr-line-top2" /> -->

//         <div class="work-skills-cont">
//           <div class="skills-other-cont">
//             <div>
//               <h1 class="all-side-head">SUMMARY</h1>
//               <p class="all-para-font">
//                 Lorem Ipsum is simply dummy text of the printing and typesetting
//                 industry. Lorem Ipsum has been the industry's standard dummy text
//                 ever since the 1500s, when an unknown printer took a galley of
//                 type and scrambled it to make a type specimen book. It has
//                 survived not only Nve centuries,
//               </p>
//             </div>
//             <div>
//               <h1 class="all-side-head">EDUCATION</h1>
//               <p class="all-side-side-head-sub">
//                 Electrical and Electronics Engg
//               </p>
//               <p class="all-side-side-head-sub2">
//                 Nalla Narasimha Reddy group of institutions
//               </p>
//               <p class="all-para-font">03/2022 - 02/2022</p>
//             </div>

//             <div>
//               <h1 class="all-side-head">SKILLS</h1>
//               <div class="each-skills-cont">
//                 <p class="each-skills">React js</p>
//                 <p class="each-skills">Node js</p>
//                 <p class="each-skills">CSS</p>
//                 <p class="each-skills">HTML</p>
//                 <p class="each-skills">SQL</p>
//                 <p class="each-skills">Python</p>
//                 <p class="each-skills">JavaScript</p>
//               </div>
//             </div>
//             <div>
//               <div class="email-phone-cont all-para-font">
//                 <h1 class="all-side-head">CONTACTS</h1>
//                 <div class="icon-text-cont">
//                   <div>
//                     <i class="fa-solid fa-envelope"></i>
//                   </div>
//                   <p class="each-margin-email">adheshiva@gmail.com</p>
//                 </div>
//                 <div class="icon-text-cont">
//                   <div>
//                     <i class="fa-solid fa-phone"></i>
//                   </div>
//                   <p class="each-margin-email">9441177123</p>
//                 </div>
//                 <div class="icon-text-cont">
//                   <div>
//                     <i class="fa-brands fa-linkedin"></i>
//                   </div>
//                   <p class="each-margin-email">linkedin-link-for-aade-shiva</p>
//                 </div>
//                 <div class="icon-text-cont">
//                   <div>
//                     <i class="fa-brands fa-github"></i>
//                   </div>
//                   <p class="each-margin-email">github-link-for-aade-shiva</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div class="work-cont">
//             <h1 class="all-side-head">WORK EXPERIENCE</h1>
//             <p class="all-side-side-head-sub">Software Enginee, Intern</p>
//             <p class="all-side-side-head-sub2">Radiant Spark Technology,inc</p>
//             <p class="all-para-font">03/2022 - 02/2022</p>
//             <p class="all-para-font extra-para">
//               Supervised and lead a team of 5 junior software engineers during the
//               development of a robust upgrade version of the company's software
//               applications, resulting in improved user experience and a 33%
//               revenue increase within 8 months. Demonstrated expertise in
//               translating the client's speci7c needs into easy-to-understand
//               software solutions during sales presentations, leading to the
//               successful closing of $ major contracts generating over K120z in
//               business revenue. Pro7ciently troubleshot simple and complex
//               technological issues for different assigned projects, achieving over
//               95% customer satisfaction rate. Enhanced the application's features
//               to effectively 7x the bugs and optimiNe the overall performance,
//               reliability, and eFciency.
//             </p>
//             <div>
//               <h1 class="all-side-head">WORK EXPERIENCE</h1>
//               <p class="all-side-side-head-sub">Software Enginee, Intern</p>
//               <p class="all-side-side-head-sub2">Radiant Spark Technology,inc</p>
//               <p class="all-para-font">03/2022 - 02/2022</p>

//               <ul class="all-para-font extra-para">
//                 <li>
//                   Supervised and lead a team of 5 junior software engineers during
//                   the development of a robust upgrade version of the company's
//                   software applications, resulting in improved user experience and
//                   a 33%
//                 </li>
//                 <li>
//                   revenue increase within 8 months. Demonstrated expertise in
//                   translating the client's speci7c needs into easy-to-understand
//                   software solutions during sales presentations,
//                 </li>
//                 <li>
//                   leading to the successful closing of $ major contracts
//                   generating over K120z in business revenue. Pro7ciently
//                   troubleshot
//                 </li>
//                 <li>
//                   simple and complex technological issues for different assigned
//                   projects, achieving over 95% customer satisfaction rate.
//                   Enhanced the application's features to effectively
//                 </li>
//                 <li>
//                   7x the bugs and optimiNe the overall performance, reliability,
//                   and eFciency.
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>

//       <!-- JQuery -->
//       <script
//         type="text/javascript"
//         src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"
//       ></script>
//       <!-- Bootstrap tooltips -->
//       <script
//         type="text/javascript"
//         src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.4/umd/popper.min.js"
//       ></script>
//       <!-- Bootstrap core JavaScript -->
//       <script
//         type="text/javascript"
//         src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/js/bootstrap.min.js"
//       ></script>
//       <!-- MDB core JavaScript -->
//       <script
//         type="text/javascript"
//         src="https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.7.5/js/mdb.min.js"
//       ></script>
//       <script
//         src="https://kit.fontawesome.com/4d0b0ac83e.js"
//         crossorigin="anonymous"
//       ></script>
//     </body>
//   </html>

//   `;

//   const source2 = `

// <!DOCTYPE html>
// <html>
//   <head>
//     <!-- Font Awesome -->
//     <link
//       rel="stylesheet"
//       href="https://use.fontawesome.com/releases/v5.7.0/css/all.css"
//     />
//     <!-- Bootstrap core CSS -->
//     <link
//       href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css"
//       rel="stylesheet"
//     />
//     <!-- Material Design Bootstrap -->
//     <link
//       href="https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.7.5/css/mdb.min.css"
//       rel="stylesheet"
//     />

//     <style>
//       html {
//         -webkit-print-color-adjust: exact;
//         margin-left: 75px;
//         margin-right: 75px;
//       }

//       .main-cont {
//         font-family: arial;
//       }

//       .img-text-cont {
//         display: flex;
//         flex-direction: row;
//         gap: 35px;
//         margin-bottom: 40px;
//       }

//       .profile-img {
//         height: 200px;
//         width: 200px;
//         border-radius: 50%;
//       }
//       .main-head-name {
//         font-size: 45px;
//         font-weight: bold;
//         margin-bottom: 0px;
//         color: rgb(81, 81, 241);
//       }

//       .main-role {
//         font-size: 26px;
//         font-weight: 400;
//         margin-bottom: 0px;
//         margin-top: 0px;
//       }

//       .main-para {
//         font-size: 18px;
//         font-weight: 400;
//         margin-top: 0px;
//       }

//       .all-side-head {
//         font-size: 28px;
//         font-weight: 600;
//         margin-bottom: 0px;
//         color: rgb(81, 81, 241);
//       }

//       .all-para-font {
//         font-size: 18px;
//         font-weight: 400;
//         margin-bottom: 0px;
//         margin-top: 0px;
//       }

//       .all-side-side-head-sub {
//         font-size: 26px;
//         font-weight: 600;
//         margin-bottom: 0px;
//         margin-top: 0px;
//         color: rgba(0, 0, 0, 0.63);
//       }
//       .all-side-side-head-sub2 {
//         font-size: 24px;
//         margin-bottom: 0px;
//         margin-top: 0px;
//       }

//       .main-text-cont {
//         display: flex;
//         flex-direction: column;
//         justify-content: center;
//         align-items: flex-start;
//       }

//       .hr-line-top1 {
//         border-width: 2px;
//         border-color: rgb(81, 81, 241);
//         margin: 0px;
//         margin-bottom: 6px;
//       }
//       .hr-line-top2 {
//         border-width: 2px;
//         border-color: rgb(81, 81, 241);
//         margin: 0px;
//         margin-top: 6px;
//       }

//       .each-margin-email {
//         margin-bottom: 0px;
//       }

//       .email-phone-cont {
//         display: flex;
//         flex-direction: row;
//         justify-content: space-around;
//       }

//       .icon-text-cont {
//         display: flex;
//         flex-direction: row;
//         gap: 5px;
//       }

//       .work-skills-cont {
//         display: flex;
//         flex-direction: row;
//         gap: 35px;
//       }
//       .work-cont {
//         width: 60%;
//       }

//       .skills-other-cont {
//         width: 40%;
//       }

//       .skills-cont {
//         margin-bottom: 25px;
//       }
//       .honour-cont {
//         margin-bottom: 25px;
//       }

//       .each-skills-cont {
//         display: flex;
//         flex-direction: row;
//         flex-wrap: wrap;
//         gap: 10px;
//       }
//       .each-skills {
//         font-size: 25px;
//         background-color: #5c96f2;
//         color: white;
//         border-radius: 4px;
//         padding-left: 8px;
//         padding-right: 8px;
//       }
//       .extra-para {
//         text-align: justify;
//         text-justify: distribute;
//       }
//     </style>
//   </head>
//   <body>
//     <div class="main-cont">
//       <div class="img-text-cont">
//         <div>
//           <img
//             class="profile-img"
//             src="https://res.cloudinary.com/dnm22sfwx/image/upload/v1681475468/IMG_20220612_153745_x83mee.jpg"
//           />
//         </div>
//         <div class="main-text-cont">
//           <h1 class="main-head-name">Shiva Aade</h1>

//           <p class="main-role">Software Developer</p>
//           <p class="main-para">
//             Passionate and Result driven with multiple years of experience in
//             Leading and delivering Enterprise-level product development,
//             Microservices
//           </p>
//         </div>
//       </div>
//       <div class="mb-3">
//         <hr class="hr-line-top1" />
//         <div class="email-phone-cont all-para-font">
//           <div class="icon-text-cont">
//             <div>
//               <i class="fa-solid fa-envelope"></i>
//             </div>
//             <p class="each-margin-email">adheshiva@gmail.com</p>
//           </div>
//           <div class="icon-text-cont">
//             <div>
//               <i class="fa-solid fa-phone"></i>
//             </div>
//             <p class="each-margin-email">9441177123</p>
//           </div>
//           <div class="icon-text-cont">
//             <div>
//               <i class="fa-brands fa-linkedin"></i>
//             </div>
//             <p class="each-margin-email">linkedin-link-for-aade-shiva</p>
//           </div>
//         </div>
//         <hr class="hr-line-top2" />
//       </div>
//       <div class="work-skills-cont">
//         <div class="work-cont">
//           <h1 class="all-side-head">WORK EXPERIENCE</h1>
//           <p class="all-side-side-head-sub">Software Enginee, Intern</p>
//           <p class="all-side-side-head-sub2">Radiant Spark Technology,inc</p>
//           <p class="all-para-font">03/2022 - 02/2022</p>
//           <p class="all-para-font extra-para">

//           Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 100s,
// when an unkown printer took a gallery of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
// electric typesetting, remaining essentially unchanged. it was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
// and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
// Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 100s,
// when an unkown printer took a gallery of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
// electric typesetting, remaining essentially unchanged. it was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
// and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
//             Supervised and lead a team of 5 junior software engineers during the
//             development of a robust upgrade version of the company's software
//             applications, resulting in improved user experience and a 33%
//             revenue increase within 8 months. Demonstrated expertise in
//             translating the client's speci7c needs into easy-to-understand
//             software solutions during sales presentations, leading to the
//             successful closing of $ major contracts generating over K120z in
//             business revenue. Pro7ciently troubleshot simple and complex
//             technological issues for different assigned projects, achieving over
//             95% customer satisfaction rate. Enhanced the application's features
//             to effectively 7x the bugs and optimiNe the overall performance,
//             reliability, and eFciency.
//           </p>
//           <div class="mt-4">
//             <h1 class="all-side-head">WORK EXPERIENCE</h1>
//             <p class="all-side-side-head-sub">Software Enginee, Intern</p>
//             <p class="all-side-side-head-sub2">Radiant Spark Technology,inc</p>
//             <p class="all-para-font">03/2022 - 02/2022</p>

//             <ul class="all-para-font extra-para">
//               <li>
//                 Supervised and lead a team of 5 junior software engineers during
//                 the development of a robust upgrade version of the company's
//                 software applications, resulting in improved user experience and
//                 a 33%
//               </li>
//               <li>
//                 revenue increase within 8 months. Demonstrated expertise in
//                 translating the client's speci7c needs into easy-to-understand
//                 software solutions during sales presentations,
//               </li>
//               <li>
//                 leading to the successful closing of $ major contracts
//                 generating over K120z in business revenue. Pro7ciently
//                 troubleshot
//               </li>
//               <li>
//                 simple and complex technological issues for different assigned
//                 projects, achieving over 95% customer satisfaction rate.
//                 Enhanced the application's features to effectively
//               </li>
//               <li>
//                 7x the bugs and optimiNe the overall performance, reliability,
//                 and eFciency.
//               </li>
//             </ul>
//           </div>
//         </div>

//         <div class="skills-other-cont">
//           <div class="skills-cont">
//             <h1 class="all-side-head">SKILLS</h1>
//             <div class="each-skills-cont">
//               <p class="each-skills">React js</p>
//               <p class="each-skills">Node js</p>
//               <p class="each-skills">CSS</p>
//               <p class="each-skills">HTML</p>
//               <p class="each-skills">SQL</p>
//               <p class="each-skills">Python</p>
//               <p class="each-skills">JavaScript</p>
//             </div>
//           </div>
//           <div class="honour-cont">
//             <h1 class="all-side-head">HONOR AWARDS</h1>
//             <p class="all-side-side-head-sub">Employee of the Month</p>
//             <p class="all-side-side-head-sub2">Company Award</p>
//           </div>
//           <div>
//             <h1 class="all-side-head">EDUCATION</h1>
//             <p class="all-side-side-head-sub">
//               Electrical and Electronics Engg
//             </p>
//             <p class="all-side-side-head-sub2">
//               Nalla Narasimha Reddy group of institutions
//             </p>
//             <p class="all-para-font">03/2022 - 02/2022</p>
//           </div>
//         </div>
//       </div>
//     </div>

//     <!-- JQuery -->
//     <script
//       type="text/javascript"
//       src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"
//     ></script>
//     <!-- Bootstrap tooltips -->
//     <script
//       type="text/javascript"
//       src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.4/umd/popper.min.js"
//     ></script>
//     <!-- Bootstrap core JavaScript -->
//     <script
//       type="text/javascript"
//       src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/js/bootstrap.min.js"
//     ></script>
//     <!-- MDB core JavaScript -->
//     <script
//       type="text/javascript"
//       src="https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.7.5/js/mdb.min.js"
//     ></script>
//     <script
//       src="https://kit.fontawesome.com/4d0b0ac83e.js"
//       crossorigin="anonymous"
//     ></script>
//   </body>
// </html>

//   `;

//   let source = `
//   <!DOCTYPE html>
//   <html>
//     <head>
//       <!-- Font Awesome -->
//       <link
//         rel="stylesheet"
//         href="https://use.fontawesome.com/releases/v5.7.0/css/all.css"
//       />
//       <!-- Bootstrap core CSS -->
//       <link
//         href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css"
//         rel="stylesheet"
//       />
//       <!-- Material Design Bootstrap -->
//       <link
//         href="https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.7.5/css/mdb.min.css"
//         rel="stylesheet"
//       />

//       <style>
//         html {
//           margin-left: 75px;
//           margin-right: 75px;
//         }

//         .main-cont {
//           font-family: arial;
//         }

//         .img-text-cont {
//           display: flex;
//           flex-direction: row;
//           gap: 35px;
//           margin-bottom: 40px;
//         }

//         .profile-img {
//           height: 250px;
//           width: 250px;
//           border-radius: 50%;
//         }
//         .main-head-name {
//           font-size: 45px;
//           font-weight: bold;
//           margin-bottom: 0px;
//           color: rgb(81, 81, 241);
//         }

//         .main-role {
//           font-size: 26px;
//           font-weight: 400;
//           margin-bottom: 0px;
//           margin-top: 0px;
//         }

//         .main-para {
//           font-size: 18px;
//           font-weight: 400;
//           margin-top: 0px;
//         }

//         .all-side-head {
//           font-size: 28px;
//           font-weight: 600;
//           margin-bottom: 0px;
//           color: rgb(81, 81, 241);
//         }

//         .all-para-font {
//           font-size: 18px;
//           font-weight: 400;
//           margin-bottom: 0px;
//           margin-top: 0px;
//         }

//         .all-side-side-head-sub {
//           font-size: 26px;
//           font-weight: 600;
//           margin-bottom: 0px;
//           margin-top: 0px;
//           color: rgba(0, 0, 0, 0.63);
//         }
//         .all-side-side-head-sub2 {
//           font-size: 24px;
//           margin-bottom: 0px;
//           margin-top: 0px;
//         }

//         .main-text-cont {
//           display: flex;
//           flex-direction: column;
//           justify-content: center;
//           align-items: flex-start;
//         }

//         .hr-line-top1 {
//           border-width: 2px;
//           border-color: rgb(81, 81, 241);
//           margin: 0px;
//           margin-bottom: 6px;
//         }
//         .hr-line-top2 {
//           border-width: 2px;
//           border-color: rgb(81, 81, 241);
//           margin: 0px;
//           margin-top: 6px;
//         }

//         .each-margin-email {
//           margin-bottom: 0px;
//         }

//         .email-phone-cont {
//           display: flex;
//           flex-direction: row;
//           justify-content: space-around;
//         }

//         .work-skills-cont {
//           display: flex;
//           flex-direction: row;
//           gap: 35px;
//         }
//         .work-cont {
//           width: 60%;
//         }

//         .skills-other-cont {
//           width: 40%;
//         }

//         .skills-cont {
//           margin-bottom: 25px;
//         }
//         .honour-cont {
//           margin-bottom: 25px;
//         }

//         .each-skills-cont {
//           display: flex;
//           flex-direction: row;
//           flex-wrap: wrap;
//           gap: 10px;
//         }
//         .each-skills {
//           font-size: 25px;
//           background-color: #5c96f2;
//           color: white;
//           border-radius: 4px;
//           padding-left: 8px;
//           padding-right: 8px;
//         }
//         .extra-para {
//           text-align: justify;
//           text-justify: distribute;
//         }
//       </style>
//     </head>
//     <body>
//       <div class="main-cont">
//         <div class="img-text-cont">
//           <div>
//             <img
//               class="profile-img"
//               src="https://res.cloudinary.com/dnm22sfwx/image/upload/v1681475468/IMG_20220612_153745_x83mee.jpg"
//             />
//           </div>
//           <div class="main-text-cont">
//             <h1 class="main-head-name">Shiva Aade</h1>
//             <div>
//               <i class="fa-solid fa-envelope"></i>
//             </div>
//             <p class="main-role">Software Developer</p>
//             <p class="main-para">
//               Passionate and Result driven with multiple years of experience in
//               Leading and delivering Enterprise-level product development,
//               Microservices
//             </p>
//           </div>
//         </div>
//         <div class="mb-3">
//           <hr class="hr-line-top1" />
//           <div class="email-phone-cont all-para-font">
//             <div>
//               <p class="each-margin-email">adheshiva@gmail.com</p>
//             </div>
//             <div>
//               <p class="each-margin-email">9441177123</p>
//             </div>
//             <div>
//               <p class="each-margin-email">linkedin-link-for-aade-shiva</p>
//             </div>
//           </div>
//           <hr class="hr-line-top2" />
//         </div>
//         <div class="work-skills-cont">
//           <div class="work-cont">
//             <h1 class="all-side-head">WORK EXPERIENCE</h1>
//             <p class="all-side-side-head-sub">Software Enginee, Intern</p>
//             <p class="all-side-side-head-sub2">Radiant Spark Technology,inc</p>
//             <p class="all-para-font">03/2022 - 02/2022</p>
//             <p class="all-para-font extra-para">
//               Supervised and lead a team of 5 junior software engineers during the
//               development of a robust upgrade version of the company's software
//               applications, resulting in improved user experience and a 33%
//               revenue increase within 8 months. Demonstrated expertise in
//               translating the client's speci7c needs into easy-to-understand
//               software solutions during sales presentations, leading to the
//               successful closing of $ major contracts generating over K120z in
//               business revenue. Pro7ciently troubleshot simple and complex
//               technological issues for different assigned projects, achieving over
//               95% customer satisfaction rate. Enhanced the application's features
//               to effectively 7x the bugs and optimiNe the overall performance,
//               reliability, and eFciency.
//             </p>
//             <div class="mt-4">
//               <h1 class="all-side-head">WORK EXPERIENCE</h1>
//               <p class="all-side-side-head-sub">Software Enginee, Intern</p>
//               <p class="all-side-side-head-sub2">Radiant Spark Technology,inc</p>
//               <p class="all-para-font">03/2022 - 02/2022</p>

//               <ul class="all-para-font extra-para">
//                 <li>
//                   Supervised and lead a team of 5 junior software engineers during
//                   the development of a robust upgrade version of the company's
//                   software applications, resulting in improved user experience and
//                   a 33%
//                 </li>
//                 <li>
//                   revenue increase within 8 months. Demonstrated expertise in
//                   translating the client's speci7c needs into easy-to-understand
//                   software solutions during sales presentations,
//                 </li>
//                 <li>
//                   leading to the successful closing of $ major contracts
//                   generating over K120z in business revenue. Pro7ciently
//                   troubleshot
//                 </li>
//                 <li>
//                   simple and complex technological issues for different assigned
//                   projects, achieving over 95% customer satisfaction rate.
//                   Enhanced the application's features to effectively
//                 </li>
//                 <li>
//                   7x the bugs and optimiNe the overall performance, reliability,
//                   and eFciency.
//                 </li>
//               </ul>
//             </div>
//           </div>

//           <div class="skills-other-cont">
//             <div class="skills-cont">
//               <h1 class="all-side-head">SKILLS</h1>
//               <div class="each-skills-cont">
//                 <p class="each-skills">React js</p>
//                 <p class="each-skills">Node js</p>
//                 <p class="each-skills">CSS</p>
//                 <p class="each-skills">HTML</p>
//                 <p class="each-skills">SQL</p>
//                 <p class="each-skills">Python</p>
//                 <p class="each-skills">JavaScript</p>
//               </div>
//             </div>
//             <div class="honour-cont">
//               <h1 class="all-side-head">Honor Awards</h1>
//               <p class="all-side-side-head-sub">Employee of the Month</p>
//               <p class="all-side-side-head-sub2">Company Award</p>
//             </div>
//             <div>
//               <h1 class="all-side-head">EDUCATION</h1>
//               <p class="all-side-side-head-sub">
//                 Electrical and Electronics Engg
//               </p>
//               <p class="all-side-side-head-sub2">
//                 Nalla Narasimha Reddy group of institutions
//               </p>
//               <p class="all-para-font">03/2022 - 02/2022</p>
//             </div>
//           </div>
//         </div>

//       </div>

//       <!-- JQuery -->
//       <script
//         type="text/javascript"
//         src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"
//       ></script>
//       <!-- Bootstrap tooltips -->
//       <script
//         type="text/javascript"
//         src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.4/umd/popper.min.js"
//       ></script>
//       <!-- Bootstrap core JavaScript -->
//       <script
//         type="text/javascript"
//         src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/js/bootstrap.min.js"
//       ></script>
//       <!-- MDB core JavaScript -->
//       <script
//         type="text/javascript"
//         src="https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.7.5/js/mdb.min.js"
//       ></script>
//       <script
//         src="https://kit.fontawesome.com/4d0b0ac83e.js"
//         crossorigin="anonymous"
//       ></script>
//     </body>
//   </html>

// `;

//   const newSource = `
//   <!DOCTYPE html>
// <html lang="en">
//   <head>
//     <meta charset="UTF-8" />
//     <meta http-equiv="X-UA-Compatible" content="IE=edge" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     <title>Document</title>
//     <style>
//       .list-wrapper {
//         position: relative;
//       }
//       .list-item-wrapper {
//         margin-top: 10px;
//         position: relative;
//       }
//       /* .list-bullet {
//         float: left;
//         margin-right: 20px;
//         background-color: white;
//         border-width: 2px;
//         border-color: black;
//         background: white;
//         height: 30px;
//         width: 30px;
//         line-height: 30px;
//         border-radius: 100px;
//         font-weight: 700;
//         color: black;
//         text-align: center;
//       } */
//       .list-item {
//         display: table-row;
//         vertical-align: middle;
//       }

//       .red-line {
//         background: black;
//         width: 2px;
//         height: 100%;
//         position: absolute;
//         left: 5px;
//         top: 12px;
//       }

//       .circle {
//         width: 10px;
//         height: 10px;
//         border: 2px solid black;
//         border-radius: 50%;
//         background-color: transparent;
//         position: relative;
//         float: left;
//         top: 12px;
//         margin-right: 10px;
//       }
//       .list-title {
//         font-size: 30px;
//       }
//     </style>
//   </head>

//   <body>
//     <div>
//       <div class="list-wrapper">
//         <div class="list-item-wrapper">
//           <div class="circle"></div>
//           <div class="list-item">
//             <div class="red-line"></div>
//             <div class="list-title">This is the top item</div>
//             <div class="list-text">
//               The parallels with the alcoholic republic of two hundred years ago
//               are hard to miss. Before the changes in lifestyle, before the
//               clever marketing, comes the mountain of cheap corn.
//             </div>
//           </div>
//         </div>

//         <div class="list-item-wrapper">
//           <div class="circle"></div>
//           <div class="list-item">
//             <div class="list-title">This is an item</div>
//             <div>
//               <div class="red-line"></div>

//               <div class="list-text">
//                 But the outcome of our national drinking binge is not nearly as
//                 relevant to our own situation as its underlying cause. Which,
//                 put simply, was this: American farmers were producing far too
//                 much corn.
//               </div>
//             </div>
//           </div>
//         </div>
//         <div class="list-item-wrapper">
//           <div class="circle"></div>
//           <div class="list-item">
//             <div class="list-title">This is the bottom item</div>
//             <div class="red-line"></div>
//             <div class="list-text">
//               Supervised and lead a team of 5 junior software engineers during
//               the development of a robust upgrade version of the company's
//               software applications, resulting in improved user experience and a
//               33% revenue increase within 8 months. Demonstrated expertise in
//               translating the client's specific needs into easy-to-understand
//               software solutions during sales presentations, leading to the
//               successful closing of 7 major contracts generating over $120K in
//               business revenue. Proficiently troubleshot simple and complex
//               technological issues for different assigned projects, achieving
//               over 95% customer satisfaction rate. Enhanced the application's
//               features to effectively fix the bugs and optimize the overall
//               performance, reliability, and efficiency. - Utilized software
//               engineering expertise to develop products throughout the software
//               lifecycle to boost business efficiency, from ideation and
//               requirements definition through to development and successful
//               deployment Supervised and lead a team of 5 junior software
//               engineers during the development of a robust upgrade version of
//               the company's software applications, resulting in improved user
//               experience and a 33% revenue increase within 8 months.
//               Demonstrated expertise in translating the client's specific needs
//               into easy-to-understand software solutions during sales
//               presentations, leading to the successful closing of 7 major
//               contracts generating over $120K in business revenue. Proficiently
//               troubleshot simple and complex technological issues for different
//               assigned projects, achieving over 95% customer satisfaction rate.
//               Enhanced the application's features to effectively fix the bugs
//               and optimize the overall performance, reliability, and efficiency.
//               - Utilized software engineering expertise to develop products
//               throughout the software lifecycle to boost business efficiency,
//               from ideation and requirements definition through to development
//               and successful deployment Supervised and lead a team of 5 junior
//               software engineers during the development of a robust upgrade
//               version of the company's software applications, resulting in
//               improved user experience and a 33% revenue increase within 8
//               months. Demonstrated expertise in translating the client's
//               specific needs into easy-to-understand software solutions during
//               sales presentations, leading to the successful closing of 7 major
//               contracts generating over $120K in business revenue. Proficiently
//               troubleshot simple and complex technological issues for different
//               assigned projects, achieving over 95% customer satisfaction rate.
//               Enhanced the application's features to effectively fix the bugs
//               and optimize the overall performance, reliability, and efficiency.
//               - Utilized software engineering expertise to develop products
//               throughout the software lifecycle to boost business efficiency,
//               from ideation and requirements definition through to development
//               and successful deployment In the early years of the nineteenth
//               century, Americans began drinking more than they ever had before
//               or since, embarking on a collective bender that confronted the
//               young republic with its first major public health crisis -- the
//               obesity epidemic of its day.
//             </div>
//           </div>
//         </div>

//         <div class="list-item-wrapper">
//           <div class="circle"></div>
//           <div class="list-item">
//             <div class="list-title">This is the bottom item</div>
//             <div class="red-line"></div>
//             <div class="list-text">
//               Supervised and lead a team of 5 junior software engineers during
//               the development of a robust upgrade version of the company's
//               software applications, resulting in improved user experience and a
//               33% revenue increase within 8 months. Demonstrated expertise in
//               translating the client's specific needs into easy-to-understand
//               software solutions during sales presentations, leading to the
//               successful closing of 7 major contracts generating over $120K in
//               business revenue. Proficiently troubleshot simple and complex
//               technological issues for different assigned projects, achieving
//               over 95% customer satisfaction rate. Enhanced the application's
//               features to effectively fix the bugs and optimize the overall
//               performance, reliability, and efficiency. - Utilized software
//               engineering expertise to develop products throughout the software
//               lifecycle to boost business efficiency, from ideation and
//               requirements definition through to development and successful
//               deployment Supervised and lead a team of 5 junior software
//               engineers during the development of a robust upgrade version of
//               the company's software applications, resulting in improved user
//               experience and a 33% revenue increase within 8 months.
//               Demonstrated expertise in translating the client's specific needs
//               into easy-to-understand software solutions during sales
//               presentations, leading to the successful closing of 7 major
//               contracts generating over $120K in business revenue. Proficiently
//               troubleshot simple and complex technological issues for different
//               assigned projects, achieving over 95% customer satisfaction rate.
//               Enhanced the application's features to effectively fix the bugs
//               and optimize the overall performance, reliability, and efficiency.
//               - Utilized software engineering expertise to develop products
//               throughout the software lifecycle to boost business efficiency,
//               from ideation and requirements definition through to development
//               and successful deployment Supervised and lead a team of 5 junior
//               software engineers during the development of a robust upgrade
//               version of the company's software applications, resulting in
//               improved user experience and a 33% revenue increase within 8
//               months. Demonstrated expertise in translating the client's
//               specific needs into easy-to-understand software solutions during
//               sales presentations, leading to the successful closing of 7 major
//               contracts generating over $120K in business revenue. Proficiently
//               troubleshot simple and complex technological issues for different
//               assigned projects, achieving over 95% customer satisfaction rate.
//               Enhanced the application's features to effectively fix the bugs
//               and optimize the overall performance, reliability, and efficiency.
//               - Utilized software engineering expertise to develop products
//               throughout the software lifecycle to boost business efficiency,
//               from ideation and requirements definition through to development
//               and successful deployment In the early years of the nineteenth
//               century, Americans began drinking more than they ever had before
//               or since, embarking on a collective bender that confronted the
//               young republic with its first major public health crisis -- the
//               obesity epidemic of its day.
//             </div>
//           </div>
//         </div>
//         <div class="list-item-wrapper">
//           <div class="circle"></div>
//           <div class="list-item">
//             <div class="list-title">This is an item</div>
//             <div>
//               <div class="red-line"></div>

//               <div class="list-text">
//                 But the outcome of our national drinking binge is not nearly as
//                 relevant to our own situation as its underlying cause. Which,
//                 put simply, was this: American farmers were producing far too
//                 much corn.
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </body>
// </html>

// `;

//   const template = handlebars.compile(newSource);

//   const html = template();

//   const browser = await puppeteer.launch({
//     headless: "new",
//   });

//   const url = "https://www.google.com";

//   const page = await browser.newPage();

//   const filePath = path.join(process.cwd(), "index.html");
//   console.log(filePath); // outputs the full path to your index.html file

//   // await page.goto(`file://${filePath}`, { waitUntil: "networkidle2" });

//   await page.setContent(html, { waitUntil: "networkidle0" });

//   const pdf = await page.pdf({
//     format: "A4",
//     margin: {
//       // top: "20mm",
//       // bottom: "20mm",
//     },
//     printBackground: true,
//   });
//   await browser.close();

//   res.set("Content-Type", "application/pdf");
//   console.log(pdf);
//   res.send(pdf);
// };

// export const createUser = (req, res) => {
//   const user = req.body;
//   console.log(user);

//   users = { ...user };
//   res.send("user added successfully");
// };

// export const getUser = (req, res) => {
//   const singleUser = users.filter((user) => user.id === req.params.id);
//   res.send(singleUser);
// };

// export const deleteUser = (req, res) => {
//   users = users.filter((user) => user.id !== req.params.id);
//   res.send("user delete successfully");
// };

// export const updateUser = (req, res) => {
//   const user = users.find((user) => user.id === req.params.id);
//   user.name = req.body.name;
//   user.num = req.body.num;
//   res.send("user updated successfully ");
// };

// import { v4 as uuid } from "uuid";
// import puppeteer from "puppeteer";
// import handlebars from "handlebars";
// import samplepdf from "./sample.js";
// import path from "path";

// let users = {};

// export const getUsers = async (req, res) => {
//   const filePath = path.join(process.cwd(), "resume2.html");
//   samplepdf(users);
//   console.log(samplepdf(users));

//   const browser = await puppeteer.launch({
//     headless: "new",
//   });

//   const page = await browser.newPage();

//   console.log(filePath); // outputs the full path to your index.html file

//   // await page.goto(`file:///${filePath}`, { waitUntil: "networkidle2" });
//   await page.goto(`samplepdf(users)`, { waitUntil: "networkidle2" });

//   const pdf = await page.pdf({
//     format: "A4",
//     margin: {
//       top: "20mm",
//       bottom: "20mm",
//     },
//     printBackground: true,
//   });
//   await browser.close();

//   res.set("Content-Type", "application/pdf");
//   console.log(pdf);
//   res.send(pdf);
// };

// export const createUser = (req, res) => {
//   const user = req.body;
//   console.log(user);

//   users = { ...user };
//   res.send("user added successfully");
// };
