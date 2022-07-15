export interface IAward {
    title: string,
    date: string,
    money: string,
    description: string
}

export function emptyIAward(): IAward {
    return {
        title: '',
        date: '',
        money: '',
        description: ''
    }
}