import React from 'react';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';

const PhotoInfo = ({ photo }) => {
  if (!photo) return null;

  return (
    <IonCard>
      <IonCardHeader>
        <IonCardSubtitle>Detalles de la Foto</IonCardSubtitle>
        <IonCardTitle>Información de la Foto</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        <p>Fecha: {new Date(photo.filepath).toLocaleDateString()}</p>
        <p>Ruta: {photo.filepath}</p>
      </IonCardContent>
    </IonCard>
  );
};

export default PhotoInfo;