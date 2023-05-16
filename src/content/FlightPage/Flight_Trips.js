import React from 'react';

import { Select, SelectItem } from '@carbon/react';

const SecondaryElectronics = () => {


return (
<>
<section className="flight-inputs-containers1">
<h5 className="global-input-description">Trips:</h5>

<Select
id="range-Electronics-select"
defaultValue=''
onChange=''
labelText=""
className="flight-block-middle-form"
size='lg'
disabled={true}
> 
    <SelectItem value="one" text="1" />
    <SelectItem value="two" text="2" />
    <SelectItem value="three" text="3" />

</Select>
    </section>
</>
);
};

export default SecondaryElectronics;