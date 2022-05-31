import { useEffect, useState } from 'react';
import type { User } from './api/user';
import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then(res => res.json());

const Avatar = ({ avatar }: { avatar: string }) => {
  return (
    <img style={{ borderRadius: '50%' }} src={avatar} />
  );
}

const Alias = () => {
  const { data: user } = useSWR<User>('/api/user', fetcher);
  if (!user) return null;
  return (
    <h1>{user.alias}</h1>
  );
}

const Home = () => {
  const { data: user } = useSWR<User>('/api/user', fetcher);

  return (<div style={{ textAlign: 'center' }}>
    {!!user && <>
      <Avatar avatar={user?.avatar} />
      <Alias />
    </>}
  </div>);
}

export default Home;
