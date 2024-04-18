import * as g from "../scripts/globals.js";
import * as r from "../scripts/routes.js";

const userForm = document.querySelector(".userProfile");

async function appStart() {
  g.loadSettings();
  await r.getUser();
  setProfile();
  setButtons();
}

function setProfile() {
  if (g.getUser().user_id == 0) {
    document.querySelector(".notLoggedIn").style.display = "flex";
    document.querySelector(".loggedIn").style.display = "none";
  } else {
    document.querySelector(".notLoggedIn").style.display = "none";
    document.querySelector(".loggedIn").style.display = "flex";
    document.querySelector(".updateuserName").value = g.getUser().name;
  }
}

function setButtons() {
  document.querySelector(".updateProfile").addEventListener("click", async (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (userForm.updateuserName.value == "") return;
    const curUser = g.getUser()
    curUser.name = userForm.updateuserName.value
    g.setUser(curUser)
    userForm.updateuserName.value = "";
    await r.updateUser().then((x) => setProfile());
  });
  document.querySelector(".logout").addEventListener("click", async (e) => {
    e.preventDefault();
    e.stopPropagation();
    userForm.switchId.value = g.getUser().user_id
    g.setUser({ user_id: 0 });
    await r.getUser().then((x) => setProfile());
  });
  document.querySelector(".newProfile").addEventListener("click", async (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (userForm.userName.value == "") return;
    g.setUser({ name: userForm.userName.value, age: 0, email: "" });
    userForm.userName.value = "";
    await r.newUser().then((x) => setProfile());
  });
  document
    .querySelector(".switchProfile")
    .addEventListener("click", async (e) => {
      e.preventDefault();
      e.stopPropagation();
      if (userForm.switchId.value == "") return;
      g.setUser({ user_id: userForm.switchId.value });
      await r.getUser().then((x) => {
        if (x == true) {
          setProfile();
        }
      });
    });
  document.querySelector(".logout").addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
  });
}

appStart();
