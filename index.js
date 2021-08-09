function flip(){
    var string = $('#inputText').val();
    let i = 0
    var newString = "";
    while(i<string.length){
        newString = string.slice(i, i+1) + newString;
        i++;
    }
    return newString;
}

function flipFinal(){
    copyToClipboard(flip());
    $('.toast').toast('show');
}
  
function copyToClipboard(text) {
    if (window.clipboardData && window.clipboardData.setData) {
        return window.clipboardData.setData("Text", text);
  
    }else if (document.queryCommandSupported && document.queryCommandSupported("copy")) {
        var textarea = document.createElement("textarea");
        textarea.textContent = text;
        textarea.style.position = "fixed";  // Prevent scrolling to bottom of page in Microsoft Edge.
        document.body.appendChild(textarea);
        textarea.select();
        try {
            return document.execCommand("copy");  // Security exception may be thrown by some browsers.
        }
        catch (ex) {
            console.warn("Copy to clipboard failed.", ex);
            return false;
        }
        finally {
            document.body.removeChild(textarea);
        }
    }
}

    
$(document).on('keyup', '#inputText',function(e){
    $('#displayP').text(flip());
    if(e.key === "Enter"){
        flipFinal();
    }
});

function dismiss(){
    $('.toast').toast('hide');
}