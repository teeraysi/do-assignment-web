import React from 'react';

import '../style.less';


export const graduate = (props) => {
  return (
    <div style={{paddingTop: '20px'}} id="graduate">
      <table style={{width: '100%'}}>
        <tbody>
          <tr className="rowx">
            <td>
              <div className="university">Chulalongkorn University</div>
              <div style={{paddingLeft: '15px'}}>M.Sc. Computer Science (GPAX 3.69)</div>
            </td>
            <td className="year">2010 - 2012</td>
          </tr>
          <tr className="rowx">
            <td>
              <div className="university">Khonkaen University</div>
              <div style={{paddingLeft: '15px'}}>B.Sc. Computer Science (GPAX 3.21</div>
            </td>
            <td className="year">2003 - 2007</td>
          </tr>
          <tr className="rowx">
            <td>
              <div className="university">Prachaksilapakarn School</div>              
            </td>
            <td className="year">1997 - 2003</td>
          </tr>
        </tbody>  
      </table>
    </div>
  )
}

export default graduate;
