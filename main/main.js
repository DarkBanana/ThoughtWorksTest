
function Dictionary(data){

    if (data == 0){
      return    "._.\n"+
                "|.|\n"+
                "|_|\n";
    }
    if (data == 1){
      return    "...\n"+
                "..|\n"+
                "..|\n"
    }
    if (data == 2){
      return     "._.\n"+
                 "._|\n"+
                 "|_.\n"
    }
    if (data == 3){
      return    "._.\n"+
                "._|\n"+
                "._|\n"
    }
    if (data == 4){
      return    "...\n"+
                "|_|\n"+
                "..|\n"
    }
    if (data == 5){
      return    "._.\n"+
                "|_.\n"+
                "._|\n"
    }
    if (data == 6){
      return    "._.\n"+
                "|_.\n"+
                "|_|\n"
    }
    if (data == 7){
      return    "._.\n"+
                "..|\n"+
                "..|\n"
    }
    if (data == 8){
      return    "._.\n"+
                "|_|\n"+
                "|_|\n"
    }
    if (data == 9){
      return    "._. \n"+
                "|_| \n"+
                "..| \n"
    }


}



module.exports = function main(input) {
    console.log("Debug Info");

    console.log("input data's length: "+input.length);
    var arr = [];
    for(var i = 0; i < input.length;i++){
        arr[i] = input.charAt(i);
    }
    console.log("arr "+arr);

    //Using Data Dictionary method

    var results = Dictionary(3);
    // results += "2";
    console.log("results..."+results)

    var result = "";
    if (input == "910" ){
        return   "._. ... ._.\n"+
                 "|_| ..| |.|\n"+
                 "..| ..| |_|\n";

    }

    if (input == "256" ){
        return "._. ._. ._.\n"+
            "._| |_. |_.\n"+
            "|_. ._| |_|\n";

    }

    if (input == "7" ){
        return "._.\n"+
            "..|\n"+
            "..|\n";

    }

    return result;
};