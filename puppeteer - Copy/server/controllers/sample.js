function samplepdf({ name, num }) {
  return `
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
      </style>
    </head>
    <body>
      <div class="main-cont">
      <div> <h1>${name}</h1> <h1>${num}</h1></div>
        <div class="img-text-cont">
          <div class="img-width-cont">
            <img
              class="profile-img"
              src="https://res.cloudinary.com/dnm22sfwx/image/upload/v1681475468/IMG_20220612_153745_x83mee.jpg"
            />
          </div>
          <div class="main-text-cont">
            <h1 class="main-head-name">Shiva Aade</h1>
            <p class="main-role">Software Developer</p>
          </div>
        </div>
        <!-- <hr class="hr-line-top2" /> -->
  
        <div class="work-skills-cont">
          <div class="skills-other-cont">
            <div>
              <h1 class="all-side-head">SUMMARY</h1>
              <p class="all-para-font">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book. It has
                survived not only Nve centuries,
              </p>
            </div>
            <div>
              <h1 class="all-side-head">EDUCATION</h1>
              <p class="all-side-side-head-sub">
                Electrical and Electronics Engg
              </p>
              <p class="all-side-side-head-sub2">
                Nalla Narasimha Reddy group of institutions
              </p>
              <p class="all-para-font">03/2022 - 02/2022</p>
            </div>
  
            <div>
              <h1 class="all-side-head">SKILLS</h1>
              <div class="each-skills-cont">
                <p class="each-skills">React js</p>
                <p class="each-skills">Node js</p>
                <p class="each-skills">CSS</p>
                <p class="each-skills">HTML</p>
                <p class="each-skills">SQL</p>
                <p class="each-skills">Python</p>
                <p class="each-skills">JavaScript</p>
              </div>
            </div>
            <div>
              <div class="email-phone-cont all-para-font">
                <h1 class="all-side-head">CONTACTS</h1>
                <div class="icon-text-cont">
                  <div>
                    <i class="fa-solid fa-envelope"></i>
                  </div>
                  <p class="each-margin-email">adheshiva@gmail.com</p>
                </div>
                <div class="icon-text-cont">
                  <div>
                    <i class="fa-solid fa-phone"></i>
                  </div>
                  <p class="each-margin-email">9441177123</p>
                </div>
                <div class="icon-text-cont">
                  <div>
                    <i class="fa-brands fa-linkedin"></i>
                  </div>
                  <p class="each-margin-email">linkedin-link-for-aade-shiva</p>
                </div>
                <div class="icon-text-cont">
                  <div>
                    <i class="fa-brands fa-github"></i>
                  </div>
                  <p class="each-margin-email">github-link-for-aade-shiva</p>
                </div>
              </div>
            </div>
          </div>
          <div class="work-cont">
            <h1 class="all-side-head">WORK EXPERIENCE</h1>
            <p class="all-side-side-head-sub">Software Enginee, Intern</p>
            <p class="all-side-side-head-sub2">Radiant Spark Technology,inc</p>
            <p class="all-para-font">03/2022 - 02/2022</p>
            <p class="all-para-font extra-para">
              Supervised and lead a team of 5 junior software engineers during the
              development of a robust upgrade version of the company's software
              applications, resulting in improved user experience and a 33%
              revenue increase within 8 months. Demonstrated expertise in
              translating the client's speci7c needs into easy-to-understand
              software solutions during sales presentations, leading to the
              successful closing of $ major contracts generating over K120z in
              business revenue. Pro7ciently troubleshot simple and complex
              technological issues for different assigned projects, achieving over
              95% customer satisfaction rate. Enhanced the application's features
              to effectively 7x the bugs and optimiNe the overall performance,
              reliability, and eFciency.
            </p>
            <div>
              <h1 class="all-side-head">WORK EXPERIENCE</h1>
              <p class="all-side-side-head-sub">Software Enginee, Intern</p>
              <p class="all-side-side-head-sub2">Radiant Spark Technology,inc</p>
              <p class="all-para-font">03/2022 - 02/2022</p>
  
              <ul class="all-para-font extra-para">
                <li>
                  Supervised and lead a team of 5 junior software engineers during
                  the development of a robust upgrade version of the company's
                  software applications, resulting in improved user experience and
                  a 33%
                </li>
                <li>
                  revenue increase within 8 months. Demonstrated expertise in
                  translating the client's speci7c needs into easy-to-understand
                  software solutions during sales presentations,
                </li>
                <li>
                  leading to the successful closing of $ major contracts
                  generating over K120z in business revenue. Pro7ciently
                  troubleshot
                </li>
                <li>
                  simple and complex technological issues for different assigned
                  projects, achieving over 95% customer satisfaction rate.
                  Enhanced the application's features to effectively
                </li>
                <li>
                  7x the bugs and optimiNe the overall performance, reliability,
                  and eFciency.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </body>
  </html>
  
      `;
}

export default samplepdf;
