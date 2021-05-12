import React from 'react'
import { ScrollView, StyleSheet, Platform, View } from 'react-native'
import { Button, Portal, TextInput, Title } from 'react-native-paper'
import DateTimePicker from '@react-native-community/datetimepicker';
import { SafeAreaView, Dimensions } from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";

const ModalComponent = ({ theme, refRBSheet }) => {
    // Datepicker
    const [show, setShow] = React.useState(false);
    const onChange = (_, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
    };
    const [date, setDate] = React.useState(new Date());

    return (
        <SafeAreaView>
            <Portal>
                <RBSheet
                    openDuration={600}
                    height={Dimensions.get('window').height / 1.5}
                    ref={refRBSheet}
                    closeOnDragDown
                    customStyles={{
                        container: {
                            backgroundColor: theme.colors.surface,
                            ...styles.modal
                        }
                    }}
                >

                    <ScrollView
                        style={styles.modalContentContainer}>

                        <View>
                            <Title
                                theme={theme}
                                style={styles.title}>New task</Title>
                        </View>
                        <TextInput
                            theme={theme}
                            style={styles.text}
                            label="Title"
                            mode="outlined"
                        />
                        <TextInput
                            theme={theme}
                            style={styles.text}
                            label="Description"
                            mode="outlined"
                            multiline
                        />
                        <TextInput
                            theme={theme}
                            style={styles.text}
                            label="Tag"
                            mode="outlined"
                        />

                        <Button icon="calendar" mode="outlined"
                            onPress={() => setShow(true)} compact
                            theme={theme}
                            style={styles.btnDate}
                            color="blue">
                            Date
                        </Button>
                        {show && (
                            <DateTimePicker
                                testID="dateTimePicker"
                                value={date}
                                mode="date"
                                display="default"
                                onChange={onChange}
                            />
                        )}
                        <View style={styles.modalActions}>
                            <Button style={styles.btnActions} compact icon="plus"
                                theme={theme}
                                onPress={() => console.log('Pressed')}>
                                Save
                            </Button>
                            <Button style={styles.btnActions} compact icon="close"
                                theme={theme}
                                color="red"
                                onPress={() => refRBSheet.current.close()}>
                                Close
                             </Button>
                        </View>
                    </ScrollView>

                </RBSheet>
            </Portal>
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    text: {
        marginVertical: 10
    },
    title: {
        textAlign: "center",
        marginVertical: 10
    },
    btnActions: {
        marginHorizontal: 10
    },
    modal: {
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20
    },
    btnDate: {
        marginBottom: 10
    },
    modalActions: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 20
    },
    modalContentContainer: {
        marginHorizontal: 20,
        height: 300
    }
})
export default ModalComponent