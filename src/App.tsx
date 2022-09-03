import {
    Admin,
    Resource,
    ListGuesser,
    EditGuesser,
    ResourceContext,
} from "react-admin";
import {
    CategoryCreate,
    CategoryEdit,
    CategoryList,
} from "./components/Categories";
import { OrderCreate, OrderEdit, OrderList } from "./components/Orders";
import { PaymentCreate, PaymentEdit, PaymentList } from "./components/Payments";
import { ProductCreate, ProductEdit, ProductList } from "./components/Products";
import { UserCreate, UserEdit, UserList } from "./components/Users";
import dataProvider from "./utils/dataProvider";

// const dataProvider = dataJsonServer("http://localhost:3000/api");

function App() {
    // useEffect(() => {
    //     fetch("https://localhost:3000/api/users")
    //         .then((data) => data.json())
    //         .then((data) => console.log(data));
    // }, []);

    return (
        <Admin dataProvider={dataProvider}>
            <Resource
                name="users"
                list={UserList}
                edit={UserEdit}
                create={UserCreate}
                recordRepresentation="email"
            />
            <Resource
                name="products"
                list={ProductList}
                edit={ProductEdit}
                create={ProductCreate}
                recordRepresentation="name"
            />
            <Resource
                name="categories"
                list={CategoryList}
                edit={CategoryEdit}
                create={CategoryCreate}
                recordRepresentation="name"
            />
            <Resource
                name="orders"
                list={OrderList}
                edit={OrderEdit}
                create={OrderCreate}
            />
            <Resource
                name="payments"
                list={PaymentList}
                edit={PaymentEdit}
                // create={PaymentCreate}
            />
        </Admin>
    );
}

export default App;
