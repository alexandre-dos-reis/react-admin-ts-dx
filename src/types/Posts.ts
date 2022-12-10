import { EntityType } from "./EntityType";

export interface Posts extends EntityType {
    __ra_resource_name: "posts";
    id: string;
    title: string;
    body: string
    userId: number
  }