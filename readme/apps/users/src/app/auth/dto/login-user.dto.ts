import { ApiProperty } from '@nestjs/swagger';

export class LoginUserDto {
  @ApiProperty({
    description: 'The uniq email of user',
    required: true,
    example: 'EMusk@example.com'
  })
  public email: string;

  @ApiProperty({
    description: 'Password',
    required: true,
    example: '123456'
  })
  public password: string;
}
