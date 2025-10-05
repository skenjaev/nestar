import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcryptjs';
import { Member } from '../../libs/dto/member/member';
import { T } from '../../libs/types/common';
import { JwtService } from '@nestjs/jwt';
import { shapeIntoMongoObjectId } from '../../libs/config';

@Injectable()
export class AuthService {
	constructor(private jwtService: JwtService) {}

<<<<<<< HEAD
	// Hashing Password logic
=======
>>>>>>> 64aa8b8 (feat: nestar loyihani qaytib tikladim)
	public async hashPassword(memberPassword: string): Promise<string> {
		const salt = await bcrypt.genSalt();
		return await bcrypt.hash(memberPassword, salt);
	}

<<<<<<< HEAD
	// Compare Password logic
	public async comparePassword(password: string, hashedPassword: string): Promise<boolean> {
		return await bcrypt.compare(password, hashedPassword);
	}

	// Authentication logic
	public async createToken(member: Member): Promise<string> {
		const payload: T = {};
=======
	public async comparePasswords(password: string, hashedPassword: string): Promise<boolean> {
		return await bcrypt.compare(password, hashedPassword);
	}

	public async createToken(member: Member): Promise<string> {
		const payload: T = {};

>>>>>>> 64aa8b8 (feat: nestar loyihani qaytib tikladim)
		Object.keys(member['_doc'] ? member['_doc'] : member).map((ele) => {
			payload[`${ele}`] = member[`${ele}`];
		});
		delete payload.memberPassword;
<<<<<<< HEAD
		return await this.jwtService.signAsync(payload);
	}

	// Verify Token logic
	public async verifyToken(token: string): Promise<Member> {
		const member = await this.jwtService.verifyAsync(token);
=======

		return await this.jwtService.signAsync(payload);
	}

	public async verifyToken(token: string): Promise<Member> {
		const member = await this.jwtService.verifyAsync(token) as Member; // token => members data
>>>>>>> 64aa8b8 (feat: nestar loyihani qaytib tikladim)
		member._id = shapeIntoMongoObjectId(member._id);
		return member;
	}
}
