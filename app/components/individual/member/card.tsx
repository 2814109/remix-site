import { VFC } from "react";
import type { Member } from "../../../types/member";
type Props = {
  memberData: Member;
};

const MemberCard: VFC<Props> = ({ memberData }) => {
  return (
    <div className="member--card">
      <div className="member--card__img__wrap">
        <img className="member--card__img" src={memberData.profileImage} />
      </div>

      <p className="member--card__nickname">{memberData.name}</p>
      <ColumnSection header="自己紹介" content={memberData.introduction} />
      <ColumnSection
        header="興味のある分野"
        content={memberData.scopeOfInterest}
      />
      <ColumnSection
        header="知見のある領域"
        content={memberData.scopeOfResearch}
      />
    </div>
  );
};

type ColumnType = {
  header: string;
  content: string;
};
const ColumnSection: VFC<ColumnType> = (props) => {
  return (
    <div className="member--card__content__area">
      <p className="member--card__header">{props.header}</p>
      <p className="member--card__content">{props.content}</p>
    </div>
  );
};

export default MemberCard;
