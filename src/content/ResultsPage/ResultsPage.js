import React from 'react';
import { useSelector } from 'react-redux';
import './_results-page.scss';

const DataTable = () => {
  const co2Result = useSelector((state) => state.house.electricityFootprint);

  return (
    <div className="results-container">
      <table>
        <thead>
          <tr>
            <th>Categories</th>
            <th>Results in Kg of CO2</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Household</td><td>0</td></tr>
          <tr><td>Data 3</td><td>{co2Result}</td></tr>
          <tr><td>Data 5</td><td>Data 6</td></tr>
          <tr><td>Data 7</td><td>Data 8</td></tr>
          <tr><td>Data 9</td><td>Data 10</td></tr>
          <tr><td>Data 11</td><td>Data 12</td></tr>
          <tr><td>Data 13</td><td>Data 14</td></tr>
          <tr><td>Data 15</td><td>Data 16</td></tr>
          <tr><td>Data 17</td><td>Data 18</td></tr>
          <tr><td>Data 19</td><td>Data 20</td></tr>
          <tr><td>Data 21</td><td>Data 22</td></tr>
          <tr><td>Data 23</td><td>Data 24</td></tr>
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
