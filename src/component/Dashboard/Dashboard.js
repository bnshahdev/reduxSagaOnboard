import React from "react";
import { View, Text, FlatList, Button, ScrollView } from "react-native";
import { BottomRowItem } from "./BottomRowItem";
import { connect } from "react-redux";
import * as actions from "./Actions";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      summary: [],
    };
  }

  componentDidMount() {
    //trigger action
    this.props.fetchSummary();
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("this.props.globalData ->" + this.props.globalData);
    console.log("this.props.countryData ->" + this.props.countryData.length);
  }

  render() {
    return (
      <View>
        <View style={localStyle.topContainer}>
          <ScrollView horizontal={true} style={{ height: 60 }}>
            <Text style={localStyle.title}>
              Confirmed: {this.props.globalData.TotalConfirmed}
            </Text>
            <Text style={localStyle.title}>
              Deaths: {this.props.globalData.TotalDeaths}
            </Text>
            <Text style={localStyle.title}>
              Recovered: {this.props.globalData.TotalRecovered}
            </Text>
          </ScrollView>
        </View>
        <View style={localStyle.bottomContainer}>
          <View>
            <FlatList
              data={this.props.countryData}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => <BottomRowItem item={item} />}
            />
          </View>
        </View>
        <View style={localStyle.footerContainer}>
          <Button
            title="Refresh"
            color="white"
            onPress={() => {
              this.props.fetchSummary();
            }}
          ></Button>
        </View>
      </View>
    );
  }
}

const localStyle = {
  title: {
    padding: 10,
    color: "white",
    fontSize: 25,
  },
  topContainer: {
    backgroundColor: "black",
  },
  bottomContainer: {
    backgroundColor: "lightgrey",
  },
  footerContainer: {
    backgroundColor: "black",
    position: "absolute",
    bottom: 100,
    left: 0,
    right: 0,
    height: 60,
  },
};

const mapStateToProps = (state) => ({
  globalData: state.summaryData.Global,
  countryData: state.summaryData.Countries,
});

export default connect(mapStateToProps, actions)(Dashboard);
