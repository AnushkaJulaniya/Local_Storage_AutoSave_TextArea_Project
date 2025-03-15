const textArea = document.querySelector("#Textarea");

textArea.value = localStorage.getItem("savedText") || " ";
// console.log(textArea.value);

textArea.addEventListener("input" , (e) =>{
    const TextareaValue = textArea.value;
    const text = localStorage.setItem("savedText" , TextareaValue);
})