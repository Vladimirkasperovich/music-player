import { useMeQuery } from '@/features/auth';

const Profile = () => {
  const { data: meResponse } = useMeQuery();
  console.log(meResponse);
  return (
    <section className="min-h-screen text-center">
      <h1>Profile</h1>
    </section>
  );
};

export default Profile;
