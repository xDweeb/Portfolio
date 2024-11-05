import React from "react";
import "./main.css";

export default function Main() {
  return (
    <main className="flex">
      <section className=" flex left-section">
        <button className={true? "active" : null}>All Projects</button>
        <button className={true? "active" : null}>IA</button>
        <button>Robotics</button>
        <button>Graphic Design</button>
        <button>FrontEnd</button>
        <button>Backend</button>
      </section>
      <section className="  flex right-section ">


        {["aa", "bb", "cc", 3, 6, 9].map((item) => {
          return (
            <article key={item} className="card ">
              <img width={250} src="./project1.jpg" alt="" />

              <div style={{ width: "250px" }} className=" box">
                <h1 className="title">Project 1</h1>
                <p className="sub-title">
                  A web site project build with react for the FrontEnd and django for the backend with a nosql database for the data storage .
                </p>

                <div className="flex icons">

                  <div style={{ gap: "11px" }} className="flex">
                    <div className="icon-link"></div>
                    <div className="icon-github"></div>
                  </div>
                  <a className="link flex" href="">
                    more <span style={{ alignSelf: "end" }} className="icon-arrow_forward"></span>
                  </a>
                </div>
              </div>
            </article>
          )
        })}

      </section>
    </main>
  );
}
