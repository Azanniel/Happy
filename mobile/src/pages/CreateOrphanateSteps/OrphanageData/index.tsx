import React, { useState } from 'react';
import { Switch } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

import api from '../../../services/api';

import {
  Container,
  Title, Label, Input, UploadedImagesContainer, ImagePreview, ImagesInput,
  SwitchContainer,
  NextButton, NextButtonText,
} from './styles';

interface OrphanageDataRouteParams {
  position: {
    latitude: number;
    longitude: number;
  }
}

const OrphanageData = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const params = route.params as OrphanageDataRouteParams;

  const [name, setName] = useState('');
  const [about, setAbout] = useState('');
  const [whatsapp, setWhatsApp] = useState('');
  const [instructions, setInstructions] = useState('');
  const [opening_hours, setOpeningHours] = useState('');
  const [open_on_weekends, setOpenOnWeekends] = useState(true);
  const [images, setImages] = useState<string[]>([]);

  const handleSelectImages = async () => {
    const { status } = await ImagePicker.requestCameraRollPermissionsAsync();

    if (status !== 'granted') {
      // eslint-disable-next-line no-alert
      alert('Eita, precisamos de acesso à suas fotos...');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
    });

    if (result.cancelled) {
      return;
    }

    const { uri: image } = result;

    setImages([...images, image]);
  };

  const handleSubmitToCreateOrphanage = async () => {
    const { latitude, longitude } = params.position;

    const data = new FormData();
    data.append('name', name);
    data.append('about', about);
    data.append('whatsapp', whatsapp);
    data.append('latitude', String(latitude));
    data.append('longitude', String(longitude));
    data.append('instructions', instructions);
    data.append('opening_hours', opening_hours);
    data.append('open_on_weekends', String(open_on_weekends));

    images.forEach((image, index) => {
      data.append('images', {
        name: `image_${index}.jpg`,
        type: 'image/jpg',
        uri: image,
      } as any);
    });

    await api.post('/orphanages', data);

    navigation.navigate('OrphanagesMap');
  };

  return (
    <Container contentContainerStyle={{ padding: 24 }}>

      <Title>Dados</Title>

      <Label>Nome</Label>
      <Input
        value={name}
        onChangeText={setName}
      />

      <Label>Sobre</Label>
      <Input
        style={{ height: 110 }}
        multiline
        value={about}
        onChangeText={setAbout}
      />

      <Label>WhatsApp com DDD</Label>
      <Input
        value={whatsapp}
        onChangeText={setWhatsApp}
      />

      <Label>Fotos</Label>

      <UploadedImagesContainer>
        {
          images.map((image) => (
            <ImagePreview key={image} source={{ uri: image }} />
          ))
        }
      </UploadedImagesContainer>

      <ImagesInput onPress={handleSelectImages}>
        <Feather name="plus" size={24} color="#15B6D6" />
      </ImagesInput>

      <Title>Visitação</Title>

      <Label>Instruções</Label>
      <Input
        style={{ height: 110 }}
        multiline
        value={instructions}
        onChangeText={setInstructions}
      />

      <Label>Horário de Visitação</Label>
      <Input
        value={opening_hours}
        onChangeText={setOpeningHours}
      />

      <SwitchContainer>
        <Label>Atende final de semana?</Label>
        <Switch
          thumbColor="#fff"
          trackColor={{ false: '#ccc', true: '#39cc83' }}
          value={open_on_weekends}
          onValueChange={setOpenOnWeekends}
        />
      </SwitchContainer>

      <NextButton onPress={handleSubmitToCreateOrphanage}>
        <NextButtonText>Cadastrar</NextButtonText>
      </NextButton>

    </Container>
  );
};

export default OrphanageData;
