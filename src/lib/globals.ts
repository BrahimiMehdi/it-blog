type BlogData={
    title:string;
    content:{
        html:any;
        raw:any;
    };
    id:string;
    image:ImageType;
}

type ImageType={
    url:string;
    width:number;
    height:number;
}