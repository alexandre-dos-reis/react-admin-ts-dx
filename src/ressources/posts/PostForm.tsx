import { ReferenceInput, SelectInput, TextInput } from "react-admin"
import { Posts } from "types/Posts"
import { Users } from "types/Users"
import { raTsHelpers } from "utils/raTsHelpers"

export const PostForm = () => {
  const { source, reference } = raTsHelpers<Posts, Users>()

  return (
    <>
      <ReferenceInput {...source("userId")} {...reference("users")}>
        <SelectInput fullWidth />
      </ReferenceInput>
      <TextInput {...source("title")} fullWidth />
      <TextInput {...source("body")} multiline rows={5} fullWidth />
    </>
  )
}
