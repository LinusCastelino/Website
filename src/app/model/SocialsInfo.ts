export interface ISocialsInfo{
    type: string;
    logoImgUrl: string;
    hrefUrl: string;
}

export class SocialsInfo{
    public info: ISocialsInfo[];

    constructor(color : string){
        this.info = [];

        this.info.push({
            type:'linkedin',
            logoImgUrl:'../../assets/images/LinkedIn-logo-'+ color +'.png',
            hrefUrl:'https://www.linkedin.com/in/linuscastelino/'
        });

        this.info.push({
            type:'facebook',
            logoImgUrl:'../../assets/images/Facebook-logo-'+ color +'.png',
            hrefUrl:'https://www.facebook.com/linuscastelino'
        });

        this.info.push({
            type:'twitter',
            logoImgUrl:'../../assets/images/Twitter-logo-'+ color +'.png',
            hrefUrl:'https://twitter.com/LinusCastelino'
        });

        this.info.push({
            type:'instagram',
            logoImgUrl:'../../assets/images/Instagram-logo-'+ color +'.png',
            hrefUrl:'ttps://www.instagram.com/linuscastelino/'
        });

        this.info.push({
            type:'github',
            logoImgUrl:'../../assets/images/Github-logo-'+ color +'.svg',
            hrefUrl:'https://github.com/LinusCastelino'
        });
    }     
}