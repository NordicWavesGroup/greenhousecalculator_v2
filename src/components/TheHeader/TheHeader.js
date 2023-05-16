import React, { useState } from 'react';
import {
  Header,
  HeaderContainer,
  HeaderName,
  HeaderMenuButton,
  HeaderGlobalAction,
  HeaderMenuItem,
  SkipToContent,
  SideNav,
  SideNavItems,
  HeaderSideNavItems,
  HeaderPanel,
  HeaderGlobalBar
} from '@carbon/react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import countryFactors from '../../countryFactors';
import LoginPanel from './Login';

const TheHeader = () => {
  const { selectedCountry } = useSelector((state) => state.house);
  const flagIcon = countryFactors[selectedCountry].flag_icon;
  const [isHeaderPanelOpen, setIsHeaderPanelOpen] = useState(false);

  const toggleHeaderPanel = () => {
    setIsHeaderPanelOpen(!isHeaderPanelOpen);
  };

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

          {isHeaderPanelOpen && (
            <HeaderPanel aria-label="" expanded className="right-panel">
              {/* Content for the Header Panel */}
              <LoginPanel />
            </HeaderPanel>
          )}
        </Header>
      )}
    />
  );
};

export default TheHeader;
