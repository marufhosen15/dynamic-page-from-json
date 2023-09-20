import { DynamicPage } from "../components/DynamicPage/DynamicPage";

async function getData(currentPath: string) {
  const response = await fetch(
    `http://localhost:3000/api/page-content?path=${currentPath}`
  );
  if (!response.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return response.json();
}

export default async function Page({ params }: any) {
  const currentPath = `/${params.slug.join("/")}`;
  const { data: pageContent } = await getData(currentPath);

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
}
