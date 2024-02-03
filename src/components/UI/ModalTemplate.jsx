import * as React from "react";

import "./ModalTemplate.css";
import { Children } from "react";
import { Login } from "@mui/icons-material";

export default function ModalTemplate(props) {
  return props.trigger ? (
    <div className='popup'>
      <div className='popup-inner'>
        <div className='close-btn'>
          <button onClick={() => props.setTrigger(false)}>X</button>
        </div>
        {props.children}
      </div>
    </div>
  ) : (
    ""
  );
}
