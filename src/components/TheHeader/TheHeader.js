import React, { useState } from 'react';
import {
  Header,
  HeaderContainer,
  HeaderName,
  HeaderMenuButton,
  HeaderMenuItem,
  SkipToContent,
  SideNav,
  SideNavItems,
  HeaderSideNavItems,
  HeaderGlobalBar
} from '@carbon/react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import countryFactors from '../../countryFactors';
import LoginPanel from './Login';

const TheHeader = () => {
  const { selectedCountry } = useSelector((state) => state.house);
  const flagIcon = countryFactors[selectedCountry].flag_icon;

 

  return (
    <HeaderContainer
      render={({ isSideNavExpanded, onClickSideNavExpand }) => (
        <Header aria-label="Carbon Calculator"
        className='header-main-container'>
          <SkipToContent />
          <HeaderMenuButton
            aria-label="Open menu"
            onClick={onClickSideNavExpand}
            isActive={isSideNavExpanded}
          />
          <HeaderName element={Link} to="/" prefix="">
            {flagIcon} Greenhouse Calculator (beta)
          </HeaderName>

          <SideNav
            aria-label="Side navigation"
            expanded={isSideNavExpanded}
            isPersistent={false}
          >
            <SideNavItems>
              <HeaderSideNavItems>
                <HeaderMenuItem href="/welcome">Welcome</HeaderMenuItem>
              </HeaderSideNavItems>
            </SideNavItems>
          </SideNav>

            <HeaderGlobalBar>
              
       
            </HeaderGlobalBar>

      
        </Header>
      )}
    />
  );
};

export default TheHeader;
