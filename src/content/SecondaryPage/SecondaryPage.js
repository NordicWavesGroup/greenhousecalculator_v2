import React from 'react';
import './_secondary-page.scss';

import { Button } from '@carbon/react';
import { Link } from 'react-router-dom';
import { NextOutline, PreviousOutline } from '@carbon/react/icons';

import IconsNavigation from '../IconsNavigation/IconsNavigation';
import SecondaryHeader from './Secondary_Header';
import SecondaryHeaderResults from './Secondary_HeaderResults';
import SecondaryHeaderVisualization from './Secondary_HeaderVisualization';

import SecondaryFoodDiet from './Secondary_FoodDiet';
import SecondaryWater from './Secondary_Water';
import SecondaryTotalResults from './Secondary_TotalResults'

import SecondaryFootprintsButton from './Secondary_FootprintsButton'
import SecondaryIndividualResults from './Secondary_IndividualResults';

import SecondaryDataVisualization from './Secondary_DataVisualization'
import SecondaryOffsetButton from './Secondary_OffsetButton'

import Waves from '../Waves'

const SecondaryPage = () => {


  return <>
              <IconsNavigation />
        
    <section className='global-frame-calculator'>
          <div className='global-block-top'>
              <h4>Household Consumption</h4>
          </div>
        <section className='secondary-main-container'>
          <div className='secondary-inputs-block'>
            <SecondaryHeader/>
              <div className=''>
                <br />
                <SecondaryFoodDiet />
                <SecondaryWater />
              </div>
              <div className='secondary-button-container'>
                <SecondaryFootprintsButton />
              </div>
          </div>
          <div className='secondary-results-block'>
          <SecondaryHeaderResults/>
            <div className='secondary-results-container'>
            <SecondaryIndividualResults />
            </div>
            <SecondaryTotalResults />
          </div>
          <div className='secondary-visualization-block'>
          <SecondaryHeaderVisualization/>
            <div className='secondary-datavisual-container'>
            <SecondaryDataVisualization />
            </div>
            <SecondaryOffsetButton />
          </div>
        </section>
      {/* ------------------------------------------------------------------- */}
    </section>
      <div className='global-block-bottom'>
        <Link className='global-buttons-link-back-and-forth' to="/bus-rail">
          <Button 
          renderIcon={PreviousOutline}
           className="global-re-styled-button-back-and-forth"
           kind='tertiary'
          >Bus & Rail
          </Button>
        </Link>
        <Link className='global-buttons-link-back-and-forth' to="/results">
          <Button 
           className="global-re-styled-button-back-and-forth"
           renderIcon={NextOutline}
           kind='tertiary'
          >Results
          </Button>
        </Link>
      </div>
      <Waves />
  </>
};

export default SecondaryPage;