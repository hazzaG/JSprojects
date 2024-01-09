
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