export interface IProfExp {
    eventLogoURL: string;

    eventHeader :{
        organization: string;
        designation : string;
        role: string;
        period : string;
        location : string;
    }

    eventInfo:{
        details: string[];
    }
}
