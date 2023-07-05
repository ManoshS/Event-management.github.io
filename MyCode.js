let out = "";
let ans = "";

function display() {
    document.getElementById("out").innerHTML = out;
}

function keyboard() {
    ans = document.getElementById("key").value;
    document.getElementById("h").innerHTML = eval(ans);

}