import React from 'react';
import { View, Platform, StyleSheet } from 'react-native'
import { Button, TextInput, useTheme } from 'react-native-paper'
import DateTimePicker from '@react-native-community/datetimepicker';
import { ScrollView } from 'react-native-gesture-handler';


const DetailView = ({ taskId }) => {

    const theme = useTheme()
      // Datepicker
      const [show, setShow] = React.useState(false);
      const onChange = (_, selectedDate) => {
          const currentDate = selectedDate || date;
          setShow(Platform.OS === 'ios');
          setDate(currentDate);
      };
      const [date, setDate] = React.useState(new Date());

    return (
        <ScrollView style={styles.detailContainer}>
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

                <View style={styles.btnDateContainer}>
                    <Button icon="calendar" mode="outlined"
                        onPress={() => setShow(true)} compact
                        theme={theme}
                        style={styles.btnDate}>
                        Date
                    </Button>
                </View>
                <Button icon="plus" mode="contained"
                            theme={theme}
                            style={styles.btnSave}>
                    Save
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
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    detailContainer:{
        margin:20
    },
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
        padding: 20,
        margin: 20,
        borderRadius: 20,
    },
    btnDate: {
        marginBottom: 10
    },
    modalActions: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginVertical: 20
  },
  btnDateContainer:{
      display:'flex',
      flexDirection:'row',
      justifyContent:'flex-start'
  }
})
export default React.memo(DetailView)