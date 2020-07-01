import React, { useState } from "react";

import {Text, View, StyleSheet, TouchableHighlight} from "react-native";

function ColorSwatch({colorCode, onPress = f=>f}) {
    return (
        <TouchableHighlight style={[styles.tbtn, {borderColor: colorCode}]} onPress={() => onPress(colorCode)} underlayColor={colorCode}>
            <View style={styles.row}>
                <View style={[styles.sample, {backgroundColor: colorCode}]} />
                <Text>{colorCode}</Text>
            </View>
        </TouchableHighlight>
    );
}

function App() {
    const [backgroundColor, setBackgroundColor] = useState("#eeeeee");

    const colors = ["#5fdde5", "#f4ea8e", "#a8df65", "#e7305b", "#fa1616", "#fa7d09", "#900c3f", "#6a197d", "#ff847c", "#99b898", "#000"];

    return(
        <View style={[styles.container, {backgroundColor}]}>
            <Text onPress={() => setBackgroundColor("#eeeeee")} style={[styles.btn, {color: '#eeeeee'}]}>
                🌩
            </Text>
            <Text onPress={() => setBackgroundColor("#5fdde5")} style={[styles.btn, {color: '#5fdde5'}]}>Blue</Text>
            <Text onPress={() => setBackgroundColor("#f4ea8e")} style={[styles.btn, {color: '#f4ea8e'}]}>Yellow</Text>
            <Text onPress={() => setBackgroundColor("#a8df65")} style={[styles.btn, {color: '#a8df65'}]}>Green</Text>

            {
                colors.map((value, index) => (
                   <ColorSwatch key={index} colorCode={value} onPress={setBackgroundColor} />
                ))
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 50,
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    btn: {
        fontSize: 30,
        margin: 10,
        borderWidth: 2,
        borderRadius: 10,
        padding: 15,
        borderStyle: "solid",
        borderColor: "#393e46",
        backgroundColor: "#222831"
    },

    tbtn: {
        margin: 10,
        borderWidth: 2,
        borderRadius: 10,
        padding: 15,
        backgroundColor: "rgba(255, 255, 255, 0.6)",
    },

    txt: {
        fontSize: 30,
        textAlign: "center"
    },

    row: {
        flexDirection: "row",
        alignItems: "center"
    },

    sample: {
        height: 20,
        width: 20,
        margin: 5,
        backgroundColor: "white",
        borderRadius: 10
    }
});

export default App;