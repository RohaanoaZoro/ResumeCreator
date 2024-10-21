import React from 'react';

import "./font.css"

const Portfolio = (props) => {

    const highlight = {'background-color':'red','color':'white'}
    const shouldHilight = props.Technologies.Ishighlight

    // console.log("proips", props.Technologies)

    const CreateSkillSet = (skillArr, start, end) => {

        if(!skillArr){
            return "";
        }

        if(!start){
            start = 0;
        }
        if(!end){
            end = skillArr.length;
        }

        let final_skill_set = ""
        var isFirst = true
        if (Array.isArray(skillArr)) {
            for(var index=start; index<end; index++){

                if(index===end){
                    break;
                }
                var value = skillArr[index]
                if(isFirst){
                    final_skill_set += value;
                    isFirst = false
                }
                else if(index === skillArr.length-1){
                    final_skill_set += " and "+ value;
                } else {
                    final_skill_set += ", "+ value;
                }
            }
        } else if(skillArr.length>0){
            final_skill_set += skillArr;
        }

        return final_skill_set
    }
 

  return (
    <div>
      <section>
        <div className="personal-info-container row">
          <div className="left-points">
            <div className="box-point dark-box"></div>
          </div>

          <div className="personal-info row">
            <section className="job-title">
              <h1>Rohaan Almeida</h1>
              <p>Full Stack Developer</p>
              <label htmlFor="summary">
                <p id="summary" className="summary">
                  Enterprising and solution-oriented developer with over 4 years of experience specializing in <span style={shouldHilight ? highlight : {}}>{CreateSkillSet(props.Technologies.MainFrontEnd.concat(props.Technologies.MainBackEnd).concat(props.Technologies.MainCloud))}</span>. Skilled in developing
                  innovative cloud-based applications using modern web technologies, with a strong focus on creating
                  efficient and scalable solutions. Adept at motivating both self and team members, and passionate about
                  fostering collaboration to achieve project success.
                </p>
              </label>
            </section>

            <section className="contact-info">
              <label htmlFor="email">
                <div className="my-logo-container">
                  <img className="my-logo" src="Assets/email.png" alt="Email" />
                  <p id="email" className="my-logo-text">
                    rohaan.almeida@gmail.com
                  </p>
                </div>
              </label>
              <label htmlFor="phone-number">
                <div className="my-logo-container">
                  <img className="my-logo" src="Assets/phone-call.png" alt="Phone" />
                  <p id="phone-number" className="my-logo-text">+31 0687024133</p>
                </div>
              </label>
              <label htmlFor="location">
                <div className="my-logo-container">
                  <img className="my-logo" src="Assets/gps.png" alt="Location" />
                  <p id="location" className="my-logo-text">Hilversum, Netherlands</p>
                </div>
              </label>
              <label htmlFor="linkedin">
                <div className="my-logo-container">
                  <img className="my-logo" src="Assets/linkedin.png" alt="LinkedIn" />
                  <p id="linkedin" className="my-logo-text">linkedin.com/in/rohaan-almeida</p>
                </div>
              </label>
              <label htmlFor="github">
                <div className="my-logo-container">
                  <img className="my-logo" src="Assets/github.png" alt="GitHub" />
                  <p id="github" className="my-logo-text">github.com/RohaanoaZoro</p>
                </div>
              </label>
            </section>
          </div>
        </div>
      </section>

      <section>
        <div>
          <p className="section-title">Professional Experience</p>

          <div className="section-container row">
            <div className="left-points">
              <div className="box-point"></div>
            </div>

            <div className="section experience">
              <p>Senior Full Stack Developer</p>
              <div className="row">
                <h4>NetAnalytiks</h4>
                <div className="work-period row">
                  <p>June 2020 - January 2024</p>
                  <p>&nbsp; - &nbsp;</p>
                  <p>Bengaluru, India</p>
                </div>
              </div>
              <div className="work-description">
                Developed a full stack application to enhance English skills through reading, writing, listening, and
                speaking modules in <span style={shouldHilight ? highlight : {}}>{CreateSkillSet(props.Technologies.MainFrontEnd)}</span>. Implemented interactive quizzes for reading and listening, real-time text
                highlighting for writing using WebSockets, and a custom speech analysis algorithm for speaking. The
                application was built with a  <span style={shouldHilight ? highlight : {}}>{CreateSkillSet(props.Technologies.MainFrontEnd)}</span> front-end, <span style={shouldHilight ? highlight : {}}>{CreateSkillSet(props.Technologies.MainBackEnd)}</span> backend for API handling, and <span style={shouldHilight ? highlight : {}}>{CreateSkillSet(props.Technologies.MainBackEnd)}</span> with
                RabbitMQ for asynchronous data processing.
              </div>
              <h5>Tasks</h5>
              <ul>
                <li>
                  Enabled dynamic text highlighting in the writing module using <span style={shouldHilight ? highlight : {}}>{CreateSkillSet(props.Technologies.MainFrontEnd)}</span> through WebSocket connections for
                  real-time feedback, increasing efficiency by 40%.
                </li>
                <li>
                  Engineered live real-time grammar analysis using advanced machine learning algorithms in Python, resulting in a
                  50% reduction in response time.
                </li>
                <li>
                  Managed API requests and data processing using <span style={shouldHilight ? highlight : {}}>{CreateSkillSet(props.Technologies.MainBackEnd)}</span> for robust and efficient server-side operations,
                  resulting in a 50% reduction in response time.
                </li>
                <li>
                  Developed a proprietary algorithm to compare user speech against text for accuracy in the speaking
                  module, boosting accuracy by 25%
                </li>
                <li>
                  Utilized RabbitMQ with <span style={shouldHilight ? highlight : {}}>{CreateSkillSet(props.Technologies.MainBackEnd,0, 1)}</span> microservices to handle data processing tasks asynchronously
                  from the <span style={shouldHilight ? highlight : {}}>{CreateSkillSet(props.Technologies.MainBackEnd,1,1)}</span> web server.
                </li>
              </ul>
              <label htmlFor="contact-1">
                <div className="contact row">
                  <p>Contact -</p>
                  <p id="contact-1">&nbsp; Shankara Chilkunda(CEO) -</p>
                  <p>&nbsp; shankar@netanalytiks.com</p>
                </div>
              </label>
            </div>
          </div>

          <div className="section-container row">
            <div className="left-points">
              <div className="box-point"></div>
            </div>

            <div className="section experience">
              <p>DevOps Engineer</p>
              <div className="row">
                <h4>NetAnalytiks</h4>
                <div className="work-period row">
                  <p>June 2020 - January 2024</p>
                  <p>&nbsp; - &nbsp;</p>
                  <p>Bengaluru, India</p>
                </div>
              </div>
              <div className="work-description">
                As a DevOps Engineer, I managed CI and CD pipelines using tools such as Jenkins and Ansible, built custom automation scripts, and ran cron jobs. My responsibilities included handling database updates and backups, enhancing cloud security, and setting up auto-scaling for Kubernetes servers.
                </div>
              <h5>Tasks</h5>
              <ul>
                <li>
                  Migrated on-premises infrastructure to <span style={shouldHilight ? highlight : {}}>{CreateSkillSet(props.Technologies.MainCloud)}</span> Cloud, overseeing monitoring and scalability of cloud
                  infrastructure.
                </li>
                <li>
                  Engineered custom Continuous Integration(CI) pipelines, automated testing, and application deployment
                  using DevOps tools such as <span style={shouldHilight ? highlight : {}}>{CreateSkillSet(props.Technologies.MainDevOpsTools)}</span>, reducing deployment time by 45%.
                </li>
                <li>
                  Enhanced application performance by integrating caching Redis and message queues RabbitMQ, achieving a
                  50% reduction in response time.
                </li>
                <li>
                  Automated, scaled, and secured server-side applications in <span style={shouldHilight ? highlight : {}}>{CreateSkillSet(props.Technologies.MainCloud,0,1)}</span>, leading to a 50% reduction in manual
                  intervention.
                </li>
                <li>Managed time-sensitive updates, including content changes and database upgrades</li>
              </ul>

              <label htmlFor="contact-1">
                <div className="contact row">
                  <p>Contact -</p>
                  <p id="contact-1">&nbsp; Shankara Chilkunda(CEO) -</p>
                  <p>&nbsp; shankar@netanalytiks.com</p>
                </div>
              </label>
            </div>
          </div>

          <div className="section-container row">
            <div className="left-points">
              <div className="box-point"></div>
            </div>

            <div className="section experience">
              <p>Intern</p>
              <div className="row">
                <h4>NetAnalytiks</h4>
                <div className="work-period row">
                  <p>June 2019 - June 2020</p>
                  <p>&nbsp; - &nbsp;</p>
                  <p>Bengaluru, India</p>
                </div>
              </div>
              <h5>Tasks</h5>
              <ul>
                <li>
                  Enhanced AI model using LLAMA LLMs and Machine Learning in <span style={shouldHilight ? highlight : {}}>{CreateSkillSet(props.Technologies.MainBackEnd,0,1)}</span> to contextually identify similar sentences using probabilistic occurrence analysis.
                </li>
                <li>Created a front-end interface to highlight and rectify plagiarized sentences.</li>
                <li>
                  Developed a Windows application using #C and .NET to add real-time analysis features to Microsoft Word.
                </li>
                <li>
                  Enhanced performance of <span style={shouldHilight ? highlight : {}}>{CreateSkillSet(props.Technologies.OtherBackEnd,0,1)}</span> applications by incorporating multi-threading techniques, resulting in a
                  50% reduction in processing time.
                </li>
              </ul>

              
              <label htmlFor="contact-1">
                <div className="contact row">
                  <p>Contact -</p>
                  <p>&nbsp; Lakshminarayana Ullala(COO) -</p>
                  <p>&nbsp; laks@netanalytiks.com</p>
                </div>
              </label>
            </div>
          </div>

          <div className="section-container row">
            <div className="left-points">
              <div className="box-point"></div>
            </div>

            <div className="section experience">
              <p>Intern</p>
              <div className="row">
                <h4>Civic Fulcrum</h4>
                <div className="work-period row">
                  <p>April 2018 - June 2018</p>
                  <p>&nbsp; - &nbsp;</p>
                  <p>Chennai, India</p>
                </div>
              </div>
              <h5>Tasks</h5>
              <ul>
                <li>
                  Developed a web scraping tool to gather and store real-time data from over 30 government websites using <span style={shouldHilight ? highlight : {}}>{CreateSkillSet(props.Technologies.OtherBackEnd, 0, 1)}</span> as the backend.
                </li>
                <li>
                  Aggregated and organized collected data using <span style={shouldHilight ? highlight : {}}>{CreateSkillSet(props.Technologies.DBTechnologies)}</span> for visualization and reporting purposes, resulting in improved accessibility to information.
                </li>
              </ul>

              <div className="contact row">
                <p>Contact -</p>
                <p>&nbsp; Vinod Ramanarayanan -</p>
                <p>&nbsp; vinodramanrayanan@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="education">
                <p  className="section-title" >Education</p>

                <div className="section-container row">
                    <div className="left-points">
                        <div className="box-point blue-box"></div>
                    </div>

                    <div className="section experience">
                        <p>Masters in Computer Science(Cloud Infrastructure Technologies)</p>
                        <div className="row">
                            <h4>University van Amsterdam</h4>
                            <div className="work-period row">
                                <p>August 2022 - August 2024</p>
                                <p>&nbsp; - &nbsp;</p>
                                <p>Amsterdam, NL</p> 
                            </div>
                        </div>
                        <h5>CGPA - 7.5</h5>
                    </div>
                </div>
                <br/>
               
                <div className="section-container row">
                    <div className="left-points">
                        <div className="box-point blue-box"></div>
                    </div>

                    <div className="section experience">
                        <p>Bachelors in Computer Science and Engineering</p>
                        <div className="row">
                            <h4>VIT University</h4>
                            <div className="work-period row">
                                <p>July 2016 - July 2020</p>
                                <p>&nbsp; - &nbsp; Chennai, India</p> 
                            </div>
                        </div>
                        <h5>CGPA - 8.1</h5>
                    </div>
                </div>
            </section>

      <section className="skills">
                <p className="section-title">Technical Skills</p>
                <div className="section-container row">
                    <div className="left-points">
                        {/* <div className="box-point"></div> */}
                    </div>

                    <div className="section ">
                        <div className="row">
                            <div className="technical-skill-container">
                                <div>
                                    <p className='skill-title'>Front End</p>
                                    <p><span style={shouldHilight ? highlight : {}}>{CreateSkillSet(props.Technologies.MainFrontEnd.concat(props.Technologies.OtherFrontEnd))}</span></p>
                                </div>

                                <div>
                                    <p className='skill-title'>Coding Languages</p>
                                    <p><span style={shouldHilight ? highlight : {}}>{CreateSkillSet(props.Technologies.CodingLanguages)}</span></p>
                                </div>
                               
                                <div>
                                    <p className='skill-title'>DevOps Technologies</p>
                                    <p><span style={shouldHilight ? highlight : {}}>{CreateSkillSet(props.Technologies.MainDevOpsTools.concat(props.Technologies.OtherDevOpsTools))}</span></p>
                                </div>
                            </div>

                            <div className="technical-skill-container">
                                <div>
                                    <p className='skill-title'>Backend Languages</p>
                                    <p><span style={shouldHilight ? highlight : {}}>{CreateSkillSet(props.Technologies.MainBackEnd.concat(props.Technologies.OtherBackEnd))}</span></p>
                                </div>

                                <div>
                                    <p className='skill-title'>Cloud Techonlogies</p>
                                    <p><span style={shouldHilight ? highlight : {}}>{CreateSkillSet(props.Technologies.MainCloud.concat(props.Technologies.OtherCloud).concat(props.Technologies.DBTechnologies))}</span></p>
                                </div>

                                <div>
                                    <p className='skill-title'>Others</p>
                                    <p><span style={shouldHilight ? highlight : {}}>{CreateSkillSet(props.Technologies.OtherLanguages)}</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
              
            </section>

            <section className='missing_info'>
                <p>Other Skills</p>
                <p><span style={shouldHilight ? highlight : {}}>{CreateSkillSet(props.Technologies.MissingKeywords)}</span></p>
    
            </section>


    </div>
  );
};

export default Portfolio;
