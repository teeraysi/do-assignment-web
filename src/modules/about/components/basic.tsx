import React from 'react';

import '../style.less';


export const basic = (props) => {
  return (
    <div id="basic" style={{paddingTop: '20px'}}>

      <table style={{width: '100%'}}>
        <tbody>
          <tr>
            <td className="label-field">Name: </td>
            <td>Mr.Teerayut Sinlan</td>
          </tr>
          <tr>
            <td className="label-field"><div>Address:</div></td>
            <td><div>88/47 Village.Trendy Tara Bangyai</div>
                <div>Bangbuathong, Bangkurat, Nonthaburi 11110</div>
            </td>
          </tr>
          <tr>
            <td className="label-field"><div>Mobile:</div></td>
            <td><div>062-5364914</div></td>
          </tr>
          <tr>
            <td className="label-field"><div>Email:</div></td>
            <td>Teerayut2545@gmail.com</td>
          </tr>
          <tr>
            <td className="label-field"><div>Line ID:</div></td>
            <td>cs_devevil</td>
          </tr>
          <tr>
            <td className="label-field"><div>Facebook:</div></td>
            <td><a href="https://www.facebook.com/teerayut2545" target="_blank">https://www.facebook.com/teerayut2545</a></td>
          </tr>

        </tbody>
      </table>
      
    </div>
  )
}

export default basic;
