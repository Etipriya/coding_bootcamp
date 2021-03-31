const username = prompt("What is your username?");

console.log(username);

if (!username) {
  alert("Please enter a username");
} else {
  const isLogout = confirm("Are you sure you want to logout?");

  console.log(isLogout);

  if (isLogout) {
    console.log("Bye Bye");
  } else {
    console.log("Continue browsing");
  }
}
