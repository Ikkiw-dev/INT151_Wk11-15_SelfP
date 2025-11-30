import { signIn  } from "../config/keycloak.js"
import { MAIN_URL } from "../endpoints/endpoint.js"

document.addEventListener("DOMContentLoaded", () => {
    const login = document.getElementById("login")

    login.addEventListener("click", () => {
        console.log("login clicked");
        signIn({ redirectUri: MAIN_URL });
    });
});