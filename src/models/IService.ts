export interface IService {
    name: string;
    items: string[];
}

export function emptyService(): IService {
    return {
        name: '',
        items: []
    }
}