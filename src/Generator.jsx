import React from "react";
import "./generator.css";
import { TbCopy } from "react-icons/tb";
import { TiSocialTwitter } from "react-icons/ti";

export default function Generator() {
  return (
    <main>
      <div className="container">
        <h1>Quote of the day</h1>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          neque saepe ipsa assumenda nostrum consequatur totam expedita rerum
          minus ratione? Autem, facilis dolor! Molestias deleniti asperiores ex
          tenetur est officia.
        </span>
        <span className="author">--- author</span>
        <hr />
        <footer>
          <div>
            <TbCopy size={40} color="#0000fe" className="icon" />
            <a href="https://twitter.com" target="blank">
              <TiSocialTwitter size={40} color="#0000fe" className="icon" />
            </a>
          </div>
          <button>New Quote</button>
        </footer>
      </div>
    </main>
  );
}
