const eleContainer = document.querySelector('.container');

const arrProfiles = [
    {
        img: 'wayne-barnett-founder-ceo.jpg',
        name: 'Wayne Barnett',
        occupation: 'Founder & CEO',
    },
    {
        img: 'angela-caroll-chief-editor.jpg',
        name: 'Angela Caroll',
        occupation: 'Chief Editor',
    },
    {
        img: 'walter-gordon-office-manager.jpg',
        name: 'Walter Gordon',
        occupation: 'Office Manager',
    },
    {
        img: 'angela-lopez-social-media-manager.jpg',
        name: 'Angela Lopez',
        occupation: 'Social Media Manager',
    },
    {
        img: 'scott-estrada-developer.jpg',
        name: 'Scott Estrada',
        occupation: 'Developer',
    },
    {
        img: 'barbara-ramos-graphic-designer.jpg',
        name: 'Barbara Ramons',
        occupation: 'Graphic Designer',
    },
];

for (let i = 0; i < arrProfiles.length; i++) {
    const eleCard = document.createElement('div');
    eleCard.classList.add('card');
    eleContainer.appendChild(eleCard);
    for (let key in arrProfiles[i]) {
        if (key == 'img') {
            let eleImg = `<img src="img/${arrProfiles[i][key]}">`;
            eleCard.innerHTML += eleImg;
        }else if (key == 'name') {
            let eleString = `<p class="name">${arrProfiles[i][key]}</p>`
            eleCard.innerHTML += eleString;
        }else {
            let eleString = `<p class="job">${arrProfiles[i][key]}</p>`
            eleCard.innerHTML += eleString
        }
    }
};

