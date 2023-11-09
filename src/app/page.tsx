"use client";

import { CommonButton } from "@/components/common/button";
import dynamic from "next/dynamic";
import { useCallback, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const DynamicMultiButton = dynamic(
  async () => {
    return (await import("@solana/wallet-adapter-react-ui")).WalletMultiButton;
  },
  { ssr: false }
);

export default function LoginPage() {
  const [isNewUser, setIsNewUser] = useState(false);
  const [userName, setUserName] = useState<string>("");

  const router = useRouter();

  const registerNewUser = useCallback(async () => {
    if (!userName) {
      toast("User name is required");
      return;
    }
    router.push("/home");
  }, [userName, router]);

  return (
    <div className="flex justify-center items-center fixed h-screen w-screen">
      <div className="flex items-center flex-col gap-y-5">
        <h1 className="text-2xl">Only1 Login</h1>
        <DynamicMultiButton />

        {!isNewUser && (
          <form
            className="flex justify-start items-center space-x-2"
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <input
              type="text"
              id="userid"
              value={userName ? userName : ""}
              placeholder="UserId"
              className="p-2 rounded-lg outline-white  font-normal bg-gray-900 text-lg"
              onChange={(e) => {
                setUserName(e.target.value);
              }}
            />
            <CommonButton
              type="submit"
              title="Register"
              callback={registerNewUser}
            />
          </form>
        )}
      </div>
    </div>
  );
}
