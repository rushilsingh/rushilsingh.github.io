import React from "react"
import ubc from "../images/ubc.png"
import synamedia from "../images/synamedia.gif"
import volen from "../images/volen.png"
import acl from "../images/alten_calsoft_labs.png"
import cogs from "../images/cogs.png"
import Logo from "./logo"

function Experience() {
  return (
    <button class="accordion">
      <div id="synamedia" class="card">
        {Logo(synamedia)}
        <ul>
          <li>
            <h4>Software Engineer</h4>
            <ul>
              <li>
                <h5>Synamedia</h5>
              </li>
              <li>Feb 2020 - Present</li>
              <li>
                Bengaluru, Karnataka, India
                <ul>
                  <li>
                    Cybersecurity, Anti-piracy and Addressable Advertising solutions for video content.
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div id="volen" class="card">
        {Logo(volen, "150")}
        <ul>
          <li>
            <h4>Software Engineer</h4>
            <ul>
              <li>
                <h5>Volen Software Services</h5>
              </li>
              <li>September 2018 - February 2020 (6 months)</li>
              <li>Bengaluru, Karnataka, India</li>
              <li>
                Contractual work with clients developing bespoke software solutions.
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div id="alten_calsoft_labs" class="card">
        {Logo(acl, "150")}
        <ul>
          <li>
            <h4>Software Engineer</h4>
            <ul>
              <li>
                <h5>Alten Calsoft Labs (now ACL Digital)</h5>
              </li>
              <li>May 2016 - June 2019 (2 years 2 months)</li>
              <li>
                Bengaluru, Karnataka, India
                <ul>
                  <li>
                    Solutions for orchestrating network devices, appliances and virtual appliances in the SDN and NFV space.
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div id="ta" class="card">
        {Logo(ubc, "100")}
        <ul>
          <li>
            <h4>Teaching Assistant</h4>
            <ul>
              <li>
                <h5>The University of British Columbia</h5>
              </li>
              <li>January 2012 - April 2013 (4 months)</li>
              <li>
                Vancouver, British Columbia, Canada
                <ul>
                  <li>
                    Teaching Assistant (TA) in a third-year Cognitive Systems
                    course (COGS 300).
                  </li>
                  <li>
                    Served as a liaison between the students and the professor
                    for feedback, troubleshooting and effective course
                    administration.
                  </li>
                  <li>
                    Designed laboratory tasks and supervised laboratory
                    sessions.
                  </li>
                  <li>
                    Updated and moderated the course website. Graded lab reports
                    and examinations.
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div id="cogs_society" class="card">
        {Logo(cogs, "100")}
        <ul>
          <li>
            <h4>Industry Relations Officer</h4>
            <ul>
              <li>
                <h5>Cognitive Systems Society</h5>
              </li>
              <li>
                <h5>The University of British Columbia</h5>
              </li>
              <li>April 2011 - April 2014 (2 years)</li>
              <li>
                Vancouver, British Columbia, Canada
                <ul>
                  <li>
                    Executive member of the Cognitive Systems Society (CSS).
                  </li>
                  <li>Liaison between students and industry.</li>
                  <li>
                    Aided and facilitated the smooth functioning of the
                    Cognitive Systems Society, specifically the areas of career
                    development and work opportunities.
                  </li>
                  <li>
                    Involved in organising the annual Tech Career Fair in 2012
                    and 2014.
                  </li>
                  <li>
                    Activities included searching for potential employers,
                    facilitating student engagement, Addressable Advertising, as well as
                    recruiting, training and managing a committee of volunteers.
                  </li>
                  <li>
                    The Tech Career Fair is a major source of revenue for the
                    Cognitive Systems Society and a strong networking
                    opportunity for club members.
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </button>
  )
}

export default Experience