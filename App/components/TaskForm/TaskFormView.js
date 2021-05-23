import React from 'react';
import { OutlinedTextField } from 'rn-material-ui-textfield'
import DateTimePicker from '@react-native-community/datetimepicker';
import { ScrollView, View, Platform, StyleSheet } from 'react-native'
import { Button, Title, useTheme } from 'react-native-paper'
import { useForm } from '../../hooks'
import * as Yup from 'yup';
import { selectState } from '../../redux/reducers/task.slice'
import { useSelector } from 'react-redux'


const TaskFormView = ({ updating, task }) => {
    const theme = useTheme()
    const state = useSelector(selectState)
    const TaskSchema = Yup.object().shape({
        title: Yup.string()
          .min(10, 'Too short! must be between 10 and 50 characters')
          .max(50, 'Too long! must be between 10 and 50 characters!')
          .required('The title field is required'),
        description: Yup.string()
            .min(10, 'Too short! must be between 10 and 100 characters')
            .max(100, 'Too long! must be between 10 and 100 characters!')
          .required('The description field is required'),
        tag: Yup.string()
    });
    const formTask = useForm({
        initialValues: {
            id: task ? task.id : null,
            title: task ? task.title : '',
            description: task ? task.description : '',
            tag: task ? task.tag : '',
            date: task ? new Date(task.date) : ''
        },
        validationSchema:TaskSchema
    });

    // Datepicker
    const onChangeDate = (_, selectedDate) => {
        const currentDate = selectedDate || formTask.values.date;
        setShowDatepicker(Platform.OS === 'ios');
        formTask.setFieldValue('date', currentDate)

    };
    const [showDatepicker, setShowDatepicker] = React.useState(false);

    return (
        <View>
            <View>
                <Title
                    theme={theme}
                    style={styles.title}> { updating ? 'Detail' : 'New task'} 
                </Title>
            </View>
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={styles.modalContentContainer}>
                <OutlinedTextField
                    baseColor="grey"
                    containerStyle={styles.text}
                    value={formTask.values.title}
                    onChangeText={(value) => formTask.setFieldValue('title', value)}
                    onBlur={() => formTask.setFieldTouched('title')}
                    label="Title"
                    tintColor={theme.colors.primary}
                    textColor={theme.colors.text}
                    error={formTask.touched.title && formTask.errors.title}
                />

                <OutlinedTextField
                    baseColor="grey"
                    containerStyle={styles.text}
                    value={formTask.values.description}
                    onChangeText={(value) => formTask.setFieldValue('description', value)}
                    onBlur={() => formTask.setFieldTouched('description')}
                    label="Description"
                    multiline
                    tintColor={theme.colors.primary}
                    textColor={theme.colors.text}
                    error={formTask.touched.description  && formTask.errors.description}
                />

                <OutlinedTextField
                    baseColor="grey"
                    containerStyle={styles.text}
                    value={formTask.values.tag}
                    onChangeText={(value) => formTask.setFieldValue('tag', value)}
                    onBlur={() => formTask.setFieldTouched('tag')}
                    title="Optional"
                    label="Tag"
                    tintColor={theme.colors.primary}
                    textColor={theme.colors.text}
                    error={formTask.touched.tag  && formTask.errors.tag}
                />

                <Button icon="calendar" mode="outlined"
                    onPress={() => setShowDatepicker(true)}
                    compact
                    theme={theme}
                    style={styles.btnDate}
                    color="blue">
                    {formTask.values.date ? formTask.values.date.yyyymmdd() : "Date (optional)"}
                </Button>

                {showDatepicker && (
                    <DateTimePicker
                        value={formTask.values.date != '' ? formTask.values.date : new Date()}
                        onChange={onChangeDate}
                        onTouchCancel={() => setShow(false)}
                        testID="dateTimePicker"
                        mode="date"
                        display="default"
                    />
                )}

                <Button
                    style={{marginBottom:200}}
                    icon = { !updating ? 'plus' : 'brush'}
                    theme={theme}
                    mode="contained"
                    loading = {state === 'saving' || state === 'updating'}
                    disabled ={ state === 'saving' || state === 'updating'}
                    onPress={formTask.handleSubmit}>
                    { updating ? 'Update' : 'Save'}
                </Button>
            </ScrollView>
               
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        marginVertical: 5
    },
    title: {
        textAlign: "center",
        marginVertical: 10
    },
    btnDate: {
        marginBottom: 10
    },
    modalContentContainer: {
        marginHorizontal: 20
    }
})

export default TaskFormView