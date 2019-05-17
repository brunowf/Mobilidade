import React, { Component } from 'react';
import { Modal } from 'react-native';
import { StyleSheet, View } from 'react-native';
import { RNCamera } from 'react-native-camera';

import {
    ButtonsWrapper,
    SelectButtonContainer,
    ButtonText,
    ModalContainer,
    ModalImagesListContainer,
    ModalImageItem,
    ModalButtons,
    CameraButtonContainer,
    CancelButtonText,
    ContinueButtonText,
    TakePictureButtonContainer,
    TakePictureButtonLabel,
} from './styles';

export default class Camera extends Component {

    state = {
        cameraFrontal: true,
        cameraAberta: false,
        imagem: null,
    };

    abrirFecharCamera = () => this.setState({ cameraAberta: !this.state.cameraAberta })

    renderConditionalsButtons = () => (

        <ButtonsWrapper>
            <SelectButtonContainer onPress={this.abrirCamera}>
                <ButtonText>Tirar foto</ButtonText>
            </SelectButtonContainer>
        </ButtonsWrapper>
    )

    abrirCamera = async () => {
        try {
            this.setState({
                cameraAberta: true
            });
        } catch (err) {
            console.tron.log(err);
        }
    }

    tirarFoto = async () => {
        if (this.camera) {
            const options = { quality: 0.5, base64: true, forceUpOrientation: true, fixOrientation: true, };
            const data = await this.camera.takePictureAsync(options)
            this.setState({
                imagem: data
            })
        }
    }


    verificaLadoCamera(Camera) {
        if (this.state.cameraFrontal) 
            return Camera.front ;
        return Camera.back ;
    }

    renderCameraModal = () => (
        <Modal
            visible={this.state.cameraAberta}
            transparent={false}
            animationType="fade"
            onRequestClose={this.abrirFecharCamera}
        >
            <ModalContainer>
                <ModalContainer>
                    <RNCamera
                        ref={camera => {
                            this.camera = camera;
                        }}
                        style={{ flex: 1 }}
                        type={this.verificaLadoCamera(RNCamera.Constants.Type)}
                        autoFocus={RNCamera.Constants.AutoFocus.on}
                        flashMode={RNCamera.Constants.FlashMode.off}
                        androidCameraPermissionOptions={{ title: "Permission to use camera", message: "We need your permission to use your camera phone" }}
                    />
                    <TakePictureButtonContainer onPress={this.tirarFoto}>
                        <TakePictureButtonLabel />
                    </TakePictureButtonContainer>
                </ModalContainer>
                {this.renderImagem()}
                <ModalButtons>
                    <CameraButtonContainer onPress={this.abrirFecharCamera}>
                        <CancelButtonText>Voltar</CancelButtonText>
                    </CameraButtonContainer>
                    <CameraButtonContainer onPress={this.trocarLadoCamera}>
                        <ContinueButtonText>Trocar camera</ContinueButtonText>
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


    renderImagem = () => (
        this.state.imagem !== null ? (
            <ModalImagesListContainer>
                <ModalImageItem source={{ uri: this.state.imagem.uri }} resizeMode="stretch" />
            </ModalImagesListContainer>
            ): null
    )

    trocarLadoCamera = () => this.setState({
        cameraFrontal: !this.state.cameraFrontal
    })
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'black',
    },
});