import React from 'react';
import { IonModal, IonButton, IonImg } from '@ionic/react';

const PhotoViewer = ({ photo, onClose }) => {
  return (
    <IonModal isOpen={!!photo} onDidDismiss={onClose}>
      <IonImg src={photo?.webviewPath} />
      <IonButton onClick={onClose}>Cerrar</IonButton>
    </IonModal>
  );
};

export default PhotoViewer;