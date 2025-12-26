import React from "react";
import DragWindowRegion from "@/components/DragWindowRegion";
import NavigationMenu from "@/components/template/NavigationMenu";

export function MainLayout({ children }: { children: React.ReactNode }) {
  return <div className="p-4">{children}</div>;
}

export default function BaseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <DragWindowRegion title="Draft 2 Dimen" />
      <MainLayout>
        <NavigationMenu />
        <main className="h-screen p-2 pb-20">{children}</main>
      </MainLayout>
    </>
  );
}
