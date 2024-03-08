import { SvgProps } from "@/type/Svg";

export default function ErrorToast({ width, height, color }: SvgProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 344 284"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M71.6667 260.333C63.7833 260.333 57.0347 258.016 51.4208 253.381C45.8069 248.747 43 243.175 43 236.667V71C43 64.4917 45.8069 58.9202 51.4208 54.2854C57.0347 49.6507 63.7833 47.3334 71.6667 47.3334H86V35.5C86 32.1472 87.3736 29.3368 90.1208 27.0688C92.8681 24.8007 96.2722 23.6667 100.333 23.6667C104.394 23.6667 107.799 24.8007 110.546 27.0688C113.293 29.3368 114.667 32.1472 114.667 35.5V47.3334H229.333V35.5C229.333 32.1472 230.707 29.3368 233.454 27.0688C236.201 24.8007 239.606 23.6667 243.667 23.6667C247.728 23.6667 251.132 24.8007 253.879 27.0688C256.626 29.3368 258 32.1472 258 35.5V47.3334H272.333C280.217 47.3334 286.965 49.6507 292.579 54.2854C298.193 58.9202 301 64.4917 301 71V236.667C301 243.175 298.193 248.747 292.579 253.381C286.965 258.016 280.217 260.333 272.333 260.333H71.6667ZM71.6667 236.667H272.333V118.333H71.6667V236.667Z"
        fill={color}
      />
      <path
        d="M153.087 209.619L125.779 182.31C124.813 181.343 124.108 180.276 123.665 179.108C123.222 177.94 123 176.752 123 175.543C123 174.335 123.222 173.127 123.665 171.918C124.108 170.71 124.813 169.623 125.779 168.656L125.719 168.716C126.685 167.75 128.921 166.541 128.921 166.541C130.089 166.058 131.317 165.816 132.606 165.816C133.895 165.816 136.292 166.541 136.292 166.541C137.46 167.025 139.494 168.716 139.494 168.716L146.321 175.543L159.975 189.185L204.26 144.779C205.147 143.813 206.194 143.108 207.402 142.665C208.61 142.222 209.819 142 211.027 142C212.235 142 213.444 142.222 214.652 142.665C215.86 143.108 216.948 143.772 217.915 144.658L217.975 144.61C218.942 145.577 219.667 146.644 220.15 147.812C220.633 148.98 220.875 150.209 220.875 151.498C220.875 152.786 220.653 154.015 220.21 155.183C219.767 156.351 219.062 157.418 218.096 158.385L166.862 209.619C165.896 210.585 164.808 211.31 163.6 211.794C162.392 212.277 161.183 212.519 159.975 212.519C158.767 212.519 157.558 212.277 156.35 211.794C155.142 211.31 154.054 210.585 153.087 209.619Z"
        fill={color}
      />
    </svg>
  );
}
