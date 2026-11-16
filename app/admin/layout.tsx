import { redirect } from "next/navigation";
import { getCurrentProfile } from "@/lib/queries";
import { AdminShell } from "@/components/AdminShell";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const profile = await getCurrentProfile();
  if (!profile) {
    redirect("/sign-in?next=/admin");
  }
  if (profile.role !== "admin" && profile.role !== "sales") {
    redirect("/account");
  }

  return <AdminShell role={profile.role}>{children}</AdminShell>;
}
