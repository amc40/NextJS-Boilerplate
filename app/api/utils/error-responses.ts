import { NextResponse } from 'next/server';

type ErrorResponseBody = {
  message: string;
};

export type ErrorResponse = NextResponse<ErrorResponseBody>;

const createErrorResponse = (message: string): ErrorResponse => {
  return NextResponse.json({
    message
  });
};

export const createMissingQueryParameterBadRequestResponse = (
  missingQueryParameterName: string
): ErrorResponse => {
  return createErrorResponse(
    `Missing required property: '${missingQueryParameterName}'`
  );
};
