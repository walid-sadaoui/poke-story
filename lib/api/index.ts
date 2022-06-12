enum RESTMethods {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  PATCH = "PATCH",
  DELETE = "DELETE",
}

export interface DataResponseType {
  data?: DataResponseType;
  error?: {
    code: number;
    description: string;
    message: string;
    isOperational: boolean;
  };
}
export interface ResponseData {
  code: number;
  message: string;
}

const POKEAPI_URL = "https://pokeapi.co/api/v2";

const fetcher = async <DataResponseType>(
  route: string,
  method: RESTMethods = RESTMethods.GET,
  body?: string
): Promise<DataResponseType> => {
  const response: Response = await fetch(`${POKEAPI_URL}${route}`, {
    method: method,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    mode: "cors",
    cache: "default",
    // credentials: "include",
    body: body,
  });
  const responseData: DataResponseType = await response.json();
  return responseData;
};

const getRequest = async <DataResponseType>(
  route: string
): Promise<DataResponseType> => {
  const getResponseData: DataResponseType = await fetcher(
    route,
    RESTMethods.GET
  );
  return getResponseData;
};

const postRequest = async <DataResponseType>(
  route: string,
  body?: string
): Promise<DataResponseType> => {
  const getResponseData: DataResponseType = await fetcher(
    route,
    RESTMethods.POST,
    body
  );
  return getResponseData;
};

const deleteRequest = async <DataResponseType>(
  route: string
): Promise<DataResponseType> => {
  const deleteResponseData: DataResponseType = await fetcher(
    route,
    RESTMethods.DELETE
  );
  return deleteResponseData;
};

export { getRequest, postRequest, deleteRequest };
