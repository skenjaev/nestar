import { Injectable } from '@nestjs/common';

@Injectable()
export class MemberService {
    public async signup(): Promise<string>{
        return 'SignUp executed'; 
    }

    public async login(): Promise<string>{
        console.log('Mutation: login');
        return 'Login Executed'
    }

    public async updateMember(): Promise<string>{
        console.log('Mutation: updateMember');
        return 'updateMember executed'
    }
}
