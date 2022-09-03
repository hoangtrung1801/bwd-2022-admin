import {
    Create,
    Datagrid,
    DateField,
    DateInput,
    Edit,
    List,
    ReferenceField,
    ReferenceInput,
    SelectArrayInput,
    SimpleForm,
    TextField,
    TextInput,
} from "react-admin";
import { paymentStatus } from "../utils/config";

export const PaymentList = () => (
    <List>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="status" />
            <ReferenceField reference="users" source="userID" />
            <ReferenceField reference="orders" source="orderID" />
        </Datagrid>
    </List>
);

export const PaymentEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="id" disabled />
            {/* <SelectArrayInput
                source="status"
                choices={paymentStatus}
                optionText="status"
            /> */}
            <TextInput source="userID" disabled />
            <TextInput source="status" />
            <TextInput source="orderID" disabled />
        </SimpleForm>
    </Edit>
);

export const PaymentCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="id" />
            {/* <SelectArrayInput
                source="status"
                choices={paymentStatus}
                optionText="status"
            /> */}
            <ReferenceInput reference="users" source="userID" />
            <ReferenceInput reference="orders" source="orderID" />
            <TextInput source="status" />
        </SimpleForm>
    </Create>
);
