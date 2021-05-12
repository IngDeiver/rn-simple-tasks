import React from 'react'
import { StyleSheet } from 'react-native'
import { Chip, Card } from 'react-native-paper'

const TaskView = ({ task, handleMenuOpen, showDetail }) => {
    return (
        <Card
            onLongPress={() => handleMenuOpen(task.id)}
            style={styles.card}
            onPress={() => showDetail(task.id)}>
            <Card.Title title={task.title} subtitle={task.date} />
            <Card.Content style={styles.cardContent}>
                <Chip>{task.tag}</Chip>
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