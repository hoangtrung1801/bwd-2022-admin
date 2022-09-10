const apiUrl = "https://bwd-2022-backend-production.up.railway.app";

const createHeadersFromOptions = (options: RequestInit): Headers => {
    // const requestHeaders = (
    //     options
    //         ? options.headers
    //         : new Headers({
    //               Authorization: import.meta.env.VITE_TOKEN,
    //               Accept: "application/json",
    //           })
    // ) as Headers;
    // if (
    //     !requestHeaders?.has("Content-Type") &&
    //     !(options && (!options.method || options.method === "GET")) &&
    //     !(options && options.body && options.body instanceof FormData)
    // ) {
    //     requestHeaders?.set("Content-Type", "application/json");
    // }

    // return requestHeaders;

    return new Headers({
        Authorization: import.meta.env.VITE_TOKEN,
        Accept: "application/json",
        "Content-Type": "application/json",
    });
};

const fetchJson = (resource: string, options?: RequestInit) => {
    const requestHeaders = createHeadersFromOptions(options);

    return fetch(`${apiUrl}/${resource}`, {
        ...options,
        headers: requestHeaders,
    }).then((data) => data.json());
};

// const fetchJson = (url, options: Options = {}) => {
//     const requestHeaders = createHeadersFromOptions(options);

//     return fetch(`${apiUrl}/${url}`, { ...options, headers: requestHeaders })
//         .then((response) =>
//             response.text().then((text) => ({
//                 status: response.status,
//                 statusText: response.statusText,
//                 headers: response.headers,
//                 body: text,
//             }))
//         )
//         .then(({ status, statusText, headers, body }) => {
//             let json;
//             try {
//                 json = JSON.parse(body);
//             } catch (e) {
//                 // not json, no big deal
//             }
//             if (status < 200 || status >= 300) {
//                 return Promise.reject(
//                     new HttpError(
//                         (json && json.message) || statusText,
//                         status,
//                         json
//                     )
//                 );
//             }
//             return Promise.resolve({ status, data: json });
//         });
// };

export default fetchJson;
