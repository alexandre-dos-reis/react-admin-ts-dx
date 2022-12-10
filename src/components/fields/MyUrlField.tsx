import { useRecordContext, UrlFieldProps } from "react-admin"

export const MyUrlField = ({ source }: UrlFieldProps) => {
  const record = useRecordContext()
  if (!record || !source) return null
  return <a href={record[source]}>{record[source]}</a>
}
