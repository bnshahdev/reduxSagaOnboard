import React from "react";
import { View, Text, FlatList, Button } from "react-native";
import { TopRowItem } from "./TopRowItem";
import { BottomRowItem } from "./BottomRowItem";
import { connect } from "react-redux";
import * as actions from "./Actions";

class Dashboard extends React.Component {
  componentDidMount() {
    //trigger action
    this.props.fetchSummary();
  }

  render() {
    return (
      <View>
        <View style={localStyle.topContainer}>
          <View>
            <Text>Top</Text>
          </View>
          <View>
            <FlatList
              horizontal={true}
              data={this.props.summary}
              renderItem={({ item }) => <TopRowItem item={item} />}
            />
          </View>
        </View>
        <View style={localStyle.bottomContainer}>
          <View>
            <Text>Bottom</Text>
          </View>
          <View>
            <FlatList
              data={this.props.summary}
              renderItem={({ item }) => <BottomRowItem item={item} />}
            />
          </View>
        </View>
        <View style={localStyle.footerContainer}>
          <Button title="Refresh"></Button>
        </View>
      </View>
    );
  }
}

const localStyle = {
  topContainer: {},
  bottomContainer: {},
  footerContainer: {
    backgroundColor: "black",
  },
};

export default connect(null, actions)(Dashboard);
