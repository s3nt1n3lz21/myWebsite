export interface IEducation {
    type: string,
    institution: string,
    startDate: string,
    endDate: string,
    location: string,
    description: string,
}

export function emptyIEducation(): IEducation {
    return {
        type: '',
        institution: '',
        startDate: '',
        endDate: '',
        location: '',
        description: ''
    }
}