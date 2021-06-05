import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';
import { SALES } from '../shared/sales';

class Sales extends Component {

    constructor(props) {
        super(props);
        this.state = {
            sales: SALES
        };
    }

    static navigationOptions = {
       headerShown: false
    };  

    render() {
        const { navigate } = this.props.navigation;
        const renderSalesItem = ({item}) => {
            return (
                <ListItem
                    title={item.store_name}
                    rightSubtitle={`${item.store_Sales}`}
                    onPress={() => navigate('StoreDetail', { storeId: item.id, storeName: item.store_name })}
                />
            );
        }
        return(
            <FlatList
                data={this.state.sales}
                renderItem={renderSalesItem}
                keyExtractor={item => item.id.toString()}
            />
        );
    }
}

export default Sales;