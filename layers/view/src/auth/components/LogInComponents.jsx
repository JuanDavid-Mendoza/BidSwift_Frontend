import styled from 'styled-components';

export const Container = styled.div`
  background-color: #f0fafb;
  border-radius: 10px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  position: relative;
  overflow: hidden;
  width: 720px;
  max-width: 100%;
  min-height: 530px;
  margin: 8vh auto auto auto;
`;

export const SignUpContainer = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in-out;
  left: 0;
  width: 50%;
  opacity: 0;
  z-index: 1;
  ${props => props.signin !== 'true' ? `
    transform: translateX(100%);
    opacity: 1;
    z-index: 5;
  `
    : null}
`;

export const SignInContainer = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in-out;
  left: 0;
  width: 50%;
  z-index: 2;
  ${props => (props.signin !== 'true' ? `transform: translateX(100%);` : null)}
`;

export const Form = styled.form`
  background-color: #f0fafb;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 50px;
  height: 100%;
  text-align: center;
`;

export const Title = styled.h1`
  font-weight: bold;
  margin: 0;
  max-width: 90%;
  font-size: 35px;
  margin-bottom: 15px;
`;

export const Input = styled.input`
  background-color: #d6d0d0;
  border: none;
  border-radius: 10px;
  padding: 12px 15px;
  margin: 4px 0;
  width: 100%;
`;

export const DateInput = styled.input.attrs({ type: 'date' })`
  background-color: #d6d0d0;
  border: none;
  border-radius: 10px;
  padding: 20px 15px;
  margin: 4px 0;
  width: 100%;
`;

export const Button = styled.button`
  border-radius: 20px;
  border: 1px solid #fff;
  background-color: #0aabb1;
  color: #fff;
  font-size: 12px;
  font-weight: bold;
  padding: 12px 45px;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: all 300ms;
  margin-top: 15px;
  &:hover {
    background: white;
    color: #0aabb1;
    border-color: #0aabb1;
  }
`;
export const GhostButton = styled(Button)`
  background-color: transparent;
  border-color: #ffffff;
`;

export const Anchor = styled.a`
  color: #333;
  font-size: 14px;
  text-decoration: none;
  margin: 15px 0;
`;
export const OverlayContainer = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  width: 50%;
  height: 100%;
  overflow: hidden;
  transition: transform 0.6s ease-in-out;
  z-index: 100;
  ${props => props.signin !== 'true' ? `transform: translateX(-100%);` : null}
`;

export const Overlay = styled.div`
  background: #ff416c;
  background: -webkit-linear-gradient(to right, #ff4b2b, #ff416c);
  background: linear-gradient(to right, #ff4b2b, #ff416c);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0 0;
  color: #ffffff;
  position: relative;
  left: -100%;
  height: 100%;
  width: 200%;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
  ${props => (props.signin !== 'true' ? `transform: translateX(50%);` : null)}
`;

export const OverlayPanel = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 20px;
  text-align: center;
  top: 0;
  height: 100%;
  width: 50%;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
`;

export const LeftOverlayPanel = styled(OverlayPanel)`
  h1 {
    color: white;
  }
  transform: translateX(-20%);
  background-color: #0aabb1;
  ${props => props.signin !== 'true' ? `transform: translateX(0);` : null}
`;

export const RightOverlayPanel = styled(OverlayPanel)`
  h1 {
    color: white;
  }
  right: 0;
  transform: translateX(0);
  background-color: #0aabb1;
  ${props => props.signin !== 'true' ? `transform: translateX(20%);` : null}
`;

export const Paragraph = styled.p`
  font-size: 14px;
  font-weight: 100;
  line-height: 20px;
  letter-spacing: 0.5px;
  margin: 20px 0 30px;
  max-width: 70%;
`;
