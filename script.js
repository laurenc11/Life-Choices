const storyElement = document.getElementById('story');
const choicesElement = document.getElementById('choices');

const storyData = {
    start: {
        text: "Welcome to the 'Choose Your Own Adventure' game. You're 14 years old and starting high school. Do you want to focus on academics or sports?",
        choices: [
            { text: "Academics", next: 'academics' },
            { text: "Sports", next: 'sports' }
        ]
    },
    academics: {
        text: "You've chosen to focus on academics. You excel in your studies and get good grades. After high school, do you want to go to university or start working?",
        choices: [
            { text: "University", next: 'university' },
            { text: "Start Working", next: 'work' }
        ]
    },
    sports: {
        text: "You've chosen to focus on sports. You join the school team and become a star player. After high school, do you want to pursue a sports scholarship or find a job?",
        choices: [
            { text: "Sports Scholarship", next: 'scholarship' },
            { text: "Find a Job", next: 'work' }
        ]
    },
    university: {
        text: "You go to university and choose a major. Do you want to study science or arts?",
        choices: [
            { text: "Science", next: 'science' },
            { text: "Arts", next: 'arts' }
        ]
    },
    work: {
        text: "You start working right after high school. Do you want to save money or spend on luxuries?",
        choices: [
            { text: "Save Money", next: 'save' },
            { text: "Spend on Luxuries", next: 'spend' }
        ]
    },
    scholarship: {
        text: "You get a sports scholarship and go to college. Do you want to focus solely on sports or balance sports with academics?",
        choices: [
            { text: "Focus on Sports", next: 'focusSports' },
            { text: "Balance Both", next: 'balance' }
        ]
    },
    science: {
        text: "You major in science and start a career in tech. As you grow older, do you want to start your own business or stay in a stable job?",
        choices: [
            { text: "Start a Business", next: 'business' },
            { text: "Stable Job", next: 'stableJob' }
        ]
    },
    arts: {
        text: "You major in arts and pursue a career in creative industries. Do you want to travel the world or settle in one place?",
        choices: [
            { text: "Travel the World", next: 'travel' },
            { text: "Settle Down", next: 'settle' }
        ]
    },
    save: {
        text: "You save money and build a strong financial foundation. You retire comfortably and enjoy your hobbies.",
        choices: []
    },
    spend: {
        text: "You enjoy a luxurious lifestyle but face financial difficulties later in life. You have to work longer to retire.",
        choices: []
    },
    focusSports: {
        text: "You focus on sports and become a professional athlete. You retire early and start a coaching career.",
        choices: []
    },
    balance: {
        text: "You balance sports and academics, achieving success in both. You have a diverse and fulfilling career.",
        choices: []
    },
    business: {
        text: "You start your own tech business and become successful. You enjoy both financial and personal freedom.",
        choices: []
    },
    stableJob: {
        text: "You stay in a stable job, enjoying a steady career and financial security.",
        choices: []
    },
    travel: {
        text: "You travel the world, experiencing different cultures and adventures. You write a book about your travels.",
        choices: []
    },
    settle: {
        text: "You settle down in one place, building a strong community and lasting relationships.",
        choices: []
    }
};

function startGame() {
    showStory('start');
}

function showStory(storyKey) {
    const story = storyData[storyKey];
    storyElement.innerHTML = story.text;

    choicesElement.innerHTML = '';
    story.choices.forEach(choice => {
        const button = document.createElement('button');
        button.innerText = choice.text;
        button.classList.add('choice');
        button.onclick = () => showStory(choice.next);
        choicesElement.appendChild(button);
    });
}

startGame();
