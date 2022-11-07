const arrProfiles = [
    {
        name: 'Wayne Barnett',
        occupation: 'Founder & CEO',
        img: 'wayne-barnett-founder-ceo.jpg',
    },
    {
        name: 'Angela Caroll',
        occupation: 'Chief Editor',
        img: 'angela-caroll-chief-editor.jpg',
    },
    {
        name: 'Walter Gordon',
        occupation: 'Office Manager',
        img: 'walter-gordon-office-manager.jpg',
    },
    {
        name: 'Angela Lopez',
        occupation: 'Social Media Manager',
        img: 'angela-lopez-social-media-manager.jpg',
    },
    {
        name: 'Scott Estrada',
        occupation: 'Developer',
        img: 'scott-estrada-developer.jpg',
    },
    {
        name: 'Barbara Ramons',
        occupation: 'Graphic Designer',
        img: 'barbara-ramos-graphic-designer.jpg',
    },
];

for (let i = 0; i < arrProfiles.length; i++) {
    for (let key in arrProfiles[i]) {
        const eleString = document.createElement('p');
        eleString.innerHTML = `${key}: ${arrProfiles[i][key]}`;
        document.body.appendChild(eleString);
    }
    
};

