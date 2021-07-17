import React from 'react';
import '../style/DeColorRojo.css'

export function DeColorRojo(props) {
    return <span className="redSpan">{props.children}</span>
  }

export default DeColorRojo;