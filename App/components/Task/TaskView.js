import React from 'react'
import { StyleSheet } from 'react-native'
import { Chip, Card } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux'
import { getTaskByIdSelector } from '../../redux/reducers/task.slice'

const TaskView = ({ taskId, handleMenuOpen }) => {

    const navigation = useNavigation();

    const showDetail = (taskId) => {
        navigation.navigate("Details", { taskId })
    }
    
    const task = useSelector(getTaskByIdSelector(taskId))

    return (
        <Card
            onLongPress={() => handleMenuOpen(task.id, task.state)}
            style={styles.card}
            onPress={() => showDetail(task.id)}>
            <Card.Title title={task.title} subtitle={task.date ? new Date(task.date).yyyymmdd():""} />
             <Card.Content style={styles.cardContent}>
               {
                   task.tag !== undefined && task.tag !== '' &&  <Chip>{task.tag}</Chip>
               }
            </Card.Content>
        </Card>
    )
}

const styles = StyleSheet.create({
    card: {
        marginVertical: 10,
      },
      cardContent: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end"
      },
})
export default TaskView