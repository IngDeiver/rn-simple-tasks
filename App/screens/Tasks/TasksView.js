import React, { useCallback} from 'react';
import { StyleSheet, FlatList } from 'react-native';
import {FAB, useTheme,
} from 'react-native-paper';
import LottieView from 'lottie-react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Menu, NewTaskModal } from '../../components'
import { Task } from '../../components'

const TasksView = ({ data }) => {
 
  // Component state
  const [taskSelected, setTaskSelected] = React.useState(null);

  // Theme
  const theme = useTheme()

  // New task modal
  const refModalRBSheet = React.useRef(null);
  
  const handleOpenTaskModal = () => {
    refModalRBSheet.current.open()
  };


  // Menu modal
  const refRBSheet = React.useRef(null);
  
  const handleOpenMenuModal = useCallback(
    (taskId) => {
      refRBSheet.current.open()
      setTaskSelected(taskId)
    }
  )
  


 

  return (
    <SafeAreaView style={styles.container}>
        { // Llist task or show a lottie animation if is empty
          data.length > 0 ? (
            <FlatList 
              style={styles.list} 
              showsVerticalScrollIndicator={false}
              data={data}
              renderItem={({ item }) => <Task task={item} 
              handleMenuOpen={handleOpenMenuModal}/>} />

          ) : <LottieView
            source={require('../../assets/3150-success.json')}
            style={{
              display: 'flex',
              justifyContent: 'center'
            }}
            autoPlay loop />
        }
      
      <FAB
        visible={true}
        style={styles.fab}
        icon="plus"
        onPress={handleOpenTaskModal}
      />

      <NewTaskModal
        refRBSheet={refModalRBSheet}
        theme={theme}
      />

      <Menu
        refRBSheet={refRBSheet}
        taskId={taskSelected}/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  list: {
    margin: 10
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
})

export default React.memo(TasksView)