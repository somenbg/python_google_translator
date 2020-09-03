function getData(){
    var data = document.getElementById("inputData").value;
    var source = document.getElementById("source");
    var sourceLang = source.options[source.selectedIndex].text;
    var destination = document.getElementById("destination");
    var destinationLang = destination.options[destination.selectedIndex].text;
    
    eel.translate(data, sourceLang, destinationLang)(setOutput);
}

function setOutput(outputText){
    console.log(outputText)
    document.getElementById("outputData").value = outputText;
}