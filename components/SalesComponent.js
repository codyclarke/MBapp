import React, { Component } from 'react';
import { View, Text, StyleSheet, RefreshControl } from 'react-native';
import { FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';
import { SALES } from '../shared/sales';

function wait(timeout) {
    return new Promise(resolve => {
      setTimeout(resolve, timeout);
    });
  }
  
  Sales.navigationOptions = {
      headerShown: false
   };
function Sales(props) {
      


    const Header = () => {
        return(
            <View style={styles.header}>
                <Text style={styles.headerTextLeft}>Store Location</Text>
                <Text style={styles.headerTextRight}>Total Sales</Text>
            </View>
        )
    }
        const [refreshing, setRefreshing] = React.useState(false);
    
        const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        wait(2000).then(() => setRefreshing(false));
        }, []);
        
        const { navigate } = props.navigation;
        const renderSalesItem = ({item}) => {
            return (
                <ListItem bottomDivider onPress={() => navigate('StoreDetail', { storeId: item.id, storeName: item.store_name })}>
                    <ListItem.Title >{item.store_name}</ListItem.Title>
                    <View style={styles.subtitle}>
                        <Text>{item.store_sales}</Text>
                    </View>

                </ListItem>
            
            );
        }
        return(
            <FlatList
                data={SALES}
                renderItem={renderSalesItem}
                keyExtractor={item => item.id.toString()}
                stickyHeaderIndices={[0]}
                ListHeaderComponent={Header}
                refreshControl={
                    <RefreshControl
                      refreshing={refreshing}
                      onRefresh={onRefresh}
                    />
                  }
            />
        );
    }

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#dee0c8',
        display: 'flex',
        flexDirection: 'row',
        borderBottomColor: '#153853',
        elevation: 5
        
        
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
    },
    subtitle: {
        display: 'flex',
        flex: 1,
        flexDirection: 'row-reverse',
        
    }

}
)
export default Sales;