import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonGrid, IonRow, IonCol, IonImg } from '@ionic/react';
import { usePhotoGallery } from '../hooks/usePhotoGallery';
import '../pages/Tab1.css';

const Tab1: React.FC = () => {
    const { photos, deletePhoto } = usePhotoGallery();

    const handlePhotoClick = async (photo) => {
        await deletePhoto(photo);
    };

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Galería de Fotos</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonGrid>
                    {photos.map((photo, index) => (
                        <IonRow key={index}>
                            <IonCol size="4">
                                <div className="photo-wrapper" onClick={() => handlePhotoClick(photo)}>
                                    <IonImg src={photo.webviewPath} />
                                </div>
                            </IonCol>
                        </IonRow>
                    ))}
                </IonGrid>
            </IonContent>
        </IonPage>
    );
};

export default Tab1;

