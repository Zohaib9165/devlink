let link =1;

function addLink() {
  // alert("qw")
  if(link==1){
    var element1 = document.getElementById("ali");
    element1.classList.remove("d-none");
    var element2 = document.getElementById("zohaib");
    element2.classList.add("d-none");
    link++;
    return(false);
  }

  
  //add new div before the real card
  var superParent = document.createElement("div");
  superParent.className = "card1 px-3 py-5 mt-5"
  superParent.id = "superParent"+link;


  var parentDiv = document.createElement("div");
  parentDiv.className = "row";

  var Div_col_4 = document.createElement("div");
  Div_col_4.className = "col-2 linkSet";
  Div_col_4.innerText= "= Link#"+link;






  var Div_col_8 = document.createElement("div");
  Div_col_8.className = "col-8";

  var Div_col_2 = document.createElement("div");
  Div_col_2.className = "col-2 linkSet text-end";
  Div_col_2.innerHTML= '<a href="#" onclick="removeCard1('+link+')">Remove</a>';

  parentDiv.appendChild(Div_col_4);
  parentDiv.appendChild(Div_col_8);
  parentDiv.appendChild(Div_col_2);

  //storing in main card
  superParent.appendChild(parentDiv);
  
  var cardBody = document.createElement("div");
  cardBody.className = "card-body mt-md-0";
  
  
  var cardBody_row = document.createElement("div");
  cardBody_row.className = "row";
  
  
  var cardBody_row_col = document.createElement("div");
  cardBody_row_col.className = "col-12 paltform ms-4";
  cardBody_row_col.innerText= "Platform";

  cardBody_row.appendChild(cardBody_row_col)
  cardBody.appendChild(cardBody_row)
  
  
  // adding the input div
  
  var cardBody_row_Input = document.createElement("div");
  cardBody_row_Input.className = "row mt-0";
  
  var cardBody_row_col2 = document.createElement("div");
  cardBody_row_col2.className = "col-12";
  
  var cardBody_row_col_inputGroup = document.createElement("div");
  cardBody_row_col_inputGroup.className = "input-group inputDivSet1 mt-2";
  
  var cardBody_row_col_span = document.createElement("div");
  cardBody_row_col_span.className = "input-group-text iconSet";
  cardBody_row_col_span.id = "input_left_icon"+link;


  var cardBody_row_col_span_input = document.createElement("INPUT");
  cardBody_row_col_span_input.className = "form-control dropdown-toggle py-4 linkInputSet ";
  cardBody_row_col_span_input.id = "dropDownbtn"+link;
  cardBody_row_col_span_input.setAttribute("data-bs-toggle", "dropdown");
  cardBody_row_col_span_input.setAttribute("aria-expanded", "false");

  var dropList = document.createElement("ul");
  dropList.className = "dropdown-menu dropMenu mt-1";
  dropList.innerHTML = '<li class="height" id="GitHub" onclick="Link_add2(this.id, '+link+')"><a class="dropdown-item textSizeing mt-3" href="#"><i class="fa-brands fa-github" id="GitHub_icon"></i> GitHub</a></li><li><hr class="dropdown-divider" /></li><li class="height" id="YouTube" onclick="Link_add2(this.id, '+link+')"><a class="dropdown-item textSizeing mt-3" href="#"><i class="fa-brands fa-youtube" id="YouTube_icon"></i>YouTube</a></li><li><hr class="dropdown-divider" /></li><li class="height" id="linkedin" onclick="Link_add2(this.id, '+link+')"><a class="dropdown-item textSizeing mt-3" href="#"><i class="fa-brands fa-linkedin" id="linkedin_icon"></i> LinkedIn</a> </li> <li> <hr class="dropdown-divider" /> </li> <li class="height" id="facebook" onclick="Link_add2(this.id, '+link+')"><a class="dropdown-item textSizeing mt-3" href="#"><i class="fa-brands fa-facebook"id="facebook_icon"></i> Facebook</a></li><li><hr class="dropdown-divider" /></li><li class="height" id="Frontend_Mentor" onclick="Link_add2(this.id, '+link+')"><a class="dropdown-item textSizeing mt-3" href="#"><img src="./Simpleicons-Team-Simple-Frontendmentor.512.png" class="iconSet1" alt="image not found" />Frontend Mentor</a></li><li><hr class="dropdown-divider" /></li><li class="height" id="Twitch" onclick="Link_add2(this.id, '+link+')"><a class="dropdown-item textSizeing mt-3" href="#"><i class="fa-brands fa-twitch" id="Twitch_icon"></i> Twitch</a></li><li><hr class="dropdown-divider" /></li><li class="height" id="stack" onclick="Link_add2(this.id, '+link+')"><a class="dropdown-item textSizeing mt-3" href="#"><i class="fa-brands fa-stack-overflow" id="stack_icon"></i> StackOverflow</a></li><li><hr class="dropdown-divider" /></li><li class="height" id="Dev_to" onclick="Link_add2(this.id, '+link+')"><a class="dropdown-item textSizeing mt-3" href="#"><img src="./dev-dot-to.svg" class="iconSet2" alt="" />Dev.to</a></li><li><hr class="dropdown-divider" /></li><li class="height" id="CodeWars" onclick="Link_add2(this.id, '+link+')"><a class="dropdown-item textSizeing mt-3" href="#"><img src="./4691329_codewars_icon.png" class="iconSet2" alt=" icon not found" />CodeWars</a></li><li><hr class="dropdown-divider" id="CodePen" /></li><li class="height" id="codepen" onclick="Link_add2(this.id, '+link+')"><a class="dropdown-item textSizeing mt-3" href="#"><i class="fa-brands fa-codepen"id="codepen_icon"></i> CodePen</a></li><li><hr class="dropdown-divider" /></li><li class="height" id="code" onclick="Link_add2(this.id, '+link+')"><a class="dropdown-item textSizeing mt-3" href="#"><i class="fa-brands fa-free-code-camp" id="code_icon"></i>freeCodeCamp</a> </li> <li><hr class="dropdown-divider" /></li><li class="height" id="twitter" onclick="Link_add2(this.id, '+link+')"><a class="dropdown-item textSizeing mt-3" href="#"><i class="fa-brands fa-twitter"id="twitter_icon"></i> Twitter</a></li><li><hr class="dropdown-divider" /></li><li class="height" id="envelope" onclick="Link_add2(this.id, '+link+')"><a class="dropdown-item textSizeing mt-3" href="#"><i class="fa-solid fa-envelope"id="envelope_icon"></i> Email</a></li><li><hr class="dropdown-divider" /></li><li class="height" id="gitlab" onclick="Link_add2(this.id, '+link+')"><a class="dropdown-item textSizeing mt-3" href="#"><i class="fa-brands fa-gitlab"id="gitlab_icon"></i> GitLab</a></li>';


  cardBody_row_col_inputGroup.appendChild(cardBody_row_col_span);
  cardBody_row_col_inputGroup.appendChild(cardBody_row_col_span_input);
  cardBody_row_col_inputGroup.appendChild(dropList);
   cardBody_row_col2.appendChild(cardBody_row_col_inputGroup);
   cardBody_row_Input.appendChild(cardBody_row_col2);
   cardBody.appendChild(cardBody_row_Input)

   //add input of link
  var InputDiv = document.createElement("div");
  InputDiv.className = "row"

  var InputDiv_col = document.createElement("div");
  InputDiv_col.className = "col-12";

  var InputDiv_col_dropBox = document.createElement("div");
  InputDiv_col_dropBox.className = "input-group dropBox me-5";

  var InputDiv_col_dropBox_inputGroup = document.createElement("div");
  InputDiv_col_dropBox_inputGroup.className = "input-group mb-3";

  var InputDiv_col_dropBox_inputGroup_span = document.createElement("div");
  InputDiv_col_dropBox_inputGroup_span.className = "input-group-text iconSet";
  InputDiv_col_dropBox_inputGroup_span.innerHTML = '<i class="fa-solid fa-link"></i>';

   
  var InputDiv_col_dropBox_inputGroup_input = document.createElement("INPUT");
  InputDiv_col_dropBox_inputGroup_input.className = "form-control py-4 inputSet2";
  InputDiv_col_dropBox_inputGroup_input.id = "linkVerify"+link;
  InputDiv_col_dropBox_inputGroup_input.setAttribute("type", "text");
  InputDiv_col_dropBox_inputGroup_input.setAttribute("placeholder", " e.g. htpps://githup.com/user");

var tagP=document.createElement("p");
tagP.className = "paragraphOfp";
tagP.id = "paragraph"+link;



InputDiv_col_dropBox_inputGroup.appendChild(InputDiv_col_dropBox_inputGroup_span);
InputDiv_col_dropBox_inputGroup.appendChild(InputDiv_col_dropBox_inputGroup_input);
InputDiv_col_dropBox.appendChild(InputDiv_col_dropBox_inputGroup);
InputDiv_col.appendChild(InputDiv_col_dropBox);
InputDiv_col.appendChild(tagP);
  InputDiv.appendChild(InputDiv_col);

  cardBody.appendChild(InputDiv_col);

   superParent.appendChild(cardBody)
   
  //  superParent.appendChild(parentDiv);
  var addDiv = document.getElementById("newDiv");
  addDiv.appendChild(superParent);

 


 // Function name (link)

 if(global<=link){
  add_link2(link);
 }


 link++;


}
let global = 2;
window.onload=()=>{
  for(i=2; i<=5; i++){
    add_link2(global);
    global++;
  }
}


let heightOFSvgDiv = 278 + 64;
let y = 310 + 60;

function add_link2(link) {
  var tagOfa = document.createElement("a");
  tagOfa.id = "goTowebLink" + link;
  tagOfa.setAttribute("target", "_blank");

  var react = document.createElement("div");
  react.id = "link_added" + link;
  react.className = "jsReact";

  
  // ...
    
  
  
  var text = document.createElement("h4");
  text.id = "WebsiteName" + link;
  text.innerText = "youtube";

  react.appendChild(text);
  tagOfa.appendChild(react);

  var Svg_image = document.getElementById("Svg_image");
  Svg_image.appendChild(tagOfa);

  heightOFSvgDiv += 64;
  y += 60;

 // add div of js
 var divOfPreview = document.createElement("div");
 divOfPreview.className="row";

 
 var rowOfPreview_a = document.createElement("a");
 rowOfPreview_a.id="webPreviewJsDiv"+link;
 rowOfPreview_a.setAttribute("href","#");

 var rowOfPreview = document.createElement("div");
 rowOfPreview.className="col-12 previewDivSet mt-4";
 rowOfPreview.id="PreviewWebName"+link;

 rowOfPreview_a.appendChild(rowOfPreview);
 divOfPreview.appendChild(rowOfPreview_a);

  var htmlDiv = document.getElementById("htmlDiv");
  htmlDiv.appendChild(divOfPreview);
 
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
  facebook: "#F4CA6A",
  Frontend_Mentor: "#4582B2",
  Twitch: "#DC9FC9",
  stack: "#57B04A",
  Dev_to: "#333333",
  CodeWars: "#8A1A50",
  CodePen: "#EA6EAB",
  code: "#302267",
  twitter: "#5B9CEA",
  envelope: "#9B64D6",
  gitlab: "#9C8886",
};
function Link_add(li_id) {
  //   alert(li_id);
  let sara = document.getElementById("dropDownbtn");

  sara.value = li_id; //store the input value
// console.log(sara.value);
  let element9 = document.getElementById("input_left_icon");
  let element10 = document.getElementById(li_id + "_icon");  // input ma icon

  element9.innerHTML = '<i class="' + element10.classList + '"></i>';

  let img_react = document.getElementById("link_added");
  let color = objColor[li_id];

  img_react.setAttribute("fill", color);
  let sev_text = document.getElementById( "WebsiteName");
  console.log(li_id);

  sev_text.innerHTML = li_id;
  sev_text.setAttribute("fill", "#fff");
 //store the link in preview page
 var divWebName1 =document.getElementById('PreviewWebName');
 divWebName1.innerHTML =li_id;
 divWebName1.style.backgroundColor = color;
 divWebName1.classList.add("githubDivSet");
 
}

function Link_add2(li_id, link) {
  //   alert(li_id);
  let sara = document.getElementById("dropDownbtn"+link);

  sara.value = li_id; //store the input value

  let element9 = document.getElementById("input_left_icon"+link);
  let element10 = document.getElementById(li_id + "_icon");  // input ma icon

  element9.innerHTML = '<i class="' + element10.classList + '"></i>';


 let img_react1 = document.getElementById("link_added"+link);
  let color = objColor[li_id];
  img_react1.style.backgroundColor = color;

  let sev_text2 = document.getElementById("WebsiteName"+link);
  sev_text2.innerHTML = li_id;
  sev_text2.setAttribute("fill", "#fff");

  var divWebName2 =document.getElementById("PreviewWebName"+link);
 divWebName2.innerHTML =li_id;
 divWebName2.style.backgroundColor = color;
 divWebName2.classList.add("githubDivSet");
  
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
  // alert("element11");
  var element11 = document.getElementById("dropDownbtn");
  let result = element11.value.toLowerCase();
  var element12 = document.getElementById("linkVerify");
 
  var regex = new RegExp(
    "^https?://(?:www\\.)?" +
      result +
      "\\.com/[a-zA-Z0-9_-]+(?:\\?[a-zA-Z0-9_=&-]+)?/?$",
    "i"
  );

  var element13 = document.getElementById("paragraph");

  
  if (regex.test(element12.value)) {
    var element15 = document.getElementById("goTowebLink");
    element15.setAttribute("href", element12.value);
    var a1 = document.getElementById("Atag");
    a1.setAttribute("href", element12.value);
    element13.innerHTML = "";
  } else {
    element13.innerHTML = "Please Check the URl";
  }

  if(link>=2){
    for(i=2; i<link;i++){
      // alert('ali');
      document.getElementById("dropDownbtn"+i);
      
      var element20 = document.getElementById("dropDownbtn"+i);
      let result1 = element20.value.toLowerCase();
      console.log(element20.value)
      var element21= document.getElementById("linkVerify"+i);
    
    
      var regex1 = new RegExp(
        "^https?://(?:www\\.)?" +
          result1 +
          "\\.com/[a-zA-Z0-9_-]+(?:\\?[a-zA-Z0-9_=&-]+)?/?$",
          "i"
          );
    
      var element23 = document.getElementById("paragraph"+i);
    
      if (regex1.test(element21.value)) {
        var element25 = document.getElementById("goTowebLink"+i);
        element25.setAttribute("href", element21.value);
        var a = document.getElementById("webPreviewJsDiv"+i);
        a.setAttribute("href", element21.value);
        element23.innerHTML = "";

      }
       else {
        element23.innerHTML = "Please Check the URl";
      }
      
    }
  }






  //functionality of preview page 
  var firstName = document.getElementById("firstName").value;
  var lastName = document.getElementById("lastName").value;
  var eMail = document.getElementById("email").value;
  
  document.getElementById("getInput").innerHTML = firstName + lastName;
  document.getElementById("getEmail").innerHTML = eMail;
  document.getElementById("getInput").style.backgroundColor = "#fff";
  document.getElementById("getEmail").style.backgroundColor = "#fff";

  document.getElementById("userName").innerHTML = firstName + lastName;
  document.getElementById("userMail").innerHTML = eMail;


  let sev_nameDiv = document.getElementById("nameDiv");
  sev_nameDiv.setAttribute("fill", "#ffff");
  let sev_mailDiv = document.getElementById("mailDiv");
  sev_mailDiv.setAttribute("fill", "#ffff");
 


}




function previewImage() {
  const input = document.getElementById("fileInput");
  const imagePreview = document.getElementById("imagePreview");
  const imagePreview1 = document.getElementById("imagePreview1");
  const imagePreview2 = document.getElementById("getImage");

  const file = input.files[0];

  if (file) {
    const reader = new FileReader();

    reader.onload = function (e) {
      imagePreview.src = e.target.result;
      imagePreview1.src = e.target.result;
      getImage.src = e.target.result;
      imagePreview.style.display = "block";
    };

    reader.readAsDataURL(file);
  } else {
    // Clear the image if no file is selected
    imagePreview.src = "";
    imagePreview.style.display = "none";
  }
  const imageSet = document.getElementById("svgImg").style.border="5px solid blue";
  const imageSet2 = document.getElementById("image2").style.border="5px solid blue";

}
