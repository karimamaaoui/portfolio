import React from "react";
import "./ResumeMe.css";
import cover from "../../assets/ilc.jpg";
import cover2 from "../../assets/tech.png";
import cover3 from "../../assets/its.jpg";

export default function ResumeMe() {
  return (
    <div
      class="resume-container screen-container fade-in"
      id="Resume"
      style={{ opacity: "5", transform: "translateY(1px)" }} >
      <div class="resume-content">
        <div class="heading-container">
          <div class="screen-heading">
            <span>Resume</span>
          </div>
          <div class="screen-sub-heading">
            <span>My formal Bio Details</span>
          </div>
          <div class="heading-seperator">
            <div class="seperator-line"></div>
            <div class="seperator-blob">
              <div></div>
            </div>
          </div>
        </div>
        <div class="">
          <h3>Education</h3>
          <div class="resume-heading">
            <div class="resume-main-heading">
              <div class="heading-bullet"></div>
              <span style={{ textTransform: "uppercase" }}>
                Higher Institute of Technological Studies of Rades (ISET Rades)
              </span>
              <div class="heading-date">2019-2022</div>
            </div>

            <div class="resume-sub-heading">
              <span>Applied License in Systems Development information </span>
            </div>
            <br />
            <div class="resume-main-heading">
              <div class="heading-bullet"></div>
              <span style={{ textTransform: "uppercase" }}>
                high school Montfleury
              </span>
              <div class="heading-date">2018</div>
            </div>
            <div class="resume-sub-heading">
              <span>Baccalaureate in Computer Science </span>
            </div>
          </div>
        </div>

        <div class="heading-container">
          <div class="screen-sub-heading">
            <span></span>
          </div>
          <div class="heading-seperator">
            <div class="seperator-line"></div>
            <div class="seperator-blob">
              <div></div>
            </div>
          </div>
        </div>

        <div class="resume-screen-container">
          <div class="resume-heading">
            <h3>Internships</h3>

            <div class="resume-main-heading">
              <div class="heading-bullet"></div>
              <span className="title">End-of-study internship </span>
              <div class="heading-date">2022 (4 months)</div>
            </div>
            <div class="resume-sub-heading">
              <span>tanit Web agency</span>
            </div>
          </div>
          <div class="resume-heading">
            <div class="resume-main-heading">
              <div class="heading-bullet"></div>
              <span className="title">Internship</span>
              <div class="heading-date">2021 (2 months)</div>
            </div>
            <div class="resume-sub-heading">
              <span>tanit Web agency</span>
            </div>
          </div>
          <div class="resume-heading">
            <div class="resume-main-heading">
              <div class="heading-bullet"></div>
              <span className="title">Internship</span>
              <div class="heading-date">2020 (1 months)</div>
            </div>
            <div class="resume-sub-heading">
              <span>the national office of Sanitation (ONAS)</span>
            </div>
          </div>

          <div class="heading-container">
            <div class="screen-sub-heading">
              <span></span>
            </div>
            <div class="heading-seperator">
              <div class="seperator-line"></div>
              <div class="seperator-blob">
                <div></div>
              </div>
            </div>
          </div>
        </div>
        <div class="">
          <h3>Certifications</h3>
       
          <div class="react-reveal cert-card">
            <div class="content">
              <a
                href="https://drive.google.com/file/d/1i4mzmtzdegXqFDsaVAvVV-hyqKggWcU5/view"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div class="content-overlay"></div>
                <div class="cert-header">
                  <img class="logo_img" src={cover2} alt="" />
                </div>
                <div class="content-details fadeIn-top">
                  <h2 class="content-title" style={{ color: "orange" }}>
                  SPRING BOOT & ANGULAR 
                  </h2>
                </div>
              </a>
            </div>
            <div class="cert-body">
              <h2 class="cert-body-title">
                <div class="resume-main-heading">
                  <div class=""></div>
                  <span style={{ textTransform: "uppercase" }}>
                    Technologia Academy <br/> Center
                  </span>
                  <div class="heading-date">2021</div>
                </div>
              </h2>
            </div>
          </div>
          {' '}
          <div class="react-reveal cert-card">
            <div class="content">
              <a
                href="https://drive.google.com/file/d/1ddS0x0rW8pdBkI9ed9PS0O55Vovy1kiR/view"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div class="content-overlay"></div>
                <div class="cert-header">
                  <img class="logo_img" src={cover} alt="" />
                </div>
                <div class="content-details fadeIn-top">
                  <h2 class="content-title" style={{ color: "orange" }}>
                    ENGLISH
                  </h2>
                </div>
              </a>
            </div>
            <div class="cert-body">
            <h2 class="cert-body-title">
                <div class="resume-main-heading">
                  <div class=""></div>
                  <span style={{ textTransform: "uppercase" }}>
                  interactive language <br/> center  ilc-tunisie
                  </span>
              <div class="heading-date">2021</div>
            
                </div>
              </h2>
          
              </div>
          </div>
          {' '}
    
          <div class="react-reveal cert-card">
            <div class="content">
              <a
                href="https://drive.google.com/file/d/1kk4NdWCXfWXye8mp41l7CSuXQO3AZE8L/view"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div class="content-overlay"></div>
                <div class="cert-header">
                  <img class="logo_img" src={cover3} alt="" />
                </div>
                <div class="content-details fadeIn-top">
                  <h2 class="content-title" style={{ color: "orange" }}>
                    JAVA 8
                  </h2>
                </div>
              </a>
            </div>
            <div class="cert-body">
            <h2 class="cert-body-title">
                <div class="resume-main-heading">
                  <div class=""></div>
                  <span style={{ textTransform: "uppercase" }}>
                  INTERNATIONAL TRAINING <br/> SOLUTIONS (ITS)

                  </span>
              <div class="heading-date">2018</div>
            
                </div>
              </h2>
          
            </div>
          </div>
        
        </div>
        <br/>
        <div class="heading-container">
          <div class="screen-sub-heading">
            <span></span>
          </div>
          <div class="heading-seperator">
            <div class="seperator-line"></div>
            <div class="seperator-blob">
              <div></div>
            </div>
          </div>
        </div>
        <div class="">
          <h3>Skills</h3>
          <br />
          <div class="" style={{marginLeft:"60px"}} >
              <div class="resume-heading">
                <div class="resume-main-heading">
                  <div class="heading-bullet"></div>
                </div>
                <div class="heading-bullet"></div>
                <span
                  style={{ textTransform: "uppercase", fontWeight: "bold" }}
                >
                  JavaScript
                </span>
 
                <div class="resume-main-heading">
                  <div class="heading-bullet"></div>
                </div>
                <div class="heading-bullet"></div>
                <span
                  style={{ textTransform: "uppercase", fontWeight: "bold" }}
                >
                  Library React JS
                </span>
 
                <div class="resume-main-heading">
                  <div class="heading-bullet"></div>
                </div>
                <div class="heading-bullet"></div>
                <span
                  style={{ textTransform: "uppercase", fontWeight: "bold" }}
                >
                  Framework Flutter
                </span>
 
 
                <div class="resume-main-heading">
                  <div class="heading-bullet"></div>
                </div>
                               <span
                  style={{ textTransform: "uppercase", fontWeight: "bold" }}
                >
                  Framework Express JS
                </span>
 
                <div class="resume-main-heading">
                  <div class="heading-bullet"></div>
                </div>
                <span
                  style={{ textTransform: "uppercase", fontWeight: "bold" }}
                >
                  Mongo Db
                </span>
 
                <div class="resume-main-heading">
                  <div class="heading-bullet"></div>
                </div>
                               <span
                  style={{ textTransform: "uppercase", fontWeight: "bold" }}
                >
                  Java
                </span>
 
                <div class="resume-main-heading">
                  <div class="heading-bullet"></div>
                </div>
                               <span
                  style={{ textTransform: "uppercase", fontWeight: "bold" }}
                >
                  HTML 5
                </span>
 
 
 
                <div class="resume-main-heading">
                  <div class="heading-bullet"></div>
                </div>
                               <span
                  style={{ textTransform: "uppercase", fontWeight: "bold" }}
                >
                  CSS 3
                </span>
 
                <div class="resume-main-heading">
                  <div class="heading-bullet"></div>
                </div>
                               <span
                  style={{ textTransform: "uppercase", fontWeight: "bold" }}
                >
                  Php
                </span>
 
                <div class="resume-main-heading">
                  <div class="heading-bullet"></div>
                </div>
                               <span
                  style={{ textTransform: "uppercase", fontWeight: "bold" }}
                >
                  Framework Symfony 5
                </span>
 
                 </div>
              
                 <div class="resume-main-heading">
                  <div class="heading-bullet"></div>
                </div>
                               <span
                  style={{ textTransform: "uppercase", fontWeight: "bold" }}
                >Framework Spring Boot
                </span>
                
                <div class="resume-main-heading">
                  <div class="heading-bullet"></div>
                </div>
                               <span
                  style={{ textTransform: "uppercase", fontWeight: "bold" }}
                >Framework Angular
                </span>
 
                <div class="resume-main-heading">
                  <div class="heading-bullet"></div>
                </div>
                               <span
                  style={{ textTransform: "uppercase", fontWeight: "bold" }}
                >Node JS
                </span>
 
                <div class="resume-main-heading">
                  <div class="heading-bullet"></div>
                </div>
                               <span
                  style={{ textTransform: "uppercase", fontWeight: "bold" }}
                >Bootstrap
                </span>
 
                <div class="resume-main-heading">
                  <div class="heading-bullet"></div>
                </div>
                               <span
                  style={{ textTransform: "uppercase", fontWeight: "bold" }}
                >Modeling language unified (UML)
                </span>
 
                    
                <div class="resume-main-heading">
                  <div class="heading-bullet"></div>
                </div>
                               <span
                  style={{ textTransform: "uppercase", fontWeight: "bold" }}
                >Python
                </span>
 
 
                <div class="resume-main-heading">
                  <div class="heading-bullet"></div>
                </div>
                               <span
                  style={{ textTransform: "uppercase", fontWeight: "bold" }}
                >Oracle Database
                </span>
            </div>
   
        </div>
      </div>
      <br />

    </div>
  );
}
