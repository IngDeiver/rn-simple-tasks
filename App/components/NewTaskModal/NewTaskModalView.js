import React from 'react'
import { StyleSheet} from 'react-native'
import { Portal, Provider} from 'react-native-paper'
import { SafeAreaView, Dimensions } from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";
import '../../utils/date'
import { TaskForm } from '..'

const NewTaskModalView = ({ theme, refRBSheet }) => {
    return (
        <SafeAreaView>
            <Provider>
            <Portal>
                <RBSheet
                    openDuration={600}
                    height={Dimensions.get('window').height / 1.6}
                    ref={refRBSheet}
                    closeOnDragDown
                    customStyles={{
                        container: {
                            backgroundColor: theme.colors.surface,
                            ...styles.modal
                        }
                    }}
                >
                    <TaskForm />
                </RBSheet>
            </Portal>
            </Provider>
            
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    
    
    btnActions: {
        marginHorizontal: 10
    },
    modal: {
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20
    },
})
export default NewTaskModalView