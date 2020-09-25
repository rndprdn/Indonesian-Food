import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { IMAGES } from '../../configs';
import Text from '../Text';

const Active = styled.div`
  display: block;
  position: absolute;
  width: 5px;
  height: 5px;
  border-radius: 25px;
  left: ${(props) => props.left && `${props.left}px`};
  top: 25px;
  background-color: #ff3d00;
  transition: left 0.2s;
`;

const Navbar = ({ classes }) => {
  const [activeCoordinate, setActiveCoordinate] = useState();
  const activeNavList = () => {
    document.querySelectorAll('.nav-list').forEach((nav) => {
      const position = nav.offsetLeft;
      const itemWidth = nav.offsetWidth / 2;
      const centerPositionOfElement = position + itemWidth;

      nav.addEventListener('click', () =>
        setActiveCoordinate(centerPositionOfElement)
      );
    });
  };

  useEffect(() => {
    // Set position of active indicator for the first time render
    const firstNav = document.querySelector('.nav-list');
    setActiveCoordinate(firstNav.offsetLeft + firstNav.offsetWidth / 2);
    activeNavList();
  }, []);

  return (
    <nav className={classes.navbar}>
      <Active left={activeCoordinate - 3} />
      <ul className={classes.navLeft}>
        <li className="nav-list">
          <Text size="18px" weight="500">
            Food
          </Text>
        </li>
        <li className="nav-list">
          <Text size="18px" weight="500">
            Drink
          </Text>
        </li>
        <li className="nav-list">
          <Text size="18px" weight="500">
            Dessert
          </Text>
        </li>
        <li className="nav-list">
          <Text size="18px" weight="500">
            Snack
          </Text>
        </li>
      </ul>
      <div className={classes.navRight}>
        <img
          src={IMAGES.SEARCH_ICON}
          alt="Search"
          style={{ marginRight: 30, width: 22 }}
        />
        <img src={IMAGES.BAG_ICON} alt="Bag" />
      </div>
    </nav>
  );
};

export default Navbar;
