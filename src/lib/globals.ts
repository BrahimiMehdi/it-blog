type BlogData={
    title:string;
    content:{
        html:any;
        raw:any;
    };
    id:string;
    image:ImageType;
    category:CategoryType;
    author?:AuthorType;
    publishedAt:string;
}
type AuthorType = {
    name:string;
    image:ImageType;
    blogs:BlogData[];
}
type CategoryType = {
    name:string;
    blogs:BlogData[];
}
type ImageType={
    url:string;
    width:number;
    height:number;
}