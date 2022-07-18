export interface ISkill {
    name: string,
    value: number
}

export function emptyISkill() {
    return {
        name: '',
        value: 0
    }
}