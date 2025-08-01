import Header from "@/components/Header";
import React from "react";

const CreateLayout = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <section className="flex size-full flex-col">
      <Header isHomePage={true} />
      <div className="pt-[60px]">{children}</div>
    </section>
  );
};

export default CreateLayout;
