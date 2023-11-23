import React from 'react';
import { IonButton, IonIcon } from '@ionic/react';
import { cameraOutline } from 'ionicons/icons';
import '../components/CameraButton.css';

const CameraButton = ({ onTakePhoto }) => {
    return (
      <div className="camera-button-container">
        <IonButton onClick={onTakePhoto}>
          <IonIcon icon={cameraOutline} />
        </IonButton>
      </div>
    );
  };
  
  export default CameraButton;

  