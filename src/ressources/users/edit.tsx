import { Edit, SimpleForm, TextInput } from "react-admin"
import { PostForm } from "ressources/posts/PostForm"
import { Users } from "types/Users"
import { raTsHelpers } from "utils/raTsHelpers"

export const edit = () => {
  const { source } = raTsHelpers<Users>()
  return (
    <Edit>
      <SimpleForm>
        <TextInput {...source("name")} />
        <TextInput {...source("email")} />
        <TextInput {...source("phone")} />
        <TextInput {...source("website")} />
        <TextInput {...source("company.name")} />
        <PostForm />
      </SimpleForm>
    </Edit>
  )
}
