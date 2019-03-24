export interface IPersonalInfo {
    title: string;
    detail: string;
}

export class PersonalInfo {
    public static info: IPersonalInfo[] = [
        {
            title: 'Linus Castelino',
            detail: 'Full-Stack Web Developer'
        },
        {
            title: 'Phone:',
            detail: '+1-201 952 4216'
        },
        {
            title: 'Email:',
            detail: 'castelinolinus@gmail.com'
        }
    ];
}
