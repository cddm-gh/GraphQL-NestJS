import { Field, InputType, ID } from '@nestjs/graphql';
import { IsDateString, IsString, IsUUID, MinLength } from 'class-validator';

@InputType()
export class CreateLessonInput {
  @Field()
  @IsString()
  @MinLength(4)
  name: string;
  @Field()
  @IsDateString()
  startDate: string;
  @Field()
  @IsDateString()
  endDate: string;

  @Field((type) => [ID], { defaultValue: [] })
  @IsUUID('4', { each: true })
  students: string[];
}
