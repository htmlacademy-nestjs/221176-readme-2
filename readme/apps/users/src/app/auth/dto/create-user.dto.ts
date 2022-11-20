import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    description: 'The uniq email of user',
    required: true,
    example: 'name@example.com'
  })
  public email: string;

  @ApiProperty({
    description: 'Name of user',
    required: true,
    example: 'Name'
  })
  public name: string;

  @ApiProperty({
    description: 'Password',
    required: true,
    example: '123456'
  })
  public password: string;
}
