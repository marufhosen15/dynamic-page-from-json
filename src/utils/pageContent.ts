import { newPageData } from "@/config/newPageData";

export const renderedContent = (currentPath: string) => {
  const page = newPageData.pages.find((page) => page.path === currentPath);
  return { page: page, notfound: !page };
};
