import {
    CreateParams,
    CreateResult,
    DeleteManyParams,
    DeleteManyResult,
    DeleteParams,
    DeleteResult,
    GetListParams,
    GetListResult,
    GetManyParams,
    GetManyReferenceParams,
    GetManyReferenceResult,
    GetManyResult,
    GetOneParams,
    GetOneResult,
    RaRecord,
    UpdateManyParams,
    UpdateManyResult,
    UpdateParams,
    UpdateResult,
} from "ra-core/dist/cjs/types";
import { DataProvider, HttpError } from "react-admin";
import fetchJson from "./fetchJson";

const apiUrl = "http://localhost:3000/api";
// const fetcher = (resource: string, option?: RequestInit) =>
//     fetch(`${apiUrl}/${resource}`, option).then((data) => data.json());

const dataProvider: DataProvider = {
    getList: async function <RecordType extends RaRecord = any>(
        resource: string,
        params: GetListParams
    ): Promise<GetListResult<RecordType>> {
        const data = await fetchJson(resource);
        return {
            data: data.data,
            total: data.data.length,
        };
    },
    getOne: async function <RecordType extends RaRecord = any>(
        resource: string,
        params: GetOneParams<any>
    ): Promise<GetOneResult<RecordType>> {
        const data = await fetchJson(`${resource}/${params.id}`);

        return {
            data: data.data,
        };
    },
    getMany: async function <RecordType extends RaRecord = any>(
        resource: string,
        params: GetManyParams
    ): Promise<GetManyResult<RecordType>> {
        const data = await fetchJson(resource);

        return {
            data: data.data,
        };
    },
    getManyReference: async function <RecordType extends RaRecord = any>(
        resource: string,
        params: GetManyReferenceParams
    ): Promise<GetManyReferenceResult<RecordType>> {
        const data = await fetchJson(resource);

        return {
            data: data.data,
            total: data.data.length,
        };
    },
    update: async function <RecordType extends RaRecord = any>(
        resource: string,
        params: UpdateParams<any>
    ): Promise<UpdateResult<RecordType>> {
        console.log(params);
        let updateData: any = {};
        Object.keys(params.data).map((key) => {
            const value = params.data[key];
            const previousValue = params.previousData[key];
            if (JSON.stringify(value) !== JSON.stringify(previousValue))
                updateData[key] = value;
        });
        console.log(updateData);

        const data = await fetchJson(`${resource}/${params.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updateData),
        });

        return {
            data: data.data,
        };
    },
    updateMany: function <RecordType extends RaRecord = any>(
        resource: string,
        params: UpdateManyParams<any>
    ): Promise<UpdateManyResult<RecordType>> {
        throw new Error("Function not implemented.");
    },
    create: async function <RecordType extends RaRecord = any>(
        resource: string,
        params: CreateParams<any>
    ): Promise<CreateResult<RecordType>> {
        const data = await fetchJson(`${resource}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(params.data),
        });

        return {
            data: data.data,
        };
    },
    delete: async function <RecordType extends RaRecord = any>(
        resource: string,
        params: DeleteParams<RecordType>
    ): Promise<DeleteResult<RecordType>> {
        const data = await fetchJson(`${resource}/${params.id}`, {
            method: "DELETE",
        });

        return {
            data: data.data,
        };
    },
    deleteMany: function <RecordType extends RaRecord = any>(
        resource: string,
        params: DeleteManyParams<RecordType>
    ): Promise<DeleteManyResult<RecordType>> {
        throw new Error("Function not implemented.");
    },
};

export default dataProvider;
