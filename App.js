import { StatusBar } from "expo-status-bar";
import React from "react";
import { Button, I18nManager, StyleSheet, Text, View } from "react-native";
import * as Updates from "expo-updates";
import useStartupHook from "./useStartupHook";

async function toggleRTL() {
  await I18nManager.forceRTL(I18nManager.isRTL ? false : true);
  await Updates.reloadAsync();
}

export default function App() {
    const isLoadingComplete = useStartupHook();

    if (!isLoadingComplete) {
        return null;
    }
  return (
    <View style={styles.container}>
      <Text>{new Date().toString()}</Text>
      <Text>{I18nManager.isRTL ? "RTL" : "LTR"}</Text>
      <View style={{ marginVertical: 5 }} />
      <Button title="Reload app" onPress={() => Updates.reloadAsync()} />
      <View style={{ marginVertical: 5 }} />
      <Button title="Toggle RTL" onPress={() => toggleRTL()} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
});
