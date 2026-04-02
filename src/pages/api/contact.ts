import { NextApiRequest, NextApiResponse } from 'next';

import { submitWeb3Forms } from '@/services/contact';

const FORM_API_KEY = process.env.CONTACT_FORM_API_KEY;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  if (!FORM_API_KEY) {
    return res.status(500).json({ error: 'Contact form is not configured' });
  }

  try {
    const { formData } = req.body as {
      formData?: Record<string, string>;
    };

    if (!formData || typeof formData !== 'object') {
      return res.status(400).json({ error: 'Invalid body' });
    }

    const updatedFormData = new FormData();
    updatedFormData.append('access_key', FORM_API_KEY);

    for (const key of Object.keys(formData)) {
      const value = formData[key];
      if (value !== undefined && value !== null) {
        updatedFormData.append(key, String(value));
      }
    }

    const result = await submitWeb3Forms(updatedFormData);

    if (result.ok) {
      return res.status(200).json({ success: true, message: result.message });
    }

    return res.status(502).json({ success: false, message: result.message });
  } catch {
    return res.status(500).json({ error: 'Something went wrong!' });
  }
}
