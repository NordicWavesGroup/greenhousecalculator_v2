import React from 'react';
import { useSelector } from "react-redux";
import { Checkbox } from '@carbon/react';

const ResultsCheckboxes = ({ checkboxState, setCheckboxState }) => {
  const { houseFootprint } = useSelector(
    (state) => state.house
  );
  const { flights } = useSelector(
    (state) => state.flights
  );
  const { motorbikeFootprint } = useSelector(
    (state) => state.motorbike
  );
  const { carFootprint } = useSelector(
    (state) => state.car
  );
  const { busrailFootprint } = useSelector(
    (state) => state.busrail
  );
  const { secondaryFootprint } = useSelector(
    (state) => state.secondary
  );
  const totalHouseFootprint = (parseFloat(houseFootprint) || 0);

  ///mulitple flights total
  let totalFlightFootprint = 0;
  for (let index = 0; index < flights.length; index++) {
    if (parseFloat(flights[index].flightFootprint) > 0) {
      totalFlightFootprint += parseFloat(flights[index].flightFootprint);
    }
  }


  const totalCarFootprint = (parseFloat(carFootprint) || 0);
  const totalMotorbikeFootprint = (parseFloat(motorbikeFootprint) || 0);
  const totalBusRailFootprint = (parseFloat(busrailFootprint) || 0);
  const totalSecondaryFootprint = (parseFloat(secondaryFootprint) || 0);

  return (
    <fieldset className='results-checkmark-container'>
      <Checkbox
        labelText={`Household Energy (${totalHouseFootprint.toFixed(
          2
        )} Kg of CO2e)`}
        id="checkbox-label-1"
        className="cbx"
        checked={totalHouseFootprint > 0 && checkboxState.house}
        onChange={() =>
          setCheckboxState({
            ...checkboxState,
            house: !checkboxState.house,
          })
        }
      />
      <Checkbox
        labelText={`Flights (${totalFlightFootprint.toFixed(
          2
        )} Kg of CO2e)`}
        id="checkbox-label-2"
        className="cbx"
        checked={totalFlightFootprint > 0 && checkboxState.house}
        onChange={() =>
          setCheckboxState({
            ...checkboxState,
            flights: !checkboxState.flights,
          })
        }
      />
      <Checkbox
        labelText={`Car (${totalCarFootprint.toFixed(
          2
        )} Kg of CO2e)`}
        id="checkbox-label-3"
        className="cbx"
        checked={totalCarFootprint > 0 && checkboxState.car}
        onChange={() =>
          setCheckboxState({
            ...checkboxState,
            car: !checkboxState.car,
          })
        }
      />
      <Checkbox
        labelText={`Motorbike (${totalMotorbikeFootprint.toFixed(
          2
        )} Kg of CO2e)`}
        id="checkbox-label-4"
        className="cbx"
        checked={totalMotorbikeFootprint > 0 && checkboxState.motorbike}
        onChange={() =>
          setCheckboxState({
            ...checkboxState,
            motorbike: !checkboxState.motorbike,
          })
        }
      />
      <Checkbox
        labelText={`Bus & Rail (${totalBusRailFootprint.toFixed(
          2
        )} Kg of CO2e)`}
        id="checkbox-label-5"
        className="cbx"
        checked={totalBusRailFootprint > 0 && checkboxState.busrail}
        onChange={() =>
          setCheckboxState({
            ...checkboxState,
            busrail: !checkboxState.busrail,
          })
        }
      />
      <Checkbox
        labelText={`Household Consumption (${totalSecondaryFootprint.toFixed(
          2
        )} Kg of CO2e)`}
        id="checkbox-label-6"
        className="cbx"
        checked={totalSecondaryFootprint > 0 && checkboxState.secondary}
        onChange={() =>
          setCheckboxState({
            ...checkboxState,
            secondary: !checkboxState.secondary,
          })
        }
      />
    </fieldset>
  )
}

export default ResultsCheckboxes;
