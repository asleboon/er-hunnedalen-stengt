export async function performRequest<Parameters, Response>(
    url: string,
    params?: Parameters,
    init?: RequestInit
  ): Promise<Response> {
    const { headers } = init || {}
    const body = JSON.stringify(params)
  
    const response = await fetch(url, {
      ...init,
      headers: {
        ...headers,
        'Content-Type': 'application/json',
      },
      body,
    })
    const json = await response.json()
    return json as Response
  }