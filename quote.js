let btn = document.querySelector('#btn')
let quote = document.querySelector('.quote')
let person = document.querySelector('.person')

const quotes = [
    {
        quote:`"In the end, it's not the years in your life that count. It's the life in your years."`,
        person:"Abraham Lincoln"
    },
    {
        quote:`"The best way to predict the future is to create it."`,
        person:"Abraham Lincoln"
    },
    {
        quote:`"The greatest glory in living lies not in never falling, but in rising every time we fall."`,
        person:" Nelson Mandela"
    },
    {
        quote:`"Many of life's failures are people who did not realize how close they were to success when they gave up."`,
        person:"Thomas Edison"
    },
    {
        quote:`"You must be the change you wish to see in the world."`,
        person:"Mahatma Gandhi"
    },
    {
        quote:`"Those who are prepared to die for any cause are seldom defeated"`,
        person:"Pandit Jawarharlal Nehru"
    },
    {
        quote:`"Merciless criticism and independent thinking are the two necessary traits of revolutionary thinking. "`,
        person:"Bhagat Singh"
    },
    {
        quote:`"Don’t take rest after your first victory because if you fail in second, more lips are waiting to say that your first victory was just luck."`,
        person:"A. P. J. Abdul Kalam"
    },
    {
        quote:`"I believe in a religion that propagates freedom, equality and brotherhood"`,
        person:"Chandrasekhar Azad"
    },
    {
        quote:`"We want deeper sincerity of motive, a greater courage in speech and earnestness in action"`,
        person:"Sarojini Naidu"
    },
    {
        quote:`"Bombs and pistols do not make a revolution. The sword of revolution is sharpened on the whetting-stone of ideas"`,
        person:"Bhagat Singh"
    },
    {
        quote:`"Freedom is not given, it is taken. "`,
        person:"Netaji Subhash Chandra Bose"
    },
    {
        quote:`"Life should be great rather than long."`,
        person:"B.R. Ambedkar"
    },
    {
        quote:`“Education is the manifestation of perfection already in a man.” `,
        person:"Swami Vivekananda"
    },
    {
        quote:`“No religion has mandated killing others as a requirement for its sustenance or promotion.”`,
        person:"Dr.A.P.J.Abdul Kalam"
    },
    {
        quote:`“After all, our Killers are our …Brothers!!??”`,
        person:"Bal Gangadhara Tilak"
    },
    {
        quote:`“To succeed in your mission, you must have single-minded devotion to your goal.”`,
        person:"Abdul Kalam"
    },
    {
        quote:`“Arise, Awake and Stop not until the goal is reached.” `,
        person:"Swami Vivekananda"
    },
    {
        quote:`“Democracy is good. I say this because other systems are worse.”`,
        person:"Jawaharlal Nehru"
    },
    {
        quote:`“You must be the change you want to see in the world.”`,
        person:"Mahatma Gandhi"
    },

]

btn.addEventListener('click',function(){
    let random = Math.floor(Math.random() * quotes.length);
    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
})
