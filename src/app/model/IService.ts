export interface IService {
    title: string,
    items: string[]
}

export function emptyIService(): IService {
    return {
        title: '',
        items: []
    }
}