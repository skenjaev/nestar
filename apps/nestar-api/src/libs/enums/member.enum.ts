import { registerEnumType } from '@nestjs/graphql';

export enum MemberType {
	USER = 'USER',
	AGENT = 'AGENT',
	ADMIN = 'ADMIN',
}
<<<<<<< HEAD
registerEnumType(MemberType, { name: 'MemberType' });
=======
registerEnumType(MemberType, {
	name: 'MemberType',
});
>>>>>>> 64aa8b8 (feat: nestar loyihani qaytib tikladim)

export enum MemberStatus {
	ACTIVE = 'ACTIVE',
	BLOCK = 'BLOCK',
	DELETE = 'DELETE',
}
<<<<<<< HEAD
registerEnumType(MemberStatus, { name: 'MemberStatus' });
=======
registerEnumType(MemberStatus, {
	name: 'MemberStatus',
});

>>>>>>> 64aa8b8 (feat: nestar loyihani qaytib tikladim)

export enum MemberAuthType {
	PHONE = 'PHONE',
	EMAIL = 'EMAIL',
	TELEGRAM = 'TELEGRAM',
}
<<<<<<< HEAD
registerEnumType(MemberAuthType, { name: 'MemberAuthType' });
=======
registerEnumType(MemberAuthType, {
	name: 'MemberAuthType',
});

>>>>>>> 64aa8b8 (feat: nestar loyihani qaytib tikladim)
