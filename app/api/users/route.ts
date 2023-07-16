import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '../../../lib/planetscale';
import {
  ErrorResponse,
  createMissingQueryParameterBadRequestResponse,
  createUnauthorizedResponse
} from '../utils/error-responses';
import { getServerSession } from "next-auth/next"
import { authOptions } from "../auth/[...nextauth]/route";

type UsersResponseBody = {
  id: string;
  email: string;
  name: string | null;
  username: string | null;
}[];

type UsersOkResponse = NextResponse<UsersResponseBody>;

export async function GET(
  request: NextRequest
): Promise<ErrorResponse | UsersOkResponse> {
  const session = await getServerSession(authOptions);

  if (!session) {
    return createUnauthorizedResponse();
  }

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
