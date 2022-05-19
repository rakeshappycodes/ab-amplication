/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsOptional, ValidateNested } from "class-validator";
import { PostUpdateManyWithoutCategoriesInput } from "./PostUpdateManyWithoutCategoriesInput";
import { Type } from "class-transformer";
@InputType()
class CategoryUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  desciption?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    required: false,
    type: () => PostUpdateManyWithoutCategoriesInput,
  })
  @ValidateNested()
  @Type(() => PostUpdateManyWithoutCategoriesInput)
  @IsOptional()
  @Field(() => PostUpdateManyWithoutCategoriesInput, {
    nullable: true,
  })
  posts?: PostUpdateManyWithoutCategoriesInput;
}
export { CategoryUpdateInput };
