var arr = [
  { name: "ajay", country: "india", age: "22" },
  { name: "vijay", country: "india", age: "26" },
  { name: "sujay", country: "india", age: "24" }
];
var template = document.querySelector("#templet");

for (var i = 0; i < arr.length; i++) {
  var user = arr[i];
  var clone = template.content.cloneNode(true);
  var h1 = clone.querySelectorAll("h1");
  h1[0].innerHTML = user.name;
  var p = clone.querySelectorAll("p");
  p[0].innerHTML = "country: " + user.country + "<br>age: " + user.age;
  template.parentNode.appendChild(clone);
}
