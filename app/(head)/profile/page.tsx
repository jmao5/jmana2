"use client";

import Button from "@/components/common/Button/Button";
import Icon from "@/components/common/Icon/Icon";
import { QUERY_KEY } from "@/constants/queryKey";
import { useGetUserInformationQuery } from "@/hooks/apis/useGetUserInformationQuery";
import { usePostUsersRefreshMutation } from "@/hooks/apis/useRefreshNicknameMutation";
import { useQueryClient } from "@tanstack/react-query";
import Image from "next/image";
import "./index.scss";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Modal from "@/components/common/Modal/Modal";
import ModalBasic from "@/components/common/Modal/ModalBasic";

const ProfilePage = () => {
  const router = useRouter();
  const queryClient = useQueryClient();
  const [isOpenLogOutModal, setIsOpenLogOutModal] = useState<boolean>(false);

  const { userInformation } = useGetUserInformationQuery();
  const { refreshNickname, isPending } = usePostUsersRefreshMutation();

  const handleChangeNickName = () => {
    refreshNickname(undefined, {
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: [QUERY_KEY.USER_INFORMATION],
        });
      },
    });
  };

  const handleLogOut = () => {
    setIsOpenLogOutModal(true);
  };
  const handleCloseLogOutModal = () => {
    setIsOpenLogOutModal(false);
  };
  const handleRealLogOut = async () => {
    router.replace("/logout");
  };

  return (
    <>
      <div className="my-page">
        <div className="my-page__wrapper">
          <Image
            src={
              userInformation.basicInfo.userImage ??
              "/images/OneDayHero_logo_sm.svg"
            }
            width={240}
            height={160}
            alt="이미지 프로필"
          />
          <div className="my-page__main">
            <div className="my-page__main--nickname">
              <div className="my-page__name text-3xl">
                <h1 className="text-orange-300">
                  나의 이름은 :&nbsp;
                  <span className="text-gray-500">
                    {userInformation.basicInfo.nickname}
                  </span>
                </h1>

                {isPending ? (
                  <div className="circle-rotate">
                    <Icon name="REFRESH" />
                  </div>
                ) : (
                  <button onClick={handleChangeNickName}>
                    <Icon name="REFRESH" />
                  </button>
                )}
              </div>
              <div className="text-xs text-gray-400">
                새로 고침 버튼 클릭 시 닉네임이 랜덤으로 변경됩니다.
              </div>
            </div>

            <div className="my-page__remind-way">
              <h1 className="text-2xl">
                이메일: {userInformation.basicInfo.email}
              </h1>
            </div>
          </div>

          <div className="my-page__email">
            {/* <Button
            size="md"
            background="primary"
            color="white-100"
            border={true}
            onClick={handleGoEmailVerification}
          >
            {emailVerified ? "이메일 변경하기" : "이메일 인증하기"}
          </Button> */}
          </div>

          <div className="my-page__bottom">
            <Button
              background="white-100"
              border={true}
              size="md"
              color="primary"
              onClick={handleLogOut}
            >
              로그아웃
            </Button>
            <Button
              background="white-100"
              color="primary"
              size="md"
              border={true}
              // onClick={handleWithdrawal}
            >
              회원 탈퇴
            </Button>
          </div>
        </div>
      </div>
      {isOpenLogOutModal && (
        <Modal>
          <ModalBasic
            onClickNo={handleCloseLogOutModal}
            onClickYes={handleRealLogOut}
          >
            로그아웃 하시겠습니까?
          </ModalBasic>
        </Modal>
      )}
    </>
  );
};

export default ProfilePage;
