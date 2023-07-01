import { NextResponse } from 'next/server';
import { StatusCodes } from 'http-status-codes';

type ErrorResponseBody = {
  message: string;
};

export type ErrorResponse = NextResponse<ErrorResponseBody>;

const createErrorResponse = (
  message: string,
  statusCode: number
): ErrorResponse => {
  return NextResponse.json(
    {
      message
    },
    {
      status: statusCode
    }
  );
};

export const createMissingQueryParameterBadRequestResponse = (
  missingQueryParameterName: string
): ErrorResponse => {
  return createErrorResponse(
    `Missing required property: '${missingQueryParameterName}'`,
    StatusCodes.BAD_REQUEST
  );
};
