import { NextResponse } from 'next/server';
import { prisma } from '../../../lib/planetscale';
import {
  ErrorResponse,
  createMissingQueryParameterBadRequestResponse
} from '../utils/error-responses';

type UsersResponseBody = {
  id: string;
  email: string;
  name: string | null;
  username: string | null;
}[];

type UsersOkResponse = NextResponse<UsersResponseBody>;

export async function GET(
  request: Request
): Promise<ErrorResponse | UsersOkResponse> {
  const { searchParams } = new URL(request.url);
  const search = searchParams.get('search');
  if (search == null)
    return createMissingQueryParameterBadRequestResponse('search');
  const users = await prisma.users.findMany({
    where: {
      name: {
        contains: search
      }
    }
  });
  return NextResponse.json(users);
}
