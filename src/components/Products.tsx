import { useEffect, useState } from "react";
import {
    ChipField,
    Create,
    Datagrid,
    Edit,
    ImageField,
    ImageInput,
    List,
    NumberField,
    NumberInput,
    ReferenceArrayField,
    ReferenceArrayInput,
    SelectArrayInput,
    SimpleForm,
    SingleFieldList,
    TextField,
    TextInput,
    useRecordContext,
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
            <TextInput source="desc" fullWidth multiline/>
            <NumberInput source="price" />
            <ReferenceArrayInput reference="categories" source="categoryIDs">
                <SelectArrayInput optionText="name" />
            </ReferenceArrayInput>
            {/* <ImageField source="images" src="." label="Images" /> */}
            <Image />
            {/* <ArrayField source="images" label="Images">
                <SingleFieldList>
                    <TextField />
                </SingleFieldList>
            </ArrayField> */}
        </SimpleForm>
    </Edit>
);

export const ProductCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="name" />
            <TextInput source="desc" multiline fullWidth/>
            <NumberInput source="price" />
            <ReferenceArrayInput reference="categories" source="categoryIDs">
                <SelectArrayInput optionText="name" label="Categories" />
            </ReferenceArrayInput>
            <ImageInput source="images" label="Images" multiple>
                <ImageField source="src" title="title" />
            </ImageInput>
        </SimpleForm>
    </Create>
);

const Image = () => {
    const record = useRecordContext();
    const [images, setImages] = useState(record.images);
    useEffect(() => setImages(record.images), [record.images]);

    return (
        <div style={{ display: "flex" }}>
            {images.map((image, id) => (
                <img
                    key={`image ${id}`}
                    src={image}
                    alt={`image ${id}`}
                    width={300}
                    height={200}
                />
            ))}
        </div>
    );
};
