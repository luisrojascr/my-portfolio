const FORM_URL = 'https://api.web3forms.com/submit';

/** Parsed JSON from https://api.web3forms.com/submit */
export type Web3FormsResponse = {
  success?: boolean;
  message?: string;
  body?: {
    message?: string;
    data?: Record<string, unknown>;
  };
};

function messageFromPayload(data: Web3FormsResponse): string {
  return (
    data.body?.message ??
    data.message ??
    (data.success ? 'Email sent successfully!' : 'Request failed')
  );
}

export type SubmitWeb3FormsResult = {
  ok: boolean;
  message: string;
  status: number;
};

/**
 * POST form data to Web3Forms. Safe to call from the browser (recommended) or the server.
 */
export async function submitWeb3Forms(
  formData: FormData,
): Promise<SubmitWeb3FormsResult> {
  const response = await fetch(FORM_URL, {
    method: 'POST',
    body: formData,
  });

  let data: Web3FormsResponse = {};
  try {
    data = (await response.json()) as Web3FormsResponse;
  } catch {
    return {
      ok: false,
      message: response.statusText || 'Invalid response from form service',
      status: response.status,
    };
  }

  const message = messageFromPayload(data);
  const ok = data.success === true;

  return {
    ok,
    message,
    status: response.status,
  };
}
