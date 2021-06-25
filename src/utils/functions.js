export function validateEmail(mail) {
  if (
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      mail
    )
  ) {
    return true;
  }
  return false;
}

export const decodeEntities = (function () {
  if (typeof document === "undefined") return () => {};
  // this prevents any overhead from creating the object each time
  var element = document.createElement("div");

  function decodeHTMLEntities(str) {
    if (str && typeof str === "string") {
      // strip script/html tags
      str = str.replace(/<script[^>]*>([\S\s]*?)<\/script>/gim, "");
      str = str.replace(/<\/?\w(?:[^"'>]|"[^"]*"|'[^']*')*>/gim, "");
      element.innerHTML = str;
      str = element.textContent;
      element.textContent = "";
    }

    return str;
  }
  return decodeHTMLEntities;
})();

export const getURLParameter = (name) => {
  if (typeof window === "undefined") return;
  return decodeURIComponent(
    (RegExp(`${name}=(.+?)(&|$)`).exec(window.location.search) || [
      undefined,
      "error",
    ])[1]
  );
};
