
//------------------------------------------- camelCaseConverter -----------------------------------------------


function camelCaseConverter(convert) {
    // Decapitalize string
    let decap = convert.toLowerCase();
    // Variable for later push
    let decapStore = [];
    // Split string into individual characters
    let decapSplit = decap.split("");
    // For loop to though each character
    for (let i = 0; i < decapSplit.length; i++) {
        // If statement to check if the character is not a basic Latin alphabet character or space
        if (decapSplit[i].match(/[^a-z-\s]/)) {
            // Splice these characters out of array
            decapSplit.splice(i, 1, "");
        };
        // Create variable and push to storage
        let decapSpaced = decapSplit.join("");
        decapStore.push(decapSpaced)
    };
    // Get last item in storage and split into individual words
    let plainWords = decapStore[decapStore.length - 1].split(" ");
    // New storage
    let finalStore = [];
    // Push first word to storage uncapitalized
    finalStore.push(plainWords[0]);
    // For loop to go though each word in array apart from the first
    for (let i = 1; i < plainWords.length; i++) {
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
    return finished;
};
//----------------------------------------------------------------------------------------------------

// Fix issue with multiple spaces
// Maybe add functionality detailed in link below
// https://levelup.gitconnected.com/converting-a-string-to-camelcase-in-javascript-f88a646a22b4

//----------------------------------------- JS Object creator -----------------------------------------

// Script for creating elements on page ------------------------------------------------------------

const objectCreatorContainer = document.getElementById("objectCreatorContainer");
const objectNameInput = document.getElementById("objectNameInput");
const keyContainer = document.getElementById("keyContainer");
const keyNumber = document.getElementById("keyNumber");
const nameToggle = document.getElementById("nameToggle");

const submit = document.getElementById("submit");
const submitTwo = document.getElementById("submitTwo");
const submitThree = document.getElementById("submitThree");



submit.addEventListener("click", function () {
    while (keyContainer.firstChild) {
        keyContainer.removeChild(keyContainer.lastChild);
    }
    for (let i = 1; i <= keyNumber.value; i++) {
        let nestedKeyContainer = Object.assign(document.createElement("div"), {
            id: `nestedKeyContainer${i}`,
            class: "nestedKeyContainer"
        });

        let keyLabel = Object.assign(document.createElement("label"), {
            id: `lable${i}`,
            class: "keyLabel",
            innerText: `Key ${i}`,
            for: `key${i}`
        });

        let keyInput = Object.assign(document.createElement("input"), {
            id: `key${i}`,
            class: "keyInput",
            type: "text",
            placeholder: `Key ${i} name`
        });

        let dataChange = Object.assign(document.createElement("select"), {
            id: `select${i}`,
            name: "dataChange"
        });

        //-----------------------------------------

        let dataOption = Object.assign(document.createElement("option"), {
            id: `dataOption${i}`,
            name: "dataOption",
            innerText: "Option"
        });

        let dataString = Object.assign(document.createElement("option"), {
            id: `dataString${i}`,
            name: "dataString",
            innerText: "String"
        });

        let dataNumber = Object.assign(document.createElement("option"), {
            id: `dataNumber${i}`,
            name: "dataNumber",
            innerText: "Number"
        });

        let dataBoolean = Object.assign(document.createElement("option"), {
            id: `dataBoolean${i}`,
            name: "dataBoolean",
            innerText: "Boolean"
        });

        let dataArray = Object.assign(document.createElement("option"), {
            id: `dataArray${i}`,
            name: "dataArray",
            innerText: "Array"
        });

        let dataObject = Object.assign(document.createElement("option"), {
            id: `dataObject${i}`,
            name: "dataObject",
            innerText: "Object"
        });

        let dataDate = Object.assign(document.createElement("option"), {
            id: `dataDate${i}`,
            name: "dataDate",
            innerText: "Date"
        });

        keyContainer.append(nestedKeyContainer);
        nestedKeyContainer.append(keyLabel, keyInput, dataChange);
        dataChange.append(dataOption, dataString, dataBoolean, dataNumber, dataArray, dataObject, dataDate);
    };
})

// Script for creating value inputs ----------------------------------------------------------

// Assign objects for each restrictive data value input V

submitThree.addEventListener("click", function () {
    for (let i = 1; i <= keyNumber.value; i++) {
        let keyDataText = document.getElementById(`select${i}`).value;

        let dataStringInput = Object.assign(document.createElement("input"), {
            id: `dataStringInput${i}`,
            name: "dataStringInput",
            type: "text"
        });

        let dataNumberInput = Object.assign(document.createElement("input"), {
            id: `dataNumberInput${i}`,
            name: "dataNumberInput",
            type: "number"
        });

        let dataBooleanInput = Object.assign(document.createElement("select"), {
            id: `dataBooleanInput${i}`,
            name: "dataBooleanInput",
        });

        let dataBooleanInputTrue = Object.assign(document.createElement("option"), {
            id: `dataBooleanInputTrue${i}`,
            name: "dataBooleanInput",
            type: "option",
            innerText: "true"
        });

        let dataBooleanInputFalse = Object.assign(document.createElement("option"), {
            id: `dataBooleanInputFalse${i}`,
            name: "dataBooleanInput",
            type: "option",
            innerText: "false"
        });

        let dataArrayInput = Object.assign(document.createElement("input"), {
            id: `dataArrayInput${i}`,
            name: "dataArrayInput",
            type: "text"
        });

        let dataObjectInput = Object.assign(document.createElement("input"), {
            id: `dataObjectInput${i}`,
            name: "dataObjectInput",
            type: "text"
        });

        let dataDateInput = Object.assign(document.createElement("input"), {
            id: `dataDateInput${i}`,
            name: "dataDateInput",
            type: "date"
        });
        let nestedKeyContainer = document.getElementById(`nestedKeyContainer${i}`);

        switch (keyDataText) {
            case "Option":
                if (nestedKeyContainer.childElementCount >= 4) {
                    nestedKeyContainer.removeChild(nestedKeyContainer.lastChild);
                }
                nestedKeyContainer.append();
                break;
            case "String":
                if (nestedKeyContainer.childElementCount >= 4) {
                    nestedKeyContainer.removeChild(nestedKeyContainer.lastChild);
                }
                nestedKeyContainer.append(dataStringInput);
                break;
            case "Number":
                if (nestedKeyContainer.childElementCount >= 4) {
                    nestedKeyContainer.removeChild(nestedKeyContainer.lastChild);
                }
                nestedKeyContainer.append(dataNumberInput);
                break;
            case "Boolean":
                if (nestedKeyContainer.childElementCount >= 4) {
                    nestedKeyContainer.removeChild(nestedKeyContainer.lastChild);
                }
                nestedKeyContainer.append(dataBooleanInput);
                dataBooleanInput.append(dataBooleanInputTrue, dataBooleanInputFalse)
                break;
            case "Array":
                if (nestedKeyContainer.childElementCount >= 4) {
                    nestedKeyContainer.removeChild(nestedKeyContainer.lastChild);
                }
                nestedKeyContainer.append(dataArrayInput);
                break;
            case "Object":
                if (nestedKeyContainer.childElementCount >= 4) {
                    nestedKeyContainer.removeChild(nestedKeyContainer.lastChild);
                }
                nestedKeyContainer.append(dataObjectInput);
                break;
            case "Date":
                if (nestedKeyContainer.childElementCount >= 4) {
                    nestedKeyContainer.removeChild(nestedKeyContainer.lastChild);
                }
                nestedKeyContainer.append(dataDateInput);
                break;
        }
    }
});


// Script for object creation ----------------------------------------------------------------

// Function to sort all objects into final array
submitTwo.addEventListener("click", function () {
    //Create storage array for final output
    const finalObject = [];
    // Add any items outside of needed for loop to  to that
    objectNameOutput = camelCaseConverter(objectNameInput.value);
    finalObject.push(objectNameOutput);
    finalObject.push(" = { ")
    // If statement to check for name key and apply it
    console.log(nameToggle.value)
    if (nameToggle.value === "Yes") {
        finalObject.push("objectName: ");
        finalObject.push(`"` + objectNameInput.value + `"` + "," + " ");
    }
    // For loop to construct any needed key value pairs
    for (i = 1; i <= keyNumber.value; i++) {
        console.log(i);
        let keyName = document.getElementById(`key${i}`).value;
        // camelCaseConverter key name
        let keyNameOutput = camelCaseConverter(keyName);
        // Push key name
        finalObject.push(keyNameOutput + ": ");
        let keyDataText = document.getElementById(`select${i}`).value;
        console.log(keyName, keyDataText);
        // Switch Case statement to read which data type and value is selected
        switch (keyDataText) {
            case "Option":
                break;
            case "String":
                let keyDataString = document.getElementById(`dataStringInput${i}`).value;
                finalObject.push(`"` + keyDataString + `"`);
                break;
            case "Number":
                let keyDataNumber = document.getElementById(`dataNumberInput${i}`).value;
                finalObject.push(keyDataNumber);
                break;
            case "Boolean":
                let keyDataBoolean = document.getElementById(`dataBooleanInput${i}`).value;
                finalObject.push(keyDataBoolean);
                break;
            case "Array":
                let keyDataArray = document.getElementById(`dataArrayInput${i}`).value;
                finalObject.push("[" + keyDataArray + "]");
                break;
            case "Object":
                let keyDataObject = document.getElementById(`dataObjectInput${i}`).value;
                finalObject.push("{" + keyDataObject + "}");
                break;
            case "Date":
                let keyDataDate = document.getElementById(`dataDateInput${i}`).value;
                finalObject.push(`"` + keyDataDate + `"`);
                break;

        }
        if (i < keyNumber.value) {
            finalObject.push(", ");
        }
    }
    finalObject.push(" }")
    console.log(finalObject.join(""));

    let finalObjectPrint = Object.assign(document.createElement("p"), {
        id: `finalObjectPrint`,
        name: "finalObjectPrint",
        innerText: `${finalObject.join("")}`
    });

    const finalPrint = document.getElementById("finalPrint");

    finalPrint.append(finalObjectPrint);

});

//-------------------------------------------------------------------------------------------------------

//Complete array pushing function V

//ello: { objectName: "ello", String; "Hello!", Boolean; true, Number; 5, Array;[1, 2, 3], Object; { key: "value" } Date: 2001-03 - 23 }

//ello: { objectName: "ello", b: "Hello!", c: true, d: 5, e: [1, 2, 3], f: { key: "value" } , g: 2001-03 - 23 }

//ello = { objectName: "ello", a: "hello" , b; false , c; 5 , d; [1, 2, 3] , e; {key: "value"} , f; 2001-03-23}

//ello = { objectName: "ello", a: "Hello!", b: true, c: 6, e: [1, 2, 3], f: { key: "value" }, g: 2001-03 - 23 }

//tqtr = { objectName: "tq4tr4", eqreq: "eqrqer" , erqer: "qer" , qerqer: "qerqerq" , reqerqer: "eqrqerqerqe" }