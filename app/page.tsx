import { Card, Title, Text } from '@tremor/react';
import Search from './search';
import UsersTable from './table';
import { getServerSession } from 'next-auth';
import { authOptions } from './api/auth/[...nextauth]/route';

export const dynamic = 'force-dynamic';

export default async function IndexPage({
  searchParams
}: {
  searchParams: { q: string };
}) {

  const session = await getServerSession(authOptions);
  const sessionUser = session?.user;

  console.log(`Session user: ${sessionUser}`);

  const search = searchParams.q ?? '';
  const users = await (await fetch(`http://localhost:3000/api/users?search=${search}`)).json();

  console.log(`users: ${JSON.stringify(users)}`)

  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl">
      <Title>Users</Title>
      <Text>
        A list of users retrieved from a MySQL database (PlanetScale).
      </Text>
      <Search />
      <Card className="mt-6">
        {users != null ? <UsersTable users={users} /> : null }
      </Card>
    </main>
  );
}
