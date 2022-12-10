import {
  List,
  Datagrid,
  TextField,
  ReferenceField,
  EditButton,
  TextInput,
  ReferenceInput,
} from "react-admin"
import { Posts } from "types/Posts"
import { Users } from "types/Users"
import { raTsHelpers } from "utils/raTsHelpers"

const filters = [
  <TextInput source="q" label="Search" alwaysOn />,
  <ReferenceInput source="userId" reference="users" alwaysOn />,
]

export const list = () => {
  const { source, reference } = raTsHelpers<Posts, Users>()

  return (
    <List filters={filters}>
      <Datagrid rowClick="edit">
        <TextField {...source("id")} />
        <ReferenceField {...source("userId")} {...reference("users")} />
        <TextField {...source("title")} />
        <TextField {...source("body")} />
        <EditButton />
      </Datagrid>
    </List>
  )
}
