// below contains all the html elements for each segment

const segments = {
'intro' : `
    <div class="box-title">RIZALDY T. CAPULONG</div>
    <div class="box-subheader">CATP, CESO, ASA, AASP</div>
    <div class="box-texts"><i class="material-icons">apartment</i>Office Address:
        Room 308, UP Alumni Engineers Centennial Hall,
        Velasquez St., Department of Computer Science,
        College of Engineering, University of the Philippines
        Diliman, Quezon City, Metro Manila, Philippines 1101
    </div>
    <div class="box-texts"><i class="material-icons">call</i>
        <div class="box-texts-enum">
            <div>Office phone:	+63+2+8981 8500 local 3234</div>
            <div>Cellular phone:	+63+917 5320820</div>
            <div>Telegram:		+63+920 9090109</div>
            <div>Viber/Whatsapp:	+62+917 8758208 </div>
        </div>
    </div>
    <div class="box-texts"><i class="material-icons">mail</i>
        <div class="box-texts-enum">
            <div>rtcapulong@up.edu.ph
            </div>
            <div>rizaldy.capulong@gmail.com</div>

        </div>
    </div>
`,
'education' : `
<div class="box-section"><i class='material-icons'>school</i><div class="section-title">Educational Background</div></div>
<div class="box-description">
    <div class="description-section">
        <div class="description-header">M. S. Mathematics -Actuarial Science </div>
        <div class="description-subheader">
            <div class="subheader-content">
                <i class="material-icons">location_on</i>
                <div>University of Connecticut (UConn), Storrs, Connecticut, U. S. A.</div>
            </div>
            <div class="subheader-content">
                <i class="material-icons">calendar_month</i>
                <div>Fall 1991 - Spring 1993</div>
            </div>
            <div class="subheader-content">
                <ul>
                    <li>Actuarial GPA: 4.0; Over-all GPA: 3.9 (Scale:  4 is high grade, 0 is low grade)</li>
                    <li>Elected to the United States National Mathematics Honor Society (Pi Mu Epsilon)</li>
                </ul>
            </div>
        </div>
    </div>
    <div class="description-section">
        <div class="description-header">Ph.D. Pure Mathematics (candidate, discontinued)</div>
        <div class="description-subheader">
            <div class="subheader-content">
                <i class="material-icons">location_on</i>
                <div>University of the Philippines (UP), Diliman, Quezon City, Philippines
                </div>
            </div>
            <div class="subheader-content">
                <i class="material-icons">calendar_month</i>
                <div>1st semester 1989, 1st & 2nd semester 1990-91</div>
            </div>
        </div>
    </div>
    <div class="description-section">
        <div class="description-header">B.S. Mathematics</div>
        <div class="description-subheader">
            <div class="subheader-content">
                <i class="material-icons">location_on</i>
                <div>University of the Philippines (UP), Diliman, Quezon City, Philippines
                </div>
            </div>
            <div class="subheader-content">
                <i class="material-icons">calendar_month</i>
                <div>1st semester 1986 - summer semester 1989
                </div>
            </div>
            <div class="subheader-content">
                <ul>
                    <li>Awarded Magna Cum Laude with GPA: 1.2 (Scale: 1 is high grade, 5 is low grade)</li>
                    <li>Finished the four-year program in three school years</li>
                    <li>Awarded as one of the Most Outstanding Seniors in the U.P. System</li>
                    <li>Awarded the U.P. College of Science Dean’s Gold Medal for the Most Outstanding Student in Mathematics</li>
                    <li>Elected to the Phi Kappa Phi International Honor Society</li>
                </ul>
            </div>
        </div>
    </div>
</div>
`, 
'distinctions' : `
    <div class="box-section"><i class='material-icons'>military_tech</i><div class='section-title'>Distinctions</div></div>
    <div class="box-description">
        <div class="description-section">
            <div class="description-header">Division of City Schools – Manila Achievers and Outstanding Graduates Of the Century</div>
            <div class="description-subheader">
                <div class="subheader-content">
                    <i class="material-icons">arrow_forward</i>
                    <div>awarded for excellence in science and technology service by the Department of Education, Culture and Sports – Manila on the occasion of the celebration of its centenary or first 100 years at a cultural and recognition program held on January 16-17, 1999 at the Tanghalang Nicanor Abelardo, CCP Main Theater together with a roster of about 200 most outstanding Manila achievers from 1900 to 1999 from various service areas such as executive service, legislative service, judicial service, administrative service, education, science and technology, health, broadcast journalism, banking, religious, government and private sector. This list included the likes of Alfredo Lim (Manila Mayor), Reynaldo Malonzo (former mayor of a city in Metro Manila) and Orlando Mercado (former Senator and Secretary of Defense) for Executive Service, Robert Jaworski (former Senator and former basketball star player / coach) for Legislative Service, Bernardo Pardo for Judicial Service, Jaime Laya and Armando Malay for Education, Reynaldo Punongbayan for Science and Technology, Liwayway Arceo Bautista, and Diomedes Maturan (legendary singer) for Arts and Culture,  Joey De Leon (popular comedian) and Amado Pineda (popular weather reporter) for Broadcast Journalism, and Bishop Antonio Tobias of San Fernando, La Union for Religious Service.
                    </div>
                </div>
            </div>
        </div>
        <div class="description-section">
            <div class="description-header">Six Competitive Financial Scholarships</div>
            <div class="description-subheader">
                <div class="subheader-content">
                    <i class="material-icons">arrow_forward</i>
                    <div>two international, two national, two university
                    </div>
                </div>
                <div class="subheader-content">
                    <i class="material-icons">arrow_forward</i>
                    <div>Includes grant from U.S.-based Asia Foundation and Starr Foundation, and most prestigious national science scholarship, from the National Science and Technology Authority (NSTA, now Department of Science and Technology or DOST), ranked second nationwide in the NSTA exams.
                    </div>
                </div>
                <div class="subheader-content">
                    <i class="material-icons">calendar_month</i>
                    <div>1986-1993</div>
                </div>
            </div>
        </div>
        <div class="description-section">
            <div class="description-header">Eight Honorific Scholarships</div>
            <div class="description-subheader">
                <div class="subheader-content">
                    <i class="material-icons">arrow_forward</i>
                    <div>From the University of the Philippines and the Ateneo de Manila University (ADMU)
                    </div>
                </div>
                <div class="subheader-content">
                    <i class="material-icons">arrow_forward</i>
                    <div>Superior ranking in university entrance / admission tests and outstanding semestral academic performance (Dean's / President's List).
                    </div>
                </div>
                <div class="subheader-content">
                    <i class="material-icons">calendar_month</i>
                    <div>1986-1989</div>
                </div>
            </div>
        </div>
        <div class="description-section">
            <div class="description-header">Seven Gold Medals, Eighteen Certificates of Recognition</div>
            <div class="description-subheader">
                <div class="subheader-content">
                    <i class="material-icons">arrow_forward</i>
                    <div>From the University of the Philippines, Manila Science High School and Timoteo Paez Integrated Pilot School for excellence in mathematics, science, English, English journalism and over-all academics.
                    </div>
                </div>
                <div class="subheader-content">
                    <i class="material-icons">arrow_forward</i>
                    <div>Includes UP College of Science Dean's Gold Medal for the Most Outstanding Student in Mathematics.
                    </div>
                </div>
                <div class="subheader-content">
                    <i class="material-icons">calendar_month</i>
                    <div>1975-1990</div>
                </div>
            </div>
        </div>
        <div class="description-section">
            <div class="description-header">Three Gold Medals, Three Certificates of Distinction</div>
            <div class="description-subheader">
                <div class="subheader-content">
                    <i class="material-icons">arrow_forward</i>
                    <div>From two U. S. based national honor societies, two Philippine civic organizations and the mayor of Manila, for academic excellence.
                    </div>
                </div>
                <div class="subheader-content">
                    <i class="material-icons">arrow_forward</i>
                    <div>Includes recognition as one of 12 Most Outstanding Students in the UP System (Phi Kappa Phi) and one of the most outstanding graduate students in mathematics at University of Connecticut (Pi Mu Epsilon).
                    </div>
                </div>
                <div class="subheader-content">
                    <i class="material-icons">calendar_month</i>
                    <div>1979, 1982, 1986, 1989, 1993</div>
                </div>
            </div>
        </div>
        <div class="description-section">
            <div class="description-header">Two Trophies, One Plaque, Five Gold Medals, One Silver Medal, Two Bronze Medals, Approximately Twenty Certificates of Award</div>
            <div class="description-subheader">
                <div class="subheader-content">
                    <i class="material-icons">arrow_forward</i>
                    <div>From the successful participation in international, national, regional, citywide and school / university-wide contests in the following areas: mathematics, science, Tagalog and English poetry writing, editorial writing, drawing, English reading proficiency, slogan writing.
                    </div>
                </div>
                <div class="subheader-content">
                    <i class="material-icons">arrow_forward</i>
                    <div>Includes 1983 Australian Mathematics Competition and 1984 Philippine Mathematical Olympiad awards.
                    </div>
                </div>
                <div class="subheader-content">
                    <i class="material-icons">calendar_month</i>
                    <div>1979-1986</div>
                </div>
            </div>
        </div>
        <div class="description-section">
            <div class="description-header">Three Presidential Trophies</div>
            <div class="description-subheader">
                <div class="subheader-content">
                    <i class="material-icons">arrow_forward</i>
                    <div>For first honors during first to third years at the Manila Science High School  (prototype special science high school of the Philippines with school average NCEE percentile rank of 99).
                    </div>
                </div>
                <div class="subheader-content">
                    <i class="material-icons">calendar_month</i>
                    <div>1983-1985</div>
                </div>
            </div>
        </div>
        <div class="description-section">
            <div class="description-header">Five Certificates of Recognition</div>
            <div class="description-subheader">
                <div class="subheader-content">
                    <i class="material-icons">arrow_forward</i>
                    <div>From the Manila Science High School, for exemplary character and behavior (Model Boy '86) and for accumulated contest winnings (Star Awards 1983-86).
                    </div>
                </div>
                <div class="subheader-content">
                    <i class="material-icons">calendar_month</i>
                    <div>1983-1986</div>
                </div>
            </div>
        </div>
    </div>
`,
'boardMemberships' : `
    <div class="box-section"><i class='material-icons'>groups</i><div class='section-title'>Board of Directors Experience</div></div>
    <div class="box-description">
        <div class="description-section">
            <div class="description-header">Commissioner – Alternate for Social Security System, Employees Compensation Commission (ECC)
            </div>
            <div class="description-subheader">
                <div class="subheader-content">
                    <i class="material-icons">arrow_forward</i>
                    <div>represent the Social Security System in the board of the ECC, a social insurance institution that provides complete and comprehensive package of benefits and services for workers and their dependents in the event of work-related contingencies
                    </div>
                </div>
                
                <div class="subheader-content">
                    <i class="material-icons">location_on</i>
                    <div>Social Security System, Diliman, Quezon City, Philippines</div>
                </div>
                <div class="subheader-content">
                    <i class="material-icons">calendar_month</i>
                    <div>July 17, 2019 – April 18, 2024</div>
                </div>
            </div>
        </div>
        <div class="description-section">
            <div class="description-header">Trustee, SSS Employee’s Provident Fund
            </div>
            <div class="description-subheader">
                <div class="subheader-content">
                    <i class="material-icons">arrow_forward</i>
                    <div>represents management and the Investment Sector in the board of the mandatory defined contribution program for SSS employees

                    </div>
                </div>
                
                <div class="subheader-content">
                    <i class="material-icons">location_on</i>
                    <div>Social Security System, Diliman, Quezon City, Philippines</div>
                </div>
                <div class="subheader-content">
                    <i class="material-icons">calendar_month</i>
                    <div>May 16, 2019 – June 30, 2013 and June 1, 2014 – April 18, 2024</div>
                </div>
            </div>
        </div>
        <div class="description-section">
            <div class="description-header">Trustee, Fund Managers Association of the Philippines, Inc, (FMAP)
            </div>
            <div class="description-subheader">
                <div class="subheader-content">
                    <i class="material-icons">arrow_forward</i>
                    <div>represents the Social Security System in the board of FMAP, an organization that helps uplift the investing public economically through the practice of professional fund management that adheres to the highest ethical standards and to the best practices globally
                    </div>
                </div>
                
                <div class="subheader-content">
                    <i class="material-icons">location_on</i>
                    <div>Makati City, Philippines</div>
                </div>
                <div class="subheader-content">
                    <i class="material-icons">calendar_month</i>
                    <div>CY 2023 - April 2024</div>
                </div>
            </div>
        </div>
        <div class="description-section">
            <div class="description-header">Director, Philamlife Tower Management Corporation
            </div>
            <div class="description-subheader">
                <div class="subheader-content">
                    <i class="material-icons">arrow_forward</i>
                    <div>represents the interest of Social Security System in a 34-story skyscraper located in Makati, Philippines owned and developed by Philam Properties Corporation
                    </div>
                </div>
                
                <div class="subheader-content">
                    <i class="material-icons">location_on</i>
                    <div>Makati City, Philippines</div>
                </div>
                <div class="subheader-content">
                    <i class="material-icons">calendar_month</i>
                    <div>July 2018 - January 2022</div>
                </div>
            </div>
        </div>
        <div class="description-section">
            <div class="description-header">Director, Ionics Inc.
            </div>
            <div class="description-subheader">
                <div class="subheader-content">
                    <i class="material-icons">arrow_forward</i>
                    <div>represents the interest of Social Security System in a Philippine Stock Exchange listed electronics manufacturing company</div>
                </div>
                
                <div class="subheader-content">
                    <i class="material-icons">location_on</i>
                    <div>Makati City, Philippines</div>
                </div>
                <div class="subheader-content">
                    <i class="material-icons">calendar_month</i>
                    <div>September 2019 – February 2020</div>
                </div>
            </div>
        </div>
        <div class="description-section">
            <div class="description-header">Director, Philippine Dealing System Holdings Corporation
            </div>
            <div class="description-subheader">
                <div class="subheader-content">
                    <i class="material-icons">arrow_forward</i>
                    <div>represents the interest of Social Security System in a corporation that provides capital market infrastructure services intended to operate trading platforms, manage sound settlement highways and render essential securities services
                    </div>
                </div>
                
                <div class="subheader-content">
                    <i class="material-icons">location_on</i>
                    <div>Makati City, Philippines</div>
                </div>
                <div class="subheader-content">
                    <i class="material-icons">calendar_month</i>
                    <div>April 4, 2014 – December 14, 2017 and April 26, 2018 – July 31, 2019</div>
                </div>
            </div>
        </div>
        <div class="description-section">
            <div class="description-header">Director, Operations Research Society of the Philippines
            </div>
            <div class="description-subheader">
                <div class="subheader-content">
                    <i class="material-icons">arrow_forward</i>
                    <div>directs activities for the advancement and practice of management science/operations research and training of OR practitioners in all sectors of Philippine society

                    </div>
                </div>
                <div class="subheader-content">
                    <i class="material-icons">calendar_month</i>
                    <div>July 2000 - June 2002 and June 2019 – June 2021</div>
                </div>
            </div>
        </div>
        <div class="description-section">
            <div class="description-header">Member, Board of Directors, Al-Amanah Islamic Investment Bank of the Philippines
            </div>
            <div class="description-subheader">
                <div class="subheader-content">
                    <i class="material-icons">arrow_forward</i>
                    <div>represents the interests of the Social Security System in the only Islamic investment bank in the Philippines

                    </div>
                </div>
                <div class="subheader-content">
                    <i class="material-icons">calendar_month</i>
                    <div>June 30, 2003 to May 16, 2005</div>
                </div>
            </div>
        </div>
        <div class="description-section">
            <div class="description-header">Member, Board of Directors, Al-Amanah Islamic Investment Bank of the Philippines
            </div>
            <div class="description-subheader">
                <div class="subheader-content">
                    <i class="material-icons">arrow_forward</i>
                    <div>represents the interests of the Social Security System in the only Islamic investment bank in the Philippines

                    </div>
                </div>
                <div class="subheader-content">
                    <i class="material-icons">calendar_month</i>
                    <div>June 30, 2003 to May 16, 2005</div>
                </div>
            </div>
        </div>
        <div class="description-section">
            <div class="description-header">Member, Board of Directors, Equitable PCI Bank, Incorporated
            </div>
            <div class="description-subheader">
                <div class="subheader-content">
                    <i class="material-icons">arrow_forward</i>
                    <div>represents the interests of the Social Security System in the third largest bank in the Philippines during that time and later merged into Banco De Oro
                    </div>
                </div>
                
                <div class="subheader-content">
                    <i class="material-icons">location_on</i>
                    <div>Makati City, Philippines</div>
                </div>
                <div class="subheader-content">
                    <i class="material-icons">calendar_month</i>
                    <div>April 17, 2001 – April 15, 2002</div>
                </div>
            </div>
        </div>
    </div>
`,
'academicWork' : `
    <div class="box-section"><i class='material-icons'>work</i><div class="section-title">Academic Work Experience</div></div>
    <div class="box-description">
        <div class="description-section">
            <div class="description-header">Senior Lecturer III in Financial Analytics & Computer Operations Analysis</div>
            <div class="description-subheader">
                <div class="subheader-content">
                    teaches computer science, engineering, math, statistics, economics, business majors elective courses grounded in real time real world data and applications in Financial Analytics which combines actuarial science and investments for purpose of career and retirement planning and in Computer Operations Analysis which applies management science / operations research to computer operations.
                </div>
                <div class="subheader-content">
                    <i class="material-icons">location_on</i>
                    <div>Department of Computer Science, College of Engineering, University of the Philippines, Diliman, Quezon City
                    </div>
                </div>
                <div class="subheader-content">
                    <i class="material-icons">calendar_month</i>
                    <div>August 2023 – present</div>
                </div>
            </div>
        </div>
        <div class="description-section">
            <div class="description-header">Senior Lecturer in Quantitative Methods and Applications in Business and General Mathematics, Master of Business Administration (MBA) Program</div>
            <div class="description-subheader">
                <div class="subheader-content">
                    taught MBA students general mathematics, business statistics and operations research.
                </div>
                <div class="subheader-content">
                    <i>90 hours per year for two years, 40 hours per year for two years.</i>
                </div>
                <div class="subheader-content">
                    <i class="material-icons">location_on</i>
                    <div>Department of Business Administration, College of Business Administration, University of the Philippines, Diliman, Quezon City
                    </div>
                </div>
                <div class="subheader-content">
                    <i class="material-icons">calendar_month</i>
                    <div>Academic Years 1995-98; resumed 2003-2006</div>
                </div>
            </div>
        </div>
        <div class="description-section">
            <div class="description-header">Senior Lecturer in Survival Models</div>
            <div class="description-subheader">
                <div class="subheader-content">
                    taught graduate students in applied mathematics - actuarial science tabular and parametric survival models and their estimation using various statistical techniques given specific study designs.
                </div>
                <div class="subheader-content">
                    <i class="material-icons">location_on</i>
                    <div>Department of Mathematics, College of Science, University of the Philippines
                    </div>
                </div>
                <div class="subheader-content">
                    <i class="material-icons">calendar_month</i>
                    <div>First Semester, AY 1994-95</div>
                </div>
            </div>
        </div>
        <div class="description-section">
            <div class="description-header">Senior Lecturer in Quantitative Methods and Applications (Management Science / Operations Research)</div>
            <div class="description-subheader">
                <div class="subheader-content">
                    taught undergraduate students in business linear, integer and dynamic programming and network models including PERT and CPM.
                </div>
                <div class="subheader-content">
                    <i class="material-icons">location_on</i>
                    <div>Department of Business Administration, College of Business Administration, University of the Philippines
                    </div>
                </div>
                <div class="subheader-content">
                    <i class="material-icons">calendar_month</i>
                    <div>First Semester, AY 1994-95</div>
                </div>
            </div>
        </div>
        <div class="description-section">
            <div class="description-header">University Instructor II of Mathematics</div>
            <div class="description-subheader">
                <div class="subheader-content">
                    taught the following undergraduate courses to students as indicated in parenthesis:
                </div>
                <div class="subheader-content">
                    <ul>
                        <li>First semester AY 1989-90</li>
                        <ul>
                            <li>Math 14 - Trigonometry (non-science / engineering majors)</li>
                            <li>Math 17 - Algebra & Trigonometry (science / engineering majors)</li>
                        </ul>
                        <li>Second semester AY 1989-90</li>
                        <ul>
                            <li>Math 14</li>
                            <li>Math 53 - Calculus & Analytic Geometry 1 (science/engg. majors)</li>
                            <li>Math 100 - Calculus (business 1 economics majors)</li>
                        </ul>
                        <li>Summer semester SY 1989-90</li>
                        <ul>
                            <li>Math 54 - Calculus & Analytic Geometry 2 (science/engg. majors)</li>
                        </ul>
                        <li>Second semester SY 1990-91</li>
                        <ul>
                            <li>Math 55 - Calculus & Analytic Geometry 3 (science/engg. majors)</li>
                            <li>Math 102 - Calculus & Analytic Geometry 2 (architecture majors)</li>
                            <li>Math 131 - Elementary Set Theory (math majors)</li>
                            <li>Math 198 - History of Calculus (math majors / non-math seniors)</li>
                        </ul>
                        <li>Summer semester SY 1989-90</li>
                        <ul>
                            <li>Math 55</li>
                        </ul>
                    </ul>
                </div>
                <div class="subheader-content">
                    <i class="material-icons">location_on</i>
                    <div>Department of Mathematics, University of the Philippines
                    </div>
                </div>
                <div class="subheader-content">
                    <i class="material-icons">calendar_month</i>
                    <div>Academic years (AY) 1989-91, on study leave 1st semester 1990</div>
                </div>
            </div>
        </div>
        <div class="description-section">
            <div class="description-header">Lecturer V in Actuarial Topics, Department of Math and Physics</div>
            <div class="description-subheader">
                <div class="subheader-content">
                    taught senior actuarial science / math majors pension mathematics and valuation, survival models and their estimation, theory of interest and actuarial research, actuarial valuation; applied computer technology in teaching through the use of powerpoint presentations and computers in the classroom as well as the use of a class website, an email group and the internet for research.
                </div>
                <div class="subheader-content">
                    <i class="material-icons">location_on</i>
                    <div>College of Science, University of Santo Tomas, Espana, Manila
                    </div>
                </div>
                <div class="subheader-content">
                    <i class="material-icons">calendar_month</i>
                    <div>November 2007 – April 2008</div>
                </div>
            </div>
        </div>
        <div class="description-section">
            <div class="description-header">Lecturer V in Pension Mathematics and Valuation, Survival Models, Theory of Interest and Actuarial Research</div>
            <div class="description-subheader">
                <div class="subheader-content">
                    taught junior and senior actuarial science / math majors pension mathematics and valuation, survival models and their estimation, theory of interest and actuarial research, advises five groups of students doing research papers on viability of public pension schemes in the Philippines, actuarial valuation and investment management for car insurance companies, feasibility of pre-need maternity products, insurance for basketball players and catastrophe insurance for Metro Manila businesses; applied computer technology in teaching through the use of powerpoint presentations and computers in the classroom as well as the use of a class website, an email group and the internet for research.
                </div>
                <div class="subheader-content">
                    <i class="material-icons">location_on</i>
                    <div>College of Science, University of Santo Tomas, Espana, Manila
                    </div>
                </div>
                <div class="subheader-content">
                    <i class="material-icons">calendar_month</i>
                    <div>June 2002 – March 2006</div>
                </div>
            </div>
        </div>
        <div class="description-section">
            <div class="description-header">Assistant Professorial Lecturer V in Algebra and Mathematical Analysis</div>
            <div class="description-subheader">
                <div class="subheader-content">
                    taught freshmen and sophomore undergraduates integral calculus, calculus of functions of several variables, differential equations and college algebra, applied computer technology in teaching through the use of class website, email group and smart electronic classroom, trained in the effective application of media and technology in the classroom, powerpoint in the classroom, design of basic interactive multimedia presentations, online course design and management, and video streaming.
                </div>
                <div class="subheader-content">
                    <i class="material-icons">location_on</i>
                    <div>Department of Mathematics, College of Science, De La Salle University, Taft Avenue, Manila
                    </div>
                </div>
                <div class="subheader-content">
                    <i class="material-icons">calendar_month</i>
                    <div>May 2002 – December 2002 </div>
                </div>
            </div>
        </div>
        <div class="description-section">
            <div class="description-header">Lecturer in Business Statistics and Operations Management, Executive Development Programs / Leadership and Management Development Programs</div>
            <div class="description-subheader">
                <div class="subheader-content">
                    taught executives (managers to vice presidents) of PLDT, Uniwide Holdings, Insular Life Insurance Co., National Electrification Administration and regional electric cooperatives business mathematics including probability and statistics as well as operations research techniques such as linear programming, networks, PERT/CPM, decision theory and transportation/distribution problem solving, and taught undergraduate students majoring in business management, legal management, management of applied chemistry and management economics elementary business statistics and operations management.
                </div>
                <div class="subheader-content">
                    <i>42 hours per year for 3 years in Makati and 90 hours per year for three years,  45 hours per year for two years in Quezon City</i>
                </div>
                <div class="subheader-content">
                    <i class="material-icons">location_on</i>
                    <div>Center for Continuing Education, Ateneo Graduate School of Business, Makati
                    </div>
                </div>
                <div class="subheader-content">
                    <i class="material-icons">location_on</i>
                    <div>Department of Management, College of Arts and Sciences, Ateneo de Manila University, Loyola Heights, Quezon City
                    </div>
                </div>
                <div class="subheader-content">
                    <i class="material-icons">calendar_month</i>
                    <div>AY 1995-99</div>
                </div>
            </div>
        </div>
        <div class="description-section">
            <div class="description-header">Statistics and Mathematics Tutor</div>
            <div class="description-subheader">
                <div class="subheader-content">
                    taught various mathematics, statistics, and actuarial subjects to undergraduate and graduate students of different races and nationalities but mostly American Caucasians.
                </div>

                <div class="subheader-content">
                    <i class="material-icons">location_on</i>
                    <div>University of Connecticut
                    </div>
                </div>
                <div class="subheader-content">
                    <i class="material-icons">calendar_month</i>
                    <div>spring and fall semesters 1992, spring semester 1993</div>
                </div>
            </div>
        </div>
        <div class="description-section">
            <div class="description-header">Physics, English and Mathematics Tutor / Lecturer</div>
            <div class="description-subheader">
                <div class="subheader-content">
                    for contestants to the 1990 Australian Mathematics Competition and the 1991 Search for the Math Wizard of the Philippines, for undergraduate students from various Metro Manila schools, for international graduate students
                </div>

                <div class="subheader-content">
                    <i class="material-icons">location_on</i>
                    <div>University of the Philippines
                    </div>
                </div>
                <div class="subheader-content">
                    <i class="material-icons">calendar_month</i>
                    <div>1986-91</div>
                </div>
            </div>
        </div>
        <div class="description-section">
            <div class="description-header">Deputy Team Leader, Philippine delegation to the 31st International Mathematical Olympiad (IMO)</div>
            <div class="description-subheader">
                <div class="subheader-content">
                    selected, trained and accompanied Philippine IMO contestants, presented their defense before IMO Board of Judges, participated in intellectual, diplomatic and cultural exchanges with IMO teams from six continents and with Chinese government and academic officials and students; sponsored by Meralco Foundation, Central Bank, Department of Science and Technology, Department of Education, Culture and Sports, etc.
                </div>

                <div class="subheader-content">
                    <i class="material-icons">location_on</i>
                    <div>Beijing, China
                    </div>
                </div>
                <div class="subheader-content">
                    <i class="material-icons">calendar_month</i>
                    <div>1990</div>
                </div>
            </div>
        </div>
        <div class="description-section">
            <div class="description-header">Lecturer, Philippine Program of Excellence in Mathematics</div>
            <div class="description-subheader">
                <div class="subheader-content">
                    taught combinatorics to Philippine Mathematical Olympiad finalists and Filipino contestants in the Asia - Pacific Mathematical Olympiad and to representatives of selected schools.
                </div>

                <div class="subheader-content">
                    <i class="material-icons">location_on</i>
                    <div>Science Education Institute, Department of Science and Technology, Republic of the Philippines
                    </div>
                </div>
                <div class="subheader-content">
                    <i class="material-icons">calendar_month</i>
                    <div>1990</div>
                </div>
            </div>
        </div>
    </div>
`,
'actuarialWork' : `
    <div class="box-section"><i class='material-icons'>calculate</i><div class="section-title">Actuarial Work Experience</div></div>
    <div class="box-description">
    <div class="description-section">
        <div class="description-header">Concurrent Overseer of the Actuarial and Risk Management Group (and EVP Investments Sector)</div>
        <div class="description-subheader">
            <div class="subheader-content">
                <i class="material-icons">location_on</i>
                <div>Social Security System, Diliman, Quezon City, Philippines
                </div>
            </div>
            <div class="subheader-content">
                <i class="material-icons">calendar_month</i>
                <div>2023 – April 2024</div>
            </div>
        </div>
    </div>
    <div class="description-section">
        <div class="description-header">Chairman, Social Insurance Committee</div>
        <div class="description-subheader">
            <div class="subheader-content">
                <i class="material-icons">location_on</i>
                <div>Actuarial Society of the Philippines
                </div>
            </div>
            <div class="subheader-content">
                <i class="material-icons">calendar_month</i>
                <div>2019 – April 2024</div>
            </div>
        </div>
    </div>
    <div class="description-section">
        <div class="description-header">Chief Actuary / OIC Actuarial Services Division</div>
        <div class="description-subheader">
            <div class="subheader-content">
                <i>Explanatory note: The Social Security System administers the two private sector pension schemes in the Philippines: the Social Security Program and the Employees’ Compensation program. About 41 million members and about a million employers contribute to the SSS which in turn currently pays regular benefits to about 3.7 million pensioners and members (January to May 2022). Assets / Investment reserve fund was at about U.S. $11.18-B.</i>
            </div>
            <div class="subheader-content">
                <i class="material-icons">work_history</i>
                <div>Regular Duties:
                    <ul>
                        <li>Develops the division's plans and programs ensuring alignment with the organization's strategic directions;</li>
                        <li>Ensures that division's deliverables and commitment targets are attainable and aligned with organization's strategic directions;</li>
                        <li>Communicates to and confirms clear understanding by direct report unit heads of the division's plans and programs, and secures their full support and commitment;</li>
                        <li>Delegates appropriate authorities and responsibilities for efficient and effective operations of the division's units;</li>
                        <li>Reviews and recommends for approval the division's budget, and identifies priority requirements to ensure delivery of quality service;</li>
                        <li>Directs the operations of the division, and ensures implementation and accomplishment of plans and programs relative to actuarial management;</li>
                        <li>Plans, organizes, directs and evaluates all reports on actuarial studies/valuations pertaining to various SSS programs and projects;</li>
                        <li>Ensures that necessary systems, processes and resources are in place, and acts appropriately on recommended enhancements and resource requirements to ensure attainment of quality service commitments;</li>
                        <li>Reviews and acts appropriately on communications and other documents, and directs the preparation of complete, accurate and timely reports to immediate head, other organizational units and external agencies as needed;</li>
                        <li>Discusses with and sets performance commitment targets of direct reports, motivates them to meet or exceed performance standards, evaluates work performance, identifies appropriate development interventions, and makes commendations for exemplary accomplishments;</li>
                        <li>Ensures strict compliance of unit personnel to the System's policies and internal control procedures;</li>
                        <li>Establishes and maintains open communication channels and linkages with colleagues and external entities to facilitate work performance;</li>
                        <li>Presides over/Attends meetings, planning sessions, and other internal and external programs and events;</li>
                        <li>Approves/Recommends personnel movements and disciplinary actions within the limits set by relevant Civil Service Law and Rules, SSS policies and Code of Conduct and Ethical Standards;</li>
                        <li>Performs other functions that may be assigned by the immediate head or as required in official issuances.</li>
                    </ul>
                </div>
            </div>
            <div class="subheader-content">
                <i class="material-icons">location_on</i>
                <div>Social Security System, Diliman, Quezon City, Philippines
                </div>
            </div>
            <div class="subheader-content">
                <i class="material-icons">calendar_month</i>
                <div>January 9, 2014 – March 31, 2014 and July 30, 2018 – December 11, 2018</div>
            </div>
        </div>
    </div>
    <div class="description-section">
        <div class="description-header">Actuarial Consultant</div>
        <div class="description-subheader">
            
            <div class="subheader-content">
                <i class="material-icons">location_on</i>
                <div>Philippine National Police, Camp Crame, Quezon City, Philippines
                </div>
            </div>
            <div class="subheader-content">
                <i class="material-icons">calendar_month</i>
                <div>July 15, 2008 – January 25, 2009</div>
            </div>
        </div>
    </div>
    <div class="description-section">
        <div class="description-header">Deputy Chief Actuary / Head of Actuarial Department</div>
        <div class="description-subheader">
            <div class="subheader-content">
                <i class="material-icons">task</i>
                <div>Previous Projects:
                    <ul>
                        <li>2007 actuarial valuation of the Social Security Program</li>
                        <li>Actuarial evaluation of charter changes to be proposed affecting short-term and long-term social security benefits under the Social Security Program</li>
                        <li>Sharing of investment income between the Social Security Fund and the State Insurance Fund</li>
                        <li>Sharing of operating expenses between the Social Security Program and the Employees Compensation Program</li>
                        <li>Estimation of overpayment of pension benefits and underpayment of contributions using statistics from internal and external sources</li>
                        <li>Actuarial valuation and sensitivity analysis on the Employees Compensation Program</li>
                        <li>Increase in the contribution rate from 8.4% to 9.4%, increase in maximum salary credit from P15,000 to P30,000 and change in the pension formula</li>
                        <li>Estimation of overpayment of investment income to the State Insurance Fund and underpayment of investment income to the Social Security Fund</li>
                        <li>Creation of voluntary defined contribution program for overseas Filipino workers</li>
                        <li>Change in the definition of credited years of service</li>
                        <li>Discounted advance lump-sum contribution payments for self-employed and voluntary members</li>
                        <li>Implementing rules and guidelines for the Flexifund for overseas Filipino workers (as part of ad hoc committee)</li>
                    </ul>
                </div>
            </div>
            <div class="subheader-content">
                <i class="material-icons">work_history</i>
                <div>Regular duties:
                    <ul>
                        <li>Directs and supervises technical assistance to the SSS President & CEO, Chairman, and the Executive Vice President for Investments mainly in the area of actuarial valuation, monthly, annual and five-year projections of benefit payments, contribution collections, investment income and operating expenses including breakdown of components and also statistical requirements about the social security program;
                        </li>
                        <li>Directs and supervises demographic research, operations research contribution research, investment research, benefit research, and operating expense research, the monitoring of social security programs around the world and assistance on the actuarial valuation requirements of other social security institutions in the Philippines such as Overseas Workers Welfare Administration (OWWA), Philippine Health Insurance Corporation (PHIC) and the Armed Forces of the Philippines Retirement Service Benefit System (AFP-RSBS)
                        </li>
                        <li>Directs and supervises regular work on financial consolidation and actuarial valuation needed to evaluate effects of proposed bills in Congress which may affect the viability of the social security program and prepares SSS position papers and serves as resource person to Congress during public hearings on proposed bills;</li>
                        <li>Develops objectives, strategies, policies, plans and budget for the Actuarial Department as well as directs and supervises department activities including recruitment and performance monitoring.</li>
                    </ul>
                </div>
            </div>
            <div class="subheader-content">
                <i class="material-icons">assignment</i>
                <div>Special assignments:
                    <ul>
                        <li>Represents SSS at Malacañang (Presidential Palace) cluster meetings or meetings of subgroups of the cabinet, IMF Mission meetings, World Bank meetings, ILO meetings, etc.
                        </li>
                        <li>Delivers presentations or speeches to various interests groups such as labor unions, employer associations, professional organizations, personnel management associations, brokerages, pensioner associations, among others, about principles of social security, the social security program, social security reform, the operations of the SSS, etc.
                        </li>
                    </ul>
                </div>
            </div>
            <div class="subheader-content">
                <i class="material-icons">location_on</i>
                <div>Social Security System, Diliman, Quezon City, Philippines
                </div>
            </div>
            <div class="subheader-content">
                <i class="material-icons">calendar_month</i>
                <div>July 12,1999 – January 8, 2014</div>
            </div>
        </div>
    </div>
    <div class="description-section">
        <div class="description-header">Actuarial Assistant Consultant</div>
        <div class="description-subheader">
            <div class="subheader-content">
                assisted the actuarial consultant in designing the health insurance benefit package and contribution scheme for a pilot program for indigents in a southern Philippine province who are not covered by the Medical Care Program under the SSS, and calculated long term projections of revenues and expenditures and other cash flows
            </div>
            <div class="subheader-content">
                <i class="material-icons">location_on</i>
                <div>Bukidnon Health Insurance Project
                </div>
            </div>
            <div class="subheader-content">
                <i class="material-icons">calendar_month</i>
                <div> June - December, 1993</div>
            </div>
        </div>
    </div>
    <div class="description-section">
        <div class="description-header">Actuarial Researcher II</div>
        <div class="description-subheader">
            <div class="subheader-content">
                <div>
                    Regular Duties:
                    <ul>
                        <li>Did quantitative or actuarial studies on social security, employees' compensation and medical care benefits, coverage, contributions and investments; 
                        </li>
                        <li>did actuarial studies or served as resource person at congressional meetings on Senate and House Bills on unemployment insurance, unemployment assistance, national health care, national health insurance, portability of social security benefits and Social Security Law amendments; 
                        </li>
                        <li>quantified effect of lowering retirement age and extending benefit period on aggregate sickness benefits; 
                        </li>
                        <li>reconstructed 1957-1993 SSS member compliance rates, modeled age distribution of employees and distribution of aggregate sickness claims;
                        </li>
                    </ul>
                </div>
            </div>
            <div class="subheader-content">
                <div>
                    Special Assignments:
                    <ul>
                        <li>Provided technical assistance to the SSS Administrator, Chief Actuary and Deputy Administrator for Management Services, Information Systems and Investment and Finance, and Assistant Administrator for Management Services and Investment and Finance and other high ranking officials, application of stochastic models to computer software and hardware systems reliability; 
                        </li>
                        <li>managed and directed 1994 and 1995 Actuarial Department recruitment campaigns including advertisement, evaluation and testing of over 200 applicants, interview of top 16 and orientation of top 8; 
                        </li>
                        <li>taught SSS employees a preparatory course for the Professional Civil Service Examinations - Mathematics Section
                        </li>
                    </ul>
                </div>
            </div>
            <div class="subheader-content">
                <i class="material-icons">location_on</i>
                <div>Actuarial Department, Social Security System
                </div>
            </div>
            <div class="subheader-content">
                <i class="material-icons">calendar_month</i>
                <div>August 1991 - September 1994</div>
            </div>
        </div>
    </div>
    <div class="description-section">
        <div class="description-header">Actuarial Trainee</div>
        <div class="description-subheader">
            <div class="subheader-content">
                studied internationally offered private life and health insurance products and developed computer programs to compute for or construct TAS (Tillinghast Actuarial Software)  external tables of commutation functions, death benefit amounts, net and gross premiums, surrender charges, reserves, commission rates and cash surrender values for approximately 500 different types of British life insurance plans, Japanese Progressive Multiple Income Benefit Plans and Japanese Full-in-Hospital Plans using the Zillmer reserving method; AIG, which operates in 130 countries, was then the largest U.S.-based insurance company.
            </div>
            <div class="subheader-content">
                <i class="material-icons">location_on</i>
                <div>Corporate Valuation Department (International Actuarial), Life Division, American International Group, Inc.(AIG), Wilmington, Delaware, USA
                </div>
            </div>
            <div class="subheader-content">
                <i class="material-icons">calendar_month</i>
                <div>June 1, 1993 - August 31, 1993</div>
            </div>
        </div>
    </div>
`,
'investmentWork' : `
    <div class="box-section"><i class='material-icons'>trending_up</i><div class="section-title">Investment Work Experience</div></div>
    <div class="box-description">
        <div class="description-section">
            <div class="description-header">Executive Vice President / Investments Sector</div>
            <div class="description-subheader">
                <div class="subheader-content">
                    <i>Explanatory note: The SSS Investment Reserve Fund (IRF) is worth about PhP 810.8B.  The Social Security Law of 2018 clearly indicates that the Social Security Commission has the responsibility to invest the funds following prudent principles.</i>
                </div>
                <div class="subheader-content">
                    <div>Regular Duties:
                        <ul>
                            <li>Develops and recommends for approval the Sector’s policies, objectives, strategies, and plans.
                            </li>
                            <li>Directs and supervises the management of SSS funds including cash operations, liquidity, management, risk management and attainment of reasonable income from investment of the reserve fund in accordance with the provisions of the Social Security Law.
                            </li>
                            <li>Directs and supervises the digitalization efforts for collections and disbursements, including accreditation of collecting agents.
                            </li>
                            <li>Directs and supervises the shift to online application of loans both member loans and pension loans.
                            </li>
                            <li>Directs and supervises the management of SSS funds invested in domestic and foreign tradable marketable securities specifically capital stocks listed or to be listed in the stock exchange, domestic and foreign fixed income instruments including private corporate notes and bonds and fixed income mutual funds.
                            </li>
                            <li>Directs and supervises the maximization of returns from various asset classes where SSS is invested in including fixed income investments such as money market, government securities, corporate bonds as well as member loans and pensioner loans, and variable income investments such as equities, properties, mutual funds, externally managed funds, etc.
                            </li>
                            <li>Monitors the Sector’s performance against plans and targets, analyze deviations, pinpoints areas for improvement, and direct appropriate corrective action to ensure prompt and proper solution to problems.
                            </li>
                            <li>Monitor’s and assesses business, political, and economic conditions for possible impact to the investment portfolio; implements and directs timely and appropriate courses of action.
                            </li>
                            <li>Represents the system in major functions with Government, industry/trade sectors, social, civic, and religious, social development agencies, non-governmental organizations, and various public sectors.
                            </li>
                            <li>Maintains good working relations with colleagues and other officers in the System as well as with external entities regarding any matter affecting the investment portfolio.</li>
                            <li>Ensures that the necessary processes are in place and that authorities and responsibilities are properly delegated for efficient and effective operations of the Sector, subject to adequate controls.</li>
                            <li>Ensures strict compliance with the System’s policies and external control procedures while maintaining the highest level of service quality.
                            </li>
                            <li>Prepares internal reports required by the management.</li>
                            <li>Initiates the filing of administrative cases, promoting the disciplining of officers and staff directly supervised.
                            </li>
                            <li>Directs, guides, develops, and motivates officers and staff directly supervised and evaluates their performance.
                            </li>
                            <li>Coordinate with concerned organizational units to ensure the continuous training and skills upgrading of Sector’s offices and staff.</li>
                            <li>Reviews and signs correspondence, memoranda, and reports pertaining to the activities of the Sector.</li>
                            <li>Identifies opportunities for the continuous improvement of processes and procedures of the Sector.
                            </li>
                            <li>Performs other duties that may be assigned by the President and Chief Executive Officer.
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="subheader-content">
                    <i class="material-icons">location_on</i>
                    <div>Social Security System, Diliman, Quezon City, Philippines
                    </div>
                </div>
                <div class="subheader-content">
                    <i class="material-icons">calendar_month</i>
                    <div>September 24, 2014 – April 18, 2024</div>
                </div>
            </div>
        </div>
        <div class="description-section">
            <div class="description-header">Senior Vice President, Capital Markets Group</div>
            <div class="description-subheader">
                <div class="subheader-content">
                    <i class="material-icons">work_history</i>
                    <div>Regular Duties:
                        <ul>
                            <li>Develops and recommends for approval Group’s objectives, strategies, policies, plans and budgets.
                            </li>
                            <li>Directs and supervises the management of domestic and foreign investment in tradable/marketable securities specifically capital stocks listed or to be listed in the stock exchange, options or warrants to such stocks and mutual funds, among others and the development of investment initiatives in equities related portfolio.
                            </li>
                            <li>Directs and supervises the management of investments in domestic and foreign fixed income instruments including private corporate notes and bonds, and fixed income mutual funds.
                            </li>
                            <li>Directs and supervises the management of programs loans which are conduited with PFIs.
                            </li>
                            <li>Monitors the Group performance against plans, analyzes deviations from plans, pinpoints areas for improvement, and directs appropriate course of action to ensure prompt and proper solutions of problems.</li>
                            <li>Participates in the session and deliberations of major management committees.</li>
                            <li>Liaises with and represents the System in selected major functions with various publics, government industry and trade groups, professional associations and others.</li>
                            <li>Generates funds through the buy and sell of stocks and fixed income instruments in accordance with the limits established for a Senior Vice President, Capital Markets Group to ensure profitability of the portfolio.</li>
                        </ul>
                    </div>
                </div>
                <div class="subheader-content">
                    <i class="material-icons">location_on</i>
                    <div>Social Security System, Diliman, Quezon City, Philippines
                    </div>
                </div>
                <div class="subheader-content">
                    <i class="material-icons">calendar_month</i>
                    <div>November 3, 2020 – March 10, 2023</div>
                </div>
            </div>
        </div>
        <div class="description-section">
            <div class="description-header">Member, Investment Planning and Strategy Committee</div>
            <div class="description-subheader">
                <div class="subheader-content">
                    <i class="material-icons">work_history</i>
                    <div>Regular Duties:
                        <ul>
                            <li>Evaluates/disapproves/endorses along with the rest of the collegiate body investment proposals of investment department heads covering stocks, properties, government securities, institutional loans, housing loans and member salary/calamity/educational loans following criteria on safety, yield, liquidity and social utility/responsibility.</li>
                            <li>Analyses short-term and long-term liquidity reports as well as investment income and exposure targets by asset class.</li>
                            <li>Listens to economic reports and stock market briefings to aid in investment planning and strategy formulation.</li>
                        </ul>
                    </div>
                </div>
                <div class="subheader-content">
                    <i class="material-icons">location_on</i>
                    <div>Social Security System, Diliman, Quezon City, Philippines
                    </div>
                </div>
                <div class="subheader-content">
                    <i class="material-icons">calendar_month</i>
                    <div>February 2001 – January 2012</div>
                </div>
            </div>
        </div>
        <div class="description-section">
            <div class="description-header">Vice President / Capital Markets Division</div>
            <div class="description-subheader">
                <div class="subheader-content">
                    <i class="material-icons">task</i>
                    <div>Previous Projects:
                        <ul>
                            <li>Evaluation of proposals of external firms to provide investment advice to the SSS</li>
                            <li>Evaluation of proposal to invest in J. G. Summit preferred shares 
                                Major valuation of each company where SSS has common shares using fundamental research and technical analysis.
                                </li>
                            <li>Collection from the Department of Finance of overdue interest payments for cash dividends from Philippine National Bank.
                            </li>
                            <li>Collection of dividends from preferred shares in Empire East Land Holding, Inc.  
                            </li>
                            <li>Five-year equities investments and trading strategy and targets.</li>
                            <li>Development of manuals of policies, procedures and controls for broker management and equities portfolio management, etc.
                            </li>
                            <li>Study of matching of accrued pension benefit liabilities to short-term loan delinquencies for purposes of satisfying charter limits on short-term loans to members.
                            </li>
                            <li>Conversion of Philippine Central Depository preferred shares to shares of Philippine Depository and Trust Corporation.
                            </li>
                            <li>Directors and officers liability insurance for the Social Security Commission and senior SSS officers.
                            </li>
                            <li>Proposal for creation of the SSS’ Local Equities Trading Portfolio.</li>
                            <li>Conversion of Philippine Long Distance Telephone preferred shares to common shares.</li>
                            <li>Conversion of Empire East Land Holdings preferred shares to common shares and selling strategy.</li>
                        </ul>
                    </div>
                </div>
                <div class="subheader-content">
                    <i class="material-icons">work_history</i>
                    <div>Regular duties:
                        <ul>
                            <li>Directs and supervises technical assistance to the Social Security Commission, the SSS President, Chairman and CEO, Executive Vice President for Investments & Finance as well as the Investment Planning and Strategy Committee mainly in equities investment analysis and portfolio management, equities investment research and equities investment operations. 
                            </li>
                            <li>Upon the request of the SSS President, EVP for Investments supervises preparation of investment proposals particularly on the inclusion of particular stocks in the SSS portfolio and the accreditation of stockbrokers;
                            </li>
                            <li>Directs and supervises systems and programming specialists and portfolio monitoring, compliance and settlements analysts with regards information technology and communications applications development and maintenance in the area of strategy simulation, real-time stock trading, transactions settlements and compliance, daily cashflow and portfolio monitoring and accounting and also the development and continuous improvement of internal website/database links to upper management, manuals of policies, procedures and controls for the department, and application of operations research or management science techniques in the optimal use of resources, office layout, computer and communications networking, etc.
                            </li>
                            <li>Directs and supervises technical analysis (using Dow theory, Japanese candlesticks, Elliot wave analysis, mathematically-modeled stock market indicators), fundamental research, product development and financial market analysis specialists with regards the conduct of research studies covering local equities or listed companies, attendance at stockholder meetings.
                            </li>
                            <li>Directs and supervises broker management analysts with regards broker accreditation, transactions allocation and performance evaluation and briefs all newly accredited stockbrokers on the social security program, SSS investments and the organizational setup, operations of the SSS investment group and the Securities Trading and Management Dept including requirements on code of conduct and operations.
                            </li>
                            <li>Develops objectives, strategies, policies, plans and budget for the Securities Trading and Management Department as well as direct and supervises department activities including recruitment and performance monitoring.
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="subheader-content">
                    <i class="material-icons">assignment</i>
                    <div>Special assignments:
                        <ul>
                            <li>Prepares position papers with regards proposed legislation affecting SSS investments and represents the SSS in congressional public hearings or congressional inquiries about SSS investments.
                            </li>
                            <li>Directs and supervises analysis of investment opportunities/instruments in other asset classes such as derivatives, convertible bonds, properties and research/operational assistance to other departments in the investment and finance group such as the Institutional Loans Department, the Asset Management Department, Controllership, Investment Accounting Department, as well as departments outside the group such as Internal Audit Department, Economic Research Department and Corporate Planning Department.
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="subheader-content">
                    <i class="material-icons">location_on</i>
                    <div>Social Security System, Diliman, Quezon City, Philippines
                    </div>
                </div>
                <div class="subheader-content">
                    <i class="material-icons">calendar_month</i>
                    <div>Department Head: September 14, 1998 - July 11, 1999</div>
                </div>
                <div class="subheader-content">
                    <i class="material-icons">calendar_month</i>
                    <div>AVP: July 12,1999 – 2010</div>
                </div>
                <div class="subheader-content">
                    <i class="material-icons">calendar_month</i>
                    <div>Vice President: March 9, 2010 – March 17, 2015
                    </div>
                </div>
            </div>
        </div>
        <div class="description-section">
            <div class="description-header">Member, Board Credit Committee</div>
            <div class="description-subheader">
                <div class="subheader-content">
                    <i class="material-icons">work_history</i>
                    <div>Regular Duties:
                        <ul>
                            <li>Directs and supervises credit analysis of loan applications of over 100 million pesos, covering character of borrower, collateral, capacity to pay and other considerations.</li>
                            <li>Attends weekly meeting to decide on granting of loans to applicants, change of terms of loans, opening of credit facilities, and other matters pertaining to loans granted by the bank locally and at its branches in other countries.
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="subheader-content">
                    <i class="material-icons">location_on</i>
                    <div>Equitable PCI Bank, Incorporated, Makati City
                    </div>
                </div>
                <div class="subheader-content">
                    <i class="material-icons">calendar_month</i>
                    <div>April 17, 2001 – April 15, 2002
                    </div>
                </div>
            </div>
        </div>
        <div class="description-section">
            <div class="description-header">Project Supervisor</div>
            <div class="description-subheader">
                <div class="subheader-content">
                    <i class="material-icons">assignment</i>
                    <div>Special assignment / achievements:
                        <ul>
                            <li>From November 1995 to June 1998, was Officer-In-Charge of Stocks Trading for SSS. During this period, the SSS derived / realized an average of over 20% ROI per year from its stocks investment portfolio.
                            </li>
                            <li>Developed daily stocks selling strategy using linear programming to attain annual investment income target from stocks.
                            </li>
                            <li>Developed broker rating system for quality of execution of transactions in the stock market.
                            </li>
                            <li>Developed portfolio monitoring reports useful in daily trading in the stock market.
                            </li>
                            <li>Supervised two assistants who performed functions relevant to stocks trading.
                            </li>
                            <li>Design and set-up of the Securities Trading and Management Department.</li>
                        </ul>
                    </div>
                </div>
                <div class="subheader-content">
                    <i class="material-icons">location_on</i>
                    <div>Institutional Loans Department, Social Security System
                    </div>
                </div>
                <div class="subheader-content">
                    <i class="material-icons">calendar_month</i>
                    <div>January 1, 1998 – September 13, 1998
                    </div>
                </div>
            </div>
        </div>
    </div>
`,
'itWork' : `
    <div class="box-section"><i class='material-icons'>computer</i><div class="section-title">Information Technology Work Experience</div></div>
    <div class="box-description">
        <div class="description-section">
            <div class="description-header">Concurrent Overseer, Information System Security Department and Information Technology Management Group</div>
            <div class="description-subheader">
                <div class="subheader-content">
                    develops and maintains webpages and electronic mail groups; develops spreadsheet applications to check / grade multiple choice examination papers
                </div>
                <div class="subheader-content">
                    <i class="material-icons">
                        link
                    </i>
                    <a href="http://rcapulong.cjb.net">http://rcapulong.cjb.net</a>
                </div>
                <div class="subheader-content">
                    <i class="material-icons">location_on</i>
                    <div>Social Security System, Diliman, Quezon City, Philippines
                    </div>
                </div>
                <div class="subheader-content">
                    <i class="material-icons">calendar_month</i>
                    <div>2023 – April 18, 2024</div>
                </div>
            </div>
        </div>
    </div>
    <div class="box-description">
        <div class="description-section">
            <div class="description-header">Webmaster & Electronic Mail Group Moderator</div>
            <div class="description-subheader">
                <div class="subheader-content">
                    <i class="material-icons">location_on</i>
                    <div>De La Salle University, University of Santo Tomas, Ateneo De Manila University, and University of the Philippines mathematics and psychology classes, and the Fund Managers Association of the Philippines
                    </div>
                </div>
                <div class="subheader-content">
                    <i class="material-icons">calendar_month</i>
                    <div>2000-present</div>
                </div>
            </div>
        </div>
    </div>
    <div class="box-description">
        <div class="description-section">
            <div class="description-header">I.T./Computer Graphics Presentation Consultant</div>
            <div class="description-subheader">
                <div class="subheader-content">
                    develops PowerPoint presentations for doctors for morbidity and mortality conferences, census and audit conferences, preoperative, intraoperative and postoperative conferences, case presentations,  inter-hospital competitions, journal reports, lectures/continuous education and general conferences covering areas such as volatile anesthetics, pain management, kidney transplant, mastoidectomy, laryngoscopy, osteoarthritis, stereotactic craniotomy, bariatric surgery, pediatric anesthesia, systemic lupus erythematosus, airway anatomy, cholecystectomy, glossectomy, nephrectomy, gastrointestinal toxicity, epidural anesthesia, lower back pain, cancer pain, intravenous anesthetics, pheochromocytoma, patient-controlled analgesia, pharmacological treatment of spinal cord injury pain, etc.; provides helpful hints in the operation of various office software and computer/communications hardware.
                </div>
                <div class="subheader-content">
                    <i class="material-icons">location_on</i>
                    <div>Anesthesiology Department, St. Luke’s Medical Center, Quezon City, Philippines
                    </div>
                </div>
                <div class="subheader-content">
                    <i class="material-icons">calendar_month</i>
                    <div>January 2001-2003</div>
                </div>
            </div>
        </div>
    </div>
    <div class="box-description">
        <div class="description-section">
            <div class="description-header">Assistant Department Manager</div>
            <div class="description-subheader">
                <div class="subheader-content">
                    <div>
                        Regular Duties:
                        <ul>
                            <li>Assists the department head in attainment of long-term objectives of the department such as 
                                <ol>
                                    <li> to provide management and other departments accurate and timely information, </li>
                                    <li> to manage the development and implementation of information systems projects, </li>
                                    <li> to provide in-depth analysis on operations performance of all SSS branches nationwide, </li>
                                    <li> to monitor the performance of automated process designed for SSS operations and to provide technical and advisory services to committees /groups conducting special studies.</li>
                                </0l>
                            <li>Supervises preparation of and certifies correctness of computations in reports on the processing time for benefit claims and loan applications at branches nationwide as well as other regular reports for management.</li>
                        </ul>
                    </div>
                </div>
                <div class="subheader-content">
                    <div>
                        Special Assignments:
                        <ul>
                            <li>Assists the department head in monitoring of special projects such as the new I.D. System which applies biometric technology and the Executive Information System (EIS).
                            </li>
                            
                        </ul>
                    </div>
                </div>
                <div class="subheader-content">
                    <i class="material-icons">location_on</i>
                    <div>Management Information System (MIS) Department, Social Security System, Diliman, Quezon City, Philippines
                    </div>
                </div>
                <div class="subheader-content">
                    <i class="material-icons">calendar_month</i>
                    <div>August 14, 1996 – December 31,1997</div>
                </div>
            </div>
        </div>
    </div>
    <div class="box-description">
        <div class="description-section">
            <div class="description-header">Actuarial Trainee</div>
            <div class="description-subheader">
                <div class="subheader-content">
                    developed computer programs to compute for or construct TAS (Tillinghast Actuarial Software)  external tables of commutation functions, death benefit amounts, net and gross premiums, surrender charges, reserves, commission rates and cash surrender values for approximately 500 different types of British life insurance plans, Japanese Progressive Multiple Income Benefit Plans and Japanese Full-in-Hospital Plans using the Zillmer reserving method; AIG, which operates in 130 countries, was then the largest U.S.-based insurance company.
                </div>
                <div class="subheader-content">
                    <i class="material-icons">location_on</i>
                    <div>Corporate Valuation Department (International Actuarial), Life Division, American International Group, Inc.(AIG), Wilmington, Delaware, USA
                    </div>
                </div>
                <div class="subheader-content">
                    <i class="material-icons">calendar_month</i>
                    <div>June 1, 1993 - August 31, 1993</div>
                </div>
            </div>
        </div>
    </div>
`,
'adminRoles' : `
    <div class="box-section"><i class='material-icons'>group</i><div class="section-title">Administrative / Other Committee Work Experience</div></div>
    <div class="box-description">
        <div class="description-section">
            <div class="description-header">Chairperson, Joint Venture Selection Committee</div>
            <div class="description-subheader">
                <div class="subheader-content">
                    <i class="material-icons">location_on</i>
                    <div>Social Security System, Diliman, Quezon City, Philippines
                    </div>
                </div>
                <div class="subheader-content">
                    <i class="material-icons">calendar_month</i>
                    <div>March 23, 2022 – April 18, 2024
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="box-description">
        <div class="description-section">
            <div class="description-header">Chairperson, Acquired Assets Disposal Committee</div>
            <div class="description-subheader">
                <div class="subheader-content">
                    <i class="material-icons">location_on</i>
                    <div>Social Security System, Diliman, Quezon City, Philippines
                    </div>
                </div>
                <div class="subheader-content">
                    <i class="material-icons">calendar_month</i>
                    <div>September 8, 2021 – April 18, 2024
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="box-description">
        <div class="description-section">
            <div class="description-header">Chairperson, Bids and Awards Committee I</div>
            <div class="description-subheader">
                <div class="subheader-content">
                    <i class="material-icons">location_on</i>
                    <div>Social Security System, Diliman, Quezon City, Philippines
                    </div>
                </div>
                <div class="subheader-content">
                    <i class="material-icons">calendar_month</i>
                    <div>January 7, 2021 – January 25, 2023
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="box-description">
        <div class="description-section">
            <div class="description-header">Chairperson, Bids and Awards Committee III</div>
            <div class="description-subheader">
                <div class="subheader-content">
                    <i class="material-icons">location_on</i>
                    <div>Social Security System, Diliman, Quezon City, Philippines
                    </div>
                </div>
                <div class="subheader-content">
                    <i class="material-icons">calendar_month</i>
                    <div>June 20, 2016 – June 19, 2017
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="box-description">
        <div class="description-section">
            <div class="description-header">Chairperson, Formalizing the Security of Provident Fund System</div>
            <div class="description-subheader">
                <div class="subheader-content">
                    <i class="material-icons">location_on</i>
                    <div>Social Security System, Diliman, Quezon City, Philippines
                    </div>
                </div>
                <div class="subheader-content">
                    <i class="material-icons">calendar_month</i>
                    <div>June 27, 2008
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="box-description">
        <div class="description-section">
            <div class="description-header">Member, SSS Provident Fund Forms Committee</div>
            <div class="description-subheader">
                <div class="subheader-content">
                    <i class="material-icons">location_on</i>
                    <div>Social Security System, Diliman, Quezon City, Philippines
                    </div>
                </div>
                <div class="subheader-content">
                    <i class="material-icons">calendar_month</i>
                    <div>May 22, 2008 
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="box-description">
        <div class="description-section">
            <div class="description-header">Chairman, SSS Provident Fund Compensation Committee</div>
            <div class="description-subheader">
                <div class="subheader-content">
                    <i class="material-icons">location_on</i>
                    <div>Social Security System, Diliman, Quezon City, Philippines
                    </div>
                </div>
                <div class="subheader-content">
                    <i class="material-icons">calendar_month</i>
                    <div>May 22 – June 27, 2008 
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="box-description">
        <div class="description-section">
            <div class="description-header">Resource Person, Committee to Prepare the Implementing Rules and Regulations (IRR) of R.A. 1161 as Amended</div>
            <div class="description-subheader">
                <div class="subheader-content">
                    reviews and contributes inputs to those applicable to specific provisions in the law that are within Actuarial area of operation.
                </div>
                <div class="subheader-content">
                    <i class="material-icons">location_on</i>
                    <div>Social Security System, Diliman, Quezon City, Philippines
                    </div>
                </div>
                <div class="subheader-content">
                    <i class="material-icons">calendar_month</i>
                    <div>January 11 – May 16, 2008 
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="box-description">
        <div class="description-section">
            <div class="description-header">Member, Ad Hoc Committee on SS Law (RA 1161) Amendments</div>
            <div class="description-subheader">
                <div class="subheader-content">
                    facilitates the drafting and approval of the proposed amendments to the SS Law
                </div>
                <div class="subheader-content">
                    <i class="material-icons">location_on</i>
                    <div>Social Security System, Diliman, Quezon City, Philippines
                    </div>
                </div>
                <div class="subheader-content">
                    <i class="material-icons">calendar_month</i>
                    <div>September 25, 2007 – present 
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="box-description">
        <div class="description-section">
            <div class="description-header">Member, 2011 Annual Report Committee</div>
            <div class="description-subheader">
                <div class="subheader-content">
                    determines the theme and contents of the 2007 Annual Report for approval by the SSS President, provides technical and conceptual clarification on the project and coordinates and ensures the timely release of the 2007 Annual Report.
                </div>
                <div class="subheader-content">
                    <i class="material-icons">location_on</i>
                    <div>Social Security System, Diliman, Quezon City, Philippines
                    </div>
                </div>
                <div class="subheader-content">
                    <i class="material-icons">calendar_month</i>
                    <div>April 30, 2007 – present
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="box-description">
        <div class="description-section">
            <div class="description-header">Board Member, Study Committee to Review the Proposed Amendments in SSS Provident Fund Rules</div>
            <div class="description-subheader">
            
                <div class="subheader-content">
                    <i class="material-icons">location_on</i>
                    <div>Social Security System, Diliman, Quezon City, Philippines
                    </div>
                </div>
                <div class="subheader-content">
                    <i class="material-icons">calendar_month</i>
                    <div>September 25, 2007 - May 8, 2008
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="box-description">
        <div class="description-section">
            <div class="description-header">Member, Technical Working Group Committee on 50th Anniversary Coffee Table Book</div>
            <div class="description-subheader">
                <div class="subheader-content">
                    determines the contents and specifications of the coffee table book; oversees the preparation of the coffee table book, consistent with the overall direction provided by the Steering Committee; and coordinates all efforts both by SSS units and external unit(s), to ensure the timely completion and release of the coffee table book
                </div>
                <div class="subheader-content">
                    <i class="material-icons">location_on</i>
                    <div>Social Security System, Diliman, Quezon City, Philippines
                    </div>
                </div>
                <div class="subheader-content">
                    <i class="material-icons">calendar_month</i>
                    <div>January 11, 2007 – present
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="box-description">
        <div class="description-section">
            <div class="description-header">Member, Inter-agency Sub-committee on Income Security, Maintenance & employment</div>
            <div class="description-subheader">
                <div class="subheader-content">
                    <i class="material-icons">location_on</i>
                    <div>Philippine Plan of Action for Older Persons (PPAOP)
                    </div>
                </div>
                <div class="subheader-content">
                    <i class="material-icons">calendar_month</i>
                    <div>2002 - present
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="box-description">
        <div class="description-section">
            <div class="description-header">Member, Social Insurance Committee</div>
            <div class="description-subheader">
                <div class="subheader-content">
                    <i class="material-icons">location_on</i>
                    <div>Actuarial Society of the Philippines
                    </div>
                </div>
                <div class="subheader-content">
                    <i class="material-icons">calendar_month</i>
                    <div>January 2004 – April 18, 2024
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="box-description">
        <div class="description-section">
            <div class="description-header">Member, Bidding and Acquisition Committee 1</div>
            <div class="description-subheader">
                <div class="subheader-content">
                    approves purchase of supplies and materials, equipments, biddings etc. worth P250,000 and above
                </div>
                <div class="subheader-content">
                    <i class="material-icons">location_on</i>
                    <div>Social Security System, Diliman, Quezon City, Philippines
                    </div>
                </div>
                <div class="subheader-content">
                    <i class="material-icons">calendar_month</i>
                    <div>April 2004 - March 2005
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="box-description">
        <div class="description-section">
            <div class="description-header">Member, Bidding and Acquisition Committee 2</div>
            <div class="description-subheader">
                <div class="subheader-content">
                    approves proposals to purchase computer supplies, furniture, office supplies and other operating requirements with total value not exceeding P250,000 not including bulk purchases and opens and certifies sealed bids
                </div>
                <div class="subheader-content">
                    <i class="material-icons">location_on</i>
                    <div>Social Security System, Diliman, Quezon City, Philippines
                    </div>
                </div>
                <div class="subheader-content">
                    <i class="material-icons">calendar_month</i>
                    <div>November 2003 – March 2004
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="box-description">
        <div class="description-section">
            <div class="description-header">Member, Study Group on the Cost Effectiveness of Hiring Manpower Services Through Service Corporations</div>
            <div class="description-subheader">
                <div class="subheader-content">
                    studied the effect of Civil Service Commission Memorandum Circular No. 17 which provides for the Policy Guidelines for Contractual Services on SSS operations and personnel management
                </div>
                <div class="subheader-content">
                    <i class="material-icons">location_on</i>
                    <div>Social Security System, Diliman, Quezon City, Philippines
                    </div>
                </div>
                <div class="subheader-content">
                    <i class="material-icons">calendar_month</i>
                    <div>September 20, 2002 to, November 20, 2002
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="box-description">
        <div class="description-section">
            <div class="description-header">Member, National Coordinating Committee on the Concerns of Filipino Older Persons (NACOCOFILOP)</div>
            <div class="description-subheader">
                <div class="subheader-content">
                    presented the social security programs under the Social Security System; participated in discussions about other programs affecting the elderly in the Philippines such as those of the Government Service Insurance System, the Philippine Veterans Affairs Office, Coalition of Services for the Elderly, Inc, Foundation for the Elderly, the Department of Health, the Department of Social Welfare and Development, Population Commission, etc., and also several pending legislation affecting the elderly in the Philippines such as those with provisions on grant of P1000 monthly pension to all senior citizens, employment, tax incentives, shelter, training, education, health, social services, telecommunications, political and civil rights, discrimination on public transportation, the use of public accommodation, availment of financial assistance for livelihood activities; as a group submitted recommendations on policies on ageing and lobbied for passage of the Magna Carta for Older Persons in Congress; contributed to the development of the Philippine Plan of Action for  Older Persons for 1999-2004
                </div>
                <div class="subheader-content">
                    <i class="material-icons">location_on</i>
                    <div>National Defense College, Armed Forces of the Philippines  
                    </div>
                </div>
                <div class="subheader-content">
                    <i class="material-icons">calendar_month</i>
                    <div>January 2000 – December 2001
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="box-description">
        <div class="description-section">
            <div class="description-header">Member, Local Water District Oversight Committee</div>
            <div class="description-subheader">
                <div class="subheader-content">
                    supervises the computation of amount of funds for transfer on a per individual basis to the Government Service Insurance System for the account of local water district employees who were previously classified under the private sector but later moved to the government service; coordinates with the information technology group regarding the development of computer applications for the accounts of local water district employees; attends meetings that seeks to find ways to incorporate into the regular functions of existing departments the functions performed by the non-operations departments represented in the oversight committee
                </div>
                <div class="subheader-content">
                    <i class="material-icons">location_on</i>
                    <div>Social Security System, Diliman, Quezon City, Philippines
                    </div>
                </div>
                <div class="subheader-content">
                    <i class="material-icons">calendar_month</i>
                    <div>July 12, 1999-Present
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="box-description">
        <div class="description-section">
            <div class="description-header">Member, Management Coordinating Committee</div>
            <div class="description-subheader">
                <div class="subheader-content">
                    participated in Monday morning meetings, with then SSS President & CEO and top officers reporting directly to him, anticipating, discussing and planning for major problems of the SSS for each week such as SSS labor union unrest and protest actions, rallies of various groups of SSS members at the main office, fraudulent SSS checks syndicates, negative publicity in the media, etc.
                </div>
                <div class="subheader-content">
                    <i class="material-icons">location_on</i>
                    <div>Social Security System, Diliman, Quezon City, Philippines
                    </div>
                </div>
                <div class="subheader-content">
                    <i class="material-icons">calendar_month</i>
                    <div>March 2001-July 2001
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="box-description">
        <div class="description-section">
            <div class="description-header">Corporate Executive Officer II, Office of the Chief Actuary and OIC for Investments and Finance and Deputy Administrator for Information Systems and Management Services Groups</div>
            <div class="description-subheader">
                <div class="subheader-content">
                    <i class="material-icons">work_history</i>
                    <div>Regular Duties:
                        <ul>
                            <li>Writes or supervises the writing of evaluations, proposals, press releases, concept and position papers and designs or supervises the production of computer graphics presentations on topics such as World Bank studies on capital market development and the reform of social security institutions, imaging technology applications, SSS loan & investment programs and philosophy, SSS funding scheme, SSS investments in stocks, real estate or housing and long term commercial papers, SSS operations, membership qualifications and classification, Omnibus Credit Line (OCL) to participating financial institutions (PFIs), asset securitization and legislative proposals concerning benefit enhancements and new programs
                            </li>
                            <li>Supervised special projects or assignments of the Actuarial Department in the areas of investments and finance, information systems and management services including studies on the performance of adjudicators applying imaging technology to pensions processing and the use of tape or floppy diskettes for employer remittance records for member contributions and employee loan repayments
                            </li>
                            <li>Provides technical assistance to the Chief Actuary, Officer-in-Charge for Investments and Finance and Deputy Administrator for Information Systems and Management Services Groups mainly in the area of investment analysis and portfolio management, including daily stock investment monitoring, analysis and recommendation, stock investment portfolio expansion, brokers' performance evaluation;
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="subheader-content">
                    <i class="material-icons">assignment</i>
                    <div>Special Assignments:
                        <ul>
                            <li>Establishment of SSS Operations Research unit, includes recruitment, planning of activities, organization and job descriptions
                            </li>
                            <li>Provides technical assistance to the SSS Administrator regarding communications, computer operation and applications
                            </li>
                            <li>Transacted multi-million peso trading of listed stocks, and investments in an initial public offering (La Tondeña) and a convertible long term commercial paper (Ayala Land, Inc.)
                            </li>
                            <li>Planning and study on the establishment of a Mutual Fund for SSS members (discontinued)</li>
                            <li>Derived conversion formulas for data from one region system to another as technical assistance to a United Nations Development Project - International Labour Office (UNDP-ILO) social security expert regarding a LTNDP-ILO study on Philippine social security
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="subheader-content">
                    <i class="material-icons">location_on</i>
                    <div>Social Security System, Diliman, Quezon City, Philippines
                    </div>
                </div>
                <div class="subheader-content">
                    <i class="material-icons">calendar_month</i>
                    <div>September 1994 – August 13, 1996
                    </div>
                </div>
            </div>
        </div>
    </div>
`,
'international' : `
    <div class="box-section"><i class='material-icons'>language</i><div class="section-title">International Experience</div></div>
    <div class="box-description">
        <div class="description-section">
            <div class="description-header">Actuarial and Investment Expert</div>
            <div class="description-subheader">
                <div class="subheader-content">
                    <i>in response to Section 82 of the Social Security Act 1969 and capacity building of Social Security Organization (SOCSO) on actuarial work and investment governance</i>
                </div>
                <div class="subheader-content">
                    <i class="material-icons">location_on</i>
                    <div>International Labour Organization for the 11th actuarial valuation of the Social Security Fund of Malaysia</div>
                </div>
                <div class="subheader-content">
                    <i class="material-icons">calendar_month</i>
                    <div>June 2021 – November 2022</div>
                </div>
            </div>
        </div>

        <div class="description-section">
            <div class="description-header">Speaker, International Labour Organization Country Office for Thailand, Cambodia and Lao People’s Democratic Republic on Investment Governance and Management</div>
            <div class="description-subheader">
                <div class="subheader-content">
                    <i>presented at one day workshop on governance principles</i>
                </div>
                <div class="subheader-content">
                    <i class="material-icons">location_on</i>
                    <div>Social Security Office of Thailand
                    </div>
                </div>
                <div class="subheader-content">
                    <i class="material-icons">calendar_month</i>
                    <div>November 9, 2020</div>
                </div>
            </div>
        </div>

        <div class="description-section">
            <div class="description-header">Workshop Expert, ISSA Academy Workshop on Actuarial Work for Social Security</div>
            <div class="description-subheader">
                <div class="subheader-content">
                    <i>co-conducted the workshop for the Asia Pacific Region plus some African countries on the adoption of the ISSA Guidelines on Actuarial Work in Social Security Programs</i>
                </div>
                <div class="subheader-content">
                    <i class="material-icons">location_on</i>
                    <div>New Delhi, India
                    </div>
                </div>
                <div class="subheader-content">
                    <i class="material-icons">calendar_month</i>
                    <div>March 26, 2019 – March 28, 2019</div>
                </div>
            </div>
        </div>

        <div class="description-section">
            <div class="description-header">Speaker, 2017 APIC-JAPAN Pension Funds and Social Security Systems Summit</div>
            <div class="description-subheader">
                <div class="subheader-content">
                    <i>one of the speakers in the topic “The Philippine Pension and Social Security Trends”</i>
                </div>
                <div class="subheader-content">
                    <i class="material-icons">location_on</i>
                    <div>Shangri-la Hotel, Tokyo</div>
                </div>
                <div class="subheader-content">
                    <i class="material-icons">calendar_month</i>
                    <div>March 7, 2017</div>
                </div>
            </div>
        </div>

        <div class="description-section">
            <div class="description-header">Workshop Expert, ISSA Academy Workshop on Investment of Social Security Funds</div>
            <div class="description-subheader">
                <div class="subheader-content">
                    <i>facilitated the workshop and provided expert views on key investment issues facing social security institutions of ISSA member organizations on asset allocation choices, setting of benchmarks, stock selection and socially responsible investment and the adoption of the ISSA Guidelines on Investment of Social Security Funds</i>
                </div>
                <div class="subheader-content">
                    <i class="material-icons">location_on</i>
                    <div>Kuala Lumpur, Malaysia
                    </div>
                </div>
                <div class="subheader-content">
                    <i class="material-icons">calendar_month</i>
                    <div>December 8, 2015 – December 10, 2015</div>
                </div>
            </div>
        </div>

        <div class="description-section">
            <div class="description-header">Panelist, Private Equity Latin America Forum</div>
            <div class="description-subheader">
                <div class="subheader-content">
                    <i>one of the panelists in the topic: “Comparing emerging markets and uncovering the perspectives on Latin America from Asian and Middle Eastern investors.”</i>
                </div>
                <div class="subheader-content">
                    <i class="material-icons">location_on</i>
                    <div>New York City, United States of America
                    </div>
                </div>
                <div class="subheader-content">
                    <i class="material-icons">calendar_month</i>
                    <div>June 8, 2015 – June 9, 2015</div>
                </div>
            </div>
        </div>

        <div class="description-section">
            <div class="description-header">Actuarial Consultant</div>
            <div class="description-subheader">
                <div class="subheader-content">
                    <i class="material-icons">location_on</i>
                    <div>International Labour Organization, Fiji National Provident Fund
                    </div>
                </div>
                <div class="subheader-content">
                    <i class="material-icons">calendar_month</i>
                    <div>June 15, 2008 – February 2009</div>
                </div>
            </div>
        </div>

        <div class="description-section">
            <div class="description-header">Speaker and Panelist, Asian Investors Asian Investment Summit</div>
            <div class="description-subheader">
                <div class="subheader-content">
                    <i>one of the speakers in the topic “Is risk management changing?”</i>
                </div>
                <div class="subheader-content">
                    <i class="material-icons">location_on</i>
                    <div>Conrad Hotel, Hong Kong
                    </div>
                </div>
                <div class="subheader-content">
                    <i class="material-icons">calendar_month</i>
                    <div>May 17, 2007 – May 18, 2007</div>
                </div>
            </div>
        </div>

        <div class="description-section">
            <div class="description-header">Social Security/Actuarial Consultant, Asian Development Bank’s Training on Social Security for the Society of Actuaries in Indonesia</div>
            <div class="description-subheader">
                <div class="subheader-content">
                    <i>delivered a 3-day lecture course for the training conduction on social security</i>
                </div>
                <div class="subheader-content">
                    <i class="material-icons">location_on</i>
                    <div>Jakarta, Indonesia
                    </div>
                </div>
                <div class="subheader-content">
                    <i class="material-icons">calendar_month</i>
                    <div>April 16, 2007 – April 29, 2007</div>
                </div>
            </div>
        </div>

        <div class="description-section">
            <div class="description-header">Supervising and Main Lecturer, Technical Training in Statistics and Actuarial Practice for Social Security for Research and Development Staff of the Social Security Office of Thailand</div>
            <div class="description-subheader">
                <div class="subheader-content">
                    <i>advised and lectured on actuarial practice in social security for actuaries and statisticians of the Social Security Office of Thailand</i>
                </div>
                <div class="subheader-content">
                    <i class="material-icons">location_on</i>
                    <div>Social Security System, Quezon City, Philippines
                    </div>
                </div>
                <div class="subheader-content">
                    <i class="material-icons">calendar_month</i>
                    <div>November 20, 2006 – November 28, 2006</div>
                </div>
            </div>
        </div>

        <div class="description-section">
            <div class="description-header">Speaker, Asian Investors Asian Investment Summit</div>
            <div class="description-subheader">
                <div class="subheader-content">
                    <i>delivered a presentation on Risk Management</i>
                </div>
                <div class="subheader-content">
                    <i class="material-icons">location_on</i>
                    <div>Conrad Hotel, Hong Kong
                    </div>
                </div>
                <div class="subheader-content">
                    <i class="material-icons">calendar_month</i>
                    <div>May 2006</div>
                </div>
            </div>
        </div>

        <div class="description-section">
            <div class="description-header">Social Security/Actuarial Consultant, Social Security For Private Sector Workshop for the Chief Labor Officers of the Kingdom of Bhutan</div>
            <div class="description-subheader">
                <div class="subheader-content">
                    <i>conducted training and advised chief labor offices of Bhutan on setting up a social security scheme for the private sector, concepts of social security and actuarial practice in social security</i>
                </div>
                <div class="subheader-content">
                    <i class="material-icons">location_on</i>
                    <div>University of the Philippines, Quezon City, Philippines
                    </div>
                </div>
                <div class="subheader-content">
                    <i class="material-icons">calendar_month</i>
                    <div>June 15, 2005 – June 30, 2005</div>
                </div>
            </div>
        </div>

        <div class="description-section">
            <div class="description-header">Speaker, Bappenas Workshop "Towards a Viable Social Security System"</div>
            <div class="description-subheader">
                <div class="subheader-content">
                    <i>delivered a speech entitled "Restoring the Actuarial Viability of the Philippine SSS" at a USAID-funded social security workshop and talked to Indonesian lawmakers, labor unions and employer groups about reforming the Indonesian social security system</i>
                </div>
                <div class="subheader-content">
                    <i class="material-icons">location_on</i>
                    <div>Jakarta, Indonesia
                    </div>
                </div>
                <div class="subheader-content">
                    <i class="material-icons">calendar_month</i>
                    <div>June 24 2004 – June 26, 2004</div>
                </div>
            </div>
        </div>

        <div class="description-section">
            <div class="description-header">Lecturer, ISSA Regional Training Course for Asia & the Pacific</div>
            <div class="description-subheader">
                <div class="subheader-content">
                    <i>delivered two training modules 1) Collection and Registration and 2) Collection and Use of Statistics in Social Security Program</i>
                </div>
                <div class="subheader-content">
                    <i class="material-icons">location_on</i>
                    <div>Bali, Indonesia
                    </div>
                </div>
                <div class="subheader-content">
                    <i class="material-icons">calendar_month</i>
                    <div>October 13 2003 – October 22, 2003</div>
                </div>
            </div>
        </div>

        <div class="description-section">
            <div class="description-header">Actuarial Consultant, Training on Economic and Actuarial Concepts</div>
            <div class="description-subheader">
                <div class="subheader-content">
                    <i>delivered in English with simultaneous translation to Chinese five hours of lecture presentations to staff of Chinese Ministry of Finance and Ministry of Labor and Social Security assigned to the Liaoning Pension Scheme. The three presentation topics were: 1) Managing Pension Funds for a High Return and Actuarial Soundness, 2) Building models to forecast revenues, expenditures and fiscal sustainability in DB schemes, and 3) Applying Actuarial Models; and participated in a concluding panel discussion on success factors for the China social security reform program. The five-day course was conducted by the Liaoning Social Security Pension Reform Project Management Office and sponsored by the World Bank</i>
                </div>
                <div class="subheader-content">
                    <i class="material-icons">location_on</i>
                    <div>Shenyan, Liaoning, China
                    </div>
                </div>
                <div class="subheader-content">
                    <i class="material-icons">calendar_month</i>
                    <div>September 2002 – October 2002</div>
                </div>
            </div>
        </div>

        <div class="description-section">
            <div class="description-header">Resource Speaker / Actuarial Consultant, World Bank’s Modeling Pension Reform in China</div>
            <div class="description-subheader">
                <div class="subheader-content">
                    <i>delivered in English with simultaneous translation to Chinese five hours of lecture presentations to general managers of pension schemes from all the provinces of China and to selected representatives from the Chinese Ministry of Finance and Ministry of Social Security with open forum. The three presentation topics were: 1) actuarial modeling in general or the financial projection of expenditures and disbursements of a social security scheme, 2) the Philippine Social Security System’s experience in actuarial modeling, and 3) a comparison of PROST (World Bank’s Pension Reform Options Simulation Toolkit) and the detailed Philippine SSS valuation. The three-day course was conducted by the World Bank Institute and sponsored by the Chinese Ministry of Finance and Ministry of Social Security</i>
                </div>
                <div class="subheader-content">
                    <i class="material-icons">location_on</i>
                    <div>Shenyan, Beijing, China
                    </div>
                </div>
                <div class="subheader-content">
                    <i class="material-icons">calendar_month</i>
                    <div>June 4, 2001 – June 6, 2001</div>
                </div>
            </div>
        </div>

        <div class="description-section">
            <div class="description-header">Plenary Session Reporter, 13th International Conference of Social Security Actuaries and Statisticians</div>
            <div class="description-subheader">
                <div class="subheader-content">
                    <i>delivered a 15-minute report to the world’s social security actuaries and statisticians on the Philippine experience in “Actuarial Modeling as a Tool for Pension Insurance Projections.” The conference agenda also included pension reform and funding options, actuarial methods in unemployment insurance, standards of practice for social security actuaries, and continuing education of actuaries</i>
                </div>
                <div class="subheader-content">
                    <i class="material-icons">location_on</i>
                    <div>Hilton Hotel, Quebec City, Quebec, Canada
                    </div>
                </div>
                <div class="subheader-content">
                    <i class="material-icons">calendar_month</i>
                    <div>October 10, 2000 – October 12, 2000</div>
                </div>
            </div>
        </div>

        <div class="description-section">
            <div class="description-header">Short Communication, 3rd Asian Mathematical Conference</div>
            <div class="description-subheader">
                <div class="subheader-content">
                    <i>delivered a 25-minute presentation entitled, “Actuarial Modelling in the Projections of Social Security Schemes: The Philippine Social Security Experience.”</i>
                </div>
                <div class="subheader-content">
                    <i class="material-icons">location_on</i>
                    <div>Mathematical Society, University of the Philippines Mathematics Building, Diliman, Quezon City, Philippines
                    </div>
                </div>
                <div class="subheader-content">
                    <i class="material-icons">calendar_month</i>
                    <div>October 23, 2000 – October 27, 2000</div>
                </div>
            </div>
        </div>
    </div>

    <div class="box-section"><i class='material-icons'>public</i><div class="section-title">International Conferences</div></div>
    <div class="box-description">
        <div class="description-section">
            <div class="description-header">2023 Amundi World Investment Forum</div>
            <div class="description-subheader">
                <div class="subheader-content">
                    Amundi Asset Management
                </div>
                <div class="subheader-content">
                    <i class="material-icons">location_on</i>
                    <div>Paris, France
                    </div>
                </div>
                <div class="subheader-content">
                    <i class="material-icons">calendar_month</i>
                    <div>June 22-23, 2023</div>
                </div>
            </div>
        </div>

        <div class="description-section">
            <div class="description-header">19th International Conference of Social Security Actuaries and Statisticians</div>
            <div class="description-subheader">
                <div class="subheader-content">
                    The conference sessions focused on social security obligations including recent developments on quantifying financial commitments; analysis of labour market changes on social security including those related to the digital economy; analyzing ageing and how it varies across and within countries; and focus on investment issues including infrastructure investment and the impact of ageing on asset choices
                </div>
                <div class="subheader-content">
                    <i class="material-icons">location_on</i>
                    <div>International Social Security Association, Kuwait City, Kuwait 
                    </div>
                </div>
                <div class="subheader-content">
                    <i class="material-icons">calendar_month</i>
                    <div>November  6-8, 2018</div>
                </div>
            </div>
        </div>

        <div class="description-section">
            <div class="description-header">2017 APIC-Japan Pension Funds and Social Security Systems Summit</div>
            <div class="description-subheader">
                <div class="subheader-content">
                    Asia Pacific Investors Corporation
                </div>
                <div class="subheader-content">
                    <i class="material-icons">location_on</i>
                    <div>Tokyo, Japan
                    </div>
                </div>
                <div class="subheader-content">
                    <i class="material-icons">calendar_month</i>
                    <div>March 7, 2017</div>
                </div>
            </div>
        </div>

        <div class="description-section">
            <div class="description-header">Private Equity Latin America Forum</div>
            <div class="description-subheader">
                <div class="subheader-content">
                    Markets Group
                </div>
                <div class="subheader-content">
                    <i class="material-icons">location_on</i>
                    <div>New York City, United States of America
                    </div>
                </div>
                <div class="subheader-content">
                    <i class="material-icons">calendar_month</i>
                    <div>June 8-9, 2015</div>
                </div>
            </div>
        </div>

        <div class="description-section">
            <div class="description-header">The 12th Annual Global Absolute Return Congress Boston</div>
            <div class="description-subheader">
                <div class="subheader-content">
                    Global Absolute Return Congress
                </div>
                <div class="subheader-content">
                    <i class="material-icons">location_on</i>
                    <div>Boston, United States of America
                    </div>
                </div>
                <div class="subheader-content">
                    <i class="material-icons">calendar_month</i>
                    <div>October 20-22, 2014</div>
                </div>
            </div>
        </div>
        
        <div class="description-section">
            <div class="description-header">The 5th Annual Global Arc London</div>
            <div class="description-subheader">
                <div class="subheader-content">
                    Global Absolute Return Congress
                </div>
                <div class="subheader-content">
                    <i class="material-icons">calendar_month</i>
                    <div>May 19-21, 2014</div>
                </div>
            </div>
        </div>

        <div class="description-section">
            <div class="description-header">4th Annual Southeast Asian Institutional Investment Forum</div>
            <div class="description-subheader">
                <div class="subheader-content">
                    Asian Investor
                </div>
                <div class="subheader-content">
                    <i class="material-icons">calendar_month</i>
                    <div>December 5-6, 2012</div>
                </div>
            </div>
        </div>

        <div class="description-section">
            <div class="description-header">17th International Conference of Social Security Actuaries and Statisticians</div>
            <div class="description-subheader">
                <div class="subheader-content">
                    The conference agenda includes eliminating poverty in old-age, the impact of economic conditions on the financial sustainability of social security schemes, actuarial and financial reporting for social security schemes and its legal implications and financial sustainability of health care systems
                </div>
                <div class="subheader-content">
                    <i class="material-icons">location_on</i>
                    <div>International Social Security Association, Marina Congress Center, Berlin, Germany
                    </div>
                </div>
                <div class="subheader-content">
                    <i class="material-icons">calendar_month</i>
                    <div>May 29-June 2, 2012</div>
                </div>
            </div>
        </div>

        <div class="description-section">
            <div class="description-header">2nd Asia Institutional Investment Forum</div>
            <div class="description-subheader">
                <div class="subheader-content">
                    Asian Investor
                </div>
                <div class="subheader-content">
                    <i class="material-icons">calendar_month</i>
                    <div>March 13-14, 2012</div>
                </div>
            </div>
        </div>

        <div class="description-section">
            <div class="description-header">3rd Annual Southeast Asian Institutional Investment Forum</div>
            <div class="description-subheader">
                <div class="subheader-content">
                    Institutional Investor Forum
                </div>
                <div class="subheader-content">
                    <i class="material-icons">location_on</i>
                    <div>Seoul, Korea
                    </div>
                </div>
                <div class="subheader-content">
                    <i class="material-icons">calendar_month</i>
                    <div>December 6-7, 2011</div>
                </div>
            </div>
        </div>

        <div class="description-section">
            <div class="description-header">6th Annual Asian Investment Summit</div>
            <div class="description-subheader">
                <div class="subheader-content">
                    Asian Investor
                </div>
                <div class="subheader-content">
                    <i class="material-icons">calendar_month</i>
                    <div>May 18-19, 2011</div>
                </div>
            </div>
        </div>

        <div class="description-section">
            <div class="description-header">15th International Conference of Social Security Actuaries and Statisticians</div>
            <div class="description-subheader">
                <div class="subheader-content">
                    The conference agenda includes demographic and economic assumptions used in actuarial valuations of social security and pension schemes, projecting methods for pension and social security financing, mortality projections and methods of financing health
                </div>
                <div class="subheader-content">
                    <i class="material-icons">location_on</i>
                    <div>Marina Congress Center, Helsinki, Finland
                    </div>
                </div>
                <div class="subheader-content">
                    <i class="material-icons">calendar_month</i>
                    <div>May 23-25, 2007</div>
                </div>
            </div>
        </div>

        <div class="description-section">
            <div class="description-header">Pension Systems in Southeast Asia</div>
            <div class="description-subheader">
                <div class="subheader-content">
                    <i class="material-icons">location_on</i>
                    <div>Jakarta, Indonesia
                    </div>
                </div>
                <div class="subheader-content">
                    <i class="material-icons">calendar_month</i>
                    <div>February 28 to March 4, 2005</div>
                </div>
            </div>
        </div>

        <div class="description-section">
            <div class="description-header">Administration of a Provident Fund Board Social Security System</div>
            <div class="description-subheader">
                <div class="subheader-content">
                    <i class="material-icons">location_on</i>
                    <div>Singapore
                    </div>
                </div>
                <div class="subheader-content">
                    <i class="material-icons">calendar_month</i>
                    <div>September 6 - 17, 2004</div>
                </div>
            </div>
        </div>

        <div class="description-section">
            <div class="description-header">14th International Conference of Social Security Actuaries and Statisticians</div>
            <div class="description-subheader">
                <div class="subheader-content">
                    <i class="material-icons">location_on</i>
                    <div>Mexico City
                    </div>
                </div>
                <div class="subheader-content">
                    <i class="material-icons">calendar_month</i>
                    <div>September 23-25, 2003</div>
                </div>
            </div>
        </div>

        <div class="description-section">
            <div class="description-header">13th International Conference of Social Security Actuaries and Statisticians</div>
            <div class="description-subheader">
                <div class="subheader-content">
                    The conference agenda includes demographic and economic assumptions used in actuarial valuations of social security and pension schemes, projecting methods for pension and social security financing, mortality projections and methods of financing health
                </div>
                <div class="subheader-content">
                    <i class="material-icons">location_on</i>
                    <div>International Social Security Association, Hilton Hotel, Quebec City, Quebec, Canada
                    </div>
                </div>
                <div class="subheader-content">
                    <i class="material-icons">calendar_month</i>
                    <div>October 10-12, 2000</div>
                </div>
            </div>
        </div>

        <div class="description-section">
            <div class="description-header">Asia In-Depth – ING Barings Investment Summit 1999, ING Barings, Renaissance Hotel</div>
            <div class="description-subheader">
                <div class="subheader-content">
                    This seminar provided professional investment managers with an analysis of future opportunities in Asia by featuring 40 companies from Korea, Taiwan, Indonesia, Thailand, Philippines, Hong Kong, China, Singapore and Malaysia focusing on banking, utilities, telecommunications and electronics
                </div>
                <div class="subheader-content">
                    <i class="material-icons">location_on</i>
                    <div>Kuala Lumpur, Malaysia
                    </div>
                </div>
                <div class="subheader-content">
                    <i class="material-icons">calendar_month</i>
                    <div>October 13-15, 1999</div>
                </div>
            </div>
        </div>

        <div class="description-section">
            <div class="description-header">World Bank – Employees’ Provident Fund of Malaysia Pension Policy Seminar – Using Analytical Tools to Support Decision Making</div>
            <div class="description-subheader">
                <div class="subheader-content">
                    This seminar included issues and techniques in pension fund investment management and financing of social security as well as a study tour of the Malaysian Employees’ Provident Fund and the Kuala Lumpur Stocks Exchange
                </div>
                <div class="subheader-content">
                    <i class="material-icons">location_on</i>
                    <div>Concorde Hotel, Kuala Lumpur, Malaysia
                    </div>
                </div>
                <div class="subheader-content">
                    <i class="material-icons">calendar_month</i>
                    <div>March, 1998</div>
                </div>
            </div>
        </div>

        <div class="description-section">
            <div class="description-header">Dresdner Kleinwort Benson Investment Management International Summer Training Program</div>
            <div class="description-subheader">
                <div class="subheader-content">
                    This training program covered an introduction to fund management, bonds as investment instruments, accounting in financial analysis, managing an equity portfolio, etc.
                </div>
                <div class="subheader-content">
                    <i class="material-icons">location_on</i>
                    <div>Cambridge University, London, England
                    </div>
                </div>
                <div class="subheader-content">
                    <i class="material-icons">calendar_month</i>
                    <div>May-June, 1997</div>
                </div>
            </div>
        </div>

        <div class="description-section">
            <div class="description-header">The Asia-Pacific Issuers and Investors Forum – A Euromoney Conference Sponsored by Daiwa Securities, Goldman Sachs, HSBC, Merrill Lynch, NatWest and Union Bank of Switzerland</div>
            <div class="description-subheader">
                <div class="subheader-content">
                    <i class="material-icons">location_on</i>
                    <div>The Grand Hyatt, Hong Kong
                    </div>
                </div>
                <div class="subheader-content">
                    <i class="material-icons">calendar_month</i>
                    <div>December 2-3, 1996</div>
                </div>
            </div>
        </div>
    </div>
`,
'profAccreditations' : `
    <div class="box-section"><i class='material-icons'>article</i><div class='section-title'>Academic Examinations</div></div>
    <div class="box-description">
        <div class="description-section">
            <div class="description-header">Career Executive Service Officer (CESO)
            </div>
            <div class="description-subheader">
                <div class="subheader-content">
                    <i class="material-icons">arrow_forward</i>
                    <div>Management Aptitude Test Battery</div>
                </div>
                <div class="subheader-content">
                    <i class="material-icons">stars</i>
                    <div>Rating: 91.02 </div>
                </div>
                <div class="subheader-content">
                    <i class="material-icons">bookmark</i>
                    <div>Rank: 2nd </div>
                </div>
                <div class="subheader-content">
                    <i>(Rating Scale/Range: 0 to 100, Passing mark is 80)</i>
                </div>
                <div class="subheader-content">
                    <i class="material-icons">book</i>
                    <div>Covers: Management concepts, reading comprehension, logical reasoning, mathematical reasoning, data analysis, general information</div>
                </div>
                <div class="subheader-content">
                    <i class="material-icons">calendar_month</i>
                    <div>May 11, 2001</div>
                </div>
                <div class="subheader-content">
                    <i>Notes: The CESO is a requirement for government executives. Without passing this exam, the government officer can not be promoted and can not be given  a permanent appointment. Most government officials have not taken/passed this exam as government has not been strict in implementing the requirement. In the SSS, only about 20-30% of executives are CESO eligible.</i>
                </div>
            </div>
        </div>
        <div class="description-section">
            <div class="description-header">Fellowship Examinations of the Actuarial Society of the Philippines (ASP)
            </div>
            <div class="description-subheader">
                <div class="subheader-content">
                    <i class="material-icons">arrow_forward</i>
                    <div>Course 640 (Social Insurance), Course 530 (Investment & Finance), Course 550 (Pre-Need)</div>
                </div>
                <div class="subheader-content">
                    <i class="material-icons">stars</i>
                    <div>Rating:  9 </div>
                </div>
                <div class="subheader-content">
                    <i class="material-icons">bookmark</i>
                    <div>Rank: 1st </div>
                </div>
                <div class="subheader-content">
                    <i>Passing Rate: 9% i.e. 1 out of every 11 who took exam passed (Rating Scale/Range: 0 to 10, Passing mark is 6)                                    </i>
                </div>
                <div class="subheader-content">
                    <i class="material-icons">calendar_month</i>
                    <div>June 8, 2002</div>
                </div>
                <div class="subheader-content">
                    <i>The ASP Course 640 (Social Insurance) covers how the country’s social insurance systems work, the implementing rules and regulations affecting social insurance, and also the models used by the different social security programs to determine the proper funding technique to maintain their viability. The following documents are required: ASP Study Note on Social Insurance, Republic Act 7875 on the National Health Insurance Act of 1995, Republic Act 8282 on the Social Security Act of 1997, and Republic Act 8291 on the Government Service Insurance System Act of 1997.</i>
                </div>
            </div>
        </div>
        <div class="description-section">
            <div class="description-header">Philippine Securities and Exchange Commission (SEC) Licensure Examination for Stockbrokers / Dealers / Salesmen
            </div>
            <div class="description-subheader">
                <div class="subheader-content">
                    <i class="material-icons">arrow_forward</i>
                    <div>Course 640 (Social Insurance), Course 530 (Investment & Finance), Course 550 (Pre-Need)</div>
                </div>
                <div class="subheader-content">
                    <i class="material-icons">stars</i>
                    <div>Rating:  90% </div>
                </div>
                <div class="subheader-content">
                    <i class="material-icons">bookmark</i>
                    <div>Rank: 3rd </div>
                </div>
                <div class="subheader-content">
                    <i class="material-icons">book</i>
                    <div>Covers: Revised Securities Act, underwriting of securities, stock analysis, stock trading rules and operations of stockbrokers, securities trading clearance and settlement, role of stock transfer agents, role of the SEC in capital market development, registration and post registration requirements for stockbrokers 1 salesmen and code of ethics.                                    </div>
                </div>
                <div class="subheader-content">
                    <i class="material-icons">calendar_month</i>
                    <div>May 1995</div>
                </div>
            </div>
        </div>
        <div class="description-section">
            <div class="description-header">Actuarial Society of the Philippines (ASP)
            </div>
            <div class="description-subheader">
                <div class="subheader-content">
                    <i class="material-icons">arrow_forward</i>
                    <div>Accredited all seven (7) ASP Associateship Exams: Part la, lb, lc, 2, 3a, 3b, 3c</div>
                </div>
                <div class="subheader-content">
                    <i class="material-icons">calendar_month</i>
                    <div>January 1995</div>
                </div>
            </div>
        </div> 
        <div class="description-section">
            <div class="description-header">Society of Actuaries (SoA) of North America 
            </div>
            <div class="description-subheader">
                <div class="subheader-content">
                    <i class="material-icons">stars</i>
                    <div>Total Credits: 200</div>
                </div>
                <div class="subheader-content">
                    <ul>
                        <li>
                            After Master of Science program: 
                            <ul>
                                <li>
                                    95 credits-May 1993 - November 1994
                                </li>
                                <li>
                                    Exam 120-Applied Statistics
                                </li>
                                <li>
                                    Exam 150-Actuarial Mathematics
                                </li>
                                <li>
                                    Exam 151-Risk Theory
                                </li>
                                <li>
                                    Exam 160-Survival Models and Mortality Table 
                                </li>
                            </ul>
                        </li>
                        <li>
                            Construction
                            <ul>
                                <li>Exam 165   -	Graduation                                                </li>
                                <li>Exam  162  -	Measurement of Mortality</li>
                            </ul>
                        </li>
                        <li>
                            During Master of Science program, as requirement for graduation:
                            <ul>
                                <li>105 credits-February 1992 - February 1993                                                 </li>
                                <li>Required courses GPA: 9.8  Over-all GPA: 9.1
                                    (Rating Scale/Range: 0 to 10, 6 is passing grade)
                                    </li>
                                <li>Exam  100  -	Calculus and Linear Algebra
                                </li>
                                <li>Exam  110  -	Probability and Statistics
                                </li>
                                <li>Exam  130  -	Operations Research
                                </li>
                                <li>Exam  135  -	Numerical Analysis</li>
                                <li>Exam  140  -	Theory of Interest </li>
                            </ul>
                        </li>
                        <li>Before Master of Science program: None</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="description-section">
            <div class="description-header">Graduate Records Examination (GRE)
            </div>
            <div class="description-subheader">
                <div class="subheader-content">
                    <i class="material-icons">stars</i>
                    <div>Score:  800</div>
                </div>
                <div class="subheader-content">
                    <i>Rating Scale/Range: 200 to 800</i>
                </div>
            </div>
        </div> 
        <div class="description-section">
            <div class="description-header">Test of English as a Foreign Language (TOEFL)
            </div>
            <div class="description-subheader">
                <div class="subheader-content">
                    <i class="material-icons">calendar_month</i>
                    <div>1991</div>
                </div>
            </div>
        </div> 
        <div class="description-section">
            <div class="description-header">Civil Service Examination (Professional)
            </div>
            <div class="description-subheader">
                <div class="subheader-content">
                    <i class="material-icons">arrow_forward</i>
                    <div>First Grade Civil Service eligible
                    </div>
                </div>
                <div class="subheader-content">
                    <i class="material-icons">arrow_forward</i>
                    <div>Exempted from taking the examination by virtue of Presidential Decree No. 907
                    </div>
                </div>
                <div class="subheader-content">
                    <i class="material-icons">calendar_month</i>
                    <div>1991</div>
                </div>
            </div>
        </div> 
        <div class="description-section">
            <div class="description-header">Social Security System Actuarial Scholarship Examination
            </div>
            <div class="description-subheader">
                <div class="subheader-content">
                    <i class="material-icons">stars</i>
                    <div>Overall Rating:  94% </div>
                </div>
                <div class="subheader-content">
                    <i class="material-icons">bookmark</i>
                    <div>Rank:  1st </div>
                </div>
                <div class="subheader-content">
                    <i class="material-icons">arrow_forward</i>
                    <div>Morning Exam:
                    </div>
                </div>
                <div class="subheader-content">
                    <i class="material-icons">stars</i>
                    <div>Rating:  90 </div>
                </div>
                <div class="subheader-content">
                    <i class="material-icons">book</i>
                    <div>Covers: Algebra, Trigonometry, Theory of Interest, Probability, Number Theory </div>
                </div>
                <div class="subheader-content">
                    <i class="material-icons">arrow_forward</i>
                    <div>Afternoon Exam:
                    </div>
                </div>
                <div class="subheader-content">
                    <i class="material-icons">stars</i>
                    <div>Rating:  90 </div>
                </div>
                <div class="subheader-content">
                    <i class="material-icons">book</i>
                    <div>Covers: Algebra, Trigonometry, Theory of Interest, Probability, Number Theory </div>
                </div>
                <div class="subheader-content">
                    <i class="material-icons">calendar_month</i>
                    <div>October 1990</div>
                </div>
            </div>
        </div> 
        <div class="description-section">
            <div class="description-header">National Science and Technology Authority (NSTA) Scholarship Examination
            </div>
            <div class="description-subheader">
                <div class="subheader-content">
                    <i class="material-icons">bookmark</i>
                    <div>Rank:  2nd Nationwide </div>
                </div>
                <div class="subheader-content">
                    <i class="material-icons">book</i>
                    <div>Covers: Math, Science and Mental Ability
                    </div>
                </div>
                <div class="subheader-content">
                    <i class="material-icons">calendar_month</i>
                    <div>1986</div>
                </div>
            </div>
        </div> 
        <div class="description-section">
            <div class="description-header">National College Entrance Examination (NCEE, equivalent to SAT)
            </div>
            <div class="description-subheader">
                <div class="subheader-content">
                    <i class="material-icons">stars</i>
                    <div>Obtained highest MSHS individual score</div>
                </div>
                <div class="subheader-content">
                    <i class="material-icons">bookmark</i>
                    <div>Percentile rank: 99+ in all categories </div>
                </div>
                <div class="subheader-content">
                    <i class="material-icons">book</i>
                    <div>Covers: Abstract reasoning, Mathematical Ability, Verbal Ability and  Reading Comprehension
                    </div>
                </div>
                <div class="subheader-content">
                    <i class="material-icons">calendar_month</i>
                    <div>1986</div>
                </div>
            </div>
        </div> 
        <div class="description-section">
            <div class="description-header">University of the Philippines College Admission Test (UPCAT)
            </div>
            <div class="description-subheader">
                <div class="subheader-content">
                    <i class="material-icons">bookmark</i>
                    <div>Ranked first among nationwide U.P. Government Scholars</div>
                </div>
                <div class="subheader-content">
                    <i class="material-icons">calendar_month</i>
                    <div>1985</div>
                </div>
            </div>
        </div> 
        <div class="description-section">
            <div class="description-header">Ateneo College Entrance Test (ACET)
            </div>
            <div class="description-subheader">
                <div class="subheader-content">
                    <i class="material-icons">bookmark</i>
                    <div>Received Ateneo Freshman Merit Scholarship for superior ranking</div>
                </div>
                <div class="subheader-content">
                    <i class="material-icons">calendar_month</i>
                    <div>1985</div>
                </div>
            </div>
        </div> 
    </div>
`,
'others' : `
    <div class="box-section"><div class="section-title">Other Activities</div></div>
    <div class="box-description">
        <div class="description-header">Domestic Speeches and Presentations</div>
        <div class="description-subheader">
            <div class="subheader-content">
                <ul>
                    <li>Speaker, 398th General Membership Meeting of Philippine Association of Legitimate Service Contractor, Inc. (PALSCON), held at Club Filipino, San Juan City, February 23, 2023, shared latest SSS updates through a presentation entitled “uSSSapang Benepisyo Para Sa Miyembro”</li>
                    <li>Member, Board of Judges for the 12th Gawad Kaligtasan at Kalusugan – National Level by Occupational Safety and Health Center held at OSHC, North Ave. corner Agham Road, Diliman, Quezon City, November 7-8, 2022</li>
                    <li>Speaker, Actuarial Society of the Philippines conducted a 4-hour review session on “Social Insurance” held at Insurance Institute for Asia and the Pacific, BPI-Philam Building, Ayala Ave., Makati City, October 7, 2022</li>
                    <li>Speaker, UPLB Actuarial Science Society held via Zoom, April 11, 2022, delivered a Career Talk entitled “Soaring Through the Pandemic: Advancement of the Actuarial Field in the 21st Century”</li>
                    <li>Speaker, 13th National Conference – OR: Serving the Services Sector conducted by Operations Research Society of the Philippines, held at Eastwood Richmonde Hotel, Quezon City, November 22, 2019, shared his views on “Extending Social Security Fund Life”</li>
                    <li>Speaker, University of Santo Tomas Science Week 2019 held at Main Building, College of Science, University of Santo Tomas, Manila, February 28, 2019, delivered a presentation with the theme “Gearing Up for Industry 4.0”</li>
                    <li>Plenary Speaker, 12th National Conference - Raising the Bar for Public Service Through OR conducted by Operations Research Society of the Philippines, held at Eastwood Richmonde Hotel, Quezon City, November 23, 2018, on “OR Applications in SSS Investment Management and Actuarial Analysis”</li>
                    <li>Speaker, 36th Employers Confederation of the Philippines Members’ General Meeting held at Henry Sy Sr. Auditorium, St. Luke’s Medical Center, Global City, Taguig, July 19, 2018, shared his views on “What’s Up and What’s New with SSS, Pag-IBIG, Philhealth and ECC”</li>
                    <li>Speaker, Upsilon Sigma Phi Capacity Building Seminar held at Central Colleges of the Philippines, July 17, 2017, delivered a speech on “Excelling in Times of Change and Transition”</li>
                    <li>Speaker, Actuarial Society of the Philippines Convention held at the Radisson Blu Hotel, Cebu City, November 8, 2012, delivered a presentation entitled “Impact of Economic Conditions on the Financial Sustainability of Social Security Schemes: The Philippine Social Security Experience”</li>
                    <li>Speaker, Actuarial Society of the Philippines Convention held at Avenue Plaza Hotel, Naga City, Camarines Sur, November 11, 2011, delivered a presentation entitled “Leading Change in Social Security Under the New Administration”</li>
                    <li>Guest Speaker, The Actuarial Science Group, UPLB held at Mathematics Building, IMSP, UPLB, College, Laguna, September 23, 2011, delivered a presentation entitled “The Actuary in Social Insurance”</li>
                    <li>Speaker, Tarlac State University Seminar held at Magsaysay Hall, 2/F SSS Building Quezon City, February 18, 2011, delivered a presentation entitle “Risk Management: SSS Investments, Strategies and Practices”</li>
                    <li>Speaker, Orientation-Seminar on Establishing a Provident Fund Program for Government Employees by Philippine Government Employees Association held at Aristocrat Restaurant, Roxas Boulevard, Manila, January 29, 2010</li>
                    <li>Speaker, Actuarial Society of the Philippines Convention held at the Xavier Sports and Country Club, Cagayan de Oro City, November 13 – 14, 2008 delivered a presentation on “Risk Management in Social Insurance”</li>
                    <li>Speaker, Actuarial Society of the Philippines Convention held at the Costabella Tropical Beach Hotel in Mactan Island Cebu, November 15-16, 2007, delivered a 45-minute presentation on “Longevity in Social Insurance”</li>
                    <li>Facilitator, Philippine National Police Retirement and Pension System held at PNP-NHQ, Quezon City, July 29, 2008, supervised “Crafting of Retirement and Pension System” and “Actuarial Valuation and Terms of Reference” through series of coferences and workshops</li>
                    <li>Speaker, Actuarial Society of the Philippines Convention held at the Bohol Country Club, Bohol City, November 21-23, 2005, delivered a 1.5-hour presentation entitled “2003 Actuarial Valuation of the Social Security System” with 30-minute open forum</li>
                    <li>Speaker, Employees Compensation Commission (ECC) Seminar on "Social Security and the Role of the Actuary" held at Batangas Country Club, Batangas City, June 9 to 11, 2004, delivered a three-day presentation to technical staff of the ECC regarding principle of social security, design of social security program, the role of the actuary, restoring the actuarial viability of the SSS fund, Social Security programs throughout the world, sensitivity analysis of the EC fund.</li>
                    <li>Speaker, First Global Summit on Social Security of the United Social Security System Members, Inc. held at Philippine Columbian, Plaza Dilao, Manila, November 15-16, 2002, delivered a one-hour presentation entitled “The Need for Reform in Social Security” with 30-minute open forum; the United Social Security System Members, Inc. is an organization of active SSS members including private sector employees, employers and pensioners groups</li>
                    <li>Presentor to Her Excellency President Gloria Macapagal-Arroyo and Select Members of Her Cabinet, Proposed Increase in the Social Security System’s Contribution Rate and Maximum Monthly Salary Credit and Change in the Pension Formula, Malacanang Palace, Manila, November 19, 2002, presented to the Social Security Commission approved recommendations on Social Security Program reforms and discussed the nature and effects of the specific corrective measures</li>
                    <li>Speaker, Actuarial Society of the Philippines Convention held at the Baguio Country Club, Baguio City, November 21-23, 2002, delivered a 1.5-hour presentation entitled “Restoring Actuarial Viability to the Social Security Program” with 30-minute open forum</li>
                    <li>Speaker, Pension Reform Conference held at the University of Asia and the Pacific, November 28-29, 2002, co-delivered a 2-hour presentation entitled “Demographic, Actuarial and Financial Status of the SSS and Imperative Reforms for the Social Security Program” with 30-minute open forum</li>
                    <li>Presentor to Her Excellency President Gloria Macapagal - Arroyo, Social Security Status, Issues and Concerns, Malacanang Palace, December 16, 2001, conducted a 60-minute presentation to Philippine President Arroyo, Finance Secretary Jose Camacho and Executive Secretary Alberto Romulo on the status of the Social Security System and social security issues including measures that will lengthen the actuarial life of the state-run pension scheme for the private sector</li>
                    <li>TV Guest Speaker, Increase in Maximum Salary Base for SSS Contributions and Benefits, Point Blank hosted by Ces Drilon, ABS-CBN Channel 2, ANC and Studio 23, December 21, 2001, spoke and answered questions on the decision to increase the maximum monthly salary credit or the salary ceiling on which social security contributions and benefits are based from P12,000 to P15,000 and related issues at a 30-minute intelligent talk show along with SSS President Corazon De La Paz and a labor leader</li>
                    <li>Radio Guest Speaker, Social Security Issues and Concerns, DWWW 740, Local Radio Program, December 9,2001, talked on merger of SSS and GSIS and answered questions phoned in by listeners</li>
                    <li>Speaker, Cascading of the 2002 SSS Corporate Plans, The Royal Mandaya Hotel, Davao City, February 25-26, 2002 and West Gorordo Hotel, Cebu City February 28 – March 1, 2002, delivered before all Social Security System Vice Presidents, Assistant Vice Presidents and Branch Heads for the Visayas and Mindanao about five-hours’ worth of presentations and answered open forum questions on the following topics: actuarial valuation and latest annual financial performance of the nation’s largest pension program which covers the private sector, the need to increase the contribution rate and investment plans and issues</li>
                    <li>Presentor, Securities Trading and Management Department presentation to the Commission on Audit, December 14, 2001, delivered introductory presentation on the nature of the department and its systems and procedures in equities trading</li>
                    <li>Speaker, Manila Science High School Math Camp, held at the Manila Science High School Auditorium, December 7, 2002, delivered a 45-minute presentation entitled “MaScian Excellence Unlimited” with open forum for about 300-500 specially gifted science students</li>
                    <li>Guest Speaker, University of the Philippines – Department of Mathematics Career Talk, March 8, 2001, sponsored by the Math Major’s Circle</li>
                    <li>Speaker, Actuarial Society of the Philippines Convention held at Iloilo City, November 16-18, 2000, delivered a 45-minute presentation entitled, “SSS: Creating Values for its Members and the Nation.”</li>
                    <li>Resource Speaker, 23rd Session of the Career Executive Service Board Gabay ng Paglilingkod, September 6, 2000, delivered a 15-minute presentation entitled, “Reinforcing Social Commitment through Sound Investments.”</li>
                    <li>Resource Speaker, Personnel Officers Association of the Philippines Conference, December 7, 2000, GSIS Gymnasium, Pasay City, delivered a 15-minute presentation on “Partnership with Social Security:  SSS Programs and Services.” with a 75-minute joint open forum</li>
                    <li>Speaker, 4th ORSP Kapihan, Operations Research Society of the Philippines, Manila Galleria Suites, Pasig City, May 3, 2000, presented “Operations Research Applications at the Social Security System” which contains mainly mathematical modeling and forecasting applications</li>
                    <li>Main Presentor, National Coordinating Committee for the Concerns of Older Filipino Persons Regular Meeting, National Defense College, Armed Forces of the Philippines, Quezon City, May 12, 2000, presented the SSS Social Security Programs and a survey of pending senate bills and house bills which will affect the viability of the SSS</li>
                    <li>Guest of Honor and Inspirational Speaker, Muntinlupa Science High School Graduation Day Ceremony, Muntinlupa, Metro Manila, March 30, 2004. Timoteo Paez Integrated Pilot School Recognition Day, Manila, March 27, 2000. Manila Science High School Graduation Day Ceremony, Manila, March 1998 </li>
                    <li>Speaker, Financial Systems and Viability, Bukidnon Health Insurance Project: Workshop on Administrative Systems, AIT Hotel, December 3, 1993</li>
                </ul>
            </div>
        </div>

        <div class="description-header">Domestic Seminar and Trainings</div>
        <div class="description-subheader">
            <div class="subheader-content">
                <ul>
                    <li>16th Annual Fund Managers Association of the Philippines, Inc. (FMAP) Convention, Annual Fund Managers Association of the Philippines, Inc., “Are We There Yet? Risks and Opportunities in the Post-Pandemic, Boracay, March 10-12, 2023</li>
                    <li>2022 Leadership Competency Assessment Test (LCAT), Social Security System, December 20, 2022</li>
                    <li>Training Program on the SSS Strategic Performance Management System and its Revised Guidelines, Social Security System, December 15, 2022</li>
                    <li>Mini-MBA Series: The Executive Mentor as World Class Coach, Mindbroker Corp., October 7-28, 2022</li>
                    <li>Gender Sensitivity Training, Social Security System, September 29, 2022</li>
                    <li>Webinar on Personal Governance Scorecard for SSS Executives, Social Security System, May 17, 2022</li>
                    <li>Training-Workshop on Gender Mainstreaming Evaluation Framework, Social Security System, April 19-22, 2022</li>
                    <li>Agile Leadership: Leading Amidst Disruptions and VUCA, Guthrie-Jensen Consultants, Inc., March 29-30, 2022 and April 4-5, 2022</li>
                    <li>Basic Seminar on Financial Derivatives, Standard Chartered Bank, February 18, 2022</li>
                    <li>ISO 9001: 2015 Awareness Course: Focused on Leadership, Social Security System, December 2, 2021</li>
                    <li>62nd Annual Convention of the Actuarial Society of the Philippines, Actuarial Society of the Philippines, November 16-19, 2021</li>
                    <li>2019 Revised Corporation Code of the Philippines, Center for Global Best Practices, July 6, 2021</li>
                    <li>Webinar on Islamic Finance, Social Security System, March 30, 2021</li>
                    <li>Executive Briefing on the SSS Organizational Restructuring Plan, Social Security System, February 15, 2021</li>
                    <li>61st Annual Convention of the Actuarial Society of the Philippines, Actuarial Society of the Philippines, November 10-13, 2020</li>
                    <li>Webinar on the Philippine National Public Key Infrastructure, Social Security System, November 8, 2020</li>
                    <li>Webinar on Completed Staff Work for Executives, Social Security System, August 20, 2020</li>
                    <li>Customized Capability on Selected PRFS and IFRS for Potential Accounting for Agencies Liabilities, Social Security System, July 23, 2020</li>
                    <li>Drug Awareness Seminar, Social Security System, October 10, 2019</li>
                    <li>Executive Mentor Development Program and Mentoring Workshop, Social Security System, October 1-4, 2019</li>
                    <li>Training on Office 365 Microsoft Teams Software, Social Security System, September 19, 2019</li>
                    <li>Orientation-Workshop on the SSS Competency Assessment System, Social Security System, May 16, 2019</li>
                    <li>Orientation Session on Republic Act 11199 and Republic Act 11032, Social Security System, May 6, 2019</li>
                    <li>ICDs Professional Directors’ Program, Institute of Corporate Directors, October 18-November 19, 2018</li>
                    <li>Treasury Certification Program, Ateneo-Bankers Association of the Philippines, June 27-July 9, 2016</li>
                    <li>Investment Banking, Ateneo de Manila University and Ateneo Center for Continuing Education, May 5, 2015 to August 29, 2015</li>
                    <li>Financial Market Outlook Seminar, Actuarial Society of the Philippines, December 17, 2014</li>
                    <li>Corporate Governance Training Program for Government Controlled Corporations, Institute of Corporate Directors, November 10, 2014</li>
                    <li>A Primer into Technical Analysis, COL Financial Philippines, October 23-20, 2014</li>
                    <li>2013 Actuarial Society of the Philippines Convention: Rethinking Strategies in a Rising Economy, SMX Davao City, Actuarial Society of the Philippines, November 14-15, 2013</li>
                    <li>Asia Dialogue Manila – Managing Risks: Portfolio and Governance, Pacific Pension Institute/Asian Development Bank, November 10-11, 2013</li>
                    <li>Manila Dialogue-Regional Capacity Development Technical Assistance to Strengthen the Pension Fund Industry in Asia-Pacific-Region, Pacific Pension Institute/Asian Development Bank, April 13-14, 2011</li>
                    <li>Trust Fixed Income Seminar, Social Security System, Diliman Quezon City, June 16, 2009</li>
                    <li>Team Building Workshop for Investments Group, October 16, 2008</li>
                    <li>Advanced Course for Technical Analysis, Makati City, June 18, 2008 – July 30, 2008</li>
                    <li>10th National Convention on Statistics, Shangri-La Hotel, EDSA, October 1 – 2, 2007</li>
                    <li>Financial Risk Management Program, Asian Institute of Management Eugenio Lopez Foundation Building, Makati City, attended review classes on quantitative analysis, market risk measurement and management, credit risk measurement and management, operational, integrated risk and legal, accounting and ethics and risk management in investment management, September 18 – October 27, 2007.</li>
                    <li>Enterprise-Wide Risk Management Program, Asian Institute of Management Eugenio Lopez Foundation Building, Makati City, attended classes on risk identification, risk assessment and quantification and risk management, September 17 – 21, 2007.</li>
                    <li>Enhancing Board Oversight and Senior Management Functions from the Financial and Risk Management Perspectives participated in the Corporate Governance Workshop, The Conservatory of the Peninsula Manila, Makati City, June 15, 2007.</li>
                    <li>Completed Staff Work Program, Social Security System, May 9, 2007 – July 5, 2007.</li>
                    <li>PQA: Managing Business Processes, A Key to Performance Excellence, Social Security System, March 20 – 21, 2007.</li>
                    <li>Actuarial Society of the Philippines (ASP) Annual Convention and Quarterly Seminar, participant since mid 90's to present.</li>
                    <li>Philippine Statistical Association (PSA) Quarterly Seminar, Member and Participant since early 2000 to present.</li>
                    <li>Actuarial Society of the Philippines (ASP) Quarterly Seminar, Member and Participant since early 2000 to present.</li>
                    <li>East Asian Actuarial Conference (EAAC), Makati Shangrila, Makati City, October 7 to 9, 2003.</li>
                    <li>International Actuarial Association & International Promotion & Education Fund Seminar, Makati City, October 10 to 12, 2003</li>
                    <li>Chartered Financial Analyst Review, Asian Institute of Management Jose Fernandez Center, Makati City, attending classes on financial statement analysis, quantitative methods and economics in preparation for the Level I Chartered Financial Analyst Examination, October – December 2002
	                <i>The Chartered Financial Analyst (CFA®) Program is a globally recognized standard for measuring the competence and integrity of financial analysts. Three levels of examination measure a candidate's ability to apply the fundamental knowledge of investment principles at a professional level. The CFA exam is administered annually in more than 70 nations worldwide.</i></li>
                    <li>Center for Educational Multimedia (CREM) Training on Educational Technology Module 1 - 5, De La Salle University, E-classroom (M-306), trained in effective application of media and technology in the classroom, Powerpoint, design of basic interactive multimedia presentations, online course design and management, and video streaming, June-July 25, 2002</li>
                    <li>Seminar on Government's Housing Project, Diliman Quezon City, February 4, 2002</li>
                    <li>John Robert Powers International Executive Development Course, John Robert Powers Center, Makati City, trained in etiquette, wardrobe, effective communication, persuasive communication, and other areas of personality development and interpersonal relations, August 2001-July 2002</li>
                    <li>World Bank Pension Reform Options Simulation Toolkit (PROST) Training, World Bank and Department of Finance, Social Security System Training Room, 12/F SSS Main Building, January 29 to February 2, 2001.</li>
                    <li>Basic Course on Corporate Governance for Banks, 9/F EPCIBank Building, Tower I, Makati City, October 23, 2001</li>
                    <li>Consultative Meeting with Mr. Ian Dunlop - Corporate Governance Reforms in GOCC's and GFI's, 12/F Conference Room, SSS Main Office, Quezon City, September 6, 2001.</li>
                    <li>Seminar on Corporate Governance for Directors and Officers, Dusit Hotel Nikko, Makati City.</li>
                    <li>Open Conference on National Governance Reforms, Fiesta Pavilion, Manila Hotel, Manila City, May 30, 2001.</li>
                    <li>Directors and Senior Officers of GOCCs and GFIs Orientation Course on Corporate Governance, Manila Hotel, Manila City, May 28 to 29, 2001.</li>
                    <li>2nd Symposium on the Insurance Industry Strategic Planning, November 12, 1999.</li>
                    <li>Seminar on Semiconductor electronics business at SEIPI, October 29, 1999</li>
                    <li>Seminar on E-commerce, September 10, 1999</li>
                    <li>Informatics Certified Internet Professional Program and Microsoft Visual Basic 5.0 Module 1, Informatics Computer Institute, SM City – North Edsa and SM Megamall, trained in Object Oriented Programming (Visual Basic), Internet and Web Page Development including PERL Programming (Certified Internet Professional Program), February – August, 1999.</li>
                    <li>Executive Briefing on the New Performance & Competency Assessment, SSS Bldg., Diliman, Q.C., July 26, 1999</li>
                    <li>Dale Carnegie Course in Effective Communications and Interpersonal Skills, Executive Training Institute, Makati, July 27-October 12, 1998.</li>
                    <li>Executive Briefing: Future Directions of Public Utility Sector, July 24, 1998.</li>
                    <li>Orientation on the SS Operations and Administration Program, SSS Bldg., Diliman, Q.C. February 2 to 7, 1997</li>
                    <li>Seminar on understanding Derivatives, March 21 to 22, 1996</li>
                    <li>Development Center for Finance Financial Analyst Seminar Series Module 3: Security Analysis and Portfolio Management, FINEX, U. P. College of Business Administration, May 20 & 27, 1995</li>
                    <li>Seminar / Review Course for Prospective Stockbrokers'/ Dealers' Salesmen, Philippine Securities and Exchange Commission (PhilSEC) Institute, Securities and Exchange Commission, March 17-18, 1995</li>
                    <li>Technical Analysis Seminar, Asian Consulting and Training Group, Inc. (ACT Group), Asian Institute of Management, February 25, March 4, 11, 18, 1995</li>
                    <li>Basic Supervisory Effectiveness Course, SEAMEO Institute for Innovative Technology, University of the Philippines, February 20-24, 1995</li>
                    <li>Technical Writing Seminar-Workshop, Asian Institute of Communication and Journalism, Communication Foundation for Asia, January 25-27, 1995</li>
                    <li>Development Center for Finance Financial Analyst Seminar Series Module 2: Financial Analysis and the Philippine Stock & Money Markets, FINEX, UP College of Business Administration, February 4, 11, 18, 1995</li>
                    <li>Seminar on the Fundamentals of Mortgage-Backed Securities, conducted by the Federal National Mortgage Association (Fannie Mae) of the United States, sponsored by the Housing and Urban Development Coordinating Council and the World Bank; Asian Institute of Management, February 1, 1995</li>
                    <li>News and Feature Writing Seminar-Workshop, Asian Institute of Communication and Journalism, Communication Foundation for Asia, January 18-20, 1995</li>
                    <li>Social Compensation and Economic Reform in the Philippines: A Policy Agenda Consultation Workshop, Philippines Center For Policy Studies sponsored by The Asia Foundation, The Sulo Hotel, January 6, 1995</li>
                    <li>Forecasting Seminar, Philippine Statistical Association, UP Statistical Center, October 20- 22, 1994</li>
                    <li>The Elliott Wave Analysis Workshop, The Zaitech Treasury Group (Inc.), New World Hotel, Makati, September 24, 1994</li>
                    <li>The NHI Costing Model Review Workshop 2, Health Policy Development Program (UP School of Economics), New World Hotel, July 19, 1994</li>
                    <li>FACT Seminar: Using Powerpoint 3.0 For Effective Visual Presentation, Institute of Advanced Computer Technology, June 20-24, 1994</li>
                    <li>ZOPP Workshop: Social Health Insurance, German Agency for Technical Cooperation and Department of Health, Subic International Hotel, SBMA, June 7-10, 1994</li>
                    <li>Unix Basic, SSS Bldg., Diliman, Q.C. May 27 to 28, 1994</li>
                    <li>Quarterly Forum: Work Ethics, September 23, 1993</li>
                </ul>
            </div>
        </div>
        

        <div class="description-header">Life Activities</div>
        <div class="description-subheader">
            <div class="subheader-content">
                <ul>
                    <li><strong>Filipino Martial Arts / Self-Defense (Arnis/Bangkaw)</strong>, 2003 to present.</li>
                    <li><strong>Computer</strong>, trained in computer science and programming using PASCAL and BASIC; used QuickBASIC, Tillinghast Actuarial Software, Excel, Powerpoint, Word, Lotus 123, WordPerfect, Freelance Graphics, Ami Professional, WordStar, Framework II, dbaselll+; AIG, SSS, UP, MSHS; 1983-1995.</li>
                    <li><strong>Ballroom Dancing</strong>, attended free ballroom dancing classes on Friday evenings at the SSS and learned basics of swing, reggae, shaggy, tango, rhumba, jive, boogie, foxtrot, pasadoble, L.A. walk, samba, mambo, waltz, soca; August– October, 1998.</li>
                    <li><strong>Teaching</strong>, trained in educational psychology and started university teaching at age 19, as first teaching assignment taught nine different undergraduate math courses in one and a half school years; conducted oral exams; among top 10 Math Faculty Members, top 3 Junior Math Faculty Members at UP as evaluated by the Teaching Evaluation Committee aided by student survey, for school year 1989-90; gave special lectures / private tutoring in combinatorics, abstract algebra, projective geometry, complex analysis, topology, geometric constructions, ordinary differential equations, algebra, actuarial mathematics, operations research, theory of interest, etc.; UConn, UP, ADNW, MSHS; 1982-93.</li>
                    <li><strong>Spiritual</strong>, received instructions on the practice of Christian virtues; Matthewson House, a university center in Brown University, Providence, Rhode Island, U.S.A., 1991-93; Lauan Study Center (LSC), a university center in Loyola Heights, Quezon City, Metro Manila, Philippines sponsored by the Philippine Foundation for Cultural and Educational Development , 1987-91; both with spiritual direction from the Personal Prelature of the Holy Cross and Opus Dei.</li>
                    <li><strong>Military</strong>, Citizen Military Training; unit: Alpha / Charlie Company, Field Artillery Battalion, Philippine Army; UP Dept. of Military Science and Tactics, 1986-88.</li>
                    <li><strong>Journalism</strong>, creative writing, community reporting, newspaper writing, editing and publishing. TPIPS, MSHS; 1978-86</li>
                    <li><strong>Competitive</strong>, underwent special training programs in communication sciences, natural sciences, and social sciences to prepare for international, national, regional, and citywide contests in individual and team categories; MSHS, TPIPS, 1976-86
                    </li>
                    <li><strong>Driving</strong>, passed State of Delaware Department of Motor Vehicles' Driver's Examination which includes physical, written, and actual driving and parking tests, held Delaware Driver's License (No. 1102976 Class D) issued July 22, 1993 and expired August 20, 1998
                    </li>
                </ul>
            </div>
        </div>
    </div>
`,
'organizations' : `
    <div class="box-section"><i class='material-icons'>sort</i><div class='section-title'>Organizations</div></div>
    <div class="box-description">
        <div class="description-section">
            <div class="description-header">Member, Social Security System Dance Troupe
            </div>
            <div class="description-subheader">
                <div class="subheader-content">
                    <i class="material-icons">calendar_month</i>
                    <div>since January 2019</div>
                </div>
            </div>
        </div>
        <div class="description-section">
            <div class="description-header">Associate, Actuarial Society of the Philippines (ASP)
            </div>
            <div class="description-subheader">
                <div class="subheader-content">
                    <i class="material-icons">calendar_month</i>
                    <div>since February 1995</div>
                </div>
            </div>
        </div>
        <div class="description-section">
            <div class="description-header">Associate, Society of Actuaries of North America (SoA)
            </div>
            <div class="description-subheader">
                <div class="subheader-content">
                    <i class="material-icons">calendar_month</i>
                    <div>since November 1994</div>
                </div>
            </div>
        </div>
        <div class="description-section">
            <div class="description-header">Faculty Adviser, U.S.T. Martial Arts Club, University of Santo Tomas
            </div>
            <div class="description-subheader">
                <div class="subheader-content">
                    <i class="material-icons">calendar_month</i>
                    <div>June 2002</div>
                </div>
            </div>
        </div>
        <div class="description-section">
            <div class="description-header">Coach/Trainor, De La Salle University Team, Australian Mathematics Competition
            </div>
            <div class="description-subheader">
                <div class="subheader-content">
                    <i class="material-icons">calendar_month</i>
                    <div>August 2002</div>
                </div>
            </div>
        </div>
        <div class="description-section">
            <div class="description-header">Philippine Team, International Mathematical Olympiad
            </div>
            <div class="description-subheader">
                <div class="subheader-content">
                    <i class="material-icons">calendar_month</i>
                    <div>June 1990</div>
                </div>
            </div>
        </div>
        <div class="description-section">
            <div class="description-header">University of the Philippines – Diliman Team, Australian Mathematics Competition
            </div>
            <div class="description-subheader">
                <div class="subheader-content">
                    <i class="material-icons">calendar_month</i>
                    <div>August 1989</div>
                </div>
            </div>
        </div>
        <div class="description-section">
            <div class="description-header">Thesis Reader and Evaluator, Industrial Economics Program, University of Asia and the Pacific
            </div>
            <div class="description-subheader">
                <div class="subheader-content">
                    <i>“Abolition of 5% Tax on Life Insurance Premiums” by Matthew R. Tamaray</i>
                   
                </div>
                <div class="subheader-content">
                    <i>Determinants of Firm-Level Total Factor Productivity Growth in the Insurance Industry” by Merry-June Chua</i>
                </div>
                <div class="subheader-content">
                    <i class="material-icons">calendar_month</i>
                    <div>April 12 – May 10, 2002</div>
                </div>
            </div>
        </div>
        <div class="description-section">
            <div class="description-header">Manager/Player, SSS 2004 Inter-Department Badminton Team, SSS Head Office
            </div>
            <div class="description-subheader">
                <div class="subheader-content">
                    <i class="material-icons">calendar_month</i>
                    <div>July 2004</div>
                </div>
            </div>
        </div>
        <div class="description-section">
            <div class="description-header">Manager, Wildcatz Youth Basketball Team, SSS North Fairview Subdivision
            </div>
            <div class="description-subheader">
                <div class="subheader-content">
                    <i class="material-icons">calendar_month</i>
                    <div>Summer 2003</div>
                </div>
            </div>
        </div>
        <div class="description-section">
            <div class="description-header">Member, Planet Infinity
            </div>
            <div class="description-subheader">
                <div class="subheader-content">
                    <i class="material-icons">calendar_month</i>
                    <div>since May 2005</div>
                </div>
            </div>
        </div>
        <div class="description-section">
            <div class="description-header">Arena Fitness
            </div>
            <div class="description-subheader">
                <div class="subheader-content">
                    <i class="material-icons">calendar_month</i>
                    <div>since March 2005</div>
                </div>
            </div>
        </div>
        <div class="description-section">
            <div class="description-header">Powerflex Gym
            </div>
            <div class="description-subheader">
                <div class="subheader-content">
                    <i class="material-icons">calendar_month</i>
                    <div>January, 2001-December 2003</div>
                </div>
            </div>
        </div>
        <div class="description-section">
            <div class="description-header">Fund Managers Association of the Philippines
            </div>
            <div class="description-subheader">
                <div class="subheader-content">
                    <i class="material-icons">calendar_month</i>
                    <div>since 1999</div>
                </div>
            </div>
        </div>
        <div class="description-section">
            <div class="description-header">Slimmers World International
            </div>
            <div class="description-subheader">
                <div class="subheader-content">
                    <i class="material-icons">calendar_month</i>
                    <div>since 1996</div>
                </div>
            </div>
        </div>
        <div class="description-section">
            <div class="description-header">Operations Research Society of the Philippines (ORSP)
            </div>
            <div class="description-subheader">
                <div class="subheader-content">
                    <i class="material-icons">calendar_month</i>
                    <div>since March 1995</div>
                </div>
            </div>
        </div>
        <div class="description-section">
            <div class="description-header">American Mathematical Society (AMS)
            </div>
            <div class="description-subheader">
                <div class="subheader-content">
                    <i class="material-icons">calendar_month</i>
                    <div>since January 1995</div>
                </div>
            </div>
        </div>
        <div class="description-section">
            <div class="description-header">Pi Mu Epsilon Fraternity Incorporated, Connecticut Alpha
            </div>
            <div class="description-subheader">
                <div class="subheader-content">
                    <i class="material-icons">calendar_month</i>
                    <div>since May 1993</div>
                </div>
            </div>
        </div>
        <div class="description-section">
            <div class="description-header">Phi Kappa Phi International Honor Society
            </div>
            <div class="description-subheader">
                <div class="subheader-content">
                    <i class="material-icons">calendar_month</i>
                    <div>since January 1990</div>
                </div>
            </div>
        </div>
        <div class="description-section">
            <div class="description-header">Mathematical Association of America
            </div>
            <div class="description-subheader">
                <div class="subheader-content">
                    <i class="material-icons">calendar_month</i>
                    <div>June 1992 - December 1993</div>
                </div>
            </div>
        </div>
        <div class="description-section">
            <div class="description-header">Lauan Study Center Young Men’s Christmas Choir, Tenor 1
            </div>
            <div class="description-subheader">
                <div class="subheader-content">
                    <i class="material-icons">calendar_month</i>
                    <div>1987-1990</div>
                </div>
            </div>
        </div>
        <div class="description-section">
            <div class="description-header">UP Government Scholars' Association
            </div>
            <div class="description-subheader">
                <div class="subheader-content">
                    <i class="material-icons">calendar_month</i>
                    <div>1986-1988</div>
                </div>
            </div>
        </div>
        <div class="description-section">
            <div class="description-header">MSHS Performing Choir, Bass
            </div>
            <div class="description-subheader">
                <div class="subheader-content">
                    <i class="material-icons">calendar_month</i>
                    <div>1984-1986</div>
                </div>
            </div>
        </div>
        <div class="description-section">
            <div class="description-header">TPIPS Folk Dance Troupe
            </div>
            <div class="description-subheader">
                <div class="subheader-content">
                    <i class="material-icons">calendar_month</i>
                    <div>1980-1981</div>
                </div>
            </div>
        </div>
        <div class="description-section">
            <div class="description-header">TPIPS "Super Kulayeros" (Drawing Club)
            </div>
            <div class="description-subheader">
                <div class="subheader-content">
                    <i class="material-icons">calendar_month</i>
                    <div>1977-1978</div>
                </div>
            </div>
        </div>
        <div class="description-section">
            <div class="description-header">Judge, Inter-University Operations Research (O.R.) Quiz, Student Congress on Operations  Research, Ateneo de Manila University
            </div>
            <div class="description-subheader">
                <div class="subheader-content">
                    <i class="material-icons">calendar_month</i>
                    <div>February 2, 2002 & March 2003</div>
                </div>
            </div>
        </div>
        <div class="description-section">
            <div class="description-header">Local Mathematics Competition; MSHS
            </div>
            <div class="description-subheader">
                <div class="subheader-content">
                    <i class="material-icons">calendar_month</i>
                    <div>March 1990</div>
                </div>
            </div>
        </div>
        <div class="description-section">
            <div class="description-header">"Mathirang Matibay", regional inter-high school math contest; UP
            </div>
            <div class="description-subheader">
                <div class="subheader-content">
                    <i class="material-icons">calendar_month</i>
                    <div>November 1989</div>
                </div>
            </div>
        </div>
        <div class="description-section">
            <div class="description-header">"Dunong-Braso", inter-university academics-sports tilt; LSC
            </div>
            <div class="description-subheader">
                <div class="subheader-content">
                    <i class="material-icons">calendar_month</i>
                    <div>first semester 1989</div>
                </div>
            </div>
        </div>
        <div class="description-section">
            <div class="description-header">Member, Technical Committee on the National Health Insurance Costing Model, Health Finance Development Project
            </div>
            <div class="description-subheader">
                <div class="subheader-content">
                    <i class="material-icons">calendar_month</i>
                    <div>August 31, 1994 - December 31, 1994</div>
                </div>
            </div>
        </div>
        <div class="description-section">
            <div class="description-header">Reactor, On 2 papers
            </div>
            <div class="description-subheader">
                <div class="subheader-content">
                    "How Much Will It Cost To Set-UD And Administer A National Health Insurance Program" by Rhais Gamboa and Dinah Patao, Health Financing Development Project/USAID, and "How Much Will a National Health Insurance Cost? Some Issues, Questions, and Estimates" by Dr. Orville Solon and Dr. Joseph Capuno, U.P. School of Economics; Medicare Meeting IV, Asian Institute of Tourism.
                </div>
                <div class="subheader-content">
                    <i class="material-icons">calendar_month</i>
                    <div>February 23, 1994</div>
                </div>
            </div>
        </div>
        <div class="description-section">
            <div class="description-header">Officer, MSHS Math Club President
            </div>
            <div class="description-subheader">
                <div class="subheader-content">
                    <i class="material-icons">calendar_month</i>
                    <div>1985-1986</div>
                </div>
            </div>
        </div>
        <div class="description-section">
            <div class="description-header">The Nucleus, the official English newspaper of the MSHS
            </div>
            <div class="description-subheader">
                <div class="subheader-content">
                    <i class="material-icons">calendar_month</i>
                    <div>Associate Editor, (1985-1986)</div>
                </div>
                <div class="subheader-content">
                    <i class="material-icons">calendar_month</i>
                    <div>Staffer (1984-85)</div>
                </div>
            </div>
        </div>
        <div class="description-section">
            <div class="description-header">The Nucleus, the official English newspaper of the MSHS
            </div>
            <div class="description-subheader">
                <div class="subheader-content">
                    <i class="material-icons">calendar_month</i>
                    <div>Associate Editor, (1985-1986)</div>
                </div>
                <div class="subheader-content">
                    <i class="material-icons">calendar_month</i>
                    <div>Staffer (1984-85)</div>
                </div>
            </div>
        </div>
        <div class="description-section">
            <div class="description-header">MSHS Knights of Science, Vice President
            </div>
            <div class="description-subheader">
                <div class="subheader-content">
                    <i class="material-icons">calendar_month</i>
                    <div>1984-1985</div>
                </div>
            </div>
        </div>
        <div class="description-section">
            <div class="description-header">The Embryo, the official English newsletter of the MSHS
            </div>
            <div class="description-subheader">
                <div class="subheader-content">
                    <i class="material-icons">calendar_month</i>
                    <div>Editor-In-Chief (1983)</div>
                </div>
                <div class="subheader-content">
                    <i class="material-icons">calendar_month</i>
                    <div>News Editor (1984)</div>
                </div>
                <div class="subheader-content">
                    <i class="material-icons">calendar_month</i>
                    <div>staffer (1982-83)</div>
                </div>
            </div>
        </div>
        <div class="description-section">
            <div class="description-header">The Island Torch, the official newspaper of the elementary school of the TPIPS
            </div>
            <div class="description-subheader">
                <div class="subheader-content">
                    <i class="material-icons">calendar_month</i>
                    <div>Editor-In-Chief (1981-82)</div>
                </div>
                <div class="subheader-content">
                    <i class="material-icons">calendar_month</i>
                    <div>staffer (1978-82)</div>
                </div>
            </div>
        </div>
        <div class="description-section">
            <div class="description-header">Trigonometry and Calculus Lecturer, Advanced Placement Examinations Review, for Metro Manila incoming college freshmen; LSC
            </div>
            <div class="description-subheader">
                <div class="subheader-content">
                    <i class="material-icons">calendar_month</i>
                    <div>summer of 1987, 1988, 1989</div>
                </div>
            </div>
        </div>
        <div class="description-section">
            <div class="description-header">University of the Philippines representative to the following:
            </div>
            <div class="description-subheader">
                <div class="subheader-content">
                    <ul>
                        <li>Asia-Pacific Mathematical Olympiad, sponsored by Australian mathematical organizations and higher learning institutions; ADMU, 1990; as competitive stage for inclusion in the Philippine delegation to the 1990 International Mathematical Olympiad</li>
                        <li>Rifle-Pistol Shooting Competition, sponsored by the Philippine National Shooting Association; Fort Bonifacio, Metro Manila, 1987</li>
                        <li>14th and 15th Search for the Math Wizard of the Philippines, UP, 1986, 1987</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="description-section">
            <div class="description-header">Manila Science High School representative to the following journalism /science camps:
            </div>
            <div class="description-subheader">
                <div class="subheader-content">
                    <ul>
                        <li>9th National Capital Region Secondary Schools Press Conference, Nov. 1985</li>
                        <li>Science Summer Camp, College of Science, De La Salle Univ., Summer 1985</li>
                        <li>Junior Observer's Course, Philippine Astronomical Society, December 1984 ChemStart'84, Chemistry Dept., Ateneo de Manila University, Summer 1984</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

`};
//end segments

//summarized segments

const sh_international = `
<div class="box-section"><i class='material-icons'>public</i><div class='section-title'>International Experience</div></div>
<div class="box-description">
    <div class="description-section">
        <div class="description-header">Deputy Team Leader, Philippine delegation to the 31st International Mathematical Olympiad (IMO)</div>
        <div class="description-subheader">
            <div class="subheader-content">
                <i class="material-icons">location_on</i>
                <div>Beijing, China
                </div>
            </div>
            <div class="subheader-content">
                <i class="material-icons">calendar_month</i>
                <div>1990</div>
            </div>
        </div>
    </div>
    <div class="description-section">
        <div class="description-header">Actuarial Consultant</div>
        <div class="description-subheader">
            <div class="subheader-content">
                <i class="material-icons">location_on</i>
                <div>International Labour Organization, Fiji National Provident Fund
                </div>
            </div>
            <div class="subheader-content">
                <i class="material-icons">calendar_month</i>
                <div>June 15, 2008 – February 2009</div>
            </div>
        </div>
    </div>
    <div class="description-section">
        <div class="description-header">Social Security/Actuarial Consultant, Asian Development Bank’s Training on Social Security for the Society of Actuaries in Indonesia</div>
        <div class="description-subheader">
            <div class="subheader-content">
                <i class="material-icons">location_on</i>
                <div>Jakarta, Indonesia
                </div>
            </div>
            <div class="subheader-content">
                <i class="material-icons">calendar_month</i>
                <div>April 16, 2007 – April 29, 2007</div>
            </div>
        </div>
    </div>
    <div class="description-section">
        <div class="description-header">Social Security/Actuarial Consultant, Social Security For Private Sector Workshop for the Chief Labor Officers of the Kingdom of Bhutan</div>
        <div class="description-subheader">
            <div class="subheader-content">
                <i class="material-icons">location_on</i>
                <div>University of the Philippines, Quezon City, Philippines
                </div>
            </div>
            <div class="subheader-content">
                <i class="material-icons">calendar_month</i>
                <div>June 15, 2005 – June 30, 2005</div>
            </div>
        </div>
    </div>
    <div class="description-section">
        <div class="description-header">Actuarial Consultant, Training on Economic and Actuarial Concepts</div>
        <div class="description-subheader">
            <div class="subheader-content">
                <i class="material-icons">location_on</i>
                <div>Shenyan, Liaoning, China
                </div>
            </div>
            <div class="subheader-content">
                <i class="material-icons">calendar_month</i>
                <div>September 2002 – October 2002</div>
            </div>
        </div>
    </div>
    <div class="description-section">
        <div class="description-header">Resource Speaker / Actuarial Consultant, World Bank’s Modeling Pension Reform in China</div>
        <div class="description-subheader">
            <div class="subheader-content">
                <i class="material-icons">location_on</i>
                <div>Shenyan, Beijing, China
                </div>
            </div>
            <div class="subheader-content">
                <i class="material-icons">calendar_month</i>
                <div>June 4, 2001 – June 6, 2001</div>
            </div>
        </div>
    </div>

    <div class="description-section">
        <div class="description-header">The 12th Annual Global Absolute Return Congress Boston</div>
        <div class="description-subheader">
            <div class="subheader-content">
                <i class="material-icons">location_on</i>
                <div>Boston, United States of America
                </div>
            </div>
            <div class="subheader-content">
                <i class="material-icons">calendar_month</i>
                <div>October 20-22, 2014</div>
            </div>
        </div>
    </div>
    <div class="description-section">
        <div class="description-header">Private Equity Latin America Forum</div>
        <div class="description-subheader">
            <div class="subheader-content">
                <i class="material-icons">location_on</i>
                <div>New York City, United States of America
                </div>
            </div>
            <div class="subheader-content">
                <i class="material-icons">calendar_month</i>
                <div>June 8-9, 2015</div>
            </div>
        </div>
    </div>
    <div class="description-section">
        <div class="description-header">The 5th Annual Global Arc London</div>
        <div class="description-subheader">
            <div class="subheader-content">
                Global Absolute Return Congress
            </div>
            <div class="subheader-content">
                <i class="material-icons">calendar_month</i>
                <div>May 19-21, 2014</div>
            </div>
        </div>
    </div>
    <div class="description-section">
        <div class="description-header">2023 Amundi World Investment Forum</div>
        <div class="description-subheader">
            <div class="subheader-content">
                Amundi Asset Management
            </div>
            <div class="subheader-content">
                <i class="material-icons">location_on</i>
                <div>Paris, France
                </div>
            </div>
            <div class="subheader-content">
                <i class="material-icons">calendar_month</i>
                <div>June 22-23, 2023</div>
            </div>
        </div>
    </div>
    <div class="description-section">
        <div class="description-header">17th International Conference of Social Security Actuaries and Statisticians</div>
        <div class="description-subheader">
            <div class="subheader-content">
                <i class="material-icons">location_on</i>
                <div>International Social Security Association, Marina Congress Center, Berlin, Germany
                </div>
            </div>
            <div class="subheader-content">
                <i class="material-icons">calendar_month</i>
                <div>May 29-June 2, 2012</div>
            </div>
        </div>
    </div>
    <div class="description-section">
        <div class="description-header">14th International Conference of Social Security Actuaries and Statisticians</div>
        <div class="description-subheader">
            <div class="subheader-content">
                <i class="material-icons">location_on</i>
                <div>Mexico City
                </div>
            </div>
            <div class="subheader-content">
                <i class="material-icons">calendar_month</i>
                <div>September 23-25, 2003</div>
            </div>
        </div>
    </div>
    <div class="description-section">
        <div class="description-header">Workshop Expert, ISSA Academy Workshop on Actuarial Work for Social Security</div>
        <div class="description-subheader">
            <div class="subheader-content">
                <i class="material-icons">location_on</i>
                <div>New Delhi, India
                </div>
            </div>
            <div class="subheader-content">
                <i class="material-icons">calendar_month</i>
                <div>March 26, 2019 – March 28, 2019</div>
            </div>
        </div>
    </div>
    <div class="description-section">
        <div class="description-header">Speaker, 2017 APIC-JAPAN Pension Funds and Social Security Systems Summit</div>
        <div class="description-subheader">
            <div class="subheader-content">
                <i class="material-icons">location_on</i>
                <div>Shangri-la Hotel, Tokyo</div>
            </div>
            <div class="subheader-content">
                <i class="material-icons">calendar_month</i>
                <div>March 7, 2017</div>
            </div>
        </div>
    </div>
    <div class="description-section">
        <div class="description-header">3rd Annual Southeast Asian Institutional Investment Forum</div>
        <div class="description-subheader">
            <div class="subheader-content">
                <i class="material-icons">location_on</i>
                <div>Seoul, Korea
                </div>
            </div>
            <div class="subheader-content">
                <i class="material-icons">calendar_month</i>
                <div>December 6-7, 2011</div>
            </div>
        </div>
    </div>
    <div class="description-section">
        <div class="description-header">Speaker and Panelist, Asian Investors Asian Investment Summit</div>
        <div class="description-subheader">
            <div class="subheader-content">
                <i class="material-icons">location_on</i>
                <div>Conrad Hotel, Hong Kong
                </div>
            </div>
            <div class="subheader-content">
                <i class="material-icons">calendar_month</i>
                <div>May 17, 2007 – May 18, 2007</div>
            </div>
        </div>
    </div>
    <div class="description-section">
        <div class="description-header">Speaker, Asian Investors Asian Investment Summit</div>
        <div class="description-subheader">
            <div class="subheader-content">
                <i class="material-icons">location_on</i>
                <div>Conrad Hotel, Hong Kong
                </div>
            </div>
            <div class="subheader-content">
                <i class="material-icons">calendar_month</i>
                <div>May 2006</div>
            </div>
        </div>
    </div>
    <div class="description-section">
        <div class="description-header">Speaker, Bappenas Workshop "Towards a Viable Social Security System"</div>
        <div class="description-subheader">
            <div class="subheader-content">
                <i class="material-icons">location_on</i>
                <div>Jakarta, Indonesia
                </div>
            </div>
            <div class="subheader-content">
                <i class="material-icons">calendar_month</i>
                <div>June 24 2004 – June 26, 2004</div>
            </div>
        </div>
    </div>
    <div class="description-section">
        <div class="description-header">Pension Systems in Southeast Asia</div>
        <div class="description-subheader">
            <div class="subheader-content">
                <i class="material-icons">location_on</i>
                <div>Jakarta, Indonesia
                </div>
            </div>
            <div class="subheader-content">
                <i class="material-icons">calendar_month</i>
                <div>February 28 to March 4, 2005</div>
            </div>
        </div>
    </div>
    <div class="description-section">
        <div class="description-header">Lecturer, ISSA Regional Training Course for Asia & the Pacific</div>
        <div class="description-subheader">
            <div class="subheader-content">
                <i class="material-icons">location_on</i>
                <div>Bali, Indonesia
                </div>
            </div>
            <div class="subheader-content">
                <i class="material-icons">calendar_month</i>
                <div>October 13 2003 – October 22, 2003</div>
            </div>
        </div>
    </div>
    <div class="description-section">
        <div class="description-header">Workshop Expert, ISSA Academy Workshop on Investment of Social Security Funds</div>
        <div class="description-subheader">
            <div class="subheader-content">
                <i class="material-icons">location_on</i>
                <div>Kuala Lumpur, Malaysia
                </div>
            </div>
            <div class="subheader-content">
                <i class="material-icons">calendar_month</i>
                <div>December 8, 2015 – December 10, 2015</div>
            </div>
        </div>
    </div>
    <div class="description-section">
        <div class="description-header">Administration of a Provident Fund Board Social Security System</div>
        <div class="description-subheader">
            <div class="subheader-content">
                <i class="material-icons">location_on</i>
                <div>Singapore
                </div>
            </div>
            <div class="subheader-content">
                <i class="material-icons">calendar_month</i>
                <div>September 6 - 17, 2004</div>
            </div>
        </div>
    </div>
</div>
`;
const sh_experience = `
    <div class="box-section"><i class='material-icons'>work</i><div class='section-title'> Domestic Experience</div></div>
    <div class="box-description">
        <div class="description-section">
            <div class="description-header">Senior Lecturer III in Financial Analytics & Computer Operations Analysis</div>
            <div class="description-subheader">
                <div class="subheader-content">
                    <i class="material-icons">location_on</i>
                    <div>Department of Computer Science, College of Engineering, University of the Philippines, Diliman, Quezon City
                    </div>
                </div>
                <div class="subheader-content">
                    <i class="material-icons">calendar_month</i>
                    <div>August 2023 – present</div>
                </div>
            </div>
        </div>
        <div class="description-section">
            <div class="description-header">Executive Vice President / Investments Sector</div>
            <div class="description-subheader">
                <div class="subheader-content">
                    <i class="material-icons">location_on</i>
                    <div>Social Security System, Diliman, Quezon City, Philippines
                    </div>
                </div>
                <div class="subheader-content">
                    <i class="material-icons">calendar_month</i>
                    <div>September 24, 2014 – April 18, 2024</div>
                </div>
            </div>
        </div>
        <div class="description-section">
            <div class="description-header">Concurrent Overseer of the Actuarial and Risk Management Group (and EVP Investments Sector)</div>
            <div class="description-subheader">
                <div class="subheader-content">
                    <i class="material-icons">location_on</i>
                    <div>Social Security System, Diliman, Quezon City, Philippines
                    </div>
                </div>
                <div class="subheader-content">
                    <i class="material-icons">calendar_month</i>
                    <div>2023 – April 2024</div>
                </div>
            </div>
        </div>
        <div class="description-section">
            <div class="description-header">Concurrent Overseer, Information System Security Department and Information Technology Management Group</div>
            <div class="description-subheader">
                <div class="subheader-content">
                    <i class="material-icons">location_on</i>
                    <div>Social Security System, Diliman, Quezon City, Philippines
                    </div>
                </div>
                <div class="subheader-content">
                    <i class="material-icons">calendar_month</i>
                    <div>2023 – April 18, 2024</div>
                </div>
            </div>
        </div>
        <div class="description-section">
            <div class="description-header">Commissioner – Alternate for Social Security System, Employees Compensation Commission (ECC)
            </div>
            <div class="description-subheader">
                <div class="subheader-content">
                    <i class="material-icons">location_on</i>
                    <div>Social Security System, Diliman, Quezon City, Philippines</div>
                </div>
                <div class="subheader-content">
                    <i class="material-icons">calendar_month</i>
                    <div>July 17, 2019 – April 18, 2024</div>
                </div>
            </div>
        </div>
        <div class="description-section">
            <div class="description-header">Trustee, SSS Employee’s Provident Fund
            </div>
            <div class="description-subheader">
                <div class="subheader-content">
                    <i class="material-icons">location_on</i>
                    <div>Social Security System, Diliman, Quezon City, Philippines</div>
                </div>
                <div class="subheader-content">
                    <i class="material-icons">calendar_month</i>
                    <div>May 16, 2019 – June 30, 2013 and June 1, 2014 – April 18, 2024</div>
                </div>
            </div>
        </div>

        <div class="description-section">
            <div class="description-header">Trustee, Fund Managers Association of the Philippines, Inc, (FMAP)
            </div>
            <div class="description-subheader">
                <div class="subheader-content">
                    <i class="material-icons">location_on</i>
                    <div>Makati City, Philippines</div>
                </div>
                <div class="subheader-content">
                    <i class="material-icons">calendar_month</i>
                    <div>CY 2023 - April 2024</div>
                </div>
            </div>
        </div>
        <div class="description-section">
            <div class="description-header">Director, Operations Research Society of the Philippines
            </div>
            <div class="description-subheader">
                <div class="subheader-content">
                    <i class="material-icons">calendar_month</i>
                    <div>July 2000 - June 2002 and June 2019 – June 2021</div>
                </div>
            </div>
        </div>
        <div class="description-section">
            <div class="description-header">Chairman, Social Insurance Committee</div>
            <div class="description-subheader">
                <div class="subheader-content">
                    <i class="material-icons">location_on</i>
                    <div>Actuarial Society of the Philippines
                    </div>
                </div>
                <div class="subheader-content">
                    <i class="material-icons">calendar_month</i>
                    <div>2019 – April 2024</div>
                </div>
            </div>
        </div>
        <div class="description-section">
            <div class="description-header">Director, Philippine Dealing System Holdings Corporation
            </div>
            <div class="description-subheader">
                <div class="subheader-content">
                    <i class="material-icons">location_on</i>
                    <div>Makati City, Philippines</div>
                </div>
                <div class="subheader-content">
                    <i class="material-icons">calendar_month</i>
                    <div>April 4, 2014 – December 14, 2017 and April 26, 2018 – July 31, 2019</div>
                </div>
            </div>
        </div>
        <div class="description-section">
            <div class="description-header">Director, Philamlife Tower Management Corporation
            </div>
            <div class="description-subheader">
                <div class="subheader-content">
                    <i class="material-icons">location_on</i>
                    <div>Makati City, Philippines</div>
                </div>
                <div class="subheader-content">
                    <i class="material-icons">calendar_month</i>
                    <div>July 2018 - January 2022</div>
                </div>
            </div>
        </div>
        <div class="description-section">
            <div class="description-header">Member, Board of Directors, Equitable PCI Bank, Incorporated
            </div>
            <div class="description-subheader">
                <div class="subheader-content">
                    <i class="material-icons">location_on</i>
                    <div>Makati City, Philippines</div>
                </div>
                <div class="subheader-content">
                    <i class="material-icons">calendar_month</i>
                    <div>April 17, 2001 – April 15, 2002</div>
                </div>
            </div>
        </div>
        <div class="description-section">
            <div class="description-header">Member, Board of Directors, Al-Amanah Islamic Investment Bank of the Philippines
            </div>
            <div class="description-subheader">
                <div class="subheader-content">
                    <i class="material-icons">calendar_month</i>
                    <div>June 30, 2003 to May 16, 2005</div>
                </div>
            </div>
        </div>
        <div class="description-section">
            <div class="description-header">Director, Ionics Inc.
            </div>
            <div class="description-subheader">
                <div class="subheader-content">
                    <i class="material-icons">location_on</i>
                    <div>Makati City, Philippines</div>
                </div>
                <div class="subheader-content">
                    <i class="material-icons">calendar_month</i>
                    <div>September 2019 – February 2020</div>
                </div>
            </div>
        </div>

        <div class="description-section">
            <div class="description-header">Senior Lecturer in Quantitative Methods and Applications in Business and General Mathematics, Master of Business Administration (MBA) Program</div>
            <div class="description-subheader">
                <div class="subheader-content">
                    <i class="material-icons">location_on</i>
                    <div>Department of Business Administration, College of Business Administration, University of the Philippines, Diliman, Quezon City
                    </div>
                </div>
                <div class="subheader-content">
                    <i class="material-icons">calendar_month</i>
                    <div>Academic Years 1995-98; resumed 2003-2006</div>
                </div>
            </div>
        </div>
        <div class="description-section">
            <div class="description-header">Senior Lecturer in Survival Models</div>
            <div class="description-subheader">
                <div class="subheader-content">
                    <i class="material-icons">location_on</i>
                    <div>Department of Mathematics, College of Science, University of the Philippines
                    </div>
                </div>
                <div class="subheader-content">
                    <i class="material-icons">calendar_month</i>
                    <div>First Semester, AY 1994-95</div>
                </div>
            </div>
        </div>
        <div class="description-section">
            <div class="description-header">Senior Lecturer in Quantitative Methods and Applications (Management Science / Operations Research)</div>
            <div class="description-subheader">
                <div class="subheader-content">
                    <i class="material-icons">location_on</i>
                    <div>Department of Business Administration, College of Business Administration, University of the Philippines
                    </div>
                </div>
                <div class="subheader-content">
                    <i class="material-icons">calendar_month</i>
                    <div>First Semester, AY 1994-95</div>
                </div>
            </div>
        </div>
        <div class="description-section">
            <div class="description-header">University Instructor II of Mathematics</div>
            <div class="description-subheader">
                <div class="subheader-content">
                    <i class="material-icons">location_on</i>
                    <div>Department of Mathematics, University of the Philippines
                    </div>
                </div>
                <div class="subheader-content">
                    <i class="material-icons">calendar_month</i>
                    <div>Academic years (AY) 1989-91, on study leave 1st semester 1990</div>
                </div>
            </div>
        </div>
        <div class="description-section">
            <div class="description-header">Lecturer V in Actuarial Topics, Department of Math and Physics</div>
            <div class="description-subheader">
                <div class="subheader-content">
                    <i class="material-icons">location_on</i>
                    <div>College of Science, University of Santo Tomas, Espana, Manila
                    </div>
                </div>
                <div class="subheader-content">
                    <i class="material-icons">calendar_month</i>
                    <div>November 2007 – April 2008</div>
                </div>
            </div>
        </div>
        <div class="description-section">
            <div class="description-header">Lecturer V in Pension Mathematics and Valuation, Survival Models, Theory of Interest and Actuarial Research</div>
            <div class="description-subheader">
                <div class="subheader-content">
                    <i class="material-icons">location_on</i>
                    <div>College of Science, University of Santo Tomas, Espana, Manila
                    </div>
                </div>
                <div class="subheader-content">
                    <i class="material-icons">calendar_month</i>
                    <div>June 2002 – March 2006</div>
                </div>
            </div>
        </div>
        <div class="description-section">
            <div class="description-header">Assistant Professorial Lecturer V in Algebra and Mathematical Analysis</div>
            <div class="description-subheader">
                <div class="subheader-content">
                    <i class="material-icons">location_on</i>
                    <div>Department of Mathematics, College of Science, De La Salle University, Taft Avenue, Manila
                    </div>
                </div>
                <div class="subheader-content">
                    <i class="material-icons">calendar_month</i>
                    <div>May 2002 – December 2002 </div>
                </div>
            </div>
        </div>
        <div class="description-section">
            <div class="description-header">Lecturer in Business Statistics and Operations Management, Executive Development Programs / Leadership and Management Development Programs</div>
            <div class="description-subheader">
                <div class="subheader-content">
                    <i class="material-icons">location_on</i>
                    <div>Center for Continuing Education, Ateneo Graduate School of Business, Makati
                    </div>
                </div>
                <div class="subheader-content">
                    <i class="material-icons">location_on</i>
                    <div>Department of Management, College of Arts and Sciences, Ateneo de Manila University, Loyola Heights, Quezon City
                    </div>
                </div>
                <div class="subheader-content">
                    <i class="material-icons">calendar_month</i>
                    <div>AY 1995-99</div>
                </div>
            </div>
        </div>
    </div>
`;

let placeholder1 = document.createElement('div');
let placeholder2 = document.createElement('div');

const main = document.getElementById('main');
const mainDock = document.getElementById('main-dock');

const summarize = document.getElementById('summarize');
const complete = document.getElementById('complete');
const custom = document.getElementById('custom');

let cv1 = document.getElementById('summarize-cv');
let cv2 = document.getElementById('complete-cv');
let cv3 = document.getElementById('custom-cv');

cv2.style.display = 'none';
cv3.style.display = 'none';

summarize.checked = true;

// create subdock htmlFor summarized
const subdock1 = document.createElement('div');
subdock1.id = 'subdock1';
subdock1.classList.add('dock');

const bulletRadio = document.createElement('input');
bulletRadio.type = 'radio';
bulletRadio.id = 'bullet';
bulletRadio.name = 'subdock1';

const bulletLabel = document.createElement('label');
bulletLabel.htmlFor = 'bullet';
bulletLabel.id = 'bullet-l';
bulletLabel.textContent = 'Bullet Form';

const paragraphRadio = document.createElement('input');
paragraphRadio.type = 'radio';
paragraphRadio.id = 'paragraph';
paragraphRadio.checked = true;
paragraphRadio.name = 'subdock1';

const paragraphLabel = document.createElement('label');
paragraphLabel.htmlFor = 'paragraph';
paragraphLabel.id = 'paragraph-l';
paragraphLabel.textContent = 'Paragraph Form';

subdock1.appendChild(bulletRadio);
subdock1.appendChild(bulletLabel);
subdock1.appendChild(paragraphRadio);
subdock1.appendChild(paragraphLabel);
mainDock.after(subdock1);
// end subdock1

// create subdock htmlFor custom
const subdock2 = document.createElement('div');
subdock2.id = 'subdock2';
subdock2.classList.add('dock');

const acadRadio = document.createElement('input');
acadRadio.type = 'radio';
acadRadio.id = 'academic';
acadRadio.name = 'subdock2';
acadRadio.checked = true;

const actuRadio = document.createElement('input');
actuRadio.type = 'radio';
actuRadio.id = 'actuarial';
actuRadio.name = 'subdock2';

const inveRadio = document.createElement('input');
inveRadio.type = 'radio';
inveRadio.id = 'investment';
inveRadio.name = 'subdock2';

const itRadio = document.createElement('input');
itRadio.type = 'radio';
itRadio.id = 'it';
itRadio.name = 'subdock2';

const acadLabel = document.createElement('label');
acadLabel.htmlFor = 'academic';
acadLabel.id = 'academic-l';
acadLabel.textContent = 'Academic';

const actuLabel = document.createElement('label');
actuLabel.htmlFor = 'actuarial';
actuLabel.id = 'actuarial-l';
actuLabel.textContent = 'Actuarial';

const inveLabel = document.createElement('label');
inveLabel.htmlFor = 'investment';
inveLabel.id = 'investment-l';
inveLabel.textContent = 'Investments';

const itLabel = document.createElement('label');
itLabel.htmlFor = 'it';
itLabel.id = 'it-l';
itLabel.textContent = 'IT';

subdock2.appendChild(acadRadio);
subdock2.appendChild(acadLabel);
subdock2.appendChild(actuRadio);
subdock2.appendChild(actuLabel);
subdock2.appendChild(inveRadio);
subdock2.appendChild(inveLabel);
subdock2.appendChild(itRadio);
subdock2.appendChild(itLabel);
// end subdock 2

// create another filters subdock

const filters = document.createElement('div');
filters.classList.add('filter-container');
const filterHeader = document.createElement('div');
filterHeader.classList.add('filter-header');
filterHeader.innerHTML = 'Filters:';

filters.appendChild(filterHeader);

let li = {
    'education': 'Education', 
    'distinctions': 'Distinctions', 
    'boardMemberships': 'Board Memberships', 
    'adminRoles': 'Administrative Roles', 
    'international': 'International Experience', 
    'others': 'Other Domestic Experience', 
    'profAccreditations': 'Professional Accreditations', 
    'organizations': 'Organizations'
};

let filterButtons = [];
let filterOrders = [];

for(let key of Object.keys(li)){
    const filter = document.createElement('div');
    filter.classList.add('filter');
    filter.id = li[key];
    filter.innerHTML = li[key];
    
    filterButtons.push(filter);
    filters.appendChild(filter);
}
filterRequests();

// end filters subdock

// Button for CV listeners

summarize.addEventListener('click', function(){
    cv2.style.display = 'none';
    cv3.style.display = 'none';

    cv1.style.display = 'flex';

    // create more buttons
    if(subdock2){
        subdock2.remove();
    }
    if(filters){
        filters.remove();
    }
    mainDock.after(subdock1);
});

complete.addEventListener('click', function(){
    cv1.style.display = 'none';
    cv3.style.display = 'none';

    cv2.style.display = 'flex';

    subdock1.remove();
    if(subdock2){
        subdock2.remove();
    }
    if(filters){
        filters.remove();
    }
    matchHeight();
});

custom.addEventListener('click', function(){
    cv1.style.display = 'none';
    cv2.style.display = 'none';

    cv3.style.display = 'flex';

    // create more buttons

    subdock1.remove();
    mainDock.after(subdock2);
    subdock2.after(filters);
    matchHeight();
});

// Button for filters listeners

cv1.innerHTML = `
        <div class="box one">
            ${segments.intro}
        </div>
        <div class="box four">
            <p class="paragraph"><strong>Rizaldy Capulong</strong>, 55, is currently <strong>Senior Lecturer 3 at the Department of Computer Science, College of Engineering, University of the Philippines, Diliman, Quezon City</strong> where he teaches elective courses on <strong>Financial Analytics</strong>, a combination of <strong>actuarial science and investment management</strong> for career and retirement planning, and <strong>Computer Operations Analysis</strong>, a combination of <strong>management science / operations research</strong> applied to computer industry problems, and information communication technology laws and industry standards and practices, <strong>since August 2023</strong>.</p>
            <p class="paragraph">After <strong>35 years of government service</strong>, 33 years at the Social Security System (SSS) and 2 years at the University of the Philippines in Diliman (UPD), he retired in April 2024 as <strong>SSS Executive Vice President</strong> for Investments and <strong>overseer</strong> for actuarial and risk management, information technology management / information system security, benefit administration and management services, <strong>Commissioner</strong> -Alternate for the SSS at the Employees Compensation Commission, and <strong>trustee of the SSS Employees' Provident Fund</strong>. Over a <strong>30 year period</strong> from 1995 to 2024, he performed <strong>concurrent actuarial and investment functions</strong> for the SSS.</p>
            <p class="paragraph">Over a <strong>20-year period</strong> from 1989 to 2008 and since August 2023, he <strong>taught undergraduate, graduate and professional courses in the Philippines' top four universities</strong>. He became a full-time University Instructor 2 and later <strong>Senior Lecturer 3</strong> in three colleges in UPD: Science (1989-1995), Business Administration (1994-2008) and Engineering (2023 to present), a <strong>Lecturer V</strong> in the Department of Mathematics and Physics, University of Santo Tomas (2002 to 2008), where he <strong>taught actuarial science courses</strong>, <strong>Assistant Professorial Lecturer V</strong> in Mathematics Department, De La Salle University (2002) where he <strong>taught algebra and differential equations</strong>, and <strong>Lecturer</strong> in Ateneo de Manila University Management Department and Ateneo Graduate School of Business Center for Continuing Education (1995-2004) where he <strong>taught business statistics, operations management and operations research/management science</strong>.</p>
            <p class="paragraph"><strong>Internationally</strong>, he served as the <strong>Deputy Team Leader of the Philippine delegation to the 1990 International Mathematical Olympiad</strong>. Along with <strong>social security organizations</strong> in China, Indonesia, Malaysia, Thailand, Nepal, Bhutan, and Fiji, he was a <strong>consultant for the World Bank, Asian Development Bank, United Nations, International Labour Office, International Social Security Association, U.S.A.I.D. in Manila and Jakarta, and German Agency for Technical Cooperation (InWent)</strong>, over a 30-year period from 1993 to 2022. Over a 24-year period from 2000 to 2023, he was also a <strong>speaker at conferences and training programs</strong> in Boston, New York, London, Paris, Berlin, Mexico City, Montevideo, Kathmandu, New Delhi, Tokyo, Beijing, Shenyang, Seoul, Hong Kong, Jakarta, Bali, Bangkok, Kuala Lumpur, and Singapore, <strong>discussing investments and actuarial practice in social security</strong>.</p>
            <p class="paragraph"><strong>Domestically</strong>, he has served numerous professional associations and private firms as a <strong>committee chairman, board member, and trustee</strong>. He was a member of the <strong>board of trustees of the Fund Managers Association of the Philippines</strong> (2023-2024), and the <strong>board of directors of the Operations Research Society of the Philippines</strong> (2000-2002, 2019-2021), as well as <strong>chairman of the Social Insurance Committee of the Actuarial Society of the Philippines</strong> (2019-2023). He was also a <strong>director of the Philippine Dealing System Holdings (2014-2017, 2018-2019), Philamlife Tower Management Corporation, Equitable-PCIBank (2001-2002), Al-Amanah Islamic Investment Bank (2003-2005) and lonics, Inc. (2019-2020)</strong>.</p>
        </div>`;

cv2.innerHTML = `
    <div class="box one">
        ${segments.intro}
    </div>
    <div class="box two">
        ${segments.international}
        ${segments.education}
        ${segments.distinctions}
        ${segments.organizations}
    </div>
    <div class="box three">
        ${segments.actuarialWork}
        ${segments.investmentWork}
        ${segments.academicWork}
        ${segments.itWork}
        ${segments.boardMemberships}
        ${segments.adminRoles}
        ${segments.others}
    </div>
`;

bulletRadio.addEventListener('change', (e) => {
    if(e.target.checked){
        cv1.innerHTML = `
        <div class="box one">
            ${segments.intro}
        </div>
        <div class="box two">
            ${sh_international}
        </div>
        <div class="box three">
            ${sh_experience}
            ${segments.education}
        </div>
    `;
    // matchHeight();
    }
}); 

paragraphRadio.addEventListener('change', (e) => {
    if(e.target.checked){
        cv1.innerHTML = `
        <div class="box one">
            ${segments.intro}
        </div>
        <div class="box four">
            <p class="paragraph"><strong>Rizaldy Capulong</strong>, 55, is currently <strong>Senior Lecturer 3 at the Department of Computer Science, College of Engineering, University of the Philippines, Diliman, Quezon City</strong> where he teaches elective courses on <strong>Financial Analytics</strong>, a combination of <strong>actuarial science and investment management</strong> for career and retirement planning, and <strong>Computer Operations Analysis</strong>, a combination of <strong>management science / operations research</strong> applied to computer industry problems, and information communication technology laws and industry standards and practices, <strong>since August 2023</strong>.</p>
            <p class="paragraph">After <strong>35 years of government service</strong>, 33 years at the Social Security System (SSS) and 2 years at the University of the Philippines in Diliman (UPD), he retired in April 2024 as <strong>SSS Executive Vice President</strong> for Investments and <strong>overseer</strong> for actuarial and risk management, information technology management / information system security, benefit administration and management services, <strong>Commissioner</strong> -Alternate for the SSS at the Employees Compensation Commission, and <strong>trustee of the SSS Employees' Provident Fund</strong>. Over a <strong>30 year period</strong> from 1995 to 2024, he performed <strong>concurrent actuarial and investment functions</strong> for the SSS.</p>
            <p class="paragraph">Over a <strong>20-year period</strong> from 1989 to 2008 and since August 2023, he <strong>taught undergraduate, graduate and professional courses in the Philippines' top four universities</strong>. He became a full-time University Instructor 2 and later <strong>Senior Lecturer 3</strong> in three colleges in UPD: Science (1989-1995), Business Administration (1994-2008) and Engineering (2023 to present), a <strong>Lecturer V</strong> in the Department of Mathematics and Physics, University of Santo Tomas (2002 to 2008), where he <strong>taught actuarial science courses</strong>, <strong>Assistant Professorial Lecturer V</strong> in Mathematics Department, De La Salle University (2002) where he <strong>taught algebra and differential equations</strong>, and <strong>Lecturer</strong> in Ateneo de Manila University Management Department and Ateneo Graduate School of Business Center for Continuing Education (1995-2004) where he <strong>taught business statistics, operations management and operations research/management science</strong>.</p>
            <p class="paragraph"><strong>Internationally</strong>, he served as the <strong>Deputy Team Leader of the Philippine delegation to the 1990 International Mathematical Olympiad</strong>. Along with <strong>social security organizations</strong> in China, Indonesia, Malaysia, Thailand, Nepal, Bhutan, and Fiji, he was a <strong>consultant for the World Bank, Asian Development Bank, United Nations, International Labour Office, International Social Security Association, U.S.A.I.D. in Manila and Jakarta, and German Agency for Technical Cooperation (InWent)</strong>, over a 30-year period from 1993 to 2022. Over a 24-year period from 2000 to 2023, he was also a <strong>speaker at conferences and training programs</strong> in Boston, New York, London, Paris, Berlin, Mexico City, Montevideo, Kathmandu, New Delhi, Tokyo, Beijing, Shenyang, Seoul, Hong Kong, Jakarta, Bali, Bangkok, Kuala Lumpur, and Singapore, <strong>discussing investments and actuarial practice in social security</strong>.</p>
            <p class="paragraph"><strong>Domestically</strong>, he has served numerous professional associations and private firms as a <strong>committee chairman, board member, and trustee</strong>. He was a member of the <strong>board of trustees of the Fund Managers Association of the Philippines</strong> (2023-2024), and the <strong>board of directors of the Operations Research Society of the Philippines</strong> (2000-2002, 2019-2021), as well as <strong>chairman of the Social Insurance Committee of the Actuarial Society of the Philippines</strong> (2019-2023). He was also a <strong>director of the Philippine Dealing System Holdings (2014-2017, 2018-2019), Philamlife Tower Management Corporation, Equitable-PCIBank (2001-2002), Al-Amanah Islamic Investment Bank (2003-2005) and lonics, Inc. (2019-2020)</strong>.</p>
        </div>`;
        matchHeight();
    }
}); 

cv3.innerHTML = `
                <div class="box one">
                    ${segments.intro}
                </div>
                <div class="box two">
                    ${placeholder1.innerHTML}
                </div>
                <div class="box three">
                    ${segments.academicWork}
                    ${placeholder2.innerHTML}
                </div>`;

insertSegment(segments.academicWork);

acadRadio.addEventListener('change', (e) => {
    if(e.target.checked){
        cv3.innerHTML = `
                <div class="box one">
                    ${segments.intro}
                </div>
                <div class="box two">
                    ${placeholder1.innerHTML}
                </div>
                <div class="box three">
                    ${segments.academicWork}
                    ${placeholder2.innerHTML}
                </div>`;

        insertSegment(segments.academicWork);
        matchHeight();
    }
}); 
actuRadio.addEventListener('change', (e) => {
    if(e.target.checked){
        cv3.innerHTML = `
                <div class="box one">
                    ${segments.intro}
                </div>
                <div class="box two">
                    ${placeholder1.innerHTML}
                </div>
                <div class="box three">
                    ${segments.actuarialWork}
                    ${placeholder2.innerHTML}
                </div>`;

        insertSegment(segments.actuarialWork);
        matchHeight();
    }
}); 
inveRadio.addEventListener('change', (e) => {
    if(e.target.checked){
        cv3.innerHTML = `
                <div class="box one">
                    ${segments.intro}
                </div>
                <div class="box two">
                    ${placeholder1.innerHTML}
                </div>
                <div class="box three">
                    ${segments.investmentWork}
                    ${placeholder2.innerHTML}
                </div>`;

        insertSegment(segments.investmentWork);
        matchHeight();
    }
}); 
itRadio.addEventListener('change', (e) => {
    if(e.target.checked){
        cv3.innerHTML = `
                <div class="box one">
                    ${segments.intro}
                </div>
                <div class="box two">
                    ${placeholder1.innerHTML}
                </div>
                <div class="box three">
                    ${segments.itWork}
                    ${placeholder2.innerHTML}
                </div>`;
        insertSegment(segments.itWork);
        matchHeight();
    }
}); 


function matchHeight(){
    const containers = main.querySelectorAll('.container');
    for (let container of containers){
        const two = container.querySelector('.two');
        if(two){
            let computedHeight = null;

            const three = container.querySelector('.three');
            const four = container.querySelector('.four');

            if(three){
                computedHeight = window.getComputedStyle(three).height;
            }
            else if(four){
                computedHeight = window.getComputedStyle(four).height;
            }

            if(computedHeight){
                const comparedHeight = window.getComputedStyle(two).height;
                if(comparedHeight){
                    const l = parseFloat(comparedHeight);
                    const r = parseFloat(computedHeight);
                    if(l < r){
                        two.style.height = computedHeight;
                    }
                }
            }
        }
    }
}

matchHeight();


function filterRequests(){
    for(let button of filterButtons){
        button.addEventListener('click', function(){
            if(window.getComputedStyle(button).backgroundColor == 'rgba(1, 195, 140, 0.267)'){
                const order = document.createElement('div');
                order.classList.add('order');
                button.appendChild(order);

                filterOrders.push(order);

                button.style.backgroundColor = '#01c38c';
                button.style.color = '#ffffff';
                order.textContent = filterOrders.length;
                order.style.display = 'block';
            }
            else{
                let newOrder = button.querySelector('.order')
                let number = Number(newOrder.textContent);
                console.log(filterOrders);
                filterOrders.splice(number-1, 1);
                let currentNumber = 1;
                console.log(filterOrders);
                for(let order of filterOrders){
                    order.textContent = currentNumber;
                    currentNumber++;
                }

                button.style.backgroundColor = '#01c38c44';
                button.style.color = 'rgba(255, 255, 255, 0.329)';
                newOrder.remove()
            }
        });
    }
}

function insertSegment(workExperience){
    for(let button of filterButtons){
        button.addEventListener('click', function(){
            if(window.getComputedStyle(button).backgroundColor != 'rgba(1, 195, 140, 0.267)'){
                let order = -1;
                const orderPing = button.querySelector('.order');
                const clone = button.cloneNode(true);
                clone.querySelector('.order')?.remove();
                const val = clone.textContent;

                if(orderPing){
                    order = Number(orderPing.textContent);
                
                    for(let key of Object.keys(li)){
                        console.log("val:", val, "key:", li[key]);
                        if(val == li[key]){
                            const placeholder = document.createElement('div');
                            placeholder.classList.add('placeholder');
                            placeholder.id = li[key];
                            placeholder.innerHTML = segments[key];

                            if(order%2 != 0){
                                placeholder1.appendChild(placeholder);
                            }
                            else{
                                placeholder2.appendChild(placeholder);
                            }

                            cv3.innerHTML = `
                            <div class="box one">
                                ${segments.intro}
                            </div>
                            <div class="box two">
                                ${placeholder1.innerHTML}
                            </div>
                            <div class="box three">
                                ${workExperience}
                                ${placeholder2.innerHTML}
                            </div>`;
                            matchHeight();
                            break;
                        }
                    }
                }
            }
            else{
                placeholder1.innerHTML = '';
                placeholder2.innerHTML = '';
                
                let filterList = filters.querySelectorAll('.filter');

                for(let filterButton of filterList){
                    if(window.getComputedStyle(filterButton).backgroundColor != 'rgba(1, 195, 140, 0.267)'){
                        
                        let number = Number(filterButton.querySelector('.order').textContent);

                        const clone = filterButton.cloneNode(true);
                        clone.querySelector('.order')?.remove();
                        const val = clone.textContent;

                        for(let key of Object.keys(segments)){
                            if(val == li[key]){
                                const placeholder = document.createElement('div');
                                placeholder.classList.add('placeholder');
                                placeholder.id = li[key];
                                placeholder.innerHTML = segments[key];

                                if(number%2 != 0){
                                    placeholder1.appendChild(placeholder);
                                }
                                else{
                                    placeholder2.appendChild(placeholder);
                                }
                                break;
                            }
                        }
                    }
                }
                console.log('went');
                cv3.innerHTML = `
                <div class="box one">
                    ${segments.intro}
                </div>
                <div class="box two">
                    ${placeholder1.innerHTML}
                </div>
                <div class="box three">
                    ${workExperience}
                    ${placeholder2.innerHTML}
                </div>`;
                matchHeight();
            }
        });
    }
}

function printDiv(cv, block1, block2, isBlock) {
    if(block1.classList.contains('print')){
        block1.classList.remove('print');
        if(block1.querySelector('.four')){
            block1.classList.remove('block');
        }
    }
    if(block2.classList.contains('print')){
        block2.classList.remove('print');
        if(block2.querySelector('.four')){
            block2.classList.remove('block');
        }
    }

    if(isBlock){
        if(cv.querySelector('.four')){
            console.log('what');
            cv.classList.add('block');
        }
        else{
            if(cv.classList.contains('block')){
                cv.classList.remove('block');
            }
        }
    }
    else{
        if(cv.classList.contains('block')){
            cv.classList.remove('block');
        }
    }

    cv.classList.add('print');
    window.print();
}

const downloadButton = document.getElementById('download-cv');

downloadButton.addEventListener('click', function(){
    console.log(window.getComputedStyle(cv1).display);
    if(window.getComputedStyle(cv1).display == 'flex'){
        printDiv(cv1, cv2, cv3, 1);
    }
    else if(window.getComputedStyle(cv2).display == 'flex'){
        printDiv(cv2, cv1, cv3, 0);
    }
    else if(window.getComputedStyle(cv3).display == 'flex'){
        printDiv(cv3, cv1, cv2, 0);
    }
});