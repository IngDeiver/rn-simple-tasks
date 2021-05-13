import React from 'react'
import { StyleSheet } from 'react-native'
import { Chip, Card } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native';

const TaskView = ({ task, handleMenuOpen }) => {
    const navigation = useNavigation();
    const showDetail = (taskId) => {
        navigation.navigate("Details", { taskId })
    }

    return (
        <Card
            onLongPress={() => handleMenuOpen(task.id)}
            style={styles.card}
            onPress={() => showDetail(task.id)}>
            <Card.Title title={task.title} subtitle={task.date} />
            {task.tag && <Card.Content style={styles.cardContent}>
                <Chip>{task.tag}</Chip>
            </Card.Content>}
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