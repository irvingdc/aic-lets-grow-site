import React, { useState } from "react";
import { container, displayClass } from "./index.module.less";
import loupeBlack from "images/icons/loupe.svg";
import { navigate } from "gatsby";

export default ({ label, display, lang }) => {
  let [text, setText] = useState("");
  let search = (e) => {
    e.preventDefault();
    navigate(`${lang === "en" ? "/en/" : "/"}search?q=${text}`);
  };
  return (
    <section className={[container, display ? displayClass : ""].join(" ")}>
      <form onSubmit={search}>
        <input
          onChange={(e) => setText(e.target.value)}
          value={text}
          placeholder={label}
        />
        <button>
          <img src={loupeBlack} alt="icon" />
        </button>
      </form>
    </section>
  );
};
