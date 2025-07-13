import { dataTypeToInputTypeMap } from "@/lib/definitions";



const getInputType = (attributeType: string, marker: string) =>
  marker.includes("password")
    ? "password"
    : marker.includes("email")
    ? "email"
    : dataTypeToInputTypeMap[attributeType];

export default getInputType;