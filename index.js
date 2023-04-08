let userlink = document.getElementById("userlink");
let generate = document.getElementById("generate");
let short_link = document.getElementById("short_link");
let copy = document.getElementById("copy");

generate.addEventListener("click", () =>{
    value = userlink.value;
    let url = userlink.value;
    fetch(`https://api.shrtco.de/v2/shorten?url=${url}`)
    .then((resp) => resp.json())
    .then((value) => {
        short_link.value = value.result.short_link;
    })
    .catch((error) => {
        short_link.value = "sorry something went wrong!";
    });
});

copy.addEventListener("click",()=>{
    navigator.clipboard.writeText(short_link.value)
    copy.innerHTML = "copied";

    setTimeout(() =>{
        copy.innerHTML = "copy";
    },1000);
})