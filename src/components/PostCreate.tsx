import { Create, ReferenceInput, SimpleForm, TextInput } from "react-admin";

export const PostCreate = () => (
    <Create>
        <SimpleForm>
            <ReferenceInput source="userId" reference="users" />
            <TextInput source="title" />
            <TextInput source="body" multiline />
        </SimpleForm>
    </Create>
);
