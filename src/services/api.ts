import axios from "axios";
import { reverse } from "dns";

export interface ResponseType {
  summary: {
    outcome: string;
  };
}

const api = axios.create({
  baseURL: "https://front-exercise.z1.digital/evaluations",
});

export const sendPicture = async (imgSrc: string): Promise<ResponseType> => {
  const res = await api.post("", { imgSrc });

  return res.data;
};
