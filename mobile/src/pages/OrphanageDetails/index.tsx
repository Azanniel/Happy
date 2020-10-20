/* eslint-disable react/jsx-one-expression-per-line */
import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator, Linking } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { Feather, FontAwesome } from '@expo/vector-icons';
import { useRoute } from '@react-navigation/native';

import {
  Container, ImagesContainer, ScrollImagesContainer, ImageOrph,
  DetailsContainer, Title, Description, MapContainer, RoutesContainer, RoutesText,
  Separator, ScheduleContainer, ScheduleItem, ScheduleText, ContactButton, ContactButtonText,
} from './styles';

import mapMarker from '../../images/Marker.png';
import api from '../../services/api';

interface OrphanageDetailsRouteParams {
  id: number;
}

interface Orphanage {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
  about: string;
  instructions: string;
  opening_hours: string;
  open_on_weekends: boolean;
  whatsapp: string;
  images: Array<{
    id: number;
    url: string;
  }>
}

const OrphanageDetails = () => {
  const route = useRoute();
  const params = route.params as OrphanageDetailsRouteParams;

  const [orphanage, setOrphanage] = useState<Orphanage>();

  useEffect(() => {
    api.get(`/orphanages/${params.id}`).then((response) => {
      setOrphanage(response.data);
    });
  }, [params.id]);

  if (!orphanage) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator color="#0089a5" size="large" />
      </View>
    );
  }

  const handleSendMessageToWhatsApp = () => {
    Linking.openURL(`whatsapp://send?text=Olá, ${orphanage.name}. Gostaria de fazer uma visita, poderia dizer mais informações ?&phone=55${orphanage.whatsapp}`);
  };

  const handleOpenGoogleMapRoutes = () => {
    Linking.openURL(`https://www.google.com/maps/dir/?api=1&destination=${orphanage.latitude},${orphanage.longitude}`);
  };

  return (
    <Container>

      <ImagesContainer>
        <ScrollImagesContainer horizontal pagingEnabled>
          {
            orphanage.images.map((image) => (
              <ImageOrph key={image.id} source={{ uri: image.url }} />
            ))
          }
        </ScrollImagesContainer>
      </ImagesContainer>

      <DetailsContainer>

        <Title>{orphanage.name}</Title>
        <Description>{orphanage.about}</Description>

        <MapContainer>
          <MapView
            initialRegion={{
              latitude: orphanage.latitude,
              longitude: orphanage.longitude,
              latitudeDelta: 0.008,
              longitudeDelta: 0.008,
            }}
            zoomEnabled={false}
            pitchEnabled={false}
            scrollEnabled={false}
            rotateEnabled={false}
            style={{
              width: '100%',
              height: 150,
            }}
          >
            <Marker
              icon={mapMarker}
              coordinate={{
                latitude: orphanage.latitude,
                longitude: orphanage.longitude,
              }}
            />
          </MapView>

          <RoutesContainer onPress={handleOpenGoogleMapRoutes}>
            <RoutesText>Ver rotas no Google Maps</RoutesText>
          </RoutesContainer>
        </MapContainer>

        <Separator />

        <Title>Instruções para visita</Title>
        <Description>{orphanage.instructions}</Description>

        <ScheduleContainer>
          <ScheduleItem backgroundColor="#E6F7FB" borderColor="#B3DAE2">
            <Feather name="clock" size={40} color="#24b5d1" />
            <ScheduleText color="#5C8599">Segunda à Sexta {orphanage.opening_hours}</ScheduleText>
          </ScheduleItem>

          {
            orphanage.open_on_weekends ? (
              <ScheduleItem backgroundColor="#EDFFF6" borderColor="#A1E9C5">
                <Feather name="info" size={40} color="#39CC83" />
                <ScheduleText color="#37C77F">Atendemos fim de semana</ScheduleText>
              </ScheduleItem>
            ) : (
              <ScheduleItem backgroundColor="#fef6f9" borderColor="#ffbcd4">
                <Feather name="info" size={40} color="#ff669d" />
                <ScheduleText color="#ff669d">Não atendemos fim de semana</ScheduleText>
              </ScheduleItem>
            )
          }

        </ScheduleContainer>

        <ContactButton onPress={handleSendMessageToWhatsApp}>
          <FontAwesome name="whatsapp" size={24} color="#FFF" />
          <ContactButtonText>Entrar em contato</ContactButtonText>
        </ContactButton>
      </DetailsContainer>

    </Container>
  );
};

export default OrphanageDetails;
