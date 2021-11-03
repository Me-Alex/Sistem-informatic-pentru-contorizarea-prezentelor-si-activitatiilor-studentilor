function hide(parameter) {
    const findParameter = document.querySelector('.' + parameter + "");
    findParameter.style.display = "none";
}
function findParameter(parameter) {
    const par = document.querySelector(parameter);
    return par;
}
function validateParameter(parameter){
    if(parameter!=null){
        addToDataBase();
    }
}
function getInput(parameter) {
    const el = findParameter(parameter);
    
    return el;
}
function addToDataBase(){

}