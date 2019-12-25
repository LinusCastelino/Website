export interface IProfExp {
    // eventHeader: {
    //     time: string;
    //     designation: string;
    // };

    // event:  {
    //     title: string;
    //     desc: string[];
    // };

    // eventLogoUrl: string;

    eventLogoURL: string;

    eventHeader :{
        organization: string;
        designation : string;
        role: string;
        period : string;
    }

    event:{
        details: string[];
    }
}
