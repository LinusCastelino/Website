export interface IProfExp {
    eventLogoURL: string;

    eventHeader :{
        organization: string;
        designation : string;
        role: string;
        period : string;
    }

    eventInfo:{
        details: string[];
    }
}
