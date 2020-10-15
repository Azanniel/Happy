import React, { ChangeEvent, FormEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Map, TileLayer, Marker } from 'react-leaflet';
import { LeafletMouseEvent } from 'leaflet';
import { FiPlus } from 'react-icons/fi';

import {
  Container,
  Main, Form, FieldSet, Legend, Field, Label, Input,
  Role, TextArea, ImagesContainer, ImageToSubmit, NewImage, InputImage,
  WeekendsButtonArea, WeekendsButton, ConfirmButton
} from './styles';

import { SideBarSimple } from '../../components/SideBarSimple';
import { mapIcon } from '../../utils/mapIcon';
import { api } from '../../services/api';

const CreateOrphanage = () => {
  const history = useHistory();

  const [position, setPosition] = useState({ latitude: 0, longitude: 0 });
  const [name, setName] = useState('');
  const [about, setAbout] = useState('');
  const [whatsapp, setWhatsApp] = useState('');
  const [instructions, setInstructions] = useState('');
  const [opening_hours, setOpeningHours] = useState('');
  const [open_on_weekends, setOpenOnWeekends] = useState(true);
  const [images, setImages] = useState<File[]>([]);
  const [previewImages, setPreviewImages] = useState<string[]>([]);

  const handleMapClick = (event: LeafletMouseEvent) => {
    const { lat, lng } = event.latlng;
    setPosition({
      latitude: lat,
      longitude: lng
    })
  }

  const handleSelectImages = (event: ChangeEvent<HTMLInputElement>) => {
    if(!event.target.files){
      return;
    }

    const selectedImages = Array.from(event.target.files);
    setImages(selectedImages);

    const selectedImagesPreview = selectedImages.map(image => {
      return URL.createObjectURL(image)
    });

    setPreviewImages(selectedImagesPreview);
  }

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    const { latitude, longitude } = position;

    const data = new FormData();

    data.append('name', name);
    data.append('latitude', String(latitude));
    data.append('longitude', String(longitude));
    data.append('about', about);
    data.append('whatsapp', whatsapp);
    data.append('instructions', instructions)
    data.append('opening_hours', opening_hours)
    data.append('open_on_weekends', String(open_on_weekends));

    images.forEach(image => {
      data.append('images', image);
    });

    const response = await api.post('orphanages', data);

    if(response.status === 201){
      alert('Cadastro realizado com sucesso');
      history.push('/app');
    }else{
      alert('Erro ao tentar cadastrar, verifique os dados e tente novamente');
    }
  }

  return (
    <Container>

      <SideBarSimple />

      <Main>
        <Form onSubmit={handleSubmit} >

          <FieldSet>
            <Legend>Dados</Legend>

            <Map
              center={[-3.099966, -59.998374]}
              style={{ width: '1000', height: 280, borderRadius: 10 }}
              zoom={12}
              onclick={handleMapClick}
            >
              <TileLayer
                url={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
              />

              {
                position.latitude !== 0 && (
                  <Marker interactive={false} icon={mapIcon} position={[position.latitude, position.longitude]} />
                )
              }
            </Map>

            <Field>
              <Label htmlFor="name" >Nome</Label>
              <Input
                id="name"
                value={name}
                onChange={event => setName(event.target.value)}
              />
            </Field>

            <Field>
              <Label htmlFor="about" >
                Sobre
                <Role>Máximo de 300 caracteres</Role>
              </Label>
              <TextArea
                id="about"
                maxLength={300}
                value={about}
                onChange={event => setAbout(event.target.value)}
              />
            </Field>

            <Field>
              <Label htmlFor="whatsapp" >WhatsApp</Label>
              <Input
                id="whatsapp"
                type="tel"
                value={whatsapp}
                onChange={event => setWhatsApp(event.target.value)}
              />
            </Field>

            <Field>
              <Label htmlFor="images" >Fotos</Label>

              <ImagesContainer>
                {
                  previewImages.map(image => {
                    return (
                      <ImageToSubmit key={image} src={image} alt={name} />
                    );
                  })
                }

                <NewImage htmlFor="images[]">
                  <FiPlus size={24} color="#15b6d6" />
                </NewImage>
              </ImagesContainer>

              <InputImage
                id="images[]"
                type="file"
                multiple
                onChange={handleSelectImages}
              />
            </Field>
          </FieldSet>

          <FieldSet>
            <Legend>Visitação</Legend>

            <Field>
              <Label htmlFor="instructions" >Instruções</Label>
              <TextArea
                id="instructions"
                value={instructions}
                onChange={event => setInstructions(event.target.value)}
              />
            </Field>

            <Field>
              <Label htmlFor="opening_hours" >Horário de visitas</Label>
              <Input
                id="opening_hours"
                value={opening_hours}
                onChange={event => setOpeningHours(event.target.value)}
              />
            </Field>

            <Field>
              <Label htmlFor="open_on_weekends">Atende aos finais de semana ?</Label>

              <WeekendsButtonArea>
                <WeekendsButton
                  active={open_on_weekends}
                  onClick={() => setOpenOnWeekends(true)}
                >
                  Sim
                </WeekendsButton>

                <WeekendsButton
                  active={!open_on_weekends}
                  onClick={() => setOpenOnWeekends(false)}
                >
                  Não
                </WeekendsButton>
              </WeekendsButtonArea>

            </Field>
          </FieldSet>

          <ConfirmButton type="submit" >Confirmar</ConfirmButton>
        </Form>
      </Main>

    </Container>
  );
}

export { CreateOrphanage };
