import { OPTIONS } from "@/app/api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";

export default async function ProductRegistration() {
  const session = await getServerSession(OPTIONS);

  console.log(session);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Registration
    </main>
  );
}
