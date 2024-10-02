// pages/api/createUser.ts

import type { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '../../../lib/supabaseClient';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { email, password } = req.body;



    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required' });
    }

    // Create a new user in Supabase
    const { data, error } = await supabase.from('User').insert([
      {
        email: email,
        Password: password,
        name: 'bloto',
        phone: '44444',
        LastName:"tgrghr"

      }
    ])
     

    if (error) {
      return res.status(400).json({ error: error.message });
    }

    res.status(200).json({  });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
