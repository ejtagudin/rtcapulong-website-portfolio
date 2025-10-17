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
let flag = 0;
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
    flag = 0;
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
    flag = 1;
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
    flag = 2;
});

// Button for filters listeners

const summary = `
<p>RIZALDY CAPULONG, 56, is currently Senior Lecturer 3 at the Department of Computer Science, College of Engineering, University of the Philippines, Diliman, Quezon City, where he teaches elective courses on Financial Analytics and Computer Operations Analysis, since August 2023.</p>
<p>He recently concluded a 4-month actuarial consultancy assignment with the University of the Philippines Manila Development Foundation for a 2025 Unilab Center for Health Policy, UCHP, funded project that assessed Php3.5 trillion in health insurance claims, totaling nearly 90 million records from 2018 to 2024. The project aimed to review the existing benefit package of the Philippine Health Insurance Corporation (PhilHealth) and develop proposals for a supplemental benefit package, including pricing recommendations.</p>
<p>After 35 years of government service, 33 years at the Social Security System (SSS) and 2 years at the University of the Philippines in Diliman (UPD), he retired from full-time government service in April 2024 as SSS Executive Vice President. Over a 30-year period from 1995 to 2024, he performed dual or concurrent actuarial and investment functions or positions for the SSS.</p>
<p>Over a 20-year period from 1989 to 2008 and since August 2023, he taught quantitative undergraduate, graduate and professional courses at the Philippines’ top four universities.</p>
<p>At the international level, he served as the Deputy Team Leader of the Philippine delegation to the 1990 International Mathematical Olympiad and served as actuarial, investment or social security consultant of the World Bank, Asian Development Bank, United Nations, International Labour Office, International Social Security Association, U.S.A.I.D. in Manila and Jakarta, German Agency for Technical Cooperation (InWent), as well as social security organizations in China, Indonesia, Malaysia, Thailand, Nepal, Bhutan, and Fiji, over a 30-year period from 1993 to 2022. He was also speaker on investments and actuarial practice in social security in various conferences and training programs in Boston, New York, London, Paris, Berlin, Mexico City, Montevideo, Kathmandu, New Delhi, Tokyo, Beijing, Shenyang, Seoul, Hong Kong, Jakarta, Bali, Bangkok, Kuala Lumpur and Singapore, over a 24-year period from 2000 to 2023.</p>
<p>Professionally, he is an Associate of both the Society of Actuaries of North America (1994) and the Actuarial Society of the Philippines (1995), a Certified Associate Treasury Professional (2016) of the Bankers Association of the Philippines (BAP), and a Career Executive Service Officer of the Republic of the Philippines (2001). He completed several programs at the Asian Institute of Management including the one-year Trust Course of the Trust Officers Association of the Philippines (2010), the Financial Risk Management Program and the Enterprise-Wide Risk Management Program (2007).</p>
<p>As an Asia Foundation Scholar, he earned a Master of Science in Mathematics - Actuarial Science degree from the University of Connecticut (1991–1993), and was elected to the United States National Mathematics Honor Society (Pi Mu Epsilon) as one of the most outstanding graduate students. </p>
<p>Mr. Capulong also served as actuarial design and pricing consultant for community health insurance programs in the Philippine provinces of Bukidnon and Batanes as well as CLIMBS, a microinsurance provider in the Philippines.</p>
`;

cv1.innerHTML = `
        <div class="box one">
            ${segments.intro}
        </div>
        <div class="box four">${summary}</div>`;

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
        <div class="box four">${summary}</div>`;
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

const completed = `
    <p>${segments.international}</p>
    <p>${segments.consul}</p>
    <p>${segments.actuarialWork}</p>
    <p>${segments.investmentWork}</p>
    <p>${segments.academicWork}</p>
    <p>${segments.boardMemberships}</p>
    <p>${segments.locTrain}</p>
    <p>${segments.itWork}</p>
    <p>${segments.adminRoles}</p>
    <p>${segments.education}</p>
    <p>${segments.distinctions}</p>
    <p>${segments.organizations}</p>
    <p>${segments.others}</p>
`;

const download1 = document.createElement("button");
download1.classList.add('down-button');
download1.innerHTML = '<i class="material-icons">picture_as_pdf</i><div>PDF</div>';

const download2 = document.createElement("button");
download2.classList.add('down-button');
download2.innerHTML = '<i class="material-icons">article</i><div>DOCX</div>';

downloadButton.addEventListener("click", () => {
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');
    const downloads = document.createElement('div');

    downloads.classList.add('downloads');
    downloads.appendChild(download1);
    downloads.appendChild(download2);
    
    overlay.appendChild(downloads);
    document.body.appendChild(overlay);
});

download1.addEventListener("click", () => {
    let box4 = cv3.getElementsByClassName('four');
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    
    // Combine all your HTML sources into one string
    const combinedHTML = `
        ${segments.intro || ""}
        ${flag === 0 ? summary || "" : ""}
        ${flag === 1 ? completed : ""}
        ${flag !== 0 && flag !== 1 ? box4[0].innerHTML : ""}
    `;

    const temp = document.createElement("div");
    temp.innerHTML = combinedHTML;
    temp.querySelectorAll("style, script, svg, i, .material-icons").forEach(el => el.remove());

    // Flattened text blocks with style
    const textBlocks = [];
    function extractText(node, parentStyle = "normal") {
        if (node.nodeType === Node.TEXT_NODE) {
            const clean = node.textContent.replace(/\s+/g, " ").trim();
            if (clean) textBlocks.push({ text: clean, style: parentStyle });
        } else if (node.nodeType === Node.ELEMENT_NODE) {
            const tag = node.tagName.toLowerCase();
            if (["style", "script", "svg", "i"].includes(tag)) return;

            let currentStyle = parentStyle;
            if (node.classList.contains("box-title")) currentStyle = "box-title";
            else if (node.classList.contains("box-subheader")) currentStyle = "box-subheader";
            else if (node.classList.contains("section-title")) currentStyle = "section-title";
            else if (node.classList.contains("description-header")) currentStyle = "description-header";

            for (const child of node.childNodes) extractText(child, currentStyle);
        }
    }

    extractText(temp);

    // PDF settings
    const marginX = 20;
    const marginY = 20;
    const lineHeight = 6;
    const paraGap = 1;
    const maxWidth = 170;
    let y = marginY;
    let firstSectionTitle = true; // only once outside the loop

    for (const { text, style } of textBlocks) {
        if (!text) continue;

        // Page break before section-title except for the first one
        if (style === "section-title") {
            if (!firstSectionTitle && y !== marginY) {
                doc.addPage();
                y = marginY;
            }
            firstSectionTitle = false;
        }

        // Extra top space for section-title if you want
        if (style === "section-title") {
            y += 3; 
        }

        // Set font styles
        if (style === "box-title") {
            doc.setFont("helvetica", "bold");
            doc.setFontSize(18); 
            y += 3;
        } else if (style === "box-subheader") {
            doc.setFont("helvetica", "bold");
            doc.setFontSize(16);
        } else if (style === "section-title") {
            doc.setFont("helvetica", "bold");
            doc.setFontSize(14);
        } else if (style === "description-header") {
            doc.setFont("helvetica", "bold");
            doc.setFontSize(12);
        } else {
            doc.setFont("helvetica", "normal");
            doc.setFontSize(12);
        }

        const lines = doc.splitTextToSize(text, maxWidth);
        if (y + lines.length * lineHeight > 280) {
            doc.addPage();
            y = marginY;
        }

        doc.text(lines, marginX, y);

        // Underline for section-title and box-subheader
        if (style === "section-title" || style === "box-subheader") {
            const underlineY = y + 2;
            doc.setLineWidth(0.5);
            doc.line(marginX, underlineY, marginX + maxWidth, underlineY);
        }

        y += lines.length * lineHeight + paraGap;

        // Extra bottom spacing for box-subheader
        if (style === "box-subheader") {
            y += 3; 
        }
    }

    doc.save("Rizaldy_Capulong_CV.pdf");
    document.body.getElementsByClassName('overlay')[0].remove();
});


download2.addEventListener("click", async () => {
    let box4 = cv3.getElementsByClassName('four');

    const combinedHTML = `
        ${segments.intro || ""}
        ${flag === 0 ? (summary || "") : ""}
        ${flag === 1 ? (completed || "") : ""}
        ${(flag !== 0 && flag !== 1 && box4.length > 0) ? box4[0].innerHTML : ""}
    `;

    const temp = document.createElement("div");
    temp.innerHTML = combinedHTML;
    temp.querySelectorAll("style, script, svg, i, .material-icons").forEach(el => el.remove());

    const textBlocks = [];
    function extractText(node, parentStyle = "normal") {
        if (node.nodeType === Node.TEXT_NODE) {
            const clean = node.textContent.replace(/\s+/g, " ").trim();
            if (clean) textBlocks.push({ text: clean, style: parentStyle });
        } else if (node.nodeType === Node.ELEMENT_NODE) {
            const tag = node.tagName.toLowerCase();
            if (["style", "script", "svg", "i"].includes(tag)) return;

            let currentStyle = parentStyle;
            if (node.classList.contains("box-title")) currentStyle = "box-title";
            else if (node.classList.contains("box-subheader")) currentStyle = "box-subheader";
            else if (node.classList.contains("section-title")) currentStyle = "section-title";
            else if (node.classList.contains("description-header")) currentStyle = "description-header";

            for (const child of node.childNodes) extractText(child, currentStyle);
        }
    }

    extractText(temp);

    const { Document, Packer, Paragraph, TextRun } = window.docx;
    const docContent = [];

    let firstSectionTitle = true;

    for (const { text, style } of textBlocks) {
        if (!text) continue;

        // Page break before every section-title except the first one
        if (style === "section-title") {
            if (!firstSectionTitle) {
                docContent.push(new Paragraph({ text: "", pageBreakBefore: true }));
            }
            firstSectionTitle = false;
        }

        let paragraphOptions = {};
        let textRunOptions = { text };

        if (style === "box-title") {
            textRunOptions = { text, bold: true, size: 36 }; // 18pt
        } else if (style === "box-subheader") {
            textRunOptions = { text, bold: true, size: 32 }; // 16pt
        } else if (style === "section-title") {
            // ✅ Fixed underline here
            textRunOptions = { text, bold: true, size: 28, underline: { type: "single" } }; // 14pt underline
        } else if (style === "description-header") {
            textRunOptions = { text, bold: true, size: 24 };
        } else {
            textRunOptions = { text, size: 24 }; // 12pt normal
        }

        paragraphOptions.children = [new TextRun(textRunOptions)];
        paragraphOptions.spacing = { after: 100 };
        docContent.push(new Paragraph(paragraphOptions));
    }

    const doc = new Document({
        sections: [{
            properties: {},
            children: docContent,
        }],
    });

    const blob = await Packer.toBlob(doc);
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "Rizaldy_Capulong_CV.docx";
    link.click();

    document.body.getElementsByClassName('overlay')[0].remove();
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

