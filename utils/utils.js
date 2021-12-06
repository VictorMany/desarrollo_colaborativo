function logOut() {
  auth
    .signOut()
    .then(() => {
      alert("Se ha cerrado sesión");
      window.location = "../index.html";
    })
    .catch((err) => {
      console.log(err);
    });
}
