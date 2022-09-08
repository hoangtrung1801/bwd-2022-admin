import {
    ArrayField,
    ArrayInput,
    Create,
    Datagrid,
    DateField,
    DateInput,
    Edit,
    ImageField,
    ImageInput,
    List,
    ListView,
    NumberField,
    NumberInput,
    SimpleForm,
    SimpleFormIterator,
    SimpleFormIteratorItem,
    SingleFieldList,
    TextField,
    TextInput,
} from "react-admin";

export const DonationList = () => (
    <List>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="desc" />
            <NumberField source="target" />
            <DateField source="expiryDate" />
            <ImageField source="image" />
            {/* <TextField source="image" /> */}
        </Datagrid>
    </List>
);

export const DonationEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="id" disabled />
            <TextInput source="name" />
            <TextInput source="desc" />
            <NumberInput source="target" />
            <DateInput source="expiryDate" />
            {/* <TextInput source="image" /> */}
            <ImageField source="image" label="Imaage" />
            {/* <TextInput source="donator" /> */}
            <ArrayInput source="donator">
                <SimpleFormIterator>
                    <TextInput source="userID" label="userID" />
                    <NumberInput source="amount" />
                </SimpleFormIterator>
            </ArrayInput>
        </SimpleForm>
    </Edit>
);

export const DonationCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="name" />
            <TextInput source="desc" fullWidth multiline />
            <NumberInput source="target" />
            <DateInput source="expiryDate" />
            {/* <TextInput source="image" /> */}
            {/* <ImageField source="image" label="Imaage" /> */}
            {/* <TextInput source="donator" /> */}
            <ImageInput source="image" />
            <ArrayInput source="donator">
                <SimpleFormIterator>
                    <TextInput source="userID" label="userID" />
                    <NumberInput source="amount" />
                </SimpleFormIterator>
            </ArrayInput>
        </SimpleForm>
    </Create>
);
