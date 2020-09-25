import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { IMAGES } from '../../configs';
import Text from '../Text';

const Active = styled.div`
  display: block;
  position: absolute;
  width: 5px;
  height: 16px;
  border-radius: 25px;
  top: ${(props) => props.top && `${props.top}px`};
  left: -2px;
  background-color: #ff3d00;
  transition: top 0.2s;
`;

const menuLangs = ['ID', 'ENG'];

const Sidebar = ({ classes }) => {
  const [languange, setLanguange] = useState('ENG');
  const [posLang, setPosLang] = useState({});

  function changeLang(e) {
    const {
      dataset: { lang },
      offsetTop,
    } = e.currentTarget;

    setLanguange(lang);
    setPosLang(offsetTop);
  }

  useEffect(() => {
    // Set position of active indicator for the first time render
    const firstLang = document.querySelectorAll('.lang')[1];
    setPosLang(firstLang.offsetTop);
  }, []);

  return (
    <div className={classes.sidebar}>
      <Active top={posLang} />
      <img
        src={IMAGES.LOGO_ICON}
        alt="Logo"
        style={{ width: '25px', margin: '0 auto' }}
      />
      <Text
        transform="rotate(-90deg)"
        size="14px"
        textTransform="uppercase"
        weight="600"
        color="#828282"
      >
        Page 1
      </Text>
      <div>
        {menuLangs.map((menuLang, idx) => {
          return (
            <Text
              key={idx}
              className="lang"
              transform="rotate(-90deg)"
              size="14px"
              margin="0 auto 20px auto"
              weight="600"
              color="#828282"
              cursor="pointer"
              width="max-content"
              data-lang={menuLang}
              onClick={changeLang}
              active={languange === menuLang}
            >
              {menuLang}
            </Text>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
