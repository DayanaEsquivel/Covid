import React, { Component} from 'react'
import {
    View,
    Text,
    StyleSheet,
    ActivityIndicator, Image, FlatList
  } from 'react-native';

//import { Ionicons } from '@expo/vector-icons';

import { Col, Row, Grid } from "react-native-easy-grid";
import CovidService from '../Service/CovidService';

export default class CovidDetaills extends Component{
    constructor(props){
        super(props);
        this.state = {
            data: null,
            isLoading: true,
            date: ""
            
        }
    }
    componentDidMount(){
        //console.log(CovidService.getMexico());
        CovidService.getMexico().then((results) => {
            if(results.data[0].provinces[0]){
                this.setState({
                    isLoading:false,
                    data: results.data[0].provinces[0],
                    date: results.data[0].date
                })
                console.log(results.data[0]);
                
            }
        }).catch((err) => {
            console.log(err);
        });
          
    }
    render(){

        if(this.state.isLoading){
            return(
                <ActivityIndicator/>
            )
        }else{
        return (
            <View style={styles.content}>
                <View style={styles.contentImg}>
                    <Image source={{uri: 'https://www.elsevier.com/__data/assets/image/0007/978739/coronavirus-image-iStock-628925532-full-width-wide.jpg'}}
                    style={ styles.itemImage}></Image>
                    <Text style={ styles.itemTitulo }>Casos de COVID-19 </Text>
                    <Text style={ styles.itemTitulo2 }>{this.state.data.province}: {this.state.date}</Text>
                </View>

                <Grid>
                    <Col style={styles.contentText}>
                        <Row style={ styles.itemText}> 
                            <Text style={ styles.texto}>Activos: </Text>
                            <Text style={ styles.itemss }> {this.state.data.active}</Text>
                        </Row>
                        <Row style={ styles.itemText2 }>
                            <Text style={ styles.texto }>Confirmados: </Text>
                            <Text style={ styles.itemss }>  {this.state.data.confirmed}</Text>
                        </Row>
                    </Col>
                    <Col style={styles.contentText}>
                        <Row style={ styles.itemText3}>
                            <Text style={ styles.texto }>Muertes: </Text>
                            <Text style={ styles.itemss }> {this.state.data.deaths} </Text>
                        </Row>
                        <Row style={ styles.itemText4}> 
                            <Text style={ styles.texto }>Recuperados: </Text>
                            <Text style={ styles.itemss }> {this.state.data.recovered} </Text>
                        </Row>

                    </Col>
                </Grid>
                
            </View>
        );
        }
    }
}

const styles= StyleSheet.create({
    content: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column'
    },
    itemImage: {
        width: '100%',
        height: '50%',
        borderWidth: 4,
    },
    itemText: {
        flex: 1,
        paddingVertical: '35%',
        alignItems: 'center',
        backgroundColor: '#F28A1C',
        flexDirection: 'column',
        width: '100%',
        borderWidth: 2,
        borderRadius: 5,
        borderColor: '#ddd',
        borderBottomWidth: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 20 },
        shadowOpacity: 0.8,
        shadowRadius: 10,
        elevation: 2,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 5,
        
    },
    texto: {
        fontSize: 20,
        textAlign: 'center',
        color: 'white',
    },
    contentImg: {
        backgroundColor: 'white',
        alignSelf: 'stretch',
        alignItems: 'center',
        height: '40%',
        

    },
    contentText: {
        backgroundColor: 'white',
        alignItems: 'center',    
    },
    itemTitulo: {
        fontSize: 40,
        textAlign: 'center',
        marginVertical: 10,
        color: 'black'
    },
    prueba: {
        flex:1,
        backgroundColor: '#AED581',
    },
    itemTitulo2: {
        fontSize: 25,
        textAlign: 'center',
        marginVertical: 10,
        color: 'black'
    },
    itemss: {
        flex: 1,
        borderRadius: 100,
        width: 100,
        height: 90,
        fontSize: 20,
        color: 'white',
        backgroundColor: 'gray',
        textAlign: 'center',
        paddingVertical: 15,
    }, 
    itemText2: {
        flex: 1,
        paddingVertical: '35%',
        alignItems: 'center',
        flexDirection: 'column',
        backgroundColor: '#F6362A',
        width: '100%',
        borderWidth: 2,
        borderRadius: 5,
        borderColor: '#ddd',
        borderBottomWidth: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 20 },
        shadowOpacity: 0.8,
        shadowRadius: 10,
        elevation: 2,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 5,
        
    },
    itemText3: {
        flex: 1,
        paddingVertical: '35%',
        alignItems: 'center',
        flexDirection: 'column',
        backgroundColor: '#333732',
        width: '100%',
        borderWidth: 2,
        borderRadius: 5,
        borderColor: '#ddd',
        borderBottomWidth: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 20 },
        shadowOpacity: 0.8,
        shadowRadius: 10,
        elevation: 2,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 5,
        
    },
    itemText4: {
        flex: 1,
        paddingVertical: '35%',
        alignItems: 'center',
        flexDirection: 'column',
        backgroundColor: '#57E411',
        width: '100%',
        borderWidth: 2,
        borderRadius: 5,
        borderColor: '#ddd',
        borderBottomWidth: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 20 },
        shadowOpacity: 0.8,
        shadowRadius: 10,
        elevation: 2,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 5,
        
    },
});