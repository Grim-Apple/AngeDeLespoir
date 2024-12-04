function add(){
    let prev = Number(document.getElementById("money").innerHTML);
    let addition = document.getElementById("montant").value;
    document.getElementById("money").innerHTML = Number(prev) + Number(addition);
}