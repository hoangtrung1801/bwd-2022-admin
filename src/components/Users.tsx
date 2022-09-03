import {
    Datagrid,
    DateField,
    DateInput,
    Edit,
    EmailField,
    List,
    SimpleForm,
    TextField,
    TextInput,
    Create,
} from "react-admin";

export const UserList = () => (
    <List>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <EmailField source="email" />
            {/* <TextField source="password" /> */}
            <TextField source="firstName" />
            <TextField source="lastName" />
            <TextField source="phone" />
            <TextField source="address.addressLine" />
            <TextField source="role" />
            {/* <DateField source="createdAt" />
            <DateField source="modifiedAt" /> */}
        </Datagrid>
    </List>
);

export const UserEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="id" disabled />
            <TextInput source="email" />
            {/* <TextInput source="password" /> */}
            <TextInput source="firstName" />
            <TextInput source="lastName" />
            <TextInput source="phone" />
            <TextInput source="address.addressLine" />
            <TextInput source="address.city" />
            <TextInput source="address.country" />
            <TextInput source="address.phone" />
            <TextInput source="role" disabled />
            {/* <DateInput source="createdAt" />
            <DateInput source="modifiedAt" /> */}
        </SimpleForm>
    </Edit>
);

export const UserCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="email" />
            <TextInput source="password" />
            <TextInput source="firstName" />
            <TextInput source="lastName" />
            <TextInput source="phone" />
            <TextInput source="address.addressLine" />
            <TextInput source="address.city" />
            <TextInput source="address.country" />
            <TextInput source="address.phone" />
        </SimpleForm>
    </Create>
);
