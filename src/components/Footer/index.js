import React from "react"
import styled from "styled-components"
import device from "../../device"
import phone from '../../images/phone.png'
import location from '../../images/location.png'
import mail from '../../images/mail.png'

const FooterContainer = styled.div`
  position: relative;
  float: left;
  width: 100%;
  clear: both;
  @media ${device.tablet}{
    display:none;
  };
`

const PrimaryFoot = styled.div`
  color: #acacad;
  background-color: rgba(16, 16, 16, 1);
 
`
const Container = styled.div`
  padding-top: 80px;
  padding-bottom: 80px;
  padding-left: 0 !important;
  padding-right: 0 !important;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-left: 220px;
  margin-right: 220px;
`

const FootBox = styled.div`
  width: 33.3%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 2em;
  font-family:'Helvetica Neue', 'Arial', 'sans-serif';
  color:#ededed !important;
  font-size:15px;
`

const SecondaryFoot = styled.div`
  color: #acacad;
  background-color: rgba(16, 16, 16, 1);
  padding-top: 40px;
  padding-bottom: 80px;
  padding: 40px 0 20px;
  display: inline-block;
  width: 100%;
`
const SecondContainer = styled.div`
  padding-top: 40px;
  padding-bottom: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 220px;
  margin-right: 220px;
  font-family: "Helvetica Neue", "Arial", "sans-serif";
  color: #ededed !important;
  font-size: 15px;
`

const Footer = () => (
  <FooterContainer>
    <PrimaryFoot>
      <Container>
        <FootBox>
          <span>
            <img alt="img" src={phone} style={{ height: 50, width: 50 }} />{" "}
          </span>
          <span>(+52) 15611038379</span>
        </FootBox>
        <FootBox>
          <span>
            <img alt="img1" src={location} style={{ height: 50, width: 50 }} />{" "}
          </span>

          <span style={{ textAlign: "center" }}>
            Mexico, CDMX 
          </span>
        </FootBox>
        <FootBox>
          <span>
            <img alt="img2" src={mail} style={{ height: 50, width: 50 }} />{" "}
          </span>

          <span style={{ textAlign: "center" }}>
          labrujamodernaoficial@gmail.com <br />
          
          </span>
        </FootBox>
      </Container>
    </PrimaryFoot>
    <SecondaryFoot>
      <SecondContainer>
        <p style={{ textAlign: "center" }}>
          Copyrigth © 2016 - {new Date().getFullYear()}, Festival de Brujas La
          Bruja Moderna. Todos los derechos reservados. Cualquier reproducción o
          uso total o parcial sin permiso de los autores sera sancionado
          conforme a la Ley de Protección de Derechos de Autor. Festival de
          Brujas © Sandra Ramirez / ©
        </p>
        {` `}
        <div style={{
          display:'flex', 
          flexDirection:'row',
          justifyContent:'space-evenly',
          alignItems:'center',
          width: '-webkit-fill-available'
        }}>
        <a
          style={{ textDecoration: "none", color: "#dedede" }}
          href="https://www.salemmthedeveloper.com"
        >
         Creado por  Salemm
        </a>
        {` `}

        <span>An d</span>
        <a
        style={{ textDecoration: "none", color: "#dedede" }}
        href="https://www.spartans.dev"
        >
          Spartans.Dev
        </a>
        </div>
       
      </SecondContainer>
    </SecondaryFoot>
  </FooterContainer>
)

export default Footer
