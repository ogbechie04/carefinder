import { GetObjectCommand, S3Client } from "@aws-sdk/client-s3";
import Hospital from "./hospital";
import { ResponseHospital } from "./hospital";
import GenerateRandomImage from "../utils/generateHospitalImage";

const client = new S3Client({
  region: "eu-west-2",
  credentials: {
    accessKeyId: import.meta.env.VITE_ACCESS_ID,
    secretAccessKey: import.meta.env.VITE_SECRET_KEY,
  },
});

const command = new GetObjectCommand({
  Bucket: "carefinder-hospital-list",
  Key: "hospital.json",
});

export default async function hospitalList(): Promise<Hospital[]> {
  try {
    const response = await client.send(command);

    if (!response.Body) {
      throw new Error("No data returned from S3");
    }
    const str = await response.Body.transformToString();
    const data: ResponseHospital[] = JSON.parse(str);

    return data.map((hospital) => buildHospital(hospital));
  } catch (err) {
    console.error(err);
    return [];
  }
}

function buildHospital(response: ResponseHospital): Hospital {
  return {
    imageURL: GenerateRandomImage(),
    name: response.name,
    location: response.location,
    address: response.address,
    phoneNumber: response.phone_number,
    state: response.state,
    type: response.type,
    email: response.email,
  };
}
