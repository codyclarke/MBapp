import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Card } from 'react-native-elements';
import { SALES } from '../shared/sales';

function RenderStore({store}) {
    if (store) {
        return(
            <Card>
                <Text style={{margin:10}}>
                    Today's sales: {store.store_Sales}
                </Text>
            </Card> 
        );
    }
    return <View />;
}

class StoreDetail extends Component{
    constructor(props) {
        super(props);
        this.state = {
            sales: SALES
        };
    }

    static navigationOptions = ({navigation}) => {
        return {
            title: navigation.getParam('storeName')
        };
    };
    
    render() {
        const storeId = this.props.navigation.getParam('storeId');
        const store = this.state.sales.filter(store => store.id === storeId)[0];
        return <RenderStore store= {store} />
    }
}

export default StoreDetail;
