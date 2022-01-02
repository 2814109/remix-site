import { VFC } from "react";
import { useParams } from "remix";
const Profile: VFC = () => {
  const params = useParams();

  return <h1>Profile{params.member_id}</h1>;
};
export default Profile;
