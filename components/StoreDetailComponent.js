import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { ListItem } from 'react-native-elements';
import { SALES } from '../shared/sales';

function RenderStore({store}) {
    if (store) {
        return(
            <ListItem>
                <ListItem.Title>Today's Sales:</ListItem.Title>
                <View style={styles.subtitle}>
                        <Text>{store.store_sales}</Text>
                    </View>
            </ListItem>
            
            
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

const styles = StyleSheet.create({
    subtitle: {
        display: 'flex',
        flex: 1,
        flexDirection: 'row-reverse',
        
    }
})
export default StoreDetail;
