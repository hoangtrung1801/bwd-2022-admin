import {
    ArrayField,
    ChipField,
    Create,
    Datagrid,
    Edit,
    List,
    ReferenceArrayInput,
    SelectArrayInput,
    SimpleForm,
    SingleFieldList,
    TextField,
    TextInput,
} from "react-admin";

export const CategoryList = () => (
    <List>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
            {/* <TextField source="productIDs" /> */}
            <ArrayField source="products">
                <SingleFieldList>
                    <ChipField source="name" />
                </SingleFieldList>
            </ArrayField>
        </Datagrid>
    </List>
);

export const CategoryEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="id" disabled />
            <TextInput source="name" />
            <TextInput source="label" />
            <ReferenceArrayInput reference="products" source="productIDs">
                <SelectArrayInput optionText="name" />
            </ReferenceArrayInput>
            {/* <TextInput source="productIDs" />
            <TextInput source="products" /> */}
        </SimpleForm>
    </Edit>
);

export const CategoryCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="name" />
            <TextInput source="label" />
            <ReferenceArrayInput reference="products" source="productIDs">
                <SelectArrayInput optionText="name" />
            </ReferenceArrayInput>
            {/* <TextInput source="productIDs" />
            <TextInput source="products" /> */}
        </SimpleForm>
    </Create>
);
