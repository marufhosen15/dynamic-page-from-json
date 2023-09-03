"use client";

import { renderedContent } from "@/utils/pageContent";
import { DynamicPage } from "../components/DynamicPage/DynamicPage";
import { useEffect, useState } from "react";

const Page = ({ params }: any) => {
  const [pageContent, setPageContent] = useState<any>(null);
  const currentPath = `/${params.slug.join("/")}`;
  // const { page, notfound }: any = renderedContent(currentPath);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/page-content?path=${currentPath}`);
        const data = await response.json();
        setPageContent(data.data);
      } catch (err) {
        setPageContent(null);
      }
    };
    fetchData();
  }, [currentPath]);

  if (!pageContent) return <div>Page done not exist</div>;
  if (pageContent.status === "draft") return <div>Page is not published</div>;
  else {
    const { components, style, type }: any = pageContent;
    return (
      <div>
        <DynamicPage components={components} style={style} type={type} />
      </div>
    );
  }
};

export default Page;
