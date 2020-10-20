/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState } from 'react';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { PROVIDER_GOOGLE, Marker, Callout } from 'react-native-maps';
import { Feather } from '@expo/vector-icons';

import {
  Container,
  Maps, CalloutContainer, CalloutText,
  Footer, FooterText, CreateOrphanagesButton,
} from './styles';

import mapMarker from '../../images/Marker.png';
import api from '../../services/api';

interface Orphanage {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
}

const OrphanagesMap = () => {
  const navigation = useNavigation();

  const [orphanages, setOrphanages] = useState<Orphanage[]>([]);

  useFocusEffect(() => {
    api.get('/orphanages').then((response) => {
      setOrphanages(response.data);
    });
  });

  const handleNavigateToOrphanageDetails = (id: number) => {
    navigation.navigate('OrphanageDetails', { id });
  };

  const handleNavigateToCreateOrphanage = () => {
    navigation.navigate('SelectMapPosition');
  };

  return (
    <Container>
      <Maps
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: -3.033434,
          longitude: -59.972489,
          latitudeDelta: 0.078,
          longitudeDelta: 0.078,
        }}
      >
        {
          orphanages.map((orphanage) => (
            <Marker
              key={orphanage.id}
              icon={mapMarker}
              coordinate={{
                latitude: orphanage.latitude,
                longitude: orphanage.longitude,
              }}
              calloutAnchor={{
                x: 2.8,
                y: 0.9,
              }}
            >
              <Callout tooltip onPress={() => { handleNavigateToOrphanageDetails(orphanage.id); }}>
                <CalloutContainer>
                  <CalloutText>{orphanage.name}</CalloutText>
                </CalloutContainer>
              </Callout>
            </Marker>
          ))
        }
      </Maps>

      <Footer>
        <FooterText>{orphanages.length} orfanatos encontrados</FooterText>

        <CreateOrphanagesButton onPress={handleNavigateToCreateOrphanage}>
          <Feather name="plus" size={20} color="#fff" />
        </CreateOrphanagesButton>
      </Footer>
    </Container>
  );
};

export default OrphanagesMap;
