/* eslint-disable react/require-default-props */
import React from 'react';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import styled from 'styled-components/native';
import { View } from 'react-native';

const Container = styled.View`
  padding: 24px;
  background-color: #f9fafc;
  border-bottom-width: 1px;
  border-color: #dde3f0;
  padding-top: 44px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const PageTitle = styled.Text`
  font-family: 'Nunito_600SemiBold';
  color: #8fa7b3;
  font-size: 16px;
`;

interface HeaderProps {
  title: string;
  showCancel?: boolean;
}

const Header = ({ title, showCancel = true }: HeaderProps) => {
  const navigation = useNavigation();

  const handleGoBackToAppHomePage = () => {
    navigation.navigate('OrphanagesMap');
  };

  return (
    <Container>
      <BorderlessButton onPress={navigation.goBack}>
        <Feather name="arrow-left" size={24} color="#15d6d6" />
      </BorderlessButton>

      <PageTitle>{title}</PageTitle>

      { showCancel ? (
        <BorderlessButton onPress={handleGoBackToAppHomePage}>
          <Feather name="x" size={24} color="#ff669d" />
        </BorderlessButton>
      ) : (<View />) }
    </Container>
  );
};

export default Header;
