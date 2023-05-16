import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { setCarMileage, setCarUnitFactor} from "../../redux/car";
import countryFactors from '../../countryFactors'

import { TextInput, Select, SelectItem } from '@carbon/react';

const CarMileage = () => {
  const { carMileage,unitCar, selectedCountryCar } = useSelector(
    (state) => state.car
  );
  const dispatch = useDispatch();

  const unitOptions = Object.keys(countryFactors[selectedCountryCar].carMileageUnits);

  const handleMileageChange = (e) => {
    dispatch(setCarMileage(parseFloat(e.target.value)));
  };

  const handleUnitChange = (e) => {
    dispatch(setCarUnitFactor(e.target.value));
  };

  return (
    <>
        <section className="car-mileage-container">
          <h5 className="global-input-description">Car Mileage:</h5>
          <TextInput
            id="car-mileage"
            value={carMileage || ''}
            onChange={handleMileageChange}
            labelText=""
            className="car-block-middle-form"
            size='lg'
          />

          <Select
            id="unit-car"
            defaultValue={unitCar}
            onChange={handleUnitChange}
            labelText=""
            className="car-block-middle-form-efficiency"
            size='lg'
          >
            {unitOptions.map((unit) => (
              <SelectItem key={unit} value={unit} text={unit} />
            ))}
          </Select>
        </section>
    </>
  );
};

export default CarMileage;
