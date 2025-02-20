import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";

interface CajaProps {
    label: string;
    icono?: React.ReactNode;
    color?: string;
    onChangeText: (value: string) => void;
}

const Caja = (Props: CajaProps) => {
    return (
        <View style={[styles.container, { borderBottomColor: Props.color || "#000" }]}>
            <Text style={[styles.label, { color: Props.color || "#000" }]}>{Props.label}</Text>
            <View style={styles.caja}>
                {Props.icono}
                <TextInput  
                    style={[styles.input, { color: Props.color || "#000" }]}
                    keyboardType="numeric"
                    onChangeText={(value) => {
                        if (/^\d*\.?\d*$/.test(value)) {Props.onChangeText(value)}}}
                />
            </View>
        </View>
    );
}

export default Caja;

const styles = StyleSheet.create({
    container: {
        borderBottomWidth: 2,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    caja: {
        backgroundColor: "#A67B5B",
        padding: 10,
        margin: 10,
        borderRadius: 5,
        flexDirection: "row",
        alignItems: "center",
    },
    label: {
        fontSize: 14,
        fontWeight: "bold",
    },
    input: {
        fontSize: 20,
        padding: 10,
        flex: 1,
    },
});
