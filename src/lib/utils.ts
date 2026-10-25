export function asset(path:string) { if (!path) return ''; if (/^(https?:|data:|blob:)/i.test(path)) return path; return `${import.meta.env.BASE_URL}${path.replace(/^\.?\//,'')}`; }
export function readableDate(date:string) { return date.replace(/-/g, '.'); }
export function articleHtml(html:string) { return html.replace(/src="(?!https?:|data:|blob:)([^\"]+)"/g, (_,path:string)=>`src="${asset(path)}"`); }
