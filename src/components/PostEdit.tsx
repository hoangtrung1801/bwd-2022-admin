import { Edit, ReferenceInput, SimpleForm, TextInput } from "react-admin";

export const PostEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="id" disabled />
            <ReferenceInput source="userId" reference="users" />
            <TextInput source="title" />
            <TextInput source="body" multiline />
        </SimpleForm>
    </Edit>
);
