import axios, { AxiosRequestConfig } from 'axios';
import { VITA_API_PREFIX } from '../constants/apiConstants';

export async function authorizedGet<T>(url: string, options?: AxiosRequestConfig) {
    return axios.get<T>(url, { ...options, headers: getHeaders(null, options?.headers) }).then((res) => res.data);
}

export async function authorizedPost<T>(url: string, data: any, options?: AxiosRequestConfig) {
    return axios
        .post<T>(url, data, { ...options, headers: getHeaders(options?.data, options?.headers) })
        .then((res) => res.data);
}

export async function authorizedPut<T>(url: string, data: any, options?: AxiosRequestConfig) {
    return axios
        .put<T>(url, data, { ...options, headers: getHeaders(options?.data, options?.headers) })
        .then((res) => res.data);
}

export async function authorizedDelete<T>(url: string, options?: AxiosRequestConfig) {
    return axios
        .delete<T>(url, {
            ...options,
            headers: getHeaders(options?.data, options?.headers),
        })
        .then((res) => res.data);
}

export async function getData(url: string, options?: AxiosRequestConfig): Promise<string> {
    return axios
        .get(url, {
            responseType: 'blob',
            ...options,
        })
        .then((res) => URL.createObjectURL(new Blob([res.data])));
}

export async function vitaGet<T>(url: string, signal?: AbortSignal) {
    return authorizedGet<T>(join(VITA_API_PREFIX, url), { signal });
}

export async function vitaPost<T>(url: string, data: any, options?: AxiosRequestConfig) {
    return authorizedPost<T>(join(VITA_API_PREFIX, url), data, options);
}

export async function vitaPut<T>(url: string, data: any, options?: AxiosRequestConfig) {
    return authorizedPut<T>(join(VITA_API_PREFIX, url), data, options);
}

export async function vitaDelete<T>(url: string, options?: AxiosRequestConfig) {
    return authorizedDelete<T>(join(VITA_API_PREFIX, url), options);
}

const UUID_REGEX = '[a-f0-9]{8}-[a-f0-9]{4}-4[a-f0-9]{3}-[89aAbB][a-f0-9]{3}-[a-f0-9]{12}';

const getHeaders = (body?: any, headers?: any) => {
    if (headers?.['Content-Type']) {
        return headers;
    }

    const contentType = getContentType(body); // TODO validate if its still necessary with axios
    // const defaultHeaders: any = { Authorization: localStorage.getItem("access_token") };
    const defaultHeaders: any = { 'X-Client': 'react' };

    if (contentType) {
        defaultHeaders['Content-Type'] = contentType;
    }

    return {
        ...defaultHeaders,
        ...headers,
    };
};

// TODO validate axios compliance
const getContentType = (data: any) => {
    if (data instanceof FormData) {
        return undefined; // To let the browser calculate Content-Type
    } else if (['object', 'number', 'boolean'].includes(typeof data)) {
        return 'application/json';
    } else if (typeof data === 'string' && !data.match(UUID_REGEX)) {
        return 'text/plain';
    }
};

function join(path1: string, path2: string): string {
    if (path1.endsWith('/')) {
        path1 = path1.slice(0, -1); // Remove the trailing slash from path1
    }

    if (path2.startsWith('/')) {
        path2 = path2.slice(1); // Remove the leading slash from path2
    }

    return `${path1}/${path2}`;
}
