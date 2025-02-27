import Link from "next/link";
import Button from "../common/Button";
import { usePathname } from "next/navigation";
import { useCount } from "@/context/CountContext";

const Header: React.FC = () => {
  const pathname = usePathname();
  const { count } = useCount();

  return (
    <div className="flex gap-4">
      {/* Button Group */}
      {!["/counter-app"].includes(pathname) ? (
        <>
          <Button buttonLabel="Sign In" buttonBackgroundColor="red" />
          <Button buttonLabel="Sign Up" buttonBackgroundColor="blue" />
        </>
      ) : (
        <p className="font-semibold text-lg">Current count: {count}</p>
      )}
    </div>
  );
};

export default Header;
