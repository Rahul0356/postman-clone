import Image from "next/image";
import { Button } from "@/components/ui/button";
import { currentUser } from "@/modules/authentication/actions";
import UserButton from "@/modules/authentication/components/user-button";
export default async function Home() {
  const user = await currentUser
  return (
  
   <div className="flex flex-col items-center justify-center">
  
<UserButton user={user}/>
   </div>
  );
}
