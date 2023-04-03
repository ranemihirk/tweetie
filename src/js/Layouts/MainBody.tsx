import { useContext, Dispatch, SetStateAction } from 'react';
import { Outlet } from "react-router";
import { AuthContext } from "./../contexts/AuthContext";
import TopNav from "./TopNav";

type MainBodyProps = {
	isOpen: boolean;
	setOpen: Dispatch<SetStateAction<boolean>>;
};
export default function MainBody({ isOpen, setOpen }: MainBodyProps): JSX.Element {
  const { user, setUser } = useContext(AuthContext);
  return (
    <main className="flex flex-col grow overflow-auto">
      {user && <TopNav />}
      <div className="w-full h-full rounded-3xl">
        <Outlet context={{ isOpen, setOpen }} />
      </div>
    </main>
  );
}
