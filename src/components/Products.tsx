import {
    ArrayField,
    ChipField,
    Create,
    Datagrid,
    DateField,
    Edit,
    List,
    NumberField,
    NumberInput,
    ReferenceArrayField,
    ReferenceArrayInput,
    required,
    SelectArrayInput,
    SimpleForm,
    SingleFieldList,
    TextField,
    TextInput,
} from "react-admin";

export const ProductList = () => (
    <List>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="desc" />
            <NumberField source="price" />
            {/* <ArrayField source="categories">
                <SingleFieldList>
                    <ChipField source="name" />
                </SingleFieldList>
            </ArrayField> */}
            <ReferenceArrayField reference="categories" source="categoryIDs">
                <SingleFieldList>
                    <ChipField source="name" />
                </SingleFieldList>
            </ReferenceArrayField>
            {/* <TextField source="categories" /> */}
            {/* <DateField source="createdAt" />
            <DateField source="modifiedAt" /> */}
        </Datagrid>
    </List>
);

export const ProductEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="id" disabled />
            <TextInput source="name" />
            <TextInput source="desc" />
            <NumberInput source="price" />
            <ReferenceArrayInput reference="categories" source="categoryIDs">
                <SelectArrayInput optionText="name" />
            </ReferenceArrayInput>
        </SimpleForm>
    </Edit>
);

export const ProductCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="name" />
            <TextInput source="desc" />
            <NumberInput source="price" />
            <ReferenceArrayInput reference="categories" source="categoryIDs">
                <SelectArrayInput optionText="name" />
            </ReferenceArrayInput>
        </SimpleForm>
    </Create>
);
