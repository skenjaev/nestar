import { BadRequestException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Member } from '../../libs/dto/member/member';
import { LoginInput, MemberInput } from '../../libs/dto/member/member.input';
import * as bcryptjs from "bcryptjs";
import { MemberStatus } from '../../libs/enums/member.enum';
import { Message } from '../../libs/enums/common.enum';

@Injectable()
export class MemberService {
    member: any;
    constructor(@InjectModel('Member') 
    private readonly memberModel: Model<Member>) {}


    public async signup(input: MemberInput): Promise<Member>{
        //Hash password
        const salt = await bcryptjs.genSalt();
        input.memberPassword = await bcryptjs.hash(input.memberPassword, salt)

        try {
            const result = await this.memberModel.create(input);
            //todo authentication with token
            return result;
        } catch (err) {
            console.log('Error, service model signup', err);
            throw new BadRequestException(err);
        }
    }

    public async login(input: LoginInput): Promise<Member>{
        const {memberNick, memberPassword} = input
        const response: Member = await this.memberModel
                  .findOne({memberNick:memberNick})
                  .select('+memberPassword')
                  .exec();
        if(!response || response.memberStatus === MemberStatus.DELETE){
            throw new InternalServerErrorException(Message.NO_MEMBERNICK)
        }else if(response.memberStatus === MemberStatus.BLOCK){
            throw new InternalServerErrorException(Message.BLOCKED_USER)
        }
        //todo: compare password
        const isMatch = await bcryptjs.compare(
         memberPassword, response.memberPassword
        );
        if(!isMatch){
            throw new InternalServerErrorException(Message.WORNG_PASSWORD)
        }

        return response;
    }

    public async updateMember(): Promise<string>{
        console.log('Mutation: updateMember');
        return 'updateMember executed'
    }

    public async getMember(): Promise<string>{
        console.log('Query: getMember');
        return 'getMember executed';
    }

}
