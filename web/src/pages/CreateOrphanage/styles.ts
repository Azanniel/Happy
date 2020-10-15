import styled from 'styled-components';

interface WeekendsButtonProps {
  active?: boolean
}

const Container = styled.div`
  display: flex;
`;

const Main = styled.main`
  flex: 1;
`;

const Form = styled.form`
  width: 700px;
  margin: 64px auto;

  background: #fff;
  border: 1px solid #d3e2e5;
  border-radius: 20px;

  padding: 0 64px 80px 80px;

  overflow: hidden;
`;

const FieldSet = styled.fieldset`
  border: 0;
  margin-top: 64px;
`;

const Legend = styled.legend`
  width: 100%;

  font-size: 32px;
  line-height: 34px;
  color: #5c8599;
  font-weight: 700;

  border-bottom: 1px solid #d3e2e5;
  margin-bottom: 40px;
  padding-bottom: 24px;
`;

const Field = styled.div`
  margin-top: 24px;
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  color: #8fa7b3;
  margin-bottom: 8px;
  line-height: 24px;
`;

const Input = styled.input`
  width: 100%;
  height: 54px;

  padding: 0 16px;

  background: #f5f8fa;
  border: 1px solid #d3e2e5;
  border-radius: 20px;
  outline: none;
  color: #5c8599;
`;

const Role = styled.span`
  font-size: 14px;
  color: #8fa7b3;
  margin-left: 18px;
  line-height: 24px;
`;

const TextArea = styled.textarea`
  width: 100%;
  min-height: 120px;
  max-height: 240px;
  resize: vertical;

  background: #F5F8FA;
  border: 1px solid #D3E2E5;
  border-radius: 20px;
  outline: none;
  color: #5C8599;

  padding: 16px;
  line-height: 28px;
`;

const ImagesContainer  = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 16px;
`;

const ImageToSubmit = styled.img`
  width: 100%;
  height: 96px;

  object-fit: cover;
  border-radius: 20px;
`;

const NewImage = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 96px;
  background: #f5f8fa;
  border: 1px dashed #96d2f0;
  border-radius: 20px;
  cursor: pointer;

  transition: filter 0.4s;

  &:hover {
    filter: brightness(90%);
  }
`;

const InputImage = styled.input`
  display: none;
`;

const WeekendsButtonArea = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const WeekendsButton = styled.a<WeekendsButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 64px;
  background: #f5f8fa;
  border: 1px dashed #96d2f0;
  cursor: pointer;

  color: #5C8599;

  transition: filter 0.4s;

  &:hover {
    filter: brightness(90%);
  }

  &:first-child{
    border-radius: 20px 0px 0px 20px;
  }

  &:last-child {
    border-radius: 0 20px 20px 0;
    border-left: 0;
  }

  ${
    props => props.active && `
      background: #EDFFF6;
      border: 1px solid #A1E9C5;
      color: #37C77F;
    `
  }
`;

const ConfirmButton = styled.button`
  margin-top: 64px;

  width: 100%;
  height: 64px;
  border: 0;
  cursor: pointer;
  background: #3cdc8c;
  border-radius: 20px;
  color: #fff;
  font-weight: 800;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: background-color 0.2s;

  &:hover {
    background: #36cf82;
  }
`;

export {
  Container,
  Main, Form, FieldSet, Legend, Field, Label, Input,
  Role, TextArea, ImagesContainer, ImageToSubmit, NewImage, InputImage,
  WeekendsButtonArea, WeekendsButton, ConfirmButton
};
