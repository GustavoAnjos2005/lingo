import { SimpleForm, Edit, TextInput, required } from "react-admin";

export const CourseEdit = () => {
    return(
    <Edit>
        <SimpleForm>
            <TextInput source="title" validate={[required()]} label="Title"/>
            <TextInput source="imageSrc" validate={[required()]} label="Image"/>
        </SimpleForm>
    </Edit>
    )
}