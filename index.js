
const timelineHolder = document.getElementById('timeline-holder');
const buttonLeft = document.getElementById('button-left');
const buttonRight = document.getElementById('button-right');

const leftShadow = document.createElement('div');
const rightShadow = document.createElement('div');
rightShadow.classList.add('shadow-right');

buttonLeft.before(leftShadow);
buttonLeft.before(rightShadow);

timelineHolder.addEventListener('scroll', () => {

    if(timelineHolder.scrollLeft == 0){
        if(leftShadow.classList.contains('shadow-left')){
            leftShadow.classList.remove('shadow-left');
        }
        if(!rightShadow.classList.contains('shadow-right')){
            rightShadow.classList.add('shadow-right');
        }
        
        buttonLeft.style.display = 'none';
        buttonRight.style.display = 'flex';
    }
    else if(Math.ceil(timelineHolder.scrollLeft + timelineHolder.clientWidth) >= timelineHolder.scrollWidth){
        if(!leftShadow.classList.contains('shadow-left')){
            leftShadow.classList.add('shadow-left');
        }
        if(rightShadow.classList.contains('shadow-right')){
            rightShadow.classList.remove('shadow-right');
        }
        
        

        buttonLeft.style.display = 'flex';
        buttonRight.style.display = 'none';
    }
    else{
        leftShadow.classList.add('shadow-left');
        rightShadow.classList.add('shadow-right');

        buttonLeft.style.display = 'flex';
        buttonRight.style.display = 'flex';
    }
    
    const timelineBox = timelineHolder.querySelectorAll('.timeline-box');
    let minIdx = -1;
    let min = Infinity;
    let mainBox = timelineHolder.getBoundingClientRect();
    for(let i = 0; i < timelineBox.length; i++){
        let box = timelineBox[i].getBoundingClientRect();
        
        if(timelineHolder.scrollLeft == 0){
            minIdx = 0;
        }
        else if(Math.ceil(timelineHolder.scrollLeft + timelineHolder.clientWidth) >= timelineHolder.scrollWidth){
            minIdx = timelineBox.length-1;
        }
        if(box.left > mainBox.left && box.right < mainBox.right){
            if(Math.abs(box.left - box.right) < min){
                min = Math.abs(box.left - box.right);
                minIdx = i;
            }
        }
        
        // console.log(`Box ${i}`, timelineBox[i].getBoundingClientRect());
    }

    const targetBox = timelineBox[minIdx];
    
    styleBox(targetBox);
    removeStyleBox(timelineBox, minIdx);
});

buttonLeft.addEventListener('click', () => {
    timelineHolder.scrollBy({ left: -200, behavior: 'smooth' });
  });
  
buttonRight.addEventListener('click', () => {
    timelineHolder.scrollBy({ left: 200, behavior: 'smooth' });
  });


function styleBox(targetBox){
    const lineYear = targetBox.querySelector('.line-year');
    const lines = lineYear.querySelectorAll('.line');
    const timelineYear = targetBox.querySelector('.timeline-year');
    timelineYear.style.border = '3px solid #01c38d';
    timelineYear.style.color = '#01c38d';
    for (let line of lines){
        line.style.backgroundColor = '#01c38d';
    }
    const entries = targetBox.querySelectorAll('.timeline-entry');
    for(let entry of entries){
        const entryTitle = entry.querySelector('.box-title');
        const entryDate = entry.querySelector('.box-date');
        entryTitle.style.color = 'white';
        entryDate.style.color = 'white';
        entry.style.background = 'linear-gradient(-45deg, #01c38c24 .25%, #4facfe00 46%)';
    }
}

function removeStyleBox(boxes, idx){
    for (let i = 0; i < boxes.length; i++){
        if(i != idx){
            const lineYear = boxes[i].querySelector('.line-year');
            const lines = lineYear.querySelectorAll('.line');
            const timelineYear = boxes[i].querySelector('.timeline-year');
            timelineYear.style.border = '3px solid white';
            timelineYear.style.color = 'white';
            for (let line of lines){
                line.style.backgroundColor = 'white';
            }
            const entries = boxes[i].querySelectorAll('.timeline-entry');
            for(let entry of entries){
                const entryTitle = entry.querySelector('.box-title');
                const entryDate = entry.querySelector('.box-date');
                entryTitle.style.color = 'rgba(255, 255, 255, 0.205)';
                entryDate.style.color = 'rgba(255, 255, 255, 0.205)';
                entry.style.background = 'linear-gradient(-45deg, #01c38c00 .25%, #4facfe00 46%)';
            }
        }
    }
}


const keys = Object.keys(segments);
let timelineContents = {};


const tags = {
    'education': 'Education',
    'distinctions': 'Distinctions',
    'boardMemberships': 'Board Memberships',
    'academicWork': 'Academic',
    'actuarialWork':'Actuarial',
    'investmentWork':'Investments',
    'itWork':'Information Technology',
    'adminRoles':'Administrative',
    'international':'International',
    'profAccreditations':'Accreditations',
    'organizations':'Organizations'
}

for(let key of keys){
    if(key == 'intro'){
        continue;
    }
    else if(key == 'others'){
        const keywords = [
            'participated', 'attended' ,'held', 'delivered', 'conducted', 'shared', 'presented', 'supervised', 'proposed', 'spoke', 'talked', 'january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december', 'trained', 'dusit', 
        ]

        const temp = document.createElement('div');
        temp.innerHTML = segments[key];

        const listEntries = temp.querySelectorAll('.list-entries');
        
        for(let ul of listEntries){
            for(let li of ul.children){
                const parsed = parseString(li.innerHTML, keywords);
                if(!(parsed[1] in timelineContents)){
                    timelineContents[parsed[1]] = [{'info':parsed[0], 'tag': 'Domestic'}];
                }
                else{
                    timelineContents[parsed[1]].push({'info':parsed[0], 'tag': 'Domestic'});
                }
            }
        }


    }
    else{
        const temp = document.createElement('div');
        temp.innerHTML = segments[key];
        
        const descriptions = temp.querySelectorAll('.description-section');
        for(let desc of descriptions){
            const header = desc.querySelector('.description-header').innerHTML;
            const subheader = desc.querySelector('.description-subheader');
            const contents = subheader.querySelectorAll('.subheader-content');
            for(let content of contents){
                const i = content.querySelector('.material-icons');
                if(i){
                    if(i.innerHTML == 'calendar_month'){
                        if(!(matchString(content.textContent) in timelineContents)){
                            timelineContents[matchString(content.textContent)] = [{'info':header.trim(), 'tag': tags[key]}];
                        }
                        else{
                            timelineContents[matchString(content.textContent)].push({'info':header.trim(), 'tag': tags[key]});
                        }
                        break;
                    }
                }
            }
        }
    }
}

const timelineEntries = document.getElementById('timeline-holder');

for(let key of Object.keys(timelineContents)){
    const timelineBox = document.createElement('div');
    timelineBox.classList.add('timeline-box');
    
    timelineBox.innerHTML =  `
        <div class="line-year"><div class="line"></div><div class="timeline-year">${key}</div><div class="line"></div></div>
    `;

    const timelineSubBox = document.createElement('div');
    timelineSubBox.classList.add('timeline-subbox');

    for(let content of timelineContents[key]){
        const timelineEntry = document.createElement('div');
        timelineEntry.classList.add('timeline-entry');

        timelineEntry.innerHTML = `
            <div class="box-title">${content.info}</div>
            <div class="box-date">${content.tag}</div>
        `;
        timelineSubBox.appendChild(timelineEntry);
    }

    timelineBox.appendChild(timelineSubBox);
    buttonLeft.before(timelineBox);
}

function matchString(string){
    if(string.match(/\b(19|20)\d{2}\b/)){
        return string.match(/\b(19|20)\d{2}\b/)[0];
    }
    else{
        return 'No Date';
    }
}

function parseString(string, keywords){
    const newDate = matchString(string);
    let newString;
    let words = string.split(" ");

    for(let i = 0; i < words.length; i++){
        let checkString = words[i].toLowerCase().replace(/[\s\n,\.]+$/g, '');
        if(keywords.includes(checkString)){
            newString = words.slice(0, i).join(" ");
            newString = newString.replace(/[\s\n,\.]+$/g, '');
            break;
        }
    }

    if(newString == null){
        newString = string;
    }
    return [newString, newDate];
}

const timelineBox = timelineHolder.querySelectorAll('.timeline-box');
console.log(timelineBox);
styleBox(timelineBox[0]);
