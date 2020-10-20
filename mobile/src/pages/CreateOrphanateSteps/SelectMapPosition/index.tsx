import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { MapEvent, Marker } from 'react-native-maps';

import {
  Container, Maps, NextButton, NextButtonText,
} from './styles';

import mapMarker from '../../../images/Marker.png';

const SelectMapPosition = () => {
  const navigation = useNavigation();

  const [position, setPosition] = useState({ latitude: 0, longitude: 0 });

  const handleSelectMapPosition = (event: MapEvent) => {
    setPosition(event.nativeEvent.coordinate);
  };

  const handleNextStep = () => {
    navigation.navigate('OrphanageData', { position });
  };

  return (
    <Container>
      <Maps
        initialRegion={{
          latitude: -3.033434,
          longitude: -59.972489,
          latitudeDelta: 0.048,
          longitudeDelta: 0.048,
        }}
        onPress={handleSelectMapPosition}
      >
        {
          position.latitude !== 0 && (
            <Marker
              icon={mapMarker}
              coordinate={{
                latitude: position.latitude,
                longitude: position.longitude,
              }}
            />
          )
        }
      </Maps>

      {
        position.latitude !== 0 && (
          <NextButton onPress={handleNextStep}>
            <NextButtonText>Próximo</NextButtonText>
          </NextButton>
        )
      }
    </Container>
  );
};

export default SelectMapPosition;
