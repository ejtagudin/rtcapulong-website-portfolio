let isResizing = false;
const downloadButton = document.getElementById('download-cv');

let placeholder2 = document.createElement('div');
placeholder2.id = 'main-holder';

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
    'international': 'International Experience and Conferences',
    'locTrain': 'Local Seminars and Training', 
    'others': 'Other Domestic Experience', 
    'profAccreditations': 'Professional Accreditations', 
    'organizations': 'Organizations', 
    'consul': 'Consultancy'
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
    downloadButton.style.display = 'flex';

    cv1.style.display = 'flex';

    // create more buttons
    if(subdock2){
        subdock2.remove();
    }
    if(filters){
        filters.remove();
    }
});

complete.addEventListener('click', function(){
    cv1.style.display = 'none';
    cv3.style.display = 'none';
    downloadButton.style.display = 'none';

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
    downloadButton.style.display = 'none';

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
            <p>RIZALDY CAPULONG, 56, is currently Senior Lecturer 3 at the Department of Computer Science, College of Engineering, University of the Philippines, Diliman, Quezon City, where he teaches elective courses on Financial Analytics and Computer Operations Analysis, since August 2023.</p>
            <p>He recently concluded a 4-month actuarial consultancy assignment with the University of the Philippines Manila Development Foundation for a 2025 Unilab Center for Health Policy (UCHP)-funded project that assessed ₱3.5 trillion in health insurance claims, totaling nearly 90 million records from 2018 to 2024. The project aimed to review the existing benefit package of the Philippine Health Insurance Corporation (PhilHealth) and develop proposals for a supplemental benefit package, including pricing recommendations.</p>
            <p>After 35 years of government service, 33 years at the Social Security System (SSS) and 2 years at the University of the Philippines in Diliman (UPD), he retired from full-time government service in April 2024 as SSS Executive Vice President. Over a 30-year period from 1995 to 2024, he performed dual or concurrent actuarial and investment functions or positions for the SSS.</p>
            <p>Over a 20-year period from 1989 to 2008 and since August 2023, he taught quantitative undergraduate, graduate and professional courses at the Philippines’ top four universities.</p>
            <p>At the international level, he served as the Deputy Team Leader of the Philippine delegation to the 1990 International Mathematical Olympiad and served as actuarial, investment or social security consultant of the World Bank, Asian Development Bank, United Nations, International Labour Office, International Social Security Association, U.S.A.I.D. in Manila and Jakarta, German Agency for Technical Cooperation (InWent), as well as social security organizations in China, Indonesia, Malaysia, Thailand, Nepal, Bhutan, and Fiji, over a 30-year period from 1993 to 2022. He was also speaker on investments and actuarial practice in social security in various conferences and training programs in Boston, New York, London, Paris, Berlin, Mexico City, Montevideo, Kathmandu, New Delhi, Tokyo, Beijing, Shenyang, Seoul, Hong Kong, Jakarta, Bali, Bangkok, Kuala Lumpur and Singapore, over a 24-year period from 2000 to 2023.</p>
            <p>Professionally, he is an Associate of both the Society of Actuaries of North America (1994) and the Actuarial Society of the Philippines (1995), a Certified Associate Treasury Professional (2016) of the Bankers Association of the Philippines (BAP), and a Career Executive Service Officer of the Republic of the Philippines (2001). He completed several programs at the Asian Institute of Management including the one-year Trust Course of the Trust Officers Association of the Philippines (2010), the Financial Risk Management Program and the Enterprise-Wide Risk Management Program (2007).</p>
            <p>As an Asia Foundation Scholar, he earned a Master of Science in Mathematics - Actuarial Science degree from the University of Connecticut (1991–1993), and was elected to the United States National Mathematics Honor Society (Pi Mu Epsilon) as one of the most outstanding graduate students. </p>
            <p>Mr. Capulong also served as actuarial design and pricing consultant for community health insurance programs in the Philippine provinces of Bukidnon and Batanes as well as CLIMBS, a microinsurance provider in the Philippines.</p>
        </div>`;

cv2.innerHTML = `
    <div class="box one">
        ${segments.intro}
    </div>
    <div class="box two">
        ${segments.international}
        ${segments.consul}
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
            ${segments.education}
        </div>
        <div class="box three">
            ${sh_experience}
            ${sh_committe}
            ${sh_accreditations}
        </div>
    `;
    matchHeight();
    }
}); 

paragraphRadio.addEventListener('change', (e) => {
    if(e.target.checked){
        cv1.innerHTML = `<div class="box one">
            ${segments.intro}
        </div>
        <div class="box four">
            <p>RIZALDY CAPULONG, 56, is currently Senior Lecturer 3 at the Department of Computer Science, College of Engineering, University of the Philippines, Diliman, Quezon City, where he teaches elective courses on Financial Analytics and Computer Operations Analysis, since August 2023.</p>
            <p>He recently concluded a 4-month actuarial consultancy assignment with the University of the Philippines Manila Development Foundation for a 2025 Unilab Center for Health Policy (UCHP)-funded project that assessed ₱3.5 trillion in health insurance claims, totaling nearly 90 million records from 2018 to 2024. The project aimed to review the existing benefit package of the Philippine Health Insurance Corporation (PhilHealth) and develop proposals for a supplemental benefit package, including pricing recommendations.</p>
            <p>After 35 years of government service, 33 years at the Social Security System (SSS) and 2 years at the University of the Philippines in Diliman (UPD), he retired from full-time government service in April 2024 as SSS Executive Vice President. Over a 30-year period from 1995 to 2024, he performed dual or concurrent actuarial and investment functions or positions for the SSS.</p>
            <p>Over a 20-year period from 1989 to 2008 and since August 2023, he taught quantitative undergraduate, graduate and professional courses at the Philippines’ top four universities.</p>
            <p>At the international level, he served as the Deputy Team Leader of the Philippine delegation to the 1990 International Mathematical Olympiad and served as actuarial, investment or social security consultant of the World Bank, Asian Development Bank, United Nations, International Labour Office, International Social Security Association, U.S.A.I.D. in Manila and Jakarta, German Agency for Technical Cooperation (InWent), as well as social security organizations in China, Indonesia, Malaysia, Thailand, Nepal, Bhutan, and Fiji, over a 30-year period from 1993 to 2022. He was also speaker on investments and actuarial practice in social security in various conferences and training programs in Boston, New York, London, Paris, Berlin, Mexico City, Montevideo, Kathmandu, New Delhi, Tokyo, Beijing, Shenyang, Seoul, Hong Kong, Jakarta, Bali, Bangkok, Kuala Lumpur and Singapore, over a 24-year period from 2000 to 2023.</p>
            <p>Professionally, he is an Associate of both the Society of Actuaries of North America (1994) and the Actuarial Society of the Philippines (1995), a Certified Associate Treasury Professional (2016) of the Bankers Association of the Philippines (BAP), and a Career Executive Service Officer of the Republic of the Philippines (2001). He completed several programs at the Asian Institute of Management including the one-year Trust Course of the Trust Officers Association of the Philippines (2010), the Financial Risk Management Program and the Enterprise-Wide Risk Management Program (2007).</p>
            <p>As an Asia Foundation Scholar, he earned a Master of Science in Mathematics - Actuarial Science degree from the University of Connecticut (1991–1993), and was elected to the United States National Mathematics Honor Society (Pi Mu Epsilon) as one of the most outstanding graduate students. </p>
            <p>Mr. Capulong also served as actuarial design and pricing consultant for community health insurance programs in the Philippine provinces of Bukidnon and Batanes as well as CLIMBS, a microinsurance provider in the Philippines.</p>
        </div>`;
        matchHeight();
    }
}); 

cv3.innerHTML = `
                <div class="box one">
                    ${segments.intro}
                </div>
                <div class="box four">
                    ${placeholder2.innerHTML}
                    ${segments.academicWork}
                </div>`;
insertSegment(segments.academicWork);

acadRadio.addEventListener('change', (e) => {
    if(e.target.checked){
        cv3.innerHTML = `
                <div class="box one">
                    ${segments.intro}
                </div>
                <div class="box four">
                    ${placeholder2.innerHTML}
                    ${segments.academicWork}
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
                <div class="box four">
                    ${placeholder2.innerHTML}
                    ${segments.actuarialWork}
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
                <div class="box four">
                    ${placeholder2.innerHTML}
                    ${segments.investmentWork}
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
                <div class="box four">
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
                if (window.innerWidth >= 868) {
                    computedHeight = window.getComputedStyle(three).height;
                }
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

                            if(!placeholder2.innerHTML.includes(`id="${placeholder.id}"`)){
                                placeholder2.prepend(placeholder);
                            }

                            cv3.innerHTML = `
                            <div class="box one">
                                ${segments.intro}
                            </div>
                            <div class="box four">
                                ${placeholder2.innerHTML}
                                ${workExperience}
                            </div>`;
                            matchHeight();
                            break;
                        }
                    }
                }
            }
            else{
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
                                if (!placeholder2.innerHTML.includes(`id="${placeholder.id}"`)){
                                    placeholder2.prepend(placeholder);
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
                <div class="box four">
                    ${placeholder2.innerHTML}
                    ${workExperience}
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



downloadButton.addEventListener('click', async () => {
    // Load PDFKit library (make sure to include it in your project)
    const PDFDocument = require('pdfkit');
    const blobStream = require('blob-stream');

    // Create a document
    const doc = new PDFDocument({ autoFirstPage: false });

    // Create a stream to collect the PDF data
    const stream = doc.pipe(blobStream());

    // Get the CV element and its content
    const cvElement = document.getElementById('cv1');
    const cvContent = cvElement.innerHTML;
    
    // Add a page with proper dimensions
    doc.addPage({
        size: 'A4',
        margin: 50,
        layout: 'portrait'
    });

    // Convert HTML to PDF content
    // Note: This is simplified - you might need a more sophisticated HTML to PDF converter
    doc.text(cvContent, {
        width: 500,
        align: 'left'
    });

    // Finalize the PDF
    doc.end();

    // When done, create download link
    stream.on('finish', function() {
        const blob = stream.toBlob('application/pdf');
        const url = stream.toBlobURL('application/pdf');
        
        // Create download link
        const a = document.createElement('a');
        a.href = url;
        a.download = 'cv.pdf';
        a.click();
        
        // Clean up
        URL.revokeObjectURL(url);
    });
});
  
  
  

window.addEventListener('resize', () => {
    if (!isResizing) {
      console.log("User started resizing");
      isResizing = true;
      console.log(window.innerWidth);
      if (window.innerWidth < 868) {
        console.log('in');
        if(window.getComputedStyle(cv1).display == 'flex'){
            const two = cv1.querySelector('.two');
            console.log(two);
            if(two){
                two.style.height = 'auto';
            }

        }
        else if(window.getComputedStyle(cv2).display == 'flex'){
            const two = cv2.querySelector('.two');

            if(two){
                two.style.height = 'auto';
            }
        }
        else if(window.getComputedStyle(cv3).display == 'flex'){
            const two = cv3.querySelector('.two');

            if(two){
                two.style.height = 'auto';
            }
        }
      }
      else{
        matchHeight();
      }
    }
  
    // You can check window size here too
    

  
    clearTimeout(window.resizeTimer);
    window.resizeTimer = setTimeout(() => {
      console.log("User stopped resizing");
      isResizing = false;
    }, 250); // wait 250ms after last resize event
});

