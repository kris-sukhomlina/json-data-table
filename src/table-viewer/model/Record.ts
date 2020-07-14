export type HasRelatives = { ['has_relatives']: { records: IRecord[] } };
export type HasPhone = { ['has_phone']: { records: IRecord[] } };
export type Kids = HasRelatives | HasPhone | {};

export interface IRecord {
	data: { [name: string]: string };
	kids: Kids;
}
