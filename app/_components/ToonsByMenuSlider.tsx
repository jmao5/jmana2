import { getSvToonList } from "@/apis/client/getSvToon";
import Flex from "@/components/common/Flex";

interface ToonsByMenuSliderInterface {
  token?: string;
}

export default async function ToonsByMenuSlider({
  token,
}: ToonsByMenuSliderInterface) {
  const params = {
    page: 1,
    size: 10,
    menu: "TOON",
  };
  const { data } = await getSvToonList(params);
  console.log("data", data);

  return token ? (
    <Flex direction="column" gap={10}>
      메인페이지 테스트
    </Flex>
  ) : (
    <Flex direction="column" gap={10}>
      메인페이지 테스트
      {/* <ToonCard toonResponseList={data} /> */}
    </Flex>
  );
}
