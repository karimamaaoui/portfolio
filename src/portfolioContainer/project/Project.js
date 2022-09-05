import React from "react";
import "./Project.css";
import cover from "../../assets/ilc.jpg";
export default function Project() {
  return (
    <div
      class="resume-container screen-container fade-in"
      id="Resume"
      style={{ opacity: "5", transform: "translateY(1px)" }}
    >
      <div class="resume-content">
        <div class="heading-container">
          <div class="screen-heading">
            <span>Project</span>
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
        <div class="container">
          <div class="row">
            <div class="col-lg-4">
              <div class="card card-margin">
                <br />
                <div class="card-body pt-0">
                  <div class="resume-main-heading">
                    <span>Maghreb Review Site </span>

                    <div class="heading-date" style={{ marginTop: "12px" }}>
                      2022
                    </div>
                  </div>
                  <div class="resume-sub-heading">
                    <span>
                      Technologies Used: Mongo DB, Express Js, React Js, Node
                      JS, Redux, Bootstrap.
                    </span>
                  </div>
                  <div class="resume-heading-description">
                    <span>
                      Online Review website for searching an article that you
                      can read it and added to favorite liste also share in
                      social media. You can be an author that makes you added
                      new article or be an corrector who correct and publish the
                      new article
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="card card-margin">
                <br />
                <div class="card-body pt-0">
                  <div class="resume-main-heading">
                    <span>Ecommerce Mobile </span>
                    <div class="heading-date">2022</div>
                  </div>
                  <div class="resume-sub-heading">
                    <span>Technologies Used: Xamarin,SQLite.</span>
                  </div>
                  <div class="resume-heading-description">
                    <span>
                      Online ecommerce website for showcasing and selling
                      products online.
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="card card-margin">
                <br />
                <div class="card-body pt-0">
                  <div class="resume-main-heading">
                    <span>Medical Congresses </span>
                    <div class="heading-date">2021</div>
                  </div>
                  <div class="resume-sub-heading">
                    <span>
                      Technologies Used: MySql, React Js, Symfony 5, Bootstrap.
                    </span>
                  </div>
                  <div class="resume-heading-description">
                    <span>
                      Online medical congress website you can find medical
                      congresses and you can make a reservation.
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="card card-margin">
                <br />
                <div class="card-body pt-0">
                  <div class="resume-main-heading">
                    <span>Taxi BiBi </span>
                    <div class="heading-date">2021</div>
                  </div>
                  <div class="resume-sub-heading">
                    <span>Technologies Used: Flutter, Firebase.</span>
                  </div>
                  <div class="resume-heading-description">
                    <span>
                      Mobile Application that you can book a taxi that leads you
                      to a place you want to go
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <br /> <br />{" "}
            <div className="profile-options">
              <a href="https://github.com/karimamaaoui" >
                <button className="btn highlighted-btn">Get More Project</button>
              </a>
            </div>
          </div>
        </div>

    
      </div>
    </div>
  );
}
