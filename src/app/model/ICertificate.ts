export interface ICertificate {
    title: string,
    url: string,
    description: string
}

export function emptyCertificate(): ICertificate {
    return {
        title: '',
        url: '',
        description: ''
    }
}