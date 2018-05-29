export interface IProfExp{
    eventHeader : {
        time : string,
        designation: string
    };

    event :  {
        title: string,
        desc : string[]
    };

    eventLogoUrl : string;
}