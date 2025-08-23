import { DATA } from "@/data/resume";
import { SpinningText } from "./spinning-text";

export const StatusText = () => {
  return (
    <SpinningText
      radius={6.5}
      fontSize={1}
      variants={{
        container: {
          hidden: {
            opacity: 1,
          },
          visible: {
            opacity: 1,
            rotate: 360,
            transition: {
              type: "spring",
              bounce: 0,
              duration: 6,
              repeat: Infinity,
              staggerChildren: 0.03,
            },
          },
        },
        item: {
          hidden: {
            opacity: 0,
            filter: "blur(4px)",
          },
          visible: {
            opacity: 1,
            filter: "blur(0px)",
          },
        },
      }}
      className="font-[450] -mt-14 "
    >
      {`${DATA.employmentStatus} • ${DATA.employmentStatus} • ${DATA.employmentStatus} • `}
    </SpinningText>
  );
};
