"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";

interface ProfileRow {
  id: string;
  full_name: string | null;
  email: string;
  role: "customer" | "sales" | "admin";
}

export default function AdminUsersPage() {
  const [users, setUsers] = useState<ProfileRow[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      const supabase = createClient();
      const { data } = await supabase
        .from("profiles")
        .select("id, full_name, email, role")
        .order("created_at", { ascending: false });
      if (data) setUsers(data as ProfileRow[]);
      setLoading(false);
    }
    load();
  }, []);

  const updateRole = async (id: string, role: ProfileRow["role"]) => {
    setUsers((prev) => prev.map((u) => (u.id === id ? { ...u, role } : u)));
    const supabase = createClient();
    await supabase.from("profiles").update({ role }).eq("id", id);
  };

  return (
    <div className="space-y-6">
      <div>
        <span className="font-label-caps uppercase tracking-widest text-secondary">
          Access Control
        </span>
        <h1 className="font-headline-md text-headline-md text-primary mt-1">
          Users &amp; Roles
        </h1>
      </div>

      <div className="rounded-2xl bg-surface-container-lowest border border-outline-variant/40 overflow-x-auto shadow-sm">
        {loading ? (
          <div className="p-8 text-center font-body-sm text-on-surface-variant">
            Loading users...
          </div>
        ) : (
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-surface-container-low font-technical-mono text-xs uppercase text-on-surface-variant">
                <th className="p-4">Name</th>
                <th className="p-4">Email</th>
                <th className="p-4">Role</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/30 font-body-sm">
              {users.map((u) => (
                <tr key={u.id}>
                  <td className="p-4 font-semibold text-primary">
                    {u.full_name || "—"}
                  </td>
                  <td className="p-4">{u.email}</td>
                  <td className="p-4">
                    <select
                      value={u.role}
                      onChange={(e) =>
                        updateRole(u.id, e.target.value as ProfileRow["role"])
                      }
                      className="px-2.5 py-1 rounded-lg bg-surface-container border border-outline-variant text-xs font-technical-mono"
                    >
                      <option value="customer">customer</option>
                      <option value="sales">sales</option>
                      <option value="admin">admin</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
