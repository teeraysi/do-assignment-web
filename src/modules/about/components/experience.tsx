import React from 'react';

import '../style.less';


export const experience = (props) => {
  return (
    <div style={{paddingTop: '20px'}} id="work">
      <div>
        <p><strong>Nexter Digitals.</strong>      (Jan 2019 - Present)</p>
        <p><strong>Position</strong></p>
        <ul>
          <li>Leader Fullstack Developer</li>
        </ul>

      </div>

      <hr />

      <div>
        <p><strong>C.S.I. Thailand</strong>       (Apr 2007 - Jan 2019)</p>
        <p><strong>Position</strong></p>
        <ul>
          <li>IT Architect</li>
          <li>Leader Programmer</li>
          <li>Senior Programmer</li>
          <li>Junior Programmer</li>
        </ul>
        <p><strong>Business Type</strong></p>
        <ul>
          <li>Production Control System. (Manufacture Industry)</li>
            <ul>
              <li>Sale Order (S/O)</li>
              <li>Forecast Order (F/O)</li>
              <li>Purchase Order (P/O)</li>
              <li>MRP (Material Resource Planning)</li>
              <li>Work Order (W/O)</li>
              <li>Bill/Invoice</li>
              <li>Debit/Credit Note</li>
              <li>KANBAN System</li>
            </ul>

            <li>Good Delivery System. (Distributed Industry)</li>
            <li>Inventory System.</li>
            <li>Hire Purchase System.</li>
            <li>POS (Point Of Sales)</li>
        </ul>
      </div>
      
    </div>
  )
}

export default experience;
