const storyElement = document.getElementById('story');
const choicesElement = document.getElementById('choices');
const reflectionElement = document.getElementById('reflection');
const reflectionTextElement = document.getElementById('reflectionText');
const summaryElement = document.getElementById('summary');
const summaryTextElement = document.getElementById('summaryText');

const storyData = {
    start: {
        text: "Welcome to the 'Choose Your Own Adventure' game. You're 14 years old and starting high school. Do you want to focus on academics or sports?",
        choices: [
            { text: "Academics", next: 'academics' },
            { text: "Sports", next: 'sports' }
        ],
        reflection: "Write about why you chose to focus on academics or sports."
    },
    academics: {
        text: "You've chosen to focus on academics. You excel in your studies and get good grades. After high school, do you want to go to university or start working?",
        choices: [
            { text: "University", next: 'university' },
            { text: "Start Working", next: 'work' }
        ],
        reflection: "Reflect on your choice to focus on academics. How do you feel about this path?"
    },
    sports: {
        text: "You've chosen to focus on sports. You join the school team and become a star player. After high school, do you want to pursue a sports scholarship or find a job?",
        choices: [
            { text: "Sports Scholarship", next: 'scholarship' },
            { text: "Find a Job", next: 'work' }
        ],
        reflection: "Reflect on your experiences focusing on sports. What were the challenges and rewards?"
    },
    university: {
        text: "You go to university and choose a major. Do you want to study science or arts?",
        choices: [
            { text: "Science", next: 'science' },
            { text: "Arts", next: 'arts' }
        ],
        reflection: "Describe why you chose to attend university and how you decided on your major."
    },
    work: {
        text: "You start working right after high school. Do you want to save money or spend on luxuries?",
        choices: [
            { text: "Save Money", next: 'save' },
            { text: "Spend on Luxuries", next: 'spend' }
        ],
        reflection: "Write about your decision to start working immediately. What were the advantages and disadvantages?"
    },
    scholarship: {
        text: "You get a sports scholarship and go to college. Do you want to focus solely on sports or balance sports with academics?",
        choices: [
            { text: "Focus on Sports", next: 'focusSports' },
            { text: "Balance Both", next: 'balance' }
        ],
        reflection: "Reflect on your time in college with a sports scholarship. How did you manage your time and commitments?"
    },
    science: {
        text: "You major in science and start a career in tech. As you grow older, do you want to start your own business or stay in a stable job?",
        choices: [
            { text: "Start a Business", next: 'business' },
            { text: "Stable Job", next: 'stableJob' }
        ],
        reflection: "Discuss your experiences in the science field and your career aspirations."
    },
    arts: {
        text: "You major in arts and pursue a career in creative industries. Do you want to travel the world or settle in one place?",
        choices: [
            { text: "Travel the World", next: 'travel' },
            { text: "Settle Down", next: 'settle' }
        ],
        reflection: "Describe your journey in the arts and how it shaped your career and life choices."
    },
    save: {
        text: "You save money and build a strong financial foundation. You retire comfortably and enjoy your hobbies.",
        choices: [],
        reflection: "Reflect on your financial decisions and how they impacted your life."
    },
    spend: {
        text: "You enjoy a luxurious lifestyle but face financial difficulties later in life. You have to work longer to retire.",
        choices: [],
        reflection: "Discuss the consequences of your spending habits and how you managed challenges."
    },
    focusSports: {
        text: "You focus on sports and become a professional athlete. You retire early and start a coaching career.",
        choices: [],
        reflection: "Write about your career as a professional athlete and transition to a coaching role."
    },
    balance: {
        text: "You balance sports and academics, achieving success in both. You have a diverse and fulfilling career.",
        choices: [],
        reflection: "Reflect on your ability to balance multiple commitments and how it shaped your life."
    },
    business: {
        text: "You start your own tech business and become successful. You enjoy both financial and personal freedom.",
        choices: [],
        reflection: "Describe your journey as an entrepreneur and the key factors in your success."
    },
    stableJob: {
        text: "You stay in a stable job, enjoying a steady career and financial security.",
        choices: [],
        reflection: "Write about your experiences in a stable job and how it provided security and satisfaction."
    },
    travel: {
        text: "You travel the world, experiencing different cultures and adventures. You write a book about your travels.",
        choices: [],
        reflection: "Reflect on your travels and how they influenced your perspectives and life."
    },
    settle: {
        text: "You settle down in one place, building a strong community and lasting relationships.",
        choices: [],
        reflection: "Discuss your decision to settle down and how it impacted your life and relationships."
    }
};

let lifeSummary = [];

function startGame() {
    showStory('start');
}

function showStory(storyKey) {
    const story = storyData[storyKey];
    storyElement.innerHTML = `<p>${story.text}</p><img src="https://source.unsplash.com/random/600x400?${storyKey}" alt="${storyKey}">`;

    choicesElement.innerHTML = '';
    reflectionElement.style.display = 'none';

    if (story.choices.length === 0) {
        reflectionElement.style.display = 'block';
        reflectionTextElement.placeholder = story.reflection;
        document.getElementById('saveReflection').onclick = () => saveReflection(storyKey);
    } else {
        story.choices.forEach(choice => {
            const button = document.createElement('button');
            button.innerText = choice.text;
            button.classList.add('choice');
            button.onclick = () => {
                life
