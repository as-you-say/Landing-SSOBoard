import React from 'react'

export default function Line() {

  function toggle(){
    const isFolded = document.querySelector("#side-bar.fold") != null;
    if (isFolded) {
      document.getElementById("side-bar").classList.remove("fold");
      document.getElementById("line").classList.remove("left");
    } else {
      document.getElementById("side-bar").classList.add("fold");
      document.getElementById("line").classList.add("left");
    }
  }

  return (
    <div id="line">
      <div className="line">
        <div className="button" onClick={toggle}></div>
      </div>
    </div>
  )
}
