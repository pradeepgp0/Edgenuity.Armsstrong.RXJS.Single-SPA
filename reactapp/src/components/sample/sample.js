import React, { useEffect, useState } from "react";
import './sample.css';



export default function Sample(props) {
  const [value, setValue] = useState('');
  const [elementValue, setElementValue] = useState('');
  useEffect(() => {
    //alert(this.props.app1);
    // if (this.props !== undefined) {
    //   alert(this.props.app1);
    // }
  }, []);
  const { data } = props;
  function handleChange(e) {
    if (e.target.value.charAt(0) !== " ") {
      setValue(e.target.value);
    }
  }

  function dispatchEvent() {
    var evt1 = new CustomEvent("react1Val", { detail: value });
    window.dispatchEvent(evt1);
    setElementValue(value);
    setValue("");
  }

  return (
    <div>
      <div>
        <input
          className="inputTag"
          value={value}
          onChange={(e) => handleChange(e)}
        />
        <button className="inputButton" onClick={() => {
          dispatchEvent()
        }}>
          Update
            </button>
      </div>
      <div>
        {(window.location.pathname.includes('app-1')) ?
          <label>
            Output from App1 : {elementValue}
          </label>
          :
          <label>
            Output from App2 :{data}
          </label>
        }

      </div>
      <div className="appFlex" >
        <div id="react-app2" style={{ marginLeft: "10px", width: "100%", display: "flex", justifyContent: "center" }} />
      </div>
    </div>
  );
}
