import { ResourceProps } from "react-admin"
import { create } from "./create"
import { edit } from "./edit"
import { list } from "./list"
import PostIcon from "@mui/icons-material/Book";

export const posts: ResourceProps = {
  name: "posts",
  icon: PostIcon,
  list,
  edit,
  create
}
