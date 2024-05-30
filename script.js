// Define the story data
const story = [
    { 
        id: 1,
        text: "Congratulations on graduating high school! What's your next step?",
        choices: [
            { text: "Go to college", nextId: 2 },
            { text: "Start working", nextId: 3 },
            { text: "Travel the world", nextId: 4 }
        ]
    },
    { 
        id: 2,
        text: "You've chosen to go to college. What will you major in?",
        choices: [
            { text: "Engineering", nextId: 5 },
            { text: "Art", nextId: 6 },
            { text: "Business", nextId: 7 }
        ]
    },
    // More story segments...
    { 
        id: 7,
        text: "You majored in Business. What's your career path?",
        choices: [
            { text: "Start your own business", nextId: 8 },
            { text: "Work in a corporation", nextId: 9 },
            { text: "Join a non-profit organization", nextId: 10 }
        ]
    },
    { 
        id: 8,
        text: "You started your own successful business. Congratulations!",
        choices: []
    },
    // More story segments...
];

let currentId = 1;

// Function to start the adventure
function startAdventure() {
    showStorySegment(currentId);
}

// Function to show a story segment
function showStorySegment(id) {
    const segment = story.find(s => s.id === id);
    const adventureDiv = document.getElementById("adventure");
    adventureDiv.innerHTML = `<p>${segment.text}</p>`;
    
    if (segment.choices.length > 0) {
        segment.choices.forEach(choice => {
            adventureDiv.innerHTML += `<button class="choice" onclick="makeChoice(${choice.nextId})">${choice.text}</button>`;
        });
    } else {
        adventureDiv.innerHTML += `<button onclick="showReflection()">Continue</button>`;
    }
}

// Function to handle user choices
function makeChoice(nextId) {
    currentId = nextId;
    showStorySegment(currentId);
}

// Function to show reflection task
function showReflection() {
    document.getElementById("reflection").style.display = "block";
}

// Function to submit reflection
function submitReflection() {
    const reflectionText = document.getElementById("reflectionText").value;
    // Here you can do something with the reflection text, like saving it to a database
    alert("Reflection submitted! Thank you.");
    // Optionally, you can reset the adventure or navigate to another page
}

// Start the adventure when the page loads
window.onload = startAdventure;
