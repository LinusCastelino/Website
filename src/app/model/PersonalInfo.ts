export interface IPersonalInfo {
    title: string;
    detail: string;
}

export class PersonalInfo {
    public static info: IPersonalInfo[] = [
        {
            title: 'Linus Castelino',
            detail: 'Developer, B.E. (Computer Engineering)'
        },
        {
            title: 'Phone:',
            detail: '+91-9594544603'
        },
        {
            title: 'Email:',
            detail: 'castelinolinus@gmail.com'
        }
    ];
}
