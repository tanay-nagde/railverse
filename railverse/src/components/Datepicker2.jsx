import React from 'react'

import { DatePicker, Space } from 'antd';



function Datepicker2() {
    const onChange = (date, dateString) => {
        //console.log( dateString);
      };
  return (
    <DatePicker onChange={onChange} />
  )
}

export default Datepicker2