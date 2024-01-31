import { Field, InputType } from '@nestjs/graphql';
import { IsString, IsNotEmpty, MinLength } from 'class-validator';

@InputType()
export class RegisterDto {
  @Field()
  @IsNotEmpty({ message: 'Name is required' })
  @IsString({ message: 'Name must be at least 3 characters' })
  name: string;

  @Field()
  @IsNotEmpty({ message: 'Email is required' })
  @IsString({ message: 'Email must be valid' })
  email: string;

  @Field()
  @IsNotEmpty({ message: 'Password is required' })
  @MinLength(8, { message: 'Password must be at least 8 characters' })
  password: string;
}
