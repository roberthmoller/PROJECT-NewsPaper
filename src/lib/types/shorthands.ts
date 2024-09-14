export type Fetch = (input: RequestInfo | URL, init?: RequestInit) => Promise<Response>;


export type Loading = {
    isLoading: boolean
};
export type External<T> = T | Loading;