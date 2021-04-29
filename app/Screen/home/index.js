import * as React from 'react';
import {Button, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {connect} from 'react-redux';
import {Provider as PaperProvider} from 'react-native-paper';
import {fetchUserRequest, fetchTodoRequest} from './actions/action';
import {bindActionCreators} from 'redux';
import {TextInput, FlatList} from 'react-native';
import {ThemeProvider} from '@react-navigation/native';
import {addTask} from '../../redux/reducers/home/action';

class HomeScreen extends React.Component {
  state = {
    value: '',
  };

  insert = () => {
    this.props.addTask(this.state.value);
  };
  render() {
    const {taskdata} = this.props.data;

    const renderItem = ({item}) => <Item title={item} />;

    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <View style={{padding: 10}}>
          <TextInput
            style={{height: 40, borderBottomWidth: 1}}
            placeholder="Input Text"
            onChangeText={text => this.setState({value: text})}
          />
        </View>
        <TouchableOpacity onPress={this.insert}>
          <Text> Insert Task</Text>
        </TouchableOpacity>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details')}
        />

        {/* <Text>{taskdata}</Text> */}
        <View>
          {taskdata.map(item => (
            <Text key={item}>{item}</Text>
          ))}
        </View>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    //counter: state.counter,
    //loader: state.loader,
    data: state.taskreducer,
    //counter: state.counter,
  };
}
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      addTask,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
