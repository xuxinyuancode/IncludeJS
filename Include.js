let includeGroup = document.getElementsByTagName("include");
var i = 0;
for (i; i < includeGroup.length; i++) {
    get(includeGroup[i])
}
async function get(e) {
    console.log(e.getAttribute('data'))
    var response = await fetch(e.getAttribute('data'));
    var body = await response.text();
    e.innerHTML = body
}