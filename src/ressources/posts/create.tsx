import { Create, SimpleForm } from "react-admin"
import { PostForm } from "./PostForm"

export const create = () => {
  return (
    <Create>
      <SimpleForm>
        <PostForm />
      </SimpleForm>
    </Create>
  )
}
