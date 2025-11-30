import Keycloak from "keycloak-js";
import { BASE_URL } from "../libs/constants/endpoints";

const keycloak = new Keycloak({
  url: "https://bscit.sit.kmutt.ac.th/intproj25/ft/keycloak/",
  realm: "itb-ecors",
  clientId: "itb-ecors-kp1",
});

async function initKeycloak(callback, opts = { onLoad: "login-required" }) {
  try {
    const authenticated = await keycloak.init({
      checkLoginIframe: false,
      ...opts,
    });
    const profile = getCurretUser();

    if (authenticated) {
      callback({ ...profile, authenticated: !!authenticated });
    } else {
      console.error("Keycloak authentication failed");
    }
  } catch (error) {
    console.error("Error initializing Keycloak", error);
  }
}

function getCurretUser() {
  const { name, email, preferred_username: username } = keycloak?.idTokenParsed;
  const profile = { name, email, username };
  return profile;
}

async function signOut(opts = { redirectUri: BASE_URL }) {
  await keycloak.logout({
    redirectUri: opts.redirectUri,
    logoutMethod: "POST",
    ...opts,
  });
}

async function signIn(opts = { redirectUri: BASE_URL }) {
  await keycloak.login({ redirectUri: opts.redirectUri, ...opts });
}

export { keycloak, initKeycloak, getCurretUser, signOut, signIn };
