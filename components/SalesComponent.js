import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
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

    Header = () => {
        return(
            <View style={styles.header}>
                <Text style={styles.headerTextLeft}>Store Location</Text>
                <Text style={styles.headerTextRight}>Total Sales</Text>
            </View>
        )
    }

    render() {
        const { navigate } = this.props.navigation;
        const renderSalesItem = ({item}) => {
            return (
                <ListItem
                    title={item.store_name}
                    rightSubtitle={`${item.store_sales}`}
                    onPress={() => navigate('StoreDetail', { storeId: item.id, storeName: item.store_name })}
                />
            );
        }
        return(
            <FlatList
                data={this.state.sales}
                renderItem={renderSalesItem}
                keyExtractor={item => item.id.toString()}
                stickyHeaderIndices={[0]}
                ListHeaderComponent={this.Header}
            />
        );
    }
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#dee0c8',
        display: 'flex',
        flexDirection: 'row'
        
        
    },
    headerTextLeft: {
        flex: 1,
        padding: 10,
        color: '#153853'
    },
    headerTextRight: {
        flex: 1,
        textAlign: 'right',
        padding: 10,
        color: '#153853'
    }

}
)
export default Sales;