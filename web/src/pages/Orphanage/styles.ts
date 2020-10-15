import styled from 'styled-components';

interface ButtonImageProps {
  active?: boolean
}

interface OpenOnWeekendsProps {
  dontOpen?: boolean
}

const Container = styled.div`
  display: flex;
  min-height: 100vh;
`;

const Main = styled.main`
  flex: 1;
`;

const OrphanageDetails = styled.div`
  width: 700px;
  margin: 64px auto;

  background: #fff;
  border: 1px solid #d3e2e5;
  border-radius: 20px;

  overflow: hidden;

  & > img {
    width: 100%;
    height: 300px;
    object-fit: cover;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 88px;
  object-fit: cover;
`;

const ImagesArea = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 16px;

  margin: 16px 40px 0;
`;

const ButtonImage = styled.button<ButtonImageProps>`
  border: 0;
  height: 88px;
  background: none;
  cursor: pointer;
  border-radius: 20px;
  overflow: hidden;

  outline: none;
  opacity: 0.6;

  ${
    props => props.active && `
      opacity: 1;
    `
  }
`;

const OrphanageDetailsContent = styled.div`
  padding: 80px;
`;

const OrphanageName = styled.h1`
  color: #4d6f80;
  font-size: 54px;
  line-height: 54px;
  margin-bottom: 8px;
`;

const OrphanageAbout = styled.p`
  line-height: 28px;
  color: #5c8599;
  margin-top: 24px;
`;

const MapContainer = styled.div`
  margin-top: 64px;
  background: #e6f7fb;
  border: 1px solid #b3dae2;
  border-radius: 20px;
`;

const MapContainerFooter = styled.footer`
  padding: 20px;
  text-align: center;
`;

const MapContainerFooterButton = styled.a`
  line-height: 24px;
  color: #0089A5;
  text-decoration: none;
`;

const Divider = styled.hr`
  width: 100%;
  height: 1px;
  border: 0;
  background: #D3E2E6;
  margin: 64px 0;
`;

const InstructionsLabel = styled.h2`
  font-size: 36px;
  line-height: 46px;
  color: #4D6F80;
`;

const Instructions = styled.p`
  line-height: 28px;
  color: #5C8599;
  margin-top: 24px;
`;

const ContactButton = styled.a`
  margin-top: 64px;

  width: 100%;
  height: 64px;
  border: 0;
  cursor: pointer;
  background: #3CDC8C;
  border-radius: 20px;
  color: #FFFFFF;
  font-weight: 800;

  display: flex;
  justify-content: center;
  align-items: center;

  outline: none;

  transition: background-color 0.2s;

  &:hover {
    background: #36CF82;
  }
`;

const OpenDetails  = styled.div`
  margin-top: 24px;

  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 20px;

  & div {
    padding: 32px 24px;
    border-radius: 20px;
    line-height: 28px;
  }

  & div svg {
    display: block;
    margin-bottom: 20px;
  }
`;

const Hour  = styled.div`
  background: linear-gradient(149.97deg, #E6F7FB 8.13%, #FFFFFF 92.67%);
  border: 1px solid #B3DAE2;
  color: #5C8599;
`;

const OpenOnWeekends = styled.div<OpenOnWeekendsProps>`
  background: linear-gradient(154.16deg, #EDFFF6 7.85%, #FFFFFF 91.03%);
  border: 1px solid #A1E9C5;
  color: #37C77F;

  ${
    props => props.dontOpen && `
      background: linear-gradient(154.16deg, #fdf0f5 7.85%, #FFFFFF 91.03%);
      border: 1px solid #ffbcd4;
      color: #ff669d;
    `
  }
`;

export {
  Container,
  Main, OrphanageDetails, Image, ImagesArea, ButtonImage,
  OrphanageDetailsContent, OrphanageName, OrphanageAbout,
  MapContainer, MapContainerFooter, MapContainerFooterButton,
  Divider, InstructionsLabel, Instructions,
  OpenDetails, Hour, OpenOnWeekends,
  ContactButton
};
