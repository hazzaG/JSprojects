
//------------------------------------------- camelCaseConverter -----------------------------------------------
const convert = "Hello, it's the Brave show"

const go = document.getElementById("go");

go.addEventListener("click", camelCaseConverter());

function camelCaseConverter() {
    // Decapitalize string
    let decap = convert.toLowerCase();
    // Variable for later push
    let decapStore = [];
    // Split string into individual characters
    let decapSplit = decap.split("");
    // For loop to though each character
    for (i = 0; i < decapSplit.length; i++) {
        // If statement to check if the character is not a basic Latin alphabet character or space
        if (decapSplit[i].match(/[^a-z-\s]/)) {
            // Splice these characters out of array
            decapSplit.splice(i, 1, "");
            // Create variable and push to storage
            let decapSpaced = decapSplit.join("");
            decapStore.push(decapSpaced)
        };
    };
    // Get last item in storage and split into individual words
    let plainWords = decapStore[decapStore.length - 1].split(" ");
    // New storage
    let finalStore = [];
    // Push first word to storage uncapitalized
    finalStore.push(plainWords[0]);
    // For loop to go though each word in array apart from the first
    for (i = 1; i < plainWords.length; i++) {
        // Find first letter and create a capitalized variable of it
        let cap = (plainWords[i]).charAt(0).toUpperCase();
        // Split word into array
        arr = (plainWords[i]).split("");
        // Splice capital over first later
        arr.splice(0, 1, cap);
        // Join the array back together into now capitalized word
        let fin = arr.join("");
        // Push capitalized word to storage
        finalStore.push(fin);
    };
    // Join the words with an nothing inbetween
    let finished = finalStore.join("");
    console.log(finished);
};
//----------------------------------------------------------------------------------------------------

//----------------------------------------- JS Object creator -----------------------------------------

// Script for creating elements on page

const formContainer = document.getElementById("formContainer");
const objectName = document.getElementById("objectName");
const objectNameInput = document.getElementById("objectNameInput");
const keysVariableContainer = document.getElementById("keysVariableContainer");
const keyContainer = document.getElementById("keyContainer");
const keyNumber = document.getElementById("keyNumber");
const nameToggle = document.getElementById("nameToggle");

const submit = document.getElementById("submit");

objectNameInput.addEventListener("click", function () {
    objectNameInput.placeholder = "";
})

submit.addEventListener("click", function () {
    while (keysVariableContainer.firstChild) {
        keysVariableContainer.removeChild(keysVariableContainer.lastChild);
    }
    for (i = 1; i <= keyNumber.value; i++) {
        let nestedKeyContainer = Object.assign(document.createElement("div"), {
            id: `nestedKeyContainer${i}`,
            class: "nestedKeyContainer"
        });

        let keyLabel = Object.assign(document.createElement("label"), {
            id: `lable${i}`,
            class: "keyLabel",
            innerText: `Key ${i}`,
            for: `key${i}`
        })

        let keyInput = Object.assign(document.createElement("input"), {
            id: `key${i}`,
            class: "keyInput",
            type: "text",
            placeholder: `Key ${i} name`
        });

        let valueChange = Object.assign(document.createElement("select"), {
            id: `select${i}`,
            name: "valueChange"
        });

        let valueValue = Object.assign(document.createElement("option"), {
            id: `valueValue`,
            name: "valueValue",
            innerText: "Value"
        });

        let valueBoolean = Object.assign(document.createElement("option"), {
            id: `valueBoolean`,
            name: "valueBoolean",
            innerText: "Boolean"
        });

        let valueNumber = Object.assign(document.createElement("option"), {
            id: `valueNumber`,
            name: "valueNumber",
            innerText: "Number"
        });

        keyContainer.append(nestedKeyContainer);
        nestedKeyContainer.append(keyLabel, keyInput, valueChange);
        valueChange.append(valueValue, valueBoolean, valueNumber);
    };
})


// Script for object creation


//-------------------------------------------------------------------------------------------------------