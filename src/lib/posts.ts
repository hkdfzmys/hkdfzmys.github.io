import data from '../generated/posts.json';
export interface Post {slug:string;title:string;date:string;updated:string;summary:string;cover:string;category:string;tags:string[];author:string;featured:boolean;draft:boolean;html:string;toc:{id:string;level:number;text:string}[];searchText:string;readingMinutes:number;previous:{slug:string;title:string}|null;next:{slug:string;title:string}|null}
export const posts = data.posts as Post[];
export const categories = data.categories as string[];
export const tags = data.tags as string[];
export const years = data.years as string[];
