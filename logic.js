function addLink() {
  // alert("qw")
  var element1 = document.getElementById("ali");
  element1.classList.remove("d-none");
  var element2 = document.getElementById("zohaib");
  element2.classList.add("d-none");
}
function removeCard() {
  var element3 = document.getElementById("ali");
  element3.classList.add("d-none");
  var element4 = document.getElementById("zohaib");
  element4.classList.remove("d-none");
}
function addProfile() {
  var element5 = document.getElementById("addProfile");
  element5.classList.remove("d-none");
  var element6 = document.getElementById("hideLink");
  element6.classList.add("d-none");
}
function insertLink() {
  //  alert('zohaib paghal');
  var element7 = document.getElementById("addProfile");
  element7.classList.add("d-none");
  var element8 = document.getElementById("hideLink");
  element8.classList.remove("d-none");
}

let objColor = {
   GitHub: "#000",
   YouTube: "#E63838",
   linkedin: "#3A68FF",
   facebook :"#F4CA6A",
   Frontend_Mentor :"#4582B2",
  Twitch :"#DC9FC9",
  stack :"#57B04A",
  Dev_to :"#333333",
  CodeWars :"#8A1A50",
  CodePen :"#EA6EAB",
  code :"#302267",
  twitter :"#5B9CEA",
  envelope :"#9B64D6",
  gitlab :"#9C8886",
}
function Link_add(li_id) {
//   alert(li_id);
  let sara = document.getElementById("dropDownbtn");

  sara.value = li_id; //store the input value

  let element9 = document.getElementById("basic-addon2");
  let element10 = document.getElementById(li_id + "_icon");

  element9.innerHTML = '<i class="' + element10.classList + '"></i>';
  let img_react = document.getElementById("link_added1");
  let color= objColor[li_id];
  img_react.setAttribute("fill", color);
//  console.log(color)
  let sev_text = document.getElementById("IconName");
  sev_text.innerHTML = li_id;
  sev_text.setAttribute("fill", "#fff");
}
function showPreview() {
  // alert("pagal");
  var element11 = document.getElementById("previewPage");
  element11.classList.remove("d-none");
  var element12 = document.getElementById("mainContainer");
  element12.classList.add("d-none");
}
function backPreview() {
  // alert("pagal");
  var element11 = document.getElementById("previewPage");
  element11.classList.add("d-none");
  var element12 = document.getElementById("mainContainer");
  element12.classList.remove("d-none");
}



function saveData() {
  // alert(element11);
  var element11 = document.getElementById("dropDownbtn");
  let result = element11.value.toLowerCase()
  var element12 = document.getElementById("linkVerify");
  // var regex = new RegExp("^https://github.com/" + username + "/[a-zA-Z0-9_-]+/?$", "i");
  
  // Construct the regular expression directly
  var regex = new RegExp("^https?://(?:www\\.)?" + result + "\\.com/[a-zA-Z0-9_-]+(?:\\?[a-zA-Z0-9_=&-]+)?/?$", "i");

  var element13 = document.getElementById("paragraph");

console.log(regex.test(element12.value))
// alert(result);
  // console.log(regex);
  // console.log(element12.value);
if(regex.test(element12.value)){
  var element15 = document.getElementById("goTowebLink");
  element15.setAttribute("href", element12.value);
}
else{
  element13.innerHTML = 'Please Check the URl';
}
}