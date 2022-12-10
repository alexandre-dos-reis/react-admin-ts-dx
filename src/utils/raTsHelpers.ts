import { Path } from "react-hook-form"
import type {EntityType} from 'types/EntityType'

export const raTsHelpers = <MainEntity extends EntityType, RelationshipEntity extends EntityType = never>() => {

    const source = <Properties extends Omit<MainEntity, '__ra_resource_name'>>(property: Path<Properties>) => {
        return {source: property}
    }

    const reference = <ResourceName extends RelationshipEntity['__ra_resource_name']>(resourceName: ResourceName) => {
        return {reference: resourceName}
    }

    return {source, reference}
}
