import { VFC } from "react";
import type { Member } from "../../../types/member";
import MemberCard from "../../../components/individual/member/card";

const Member: VFC = () => {
  const MemerList: Member[] = [...Array(10)].map((_, index) => {
    return {
      id: index + 1,
      profileImage:
        "https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg",
      name: `member${index + 1}`,
      introduction:
        "札幌でシステムエンジニアをしている＜ニックネーム＞です。2021年の8月からScholeに参加しています。趣味は読書とプログラミングです。",
      scopeOfInterest:
        "主に、西洋哲学や思想に関心があります。物事が成立する原因を考えることが好きです。",
      scopeOfResearch:
        "大学時代に西洋哲学の時間論について研究しました。時間論における現在の基礎付けに関わって、現象学的な方法から存在を明晰に分析することが直近の目標です。",
    };
  });
  return (
    <div className="member--wrap">
      {MemerList.map((memberData) => {
        return <MemberCard key={memberData.id} memberData={memberData} />;
      })}
    </div>
  );
};

export default Member;
