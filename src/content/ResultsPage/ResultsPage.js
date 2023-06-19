import React from 'react';
import { useSelector } from 'react-redux';
import { Button } from '@carbon/react';
import './_results-page.scss';

const DataTable = () => {
  const co2Result = useSelector((state) => state.house.electricityFootprint);

  return (
    <div className="results-container">
      <table>
        <thead>
          <tr>
          <th className='table-top'>
            
          </th>
       
          </tr>
          <tr>
            <th className='table-left' style={{ fontWeight: 'bold' }}>SUMMARY</th>
            <th className='table-top' style={{ color: 'lightgray' }}>{co2Result} Kg of CO2</th>


          </tr>
        </thead>
        <tbody>
          
          <tr><td className='table-left'>◯ Household</td><td className='table-right'>0</td></tr>

          <tr><td className='table-left'><span style={{color: 'var(--verde)',fontWeight: 'bold' }}>○</span> Electricity</td> <td className='table-right'>{co2Result}</td></tr>

          <tr><td className='table-left'>○ Natural Gas</td><td className='table-right'>0</td></tr>
          <tr><td className='table-left'>○ Coal</td><td className='table-right'>0</td></tr>
          <tr><td className='table-left'>○ LPG</td><td className='table-right'>0</td></tr>
          <tr><td className='table-left'>◯ Private Vehicles</td><td className='table-right'>0</td></tr>
          <tr><td className='table-left'>○ Car</td><td className='table-right'>0</td></tr>
          <tr><td className='table-left'>○ Motorbike</td><td className='table-right'>0</td></tr>
          <tr><td className='table-left'>◯ Public Transport</td><td className='table-right'>0</td></tr>
          <tr><td className='table-left'>○ Bus</td><td className='table-right'>0</td></tr>
          <tr><td className='table-left'>○ Train</td><td className='table-right'>0</td></tr>
          <tr><td className='table-left'>○ Taxi</td><td className='table-right'>0</td></tr>
          <tr><td className='table-left'>◯ Flights</td><td className='table-right'>0</td></tr>
          <tr><td className='table-left'>◯ Food & Water</td><td className='table-right'>0</td></tr>
          <tr><td>.</td><td>.</td></tr>
          <tr>
            <td className='table-left'>
            <Button kind="tertiary" className='button-results1'>Send results to your email</Button>
            </td>
            <td> <Button kind="tertiary" className='button-results2'>Offset your Carbon</Button></td>
          </tr>
       
          <tr><td>.</td><td>.</td></tr>

        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
