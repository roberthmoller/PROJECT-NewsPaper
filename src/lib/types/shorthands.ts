export type Fetch = (input: RequestInfo | URL, init?: RequestInit) => Promise<Response>;


export type Loading = {
    isLoaded: boolean,
    error?: Error
};
export type External<T> = T & Loading;