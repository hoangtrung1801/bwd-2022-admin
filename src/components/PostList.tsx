import {
    Datagrid,
    List,
    ReferenceField,
    ReferenceInput,
    TextField,
    TextInput,
} from "react-admin";

const postFilters = [
    <TextInput source="q" label="Search" alwaysOn />,
    <ReferenceInput source="userId" label="User" reference="users" />,
];

export const PostList = () => (
    <List filters={postFilters}>
        <Datagrid rowClick="edit">
            <ReferenceField source="userId" reference="users" />
            <TextField source="id" />
            <TextField source="title" />
        </Datagrid>
    </List>
);
