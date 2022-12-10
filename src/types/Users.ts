import { EntityType } from "./EntityType";

export interface Users extends EntityType {
    __ra_resource_name: "users";
    name: string;
    email: string;
    phone: string
    website: string
    company: {
        name: string
    }
  }