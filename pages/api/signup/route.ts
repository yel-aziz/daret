import type { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
  message: string;
};

export default function handler(req, res) {
  if(req.method ==='GET'){

    res.status(200).json({ message: "Hello from Next.js!" });
  }
  res.status(200).json({ message: "wrong methode" });

}
