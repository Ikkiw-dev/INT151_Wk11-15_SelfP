import { initKeycloak, signOut } from "../config/keycloak.js";
import { BASE_URL } from "../endpoints/endpoint.js";

document.addEventListener("DOMContentLoaded", () => {
    initKeycloak((user) => {
        console.log(user)
    });

    const logoutBtn = document.getElementById("logout");
    logoutBtn.addEventListener("click", () => {
        signOut({ redirectUri: BASE_URL });
    });
})