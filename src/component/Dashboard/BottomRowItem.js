import React from "react";
import { View, Text } from "react-native";

export const BottomRowItem = (props) => {
  return (
    <View
      style={{
        backgroundColor: "white",
        flex: 1,
        flexDirection: "column",
        margin: 5,
      }}
    >
      <Text style={{ padding: 5, color: "black", fontSize: 30 }}>
        {props.item.Country}
      </Text>
      <Text style={{ padding: 5, color: "black", fontSize: 20 }}>
        Total Confirmed: {props.item.TotalConfirmed}
      </Text>
      <Text style={{ padding: 5, color: "black", fontSize: 20 }}>
        Total Recovered: {props.item.TotalRecovered}
      </Text>
      <Text style={{ padding: 5, color: "black", fontSize: 20 }}>
        Total Deaths: {props.item.TotalDeaths}
      </Text>
    </View>
  );
};
