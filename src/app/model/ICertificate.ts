export interface ICertificate {
    name: string,
    src: string,
    link: string,
    date: string,
    completionPercentage: number,
    hoursLength: number
}

export function emptyICertificate(): ICertificate {
    return {
        name: '',
        src: '',
        link: '',
        date: '',
        completionPercentage: 0,
        hoursLength: 0
    }
}