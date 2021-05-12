import React from 'react'
import { View, StyleSheet } from 'react-native'
import { List, Divider, useTheme, Portal } from 'react-native-paper'
import LottieView from 'lottie-react-native';
import { MaterialDialog } from 'react-native-material-dialog';
import { SafeAreaView } from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";


const Menu = ({ taskId, refRBSheet }) => {
  const theme = useTheme()

  const [okDialogVisible, setOkDialogVisible] = React.useState(false);

  return (

    <SafeAreaView style={styles.container}>
      <Portal>
        <RBSheet
          height={200}
          ref={refRBSheet}
          closeOnDragDown
          customStyles={{
            container: {
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10
            }
          }}>
          <View  >
            <List.Item
              title="Delete"
              left={props => <List.Icon {...props} icon="delete" color="red" />}
            />
            <Divider />
            <List.Item
              title="Edit"
              left={props => <List.Icon {...props} icon="brush" color="green" />}
            />
            <Divider />
            <List.Item
              onPress={() => {
                setOkDialogVisible(true)
              }}
              title="Done"
              left={props => <List.Icon {...props} icon="check" color="green" />}
            />
          </View>
          <MaterialDialog
            visible={okDialogVisible}
            onCancel={() => setOkDialogVisible(false)}
            backgroundColor={theme.colors.surface}
          >
            <View style={
              {
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center'
              }
            }>
              <LottieView
                source={require('../assets/4015-check-mark-circle-blue.json')}
                style={{
                  height: 100,
                  width: 100,
                  marginRight: 10
                }}
                autoPlay
                loop={false}
                onAnimationFinish={() => {
                  setOkDialogVisible(false)
                  refRBSheet.current.close()
                }}
              />
            </View>
          </MaterialDialog>
        </RBSheet>
      </Portal>
    </SafeAreaView>



  )
}

const styles = StyleSheet.create({
  menu: {
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20
  }
})
export default Menu