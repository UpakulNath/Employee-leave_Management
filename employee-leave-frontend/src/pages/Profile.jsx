import ProfileCard from "../components/ProfileCard";

function Profile() {
  return (
    <div>

      <div className="mb-8">

        <h1 className="text-4xl font-bold text-gray-800">
          My Profile
        </h1>

        <p className="text-gray-500 mt-2">
          View your personal information and account details.
        </p>

      </div>

      <ProfileCard />

    </div>
  );
}

export default Profile;