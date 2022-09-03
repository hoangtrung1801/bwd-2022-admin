import {
    ArrayField,
    ArrayInput,
    ChipField,
    Create,
    Datagrid,
    DateField,
    DateInput,
    Edit,
    List,
    NumberField,
    NumberInput,
    ReferenceArrayField,
    ReferenceField,
    ReferenceInput,
    SelectField,
    SimpleForm,
    SimpleFormIterator,
    SingleFieldList,
    TextField,
    TextInput,
} from "react-admin";

export const OrderList = () => (
    <List>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <NumberField source="total" />
            <ArrayField source="items">
                <SingleFieldList>
                    <ReferenceField reference="products" source="productID">
                        <ChipField source="name" />
                    </ReferenceField>
                </SingleFieldList>
            </ArrayField>
            <ReferenceField reference="payments" source="payment.id">
                <TextField source="id" />
            </ReferenceField>
            {/* <DateField source="createdAt" />
            <DateField source="modifiedAt" /> */}
            {/* <ArrayField source="items">
                <SingleFieldList>
                    <ChipField source="id" />
                </SingleFieldList>
            </ArrayField> */}
            {/* <TextField source="payment.id" /> */}
        </Datagrid>
    </List>
);

export const OrderEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="id" disabled />
            <NumberInput source="total" />
            {/* <TextInput source="itemIDs" /> */}
            {/* <TextInput source="paymentID" /> */}
            {/* <DateInput source="createdAt" /> */}
            {/* <DateInput source="modifiedAt" /> */}
            <ArrayInput source="items">
                <SimpleFormIterator>
                    {/* <TextInput source="id" /> */}
                    <ReferenceInput reference="products" source="productID" />
                    {/* <TextInput source="productID" /> */}
                    <NumberInput source="quantity" />
                    {/* <TextInput source="orderID" /> */}
                </SimpleFormIterator>
            </ArrayInput>
            {/* <TextInput source="payment.id" /> */}
            <ReferenceInput reference="payments" source="paymentID" />
        </SimpleForm>
    </Edit>
);

export const OrderCreate = () => (
    <Create>
        <SimpleForm>
            <NumberInput source="total" />
            <ArrayInput source="items">
                <SimpleFormIterator>
                    {/* <TextInput source="id" /> */}
                    <ReferenceInput reference="products" source="productID" />
                    {/* <TextInput source="productID" /> */}
                    <NumberInput source="quantity" />
                    {/* <TextInput source="orderID" /> */}
                </SimpleFormIterator>
            </ArrayInput>
        </SimpleForm>
    </Create>
);
