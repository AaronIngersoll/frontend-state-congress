export interface response {
	success: boolean;
	results: info[];
}
export interface info {
	name: string;
	party: string;
	state: string;
	district: string;
	phone: string;
	office: string;
	link: string;
}
