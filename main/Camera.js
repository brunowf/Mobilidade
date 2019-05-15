import React, { Component } from 'react';
import { StatusBar, Modal } from 'react-native';
import { AppRegistry, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { RNCamera } from 'react-native-camera';

import {
    Container,
    AnnotationContainer,
    AnnotationText,
    NewButtonContainer,
    ButtonsWrapper,
    CancelButtonContainer,
    SelectButtonContainer,
    ButtonText,
    Marker,
    ModalContainer,
    ModalImagesListContainer,
    ModalImagesList,
    ModalImageItem,
    ModalButtons,
    CameraButtonContainer,
    CancelButtonText,
    ContinueButtonText,
    TakePictureButtonContainer,
    TakePictureButtonLabel,
    DataButtonsWrapper,
    MarkerContainer,
    MarkerLabel,
    Form,
    Input,
    DetailsModalFirstDivision,
    DetailsModalSecondDivision,
    DetailsModalThirdDivision,
    DetailsModalBackButton,
    DetailsModalPrice,
    DetailsModalRealtyTitle,
    DetailsModalRealtySubTitle,
    DetailsModalRealtyAddress,
} from './styles';

export default class Camera extends Component {

    state = {
        locations: [],
        newRealty: false,
        cameraModalOpened: false,
        dataModalOpened: false,
        detailsModalOpened: false,
        realtyDetailed: null,
        realtyData: {
            location: {
                latitude: null,
                longitude: null,
            },
            name: 'Rocketseat',
            price: '10000',
            address: 'Rua zero, 0',
            images: [],
        },
    };

    handleCameraModalClose = () => this.setState({ cameraModalOpened: !this.state.cameraModalOpened })

    renderConditionalsButtons = () => (

        <ButtonsWrapper>
            <SelectButtonContainer onPress={this.tirarFoto}>
                <ButtonText>Tirar Foto</ButtonText>
            </SelectButtonContainer>
            <CancelButtonContainer>
                <ButtonText>Cancelar</ButtonText>
            </CancelButtonContainer>
        </ButtonsWrapper>
    )

    tirarFoto = async () => {
        try {
            this.setState({
                cameraModalOpened: true
            });
        } catch (err) {
            console.tron.log(err);
        }
    }

    handleTakePicture = async () => {
        if (this.camera) {
            const options = { quality: 0.5, base64: true, forceUpOrientation: true, fixOrientation: true, };
            const data = await this.camera.takePictureAsync(options)
            const { realtyData } = this.state;
            this.setState({
                realtyData: {
                    ...realtyData,
                    images: [
                        ...realtyData.images,
                        data,
                    ]
                }
            })
        }
    }


    renderCameraModal = () => (
        <Modal
            visible={this.state.cameraModalOpened}
            transparent={false}
            animationType="slide"
            onRequestClose={this.handleCameraModalClose}
        >
            <ModalContainer>
                <ModalContainer>
                    <RNCamera
                        ref={camera => {
                            this.camera = camera;
                        }}
                        style={{ flex: 1 }}
                        type={RNCamera.Constants.Type.back}
                        autoFocus={RNCamera.Constants.AutoFocus.on}
                        flashMode={RNCamera.Constants.FlashMode.off}
                        androidCameraPermissionOptions={{title: "Permission to use camera", message:"We need your permission to use your camera phone"}}
                    />
                    <TakePictureButtonContainer onPress={this.handleTakePicture}>
                        <TakePictureButtonLabel />
                    </TakePictureButtonContainer>
                </ModalContainer>
                {this.renderImagesList()}
                <ModalButtons>
                    <CameraButtonContainer onPress={this.handleCameraModalClose}>
                        <CancelButtonText>Cancelar</CancelButtonText>
                    </CameraButtonContainer>
                    <CameraButtonContainer onPress={this.handleDataModalClose}>
                        <ContinueButtonText>Continuar</ContinueButtonText>
                    </CameraButtonContainer>
                </ModalButtons>
            </ModalContainer>
        </Modal>
    )


    render() {
        return (
            <View style={styles.container}>
                {this.renderConditionalsButtons()}
                {this.renderCameraModal()}
            </View>
        );
    }

    handleTakePicture = async () => {
        if (this.camera) {
            const options = { quality: 0.5, base64: true, forceUpOrientation: true, fixOrientation: true, };
            const data = await this.camera.takePictureAsync(options)
            const { realtyData } = this.state;
            this.setState({
                realtyData: {
                    ...realtyData,
                    images: [
                        ...realtyData.images,
                        data,
                    ]
                }
            })
        }
    }

    renderImagesList = () => (
        this.state.realtyData.images.length !== 0 ? (
            <ModalImagesListContainer>
                <ModalImagesList horizontal>
                    {this.state.realtyData.images.map(image => (
                        <ModalImageItem source={{ uri: image.uri }} resizeMode="stretch" />
                    ))}
                </ModalImagesList>
            </ModalImagesListContainer>
        ) : null
    )

    handleDataModalClose = () => this.setState({
        dataModalOpened: !this.state.dataModalOpened,
        cameraModalOpened: false,
    })
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'black',
    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    capture: {
        flex: 0,
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 15,
        paddingHorizontal: 20,
        alignSelf: 'center',
        margin: 20,
    },
});