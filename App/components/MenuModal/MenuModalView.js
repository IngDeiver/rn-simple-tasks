import React from 'react'
import { View, StyleSheet } from 'react-native'
import { List, Divider, useTheme, Portal, Dialog } from 'react-native-paper'
import LottieView from 'lottie-react-native';
import { SafeAreaView } from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";
import { useNavigation } from '@react-navigation/native';
import { deleteTask } from '../../redux/reducers/task.slice'
import { useDispatch } from 'react-redux';

const MenuModalView = ({ taskId, refRBSheet }) => {
  const theme = useTheme()
  const navigation = useNavigation();
  const dispatch = useDispatch()

  const closeMenu = () => {
    refRBSheet.current.close()
  }

  const showDetail = () => {
      closeMenu()
      navigation.navigate("Details", { taskId })
  }

  const deleteTaskHandle = () => {
    dispatch(deleteTask(taskId))
      .then(closeMenu())
  }

  const [okDialogVisible, setOkDialogVisible] = React.useState(false);

  const showDialog = () => {
    refRBSheet.current.close()
    setOkDialogVisible(true);
  }

  const hideDialog = () => setOkDialogVisible(false);


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
              borderTopRightRadius: 10,
              backgroundColor: theme.colors.surface
            }
          }}>
          <View  >
            <List.Item
              title="Delete"
              onPress={deleteTaskHandle}
              left={props => <List.Icon {...props} icon="delete" color="red" />}
            />
            <Divider />
            <List.Item
              title="Edit"
              onPress={showDetail}
              left={props => <List.Icon {...props} icon="brush" color="green" />}
            />
            <Divider />
            <List.Item
              onPress={showDialog}
              title="Done"
              left={props => <List.Icon {...props} icon="check" color="green" />}
            />
          </View>
        </RBSheet>
      </Portal>
      <Portal>
        <Dialog
          theme={theme}
          visible={okDialogVisible}
          onDismiss={hideDialog}
        >
          <Dialog.Content
            style={styles.dialogContainer}>
            <LottieView
              source={require('../../assets/4015-check-mark-circle-blue.json')}
              style={styles.lottie}
              autoPlay
              loop={false}
              onAnimationFinish={hideDialog}
            />
          </Dialog.Content>
        </Dialog>
      </Portal>
    </SafeAreaView>



  )
}

const styles = StyleSheet.create({
  menu: {
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20
  },
  lottie: {
    height: 150,
    width: 150,
  },
  dialogContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 200,
  }
})
export default MenuModalView