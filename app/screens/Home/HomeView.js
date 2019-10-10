import React, { Component } from 'react';
import {
    Body,
    Form,
    Icon,
    Item,
    Left,
    List,
    Text,
    Right,
    Input,
    Header,
    Button,
    Content,
    Segment,
    ListItem,
    Container, 
    Thumbnail
} from 'native-base';
import { Alert} from 'react-native'
import { Image } from 'react-native';
import images from '../../config/images';
import styles from './styles';

class HomeView extends Component {
    constructor(props) {
        super(props);

        this.state = {
            active_filter: 'all',
            selected_category: 'all',
            data: this.props.data,
            all_data: this.props.data,
            filter_category_active: 'all',
            filter_type_active: 'all',
            isSearchActive: false,
            chosenCategoryIcon: images.icons.categories['s_all'],
            balance: 0
        };

        this.filterByCategory = this.filterByCategory.bind(this);
        this.filterByType = this.filterByType.bind(this);
        this.isCategorySegmentActive = this.isCategorySegmentActive.bind(this);
        this.isTypeSegmentActive = this.isTypeSegmentActive.bind(this);
        this.setFilteredByCategory = this.setFilteredByCategory.bind(this);
        this.setFilteredByType = this.setFilteredByType.bind(this);
        this.setFilteredByTypeAndCategory = this.setFilteredByTypeAndCategory.bind(this);
        this.onChangeSearchText = this.onChangeSearchText.bind(this);
        this.toggleSearchInput = this.toggleSearchInput.bind(this);
        this.getBalance = this.getBalance.bind(this);
        this.toggleChosenCategoryIcon = this.toggleChosenCategoryIcon.bind(this);
    }

    componentWillMount = () => {
        this.props.fetchData();
    }

    setFilteredByCategory = (category) => {
        let data = this.state.all_data;
        data = data.filter(item => item.category.toLowerCase() == category);
        this.toggleChosenCategoryIcon(category);
        this.setState({data});
    }

    setFilteredByType = (type) => {
        let data = this.state.all_data;
        this.setState({data: data.filter(item => item.type == type)})
    }

    setFilteredByTypeAndCategory = (type, category) => {
        let data = this.state.all_data;
        data = data.filter(item => item.category.toLowerCase() == category && item.type == type);
        this.toggleChosenCategoryIcon(category);
        this.setState({data});
    }

    filterByCategory = (category) => {
        let data = this.state.all_data;
        let chosenType = this.state.filter_type_active;
        this.setState({filter_category_active: category});
        if(category == 'all') {
            if (chosenType == 'all') {
                this.setState({data});
            } else {
                this.setFilteredByType(chosenType);
            }
        } else {
            if (chosenType == 'all') {
                this.setFilteredByCategory(category);
            } else {
                this.setFilteredByTypeAndCategory(chosenType, category);
            }
        }
    }

    filterByType = (type) => {
        let data = this.state.all_data;
        let chosenCategory = this.state.filter_category_active;
        this.setState({filter_type_active: type});
        if (type == 'all') {
            if (chosenCategory == 'all') {
                this.setState({data});
            } else {
                this.setFilteredByCategory(chosenCategory);
            }
        } else {
            if (chosenCategory == 'all') {
                this.setFilteredByType(type);
            } else {
                this.setFilteredByTypeAndCategory(type, chosenCategory);
            }
        }
    }

    isCategorySegmentActive = (category) => {
        return this.state.filter_category_active == category;
    }

    isTypeSegmentActive = (type) => {
        return this.state.filter_type_active == type;
    }

    onChangeSearchText = (value) => {
        let data = this.state.all_data;
        let val = value.toLowerCase();
        if (val.length > 0) {
            this.setState({data: data.filter((item) => item.type.toLowerCase().includes(val) || item.status.toLowerCase().includes(val))
            });
        } else if (val.length == 0) {
            this.setState({data});
            this.toggleSearchInput();
        }
    }

    toggleSearchInput = () => {
        this.setState({isSearchActive: !this.state.isSearchActive})
    }

    getBalance = (data) => {
        let balance = data.reduce((a, b) => +a + +b.balance, 0).toFixed(3);
        return balance;
    }

    toggleChosenCategoryIcon = (category) => {
        this.setState({chosenCategoryIcon: images.icons.categories['s_'+category],});
    }

    render() {
        let data = this.state.data;
        let isSearchActive = this.state.isSearchActive;

        return (
            <Container>
                <Header style={styles.header}>
                    <Left>
                        <Button small rounded style={styles.header_icon_left}>
                            <Text style={styles.header_icon_left_text}>?</Text>
                        </Button>
                    </Left>
                    <Body>
                        <Thumbnail square source={images.icons.logo} style={styles.header_logo}/>
                    </Body>
                    <Right>
                        <Button transparent>
                            <Thumbnail square source={images.icons.header.ring} style={styles.header_icon_right}/>
                        </Button>
                    </Right>
                </Header>
                
                <Content style={styles.main_content}>
                    <Content style={styles.portfolio_info}>
                        <Text style={styles.small_text}>Your Portfolio</Text>
                        <ListItem icon>

                            <Left style={[styles.big_text, styles.category_icon_big]}>
                                <Thumbnail small source={this.state.chosenCategoryIcon} style={styles.category_icon_big} />
                            </Left>
                            <Body style={{borderBottomWidth: 0}}>
                                <Text style={styles.big_text}>
                                    {this.getBalance(data)}
                                </Text>
                            </Body>
                        </ListItem>
                    </Content>

                    <Content>
                        <Segment  style={styles.marginV10}>
                            <Button first active={this.isCategorySegmentActive('a')} style={styles.segment_customize} onPress={() => this.filterByCategory('a')}>
                                <Text style={styles.segment_text}>Category A</Text>
                            </Button>
                            <Button active={this.isCategorySegmentActive('b')} onPress={() => this.filterByCategory('b')}>
                                <Text style={styles.segment_text}>Category B</Text>
                            </Button>
                            <Button active={this.isCategorySegmentActive('c')} onPress={() => this.filterByCategory('c')}>
                                <Text style={styles.segment_text}>Category C</Text>
                            </Button>
                            <Button last active={this.isCategorySegmentActive('all')} onPress={() => this.filterByCategory('all')}>
                                <Text style={styles.segment_text}>All</Text>
                            </Button>
                        </Segment>
                    </Content>
                    <Content style={styles.marginV10}>
                        {isSearchActive ? (
                            <Item rounded>
                                <Input 
                                    placeholder='Search'
                                    onChangeText={(text) => this.onChangeSearchText(text)}
                                    value={this.state.searchValue}
                                />
                            </Item>
                        ) : (
                            <Button block style={styles.search_button} onPress={() => this.toggleSearchInput()}>
                                {/* <Image source={images.icons.search} style={styles.search_button_icon} /> */}
                                <Icon name="search" style={styles.search_button_icon} />
                            </Button>
                        )}
                    </Content>
                    <Content style={styles.marginV10}>
                        <Segment>
                            <Button first active={this.isTypeSegmentActive('all')} onPress={() => this.filterByType('all')}>
                                <Text>All</Text>
                            </Button>
                            <Button active={this.isTypeSegmentActive('buy')} onPress={() => this.filterByType('buy')}>
                                <Text>Buy</Text>
                            </Button>
                            <Button active={this.isTypeSegmentActive('sell')} onPress={() => this.filterByType('sell')}>
                                <Text>Sell</Text>
                            </Button>
                            <Button last active={this.isTypeSegmentActive('transfer')} onPress={() => this.filterByType('transfer')}>
                                <Text>Transfer</Text>
                            </Button>
                        </Segment>
                    </Content>
                    <Content style={styles.marginV10}>
                        {data ? (
                            <List>
                                {data.map((item, index) => 
                                    <ListItem key={index}>
                                        <Left>
                                            <Image source={images.icons.categories[item.category.toLowerCase()]} />
                                        </Left>
                                        <Body>
                                            <Text>{item.type}</Text>
                                        </Body>
                                        <Right>
                                            <Text>{item.balance}</Text>
                                        </Right>
                                    </ListItem>
                                )}
                            </List>
                        ) : (
                            ""
                        )}
                        
                    </Content>
                </Content>
            </Container>
        );
    }
}

export default HomeView;
