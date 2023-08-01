import { Stack, useSearchParams } from "expo-router"
import { Graph } from "../../components"
import { View } from "react-native-web"
import { SafeAreaView } from "react-native"

import { COLORS } from "../../constants"

const Graph = () => {
    const params = useSearchParams().data

    console.log(params)

    return(
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.lightWhite}}>
        <Stack.Screen options={{
            headerTitle: 'Graph'
        }}/>
        <Graph data={params}/>
    </SafeAreaView>
    )
}

export default Graph