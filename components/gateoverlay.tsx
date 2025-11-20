import { useRouter } from "next/navigation";
import { choices } from "@/contents/home";
import Endpoint from "@/lib/endpoints";

export default function GateOverlay({
  firstLanding,
  setFirstLanding,
}: {
  firstLanding: boolean;
  setFirstLanding: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  // const router = useRouter();
  let onClickTag = (tag: string) => () => {
    if (tag === "ETF") {
      // router.push(Endpoint.topSecret);
      // TODO: TOP SECRET FOR ETF
    }
    setFirstLanding(false);
  };

  return (
    <div className="gate-overlay absolute inset-0 flex justify-center items-center">
      <div className="bg-[#0e1629] flex flex-col justify-center items-center px-[22px] py-6 w-[642px] border border-[#333b4c] rounded-[18px]">
        {/* Upper content */}
        <h1 className="text-surface-50 text-lg font-bold my-4 tracking-widest">
          ENTER STATE 2128
        </h1>
        <div className="text-surface-50 text-sm">
          This site chronicles the unauthorized legends, scandals, and blizzards
          of State 2128.
        </div>
        <div className="text-surface-50 text-sm mb-4">
          Cookies 🍪 power our servers (and our sins). By continuing, you
          consent.
        </div>

        {/* Red zone */}
        <div className="border-danger-100 rounded-2xl border bg-danger-200 flex justify-start items-center px-2.5 py-2">
          <div className="hover:cursor-default text-base">⚠️</div>
          <div className="text-danger-50 font-medium text-sm text-center">
            You’re about to enter a zone of biased commentary, heroic
            exaggeration and friendly propaganda.
          </div>
        </div>

        {/* Lower content */}
        <div className="text-surface-100 text-sm pt-4 pb-3">
          Choose your alliance to enter 2128:
        </div>
        <div className="flex justify-center items-end gap-2 h-[46px] mb-9">
          {choices.map((c, idx) => {
            return (
              <div
                key={`${c}${idx}`}
                className="text-surface-100 border border-surface-200 px-3.5 py-2 rounded-full hover:cursor-pointer hover:mb-0.5 hover:text-gray-300 hover:border-gray-400"
                onClick={onClickTag(c.tag)}
              >
                {c.tag}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
