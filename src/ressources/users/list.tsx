import { MyUrlField } from "components/fields/MyUrlField"
import { List, Datagrid, TextField, EmailField } from "react-admin"
import { Users } from "types/Users"
import { raTsHelpers } from "utils/raTsHelpers"

export const list = () => {
  const { source } = raTsHelpers<Users>()

  return (
    <List>
      <Datagrid rowClick="edit">
        <TextField {...source("name")} />
        <EmailField {...source("email")} />
        <TextField {...source("phone")} />
        <MyUrlField {...source("website")} />
        <TextField {...source("company.name")} />
      </Datagrid>
    </List>
  )
}
