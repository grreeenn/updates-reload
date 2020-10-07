import {I18nManager} from 'react-native';
import React from "react";
import {hideAsync, preventAutoHideAsync} from "expo-splash-screen";
import {reloadAsync} from "expo-updates";

export default function useStartupHook() {
    const [isLoadingComplete, setLoadingComplete] = React.useState(false);

    React.useEffect(() => {
        async function loadResourcesAndDataAsync() {
            try {
                preventAutoHideAsync();

                await I18nManager.forceRTL(true);
                console.log('forced RTL');
                await reloadAsync();
                console.log('reloaded!');

            } catch (e) {
                console.warn(e);
            } finally {
                setLoadingComplete(true);
                hideAsync();
            }
        }

        loadResourcesAndDataAsync();
    }, []);

    return isLoadingComplete;
}
