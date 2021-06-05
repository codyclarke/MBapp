import React, { Component } from 'react';
import { View } from 'react-native';
import { ListItem } from 'react-native-elements';
import { SALES } from '../shared/sales';

function RenderStore({store}) {
    if (store) {
        return(
            <ListItem
            title="Today's Sales:"
            rightSubtitle={`${store.store_sales}`}/>
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
