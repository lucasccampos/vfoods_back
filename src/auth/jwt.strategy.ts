import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { JwtService } from '@nestjs/jwt';
import { jwtConstants } from './constants';

const cookieExtractor = (req) => {
  let jwt = null;

  if (req && req.cookies) {
    jwt = req.cookies['jwt'];
  }

  return jwt;
};

const extractTokenFromHeader = (req): string | undefined => {
  const [type, token] = req.headers.authorization?.split(' ') ?? [];
  return type === 'Bearer' ? token : undefined;
};

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly jwtService: JwtService) {
    super({
      jwtFromRequest: extractTokenFromHeader,
      secretOrKey: jwtConstants.secret,
    });
  }

  async validate(payload: any) {
    try {
      return payload;
    } catch (e) {
      console.log(e);
      throw new UnauthorizedException();
    }
  }
}
