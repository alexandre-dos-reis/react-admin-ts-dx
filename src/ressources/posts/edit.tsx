import {
  Edit,
  SimpleForm,
  TextInput,
} from "react-admin"
import { Posts } from "types/Posts"
import { Users } from "types/Users"
import { raTsHelpers } from "utils/raTsHelpers"
import { PostForm } from "./PostForm"

export const edit = () => {
  const { source } = raTsHelpers<Posts, Users>()
  return (
    <Edit>
      <SimpleForm>
        <TextInput {...source("id")} disabled />
        <PostForm />
      </SimpleForm>
    </Edit>
  )
}
