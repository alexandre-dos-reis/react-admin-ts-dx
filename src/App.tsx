import { Admin, Resource } from "react-admin"
import jsonServerProvider from "ra-data-json-server"
import { user } from "./ressources/users"
import { posts } from "ressources/posts"

const dataProvider = jsonServerProvider("http://localhost:3000")

const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource {...user} recordRepresentation="name" />
    <Resource {...posts} />
  </Admin>
)

export default App
