import { GetObjectCommand, S3Client } from "@aws-sdk/client-s3";
import Hospital from "./hospital";
import { ResponseHospital } from "./hospital";
import GenerateRandomImage from "../utils/generateHospitalImage";

const client = new S3Client({
  region: "eu-west-2",
  credentials: {
    accessKeyId: "AKIA6GBMBYKLBQBXJQDX",
    secretAccessKey: "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",
  },
});

const command = new GetObjectCommand({
  Bucket: "carefinder-hospital-list",
  Key: "hospital.json",
});

export default async function hospitalList(): Promise<Hospital[]> {
  try {
    const response = await client.send(command);
    // The Body object also has 'transformToByteArray' and 'transformToWebStream' methods.
    const str = await response.Body.transformToString();
    const data: ResponseHospital[] = JSON.parse(str);
    console.log(data[0].phone_number);

    return data.map((hospital) => buildHospital(hospital));
    // console.log(str);
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
