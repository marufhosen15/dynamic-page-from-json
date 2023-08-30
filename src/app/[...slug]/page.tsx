"use client";

import { renderedContent } from "@/utils/pageContent";
import { DynamicPage } from "../components/DynamicPage/DynamicPage";

const Page = ({ params }: any) => {
  const currentPath = `/${params.slug.join("/")}`;
  const { page, notfound }: any = renderedContent(currentPath);

  if (notfound) return <div>Page done not exist</div>;
  if (page.status === "draft") return <div>Page is not published</div>;
  else {
    const { components, style, type }: any = page;
    return (
      <div>
        <DynamicPage components={components} style={style} type={type} />
      </div>
    );
  }
};

export default Page;
