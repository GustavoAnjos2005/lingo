import { SimpleForm, Edit, TextInput, required, ReferenceInput, BooleanInput } from "react-admin";

export const ChallengeOptionEdit = () => {
    return(
    <Edit>
        <SimpleForm>
            <TextInput source="text" validate={[required()]} label="Text"/>
            <ReferenceInput source="challengeId" reference="challenges"/>
            <BooleanInput source="correct" label="Correct option"/>
            <TextInput source="imageSrc" label="Image URL"/>
            <TextInput source="audioSrc" label="Audio URL"/>
        </SimpleForm>
    </Edit>
    )
}