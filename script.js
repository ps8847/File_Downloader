const fileinput = document.querySelector("input"),
    downloadBtn = document.querySelector("button");

downloadBtn.addEventListener("click", (e) => {
    e.preventDefault();
    getFile(fileinput.value)
})

function getFile(url) {
    fetch(url).then(res => res.blob()).then(file => {

        // url.createBojectURL creates a url of passed object
        let tempUrl = URL.createObjectURL(file);
        let aTag = document.createElement("a");

        // passing tempurl as href value of <a> tag
        aTag.href = tempUrl;

        // passing filename as download value of <a> tag
        // aTag.download = "filename";   <<<< we can use it as well

        // the dinamic version of above code is 
        aTag.download = url.replace(/^.*[\\\/]/, '');

        //adding <a> tag inside body
        document.body.appendChild(aTag);

        //clicking a tag to download file
        aTag.click();

        //removing <a> tag oncle file downloaded
        aTag.remove();


    })
}