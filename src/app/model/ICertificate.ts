export interface ICertificate {
    name: string,
    src: string,
    link: string
}

export function emptyICertificate(): ICertificate {
    return {
        name: '',
        src: '',
        link: ''
    }
}