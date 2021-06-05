import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';
import { FAQS } from '../shared/faq';

class Faq extends Component {

    constructor(props) {
        super(props);
        this.state = {
            faqs: FAQS
        };
    }

    static navigationOptions = {
        title: 'Faq'
    };  

    render() {
        const renderFaqItem = ({item}) => {
            return (
                <ListItem
                    title={item.question}
                    subtitle={item.answer}
                />
            );
        }
        return(
            <FlatList
                data={this.state.faqs}
                renderItem={renderFaqItem}
                keyExtractor={item => item.id.toString()}
            />
        );
    }
}

export default Faq;