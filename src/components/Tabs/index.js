import React from 'react'

import { Container, TabsContainer, TabItem, TabText } from './styles'

import Icon from 'react-native-vector-icons/MaterialIcons'

export default function Tabs({ translateY }) {
    return (
        <Container style={{
            transform: [{
                translateY: translateY.interpolate({
                    inputRange: [0, 380],
                    outputRange: [0, 30],
                    extrapolate: 'clamp'
                })
            }],
            opacity: translateY.interpolate({
                inputRange: [0, 380],
                outputRange: [1, 0.3],
                extrapolate: 'clamp'
            })
        }}>
            <TabsContainer>
                <TabItem>
                    <Icon name="person-add" color="#fff" size={24} />
                    <TabText>Indicar amigos</TabText>
                </TabItem>
                <TabItem>
                    <Icon name="chat-bubble-outline" color="#fff" size={24} />
                    <TabText>Cobrar</TabText>
                </TabItem>
                <TabItem>
                    <Icon name="arrow-downward" color="#fff" size={24} />
                    <TabText>Depositar</TabText>
                </TabItem>
                <TabItem>
                    <Icon name="arrow-upward" color="#fff" size={24} />
                    <TabText>Transferir</TabText>
                </TabItem>
                <TabItem>
                    <Icon name="lock" color="#fff" size={24} />
                    <TabText>Bloquear cartão</TabText>
                </TabItem>
            </TabsContainer>
        </Container>
    )
}