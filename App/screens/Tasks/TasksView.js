import React, { useCallback} from 'react';
import { StyleSheet, FlatList, View } from 'react-native';
import {FAB, useTheme, Subheading
} from 'react-native-paper';
import LottieView from 'lottie-react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Menu, NewTaskModal } from '../../components'
import { Task } from '../../components'
import * as Animatable from 'react-native-animatable';
import { useSelector } from 'react-redux'
import { selectState } from '../../redux/reducers/task.slice'


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
    (taskId, state) => {
      refRBSheet.current.open()
      setTaskSelected({ taskId, state })
    }
  )
  
  const state = useSelector(selectState)

  React.useEffect(() => {
      if(state === "created" || state === "updated" || state === "error") {
        if(refModalRBSheet.current) {
          refModalRBSheet.current.close()
        }
      }
  });
  

  return (
    <SafeAreaView style={styles.container}>
        { // Llist task or show a lottie animation if is empty
          data.length > 0 ? (
            <FlatList 
              style={styles.list} 
              keyExtractor={(item) => item}
              showsVerticalScrollIndicator={false}
              data={data}
              renderItem={({ item }) => <Task taskId={item}
              handleMenuOpen={handleOpenMenuModal}/>} />
          ) : 
          <View 
          style={{
            flex:1,
            display: 'flex',
            justifyContent: 'center',
            flexDirection:'column',
            alignItems:'center'
          }}>
              <LottieView
              source={require('../../assets/3150-success.json')}
              autoPlay loop
              />
                <Animatable.Text  
                style={styles.emptyText}
                animation="fadeInDown" 
                duration={2000}>
                    <Subheading>
                      You don't have tasks!
                    </Subheading>
                  </Animatable.Text>
          </View>
        }
      
      <Animatable.View
         style={styles.fab}
         animation="bounceInUp" 
         duration={2000}>
        <FAB
          visible={true}
          icon="plus"
          onPress={handleOpenTaskModal}
        />
      </Animatable.View>

      <NewTaskModal
        refRBSheet={refModalRBSheet}
        theme={theme}
      />

      <Menu
        refRBSheet={refRBSheet}
        task={taskSelected}/>
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
  emptyText:{ 
    position:'relative', 
    top:100
  }
})

export default React.memo(TasksView)