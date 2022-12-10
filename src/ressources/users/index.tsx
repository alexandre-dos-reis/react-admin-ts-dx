import { ResourceProps } from "react-admin"
import { list } from "./list"
import { edit } from "./edit";
import UserIcon from "@mui/icons-material/Group";

export const user: ResourceProps = {
  name: "users",
  icon: UserIcon,
  list,
  edit,
}
