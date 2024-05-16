let candidates = []; //An empty array to store the names and ages of candidates


//an arrow function to add candidate's names and age when it's entered into the input box
const addCandidate = () => {
    const nameInput = document.getElementById("nameInput");
    const ageInput = document.getElementById("ageInput");
    const name = nameInput.value;
    const age = parseInt(ageInput.value);

    //condition that must be met before the name and age entered are added to the array
    if (name && age) { 
        candidates.push({ name, age });
        nameInput.value = ""; //after the objects have been added to the candidates array, the value changes into an empty input box to accept new candidates' details
        ageInput.value = "";
        displayCandidates(); // to call displayCandidates function to update the webpage
    }
};

//arrow function to display the candidates
const displayCandidates = () => {
    const output = document.querySelector(".output");
    const totalCandidates = candidates.length; 
    const totalAge = candidates.reduce((acc, person) => acc + person.age, 0);
    const averageAge = Math.round(totalAge / totalCandidates);
    const qualifiedCandidates = candidates.filter(person => person.age < 30);
    const unqualifiedCandidates = candidates.filter(person => person.age >= 30).map(person => person.name);
    let outputHTML = `
    <p id="noOfApp">Total number of Applicants: ${totalCandidates}</p>
    <p id="avgAgeOfApp">Average age of Applicants: ${averageAge}</p>
    <div id="quaCand">
    <p>Qualified Candidates:</p>
    <ul>
        ${qualifiedCandidates.map(person => `<li>${person.name} is ${person.age} years old</li>`).join("")}
    </ul>
    </div>
    <p id="disquaCand">Disqualified Candidates: ${unqualifiedCandidates.join(", ")}</p>
    `;

    output.innerHTML = outputHTML; // to update the display
};

