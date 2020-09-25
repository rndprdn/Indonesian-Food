import React from 'react';
import styled from 'styled-components';
import { IMAGES } from '../../configs';
import Text from '../../components/Text';
import Button from '../../components/Button';

const Container = styled.div`
  display: flex;
  height: inherit;
`;

const Hero = styled.img`
  width: 600px;
  position: absolute;
  top: 50%;
  right: 100px;
  transform: translateY(-50%);
`;

const Left = styled.div`
  flex: 2;
  padding: 114px 0 0 60px;
`;

const Right = styled.div`
  position: relative;
  flex: 1;
  padding: 114px 60px 0 0;
  background-color: #ff3d00;
`;

const Card = styled.div`
  display: flex;
  margin-right: ${(props) => (props.lastColumn ? 0 : '70px')};
`;

const WrapImage = styled.div`
  position: relative;
  width: auto;
  height: auto;
  max-width: 100px;
  max-height: 100px;
  border-radius: 18px;
  overflow: hidden;
`;

const HomeContainer = ({ classes }) => {
  return (
    <Container>
      <Left>
        <Text size="64px" weight="700">
          Let’s Eat <br /> Indonesian Food
        </Text>

        <Text
          size="18px"
          margin="47px 0 45px 0"
          width="78%"
          weight="400"
          lineHeight="30px"
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. has been the industry's standard dummy text ever since the
          1500s.
        </Text>

        <Button
          padding="28px 38px"
          margin="0 0 55px 0"
          size="20px"
          shadow="0px 6px 15px 0px rgba(0,0,0,0.23)"
          color="#FF3D00"
          textColor="#ffffff"
          radius="8px"
        >
          Make an Order
        </Button>

        <Text size="18px" color="#4F4F4F" margin="0 0 25px 0" weight="600">
          Most Loved
        </Text>

        <div style={{ display: 'flex' }}>
          <Card>
            <WrapImage>
              <img
                src={IMAGES.JENGKOL}
                alt=""
                style={{
                  height: '100%',
                }}
              />
            </WrapImage>
            <div style={{ marginLeft: 20, alignSelf: 'center' }}>
              <Text weight="600" lineHeight="22px">
                Semur <br /> Jengkol
              </Text>
              <Text margin="10px 0 0 0" weight="500" color="#FF3D00">
                30k
              </Text>
            </div>
          </Card>

          <Card>
            <WrapImage>
              <img
                src={IMAGES.GADO}
                alt=""
                style={{
                  height: '100%',
                }}
              />
            </WrapImage>
            <div style={{ marginLeft: 20, alignSelf: 'center' }}>
              <Text weight="600" lineHeight="22px">
                Gado <br /> Gado
              </Text>
              <Text margin="10px 0 0 0" weight="500" color="#FF3D00">
                15k
              </Text>
            </div>
          </Card>

          <Card>
            <WrapImage>
              <img
                src={IMAGES.KERAK_TELOR}
                alt=""
                style={{
                  height: '100%',
                }}
              />
            </WrapImage>
            <div style={{ marginLeft: 20, alignSelf: 'center' }}>
              <Text weight="600" lineHeight="22px">
                Kerak <br /> Telor
              </Text>
              <Text margin="10px 0 0 0" weight="500" color="#FF3D00">
                25k
              </Text>
            </div>
          </Card>
        </div>
      </Left>
      <Right>
        <Hero src={IMAGES.HERO} alt="Hero Illustration" />
        <Text
          className={classes.asd}
          color="#ffffff"
          textTransform="uppercase"
          weight="600"
        >
          Foodie
        </Text>
      </Right>
    </Container>
  );
};

export default HomeContainer;
