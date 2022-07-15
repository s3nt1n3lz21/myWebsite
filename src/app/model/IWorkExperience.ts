export interface IWorkExperience {
    jobTitle: string,
    agency: string,
    client: string,
    startDate: string,
    endDate: string,
    location: string,
    description: string[]
}

export function emptyWorkExperience(): IWorkExperience {
    return {
        jobTitle: '',
        agency: '',
        client: '',
        startDate: '',
        endDate: '',
        location: '',
        description: []
    }
}