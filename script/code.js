//about section
let about = document.querySelector('section#about .row:last-child')
let aboutContents = [
    "I graduated high school at Alexander Sinton Highh School in 2020",
    "My hobbies is to  play video games, pool and table tennis"
]
// Loop through the contents
aboutContents.forEach( (content)=>{
    about.innerHTML+=`
    <p class='lead'>${content}</p>`
} )
//Education
let education = [
    // {
    //     id: 1,
    //     year: 2020,
    //     description: 'I got my certificates on Data science',
    //     place: 'Data Camp',
    //     type: 'certificate',
    //     certificate: ''
    // },
    // {
    //     id: 2,
    //     year: 2019,
    //     description: 'I got my certificates on Advanced to Python',
    //     place: 'Data Camp',
    //     type: 'certificate',
    //     certificate: ''
    // },
    // {
    //     id: 3,
    //     year: 2018,
    //     description: 'I got my certificates on Intro to Python',
    //     place: 'Data Camp',
    //     type: 'certificate',
    //     certificate: ''
    // },
    {
        id: 4,
        year: 2022,
        description: 'I did a business adminstrative course',
        place: 'TSIBA',
        type: 'certificate',
        certificate: ''
    },
    {
        id: 5,
        year: 2022,
        description: 'I worked for markhams part-time',
        place: 'Markhams',
        type: 'Job',
        certificate: ''
    },
    {
        id: 6,
        year: 2021,
        description: 'I did my course on I.T tecnical support',
        place: 'icollege',
        type: 'Certificate',
        certificate: ''
    },
    {
        id: 7,
        year: 2020,
        description: 'Grade 12',
        place: '',
        type: 'Certificate',
        certificate: ''
    },
]
//
let divEducation = document.querySelector('.education');
education.forEach((data)=> {
    divEducation.innerHTML += `
    <div class="card">
        <h4 class="display-4">${data.year}</h4>
        <div class="card-body">
            <p class="text-white">
                ${data.description} @ <span>${data.place}</span> 
                <a href="${data.certificate}" target="_blank">${data.type}</a>
            </p>
        </div>
    </div>
    `
})
// 