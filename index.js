document.body.style.backgroundImage =
  "url('assets/images/background-mobile.png')";
document.body.style.color = "white";

//to upload image from the gallery and the image must be less than 500kb
document
  .getElementById("input-file")
  .addEventListener("change", function (event) {
    const file = event.target.files[0];
    const maxSize = 500 * 1024;
    if (file) {
      if (file.size > maxSize) {
        document.getElementById("uploadText").textContent =
          "Upload your photo (JPG or PNG, max size: 500KB)";
        document.getElementById("uploadText").style.color = "red";
        document.getElementById("img2").style.backgroundColor = "red";
        event.target.value = "";
        return;
      } else {
        document.getElementById("uploadText").textContent =
          "Uploaded photo (JPG or PNG, max size: 500KB)";
        document.getElementById("uploadText").style.color = "white";
        document.getElementById("img2").style.backgroundColor = "transparent";
      }
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = function (e) {
        localStorage.setItem("uploadImage", e.target.result);
        updatedProfile();
        console.log("image saved to local storgare");
        //TO SHOW THE PREVIEW

        // it's a class instead to hide the drag and drop button immediately the change and remove button comes up
        let dragTextClass = document.querySelector(".paragraph");
        if (dragTextClass) {
          dragTextClass.style.display = "none";
        }

        const preview = document.getElementById("preview");
        if (preview) {
          preview.src = reader.result;
          preview.style.display = "block";
        }
        const changeBtn = document.getElementById("changeBtn");
        if (changeBtn) {
          changeBtn.style.display = "inline-block";
        }

        const removeBtn = document.getElementById("removeBtn");
        if (removeBtn) {
          removeBtn.style.display = "inline-block";
        }
      };
    }
  });
// this is to get the image that was uploaded to save onn the succesful card
function updatedProfile() {
  const storedImage = localStorage.getItem("uploadImage");

  if (storedImage) {
    document.getElementById("pics").src = storedImage;
    document.getElementById("pics").style.display = "block";
  }
}
window.addEventListener("DOMContentLoaded", updatedProfile);

// form validation
document.getElementById("MYFORM").addEventListener("submit", function (event) {
  event.preventDefault();

  let valid = true;

  // name validate first
  const username = document.getElementById("username").value;
  if (
    username === "" ||
    !/^[A-Za-z\s]+$/.test(username) ||
    username.length <= 3
  ) {
    document.getElementById("nameError").textContent =
      "please enter a valid name...";
    valid = false;
  } else {
    document.getElementById("nameError").textContent = "";
  }
  console.log(username);

  //email validation
  const email = document.getElementById("email").value;
  if (email === "" || /^[^\s]+@[^\s@]+\.[^\s@]$/.test(email)) {
    document.getElementById("emailError").textContent =
      "please enter a valid email address..";
    valid = false;
  } else {
    document.getElementById("emailError").textContent = "";
  }
  console.log(email);
  //github validation
  const github = document.getElementById("github").value;
  if (github === "" || !/^[@]+$/ || github.length < 4) {
    document.getElementById("githubError").textContent =
      "please eneter a valid  github acc...";
    valid = false;
  } else {
    document.getElementById("githubError").textContent = "";
  }
  console.log(github);
  // image validation
  // const preview = document.getElementById("preview").src;
  const profiel = document.getElementById("input-file").value;
  if (profiel === "") {
    document.getElementById("uploadText").textContent =
      " Upload your photo (JPG or PNG, max size: 500KB).";
    valid = false;
    document.getElementById("uploadText").style.color = "red";
  } else {
    document.getElementById("uploadText").textContent =
      " Upload your photo (JPG or PNG, max size: 500KB).";
    document.getElementById("uploadText").style.color = "white";
  }

  if (valid) {
    document.getElementById("ticketG").style.display = "block";
    this.style.display = "none";
  }
});

// this is to get the user details whenever the user inputs his details to appears on the registration succesfull
const txt1 = document.getElementById("username");
const email = document.getElementById("email");
const githb = document.getElementById("github");
const picture = document.getElementById("input-file");
const btn1 = document.getElementById("submit");
const out1 = document.getElementById("nameShow");
const out2 = document.getElementById("emailShow");
const out3 = document.getElementById("gitshow");
const out4 = document.getElementById("nameF");
const imgU = document.getElementById("pics");
const gerationofrandomno = document.getElementById("random");
const currentDate = new Date();
const options = {
  year: "numeric",
  month: "short",
  day: "numeric",
};
const formatedate = `${currentDate.toLocaleDateString(
  "en-US",
  options
)} /Austin, TX`;

function fun1() {
  out1.innerHTML = txt1.value;
  out2.innerHTML = email.value;
  out3.innerHTML = githb.value;
  out4.innerHTML = txt1.value;
  imgU.innerHTML = picture.value;

  let randomvalue = Math.floor(Math.random() * 900000);
  gerationofrandomno.innerHTML = `#${randomvalue}`;
  document.getElementById("date").innerHTML = formatedate;
}
btn1.addEventListener("click", fun1);

document
  .getElementById("input-file")
  .addEventListener("change", function (event) {
    let file = event.target.files[0];
    if (file) {
      let reader = new FileReader();
      reader.onload = function (e) {
        document.getElementById("preview").src = e.target.result;
        document.getElementById("preview").style.display = "block";
        document.getElementById("buttons").style.display = "block";
      };
      reader.readAsDataURL(file);
    }
  });

//to remove
document.getElementById("removeBtn").addEventListener("click", function () {
  document.getElementById("preview").src = "";
  document.getElementById("preview").style.display = "none";
  document.getElementById("input-file").value = "";
  document.getElementById("buttons").style.display = "none";
  document.querySelector(".paragraph").style.display = "block";

});


//chnage picture
document.getElementById("changeBtn").addEventListener("click", function () {
  document.getElementById("input-file").click();
});
