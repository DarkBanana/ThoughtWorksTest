
function Dictionary(data,lines){

    var firstLine ="";
    var secondLine ="";
    var thirdLine ="";
    var output ="";

    if (data == 0){
        firstLine +=   "._.";
        secondLine +=  "|.|";
        thirdLine +=   "|_|";
    }
    if (data == 1){
        firstLine +=   "...";
        secondLine +=  "..|";
        thirdLine +=   "..|";
    }
    if (data == 2){
        firstLine +=   "._.";
        secondLine +=  "._|";
        thirdLine +=   "|_.";
    }
    if (data == 3){
        firstLine +=   "._.";
        secondLine +=  "._|";
        thirdLine +=   "._|";
    }
    if (data == 4){
        firstLine +=   "...";
        secondLine +=  "|_|";
        thirdLine +=   "..|";
    }
    if (data == 5){
        firstLine +=   "._.";
        secondLine +=  "|_.";
        thirdLine +=   "._|";
    }
    if (data == 6){
        firstLine +=   "._.";
        secondLine +=  "|_.";
        thirdLine +=   "|_|";
    }
    if (data == 7){
        firstLine +=   "._.";
        secondLine +=  "..|";
        thirdLine +=   "..|";
    }
    if (data == 8){
        firstLine +=   "._.";
        secondLine +=  "|_|";
        thirdLine +=   "|_|";
    }
    if (data == 9){
        firstLine +=   "._.";
        secondLine +=  "|_|";
        thirdLine +=   "..|";
    }

    if (lines == "firstLines"){
        output += firstLine;
    }else if(lines == "secondLines"){
        output += secondLine;
    }else {
        output += thirdLine;
    }

    return output;
}


module.exports = function main(input) {
    console.log("Debug Info");
    //Using Data Dictionary method
    var firstLines = "firstLines";
    var secondLines = "secondLines";
    var thirdLines = "thirdLines";
    var result = "";

    for(var i = 0; i < input.length;i++){
        var inputData = input.charAt(i);
        result += Dictionary(inputData,firstLines)
        if(i<input.length-1){
            result += " ";
        }
    }
    result += "\n";

    for(var i = 0; i < input.length;i++){
        var inputData = input.charAt(i);
        result += Dictionary(inputData,secondLines)
        if(i<input.length-1){
            result += " ";
        }
    }
    result += "\n";

    for(var i = 0; i < input.length;i++){
        var inputData = input.charAt(i);
        result += Dictionary(inputData,thirdLines)
        if(i<input.length-1){
            result += " ";
        }
    }
    result += "\n";

    console.log("result  "+"\n"+result+" ");

    return result;
};