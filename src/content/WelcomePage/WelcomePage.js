import React from 'react';
import './_welcome-page.scss'

import { Button } from '@carbon/react';
import { Link } from 'react-router-dom';
import IconsNavigation from '../IconsNavigation/IconsNavigation';
import { NextOutline, PreviousOutline} from '@carbon/react/icons';

import WelcomeHeader from './Welcome_Header';

import WelcomeCountrySelection from './Welcome_CountrySelection';
import WelcomeRangeDate from './Welcome_RangeDate';
import WelcomeFootprintsButton from './Welcome_FootprintsButton'

import Waves from '../Waves'

const WelcomePage = () => {


  return <>
        <IconsNavigation />
        <section className='global-frame-calculator'>
              <div className='global-block-top'>
                  <h4>Welcome to the Greenhouse Calculator</h4>
              </div>
            <section className='welcome-inputs-results-container'>
            <WelcomeHeader/>
              <div className='secondary-right-block-inputs'>
                  <div className='secondary-inputs-container'>
                    <WelcomeCountrySelection />
                    <WelcomeRangeDate />
                 
                  </div>
                  <div className='secondary-calculate-button-container'>
                    <WelcomeFootprintsButton />
                  </div>
              </div>
              <div className='secondary-left-block-results'>
                <div className='secondary-results-big-container'>
                   
                </div>
            
              </div>
            </section>
          
        </section>



   <div className='global-block-bottom'>
        <Link className='global-buttons-link-back-and-forth' to="/">
          <Button 
          renderIcon={PreviousOutline}
           className="global-re-styled-button-back-and-forth"
           kind='tertiary'
          >Home
          </Button>
        </Link>
        <Link className='global-buttons-link-back-and-forth' to="/house">
          <Button 
           className="global-re-styled-button-back-and-forth"
           renderIcon={NextOutline}
           kind='tertiary'
          >House
          </Button>
        </Link>
      </div>
      <Waves />

 
  </>;

};

export default WelcomePage;
