"use client";

import React from "react";
import { pageData } from "@/config/pageData";
import { ComponentData, DynamicPageData } from "@/type/type";
import { usePathname, useRouter } from "next/navigation";

const App = () => {
  const pathname = usePathname();

  console.log(pathname);

  const { components, style }: { components: any; style: any } = pageData;
  return <DynamicPage components={components} style={style} />;
};

export default App;

// This component will render the correct component based on the components array

const DynamicPage = ({ components, style }: DynamicPageData) => {
  return (
    <div style={style}>
      {components.map((component, index) => {
        return <DynamicComponent key={index} {...component} />;
      })}
    </div>
  );
};

// This component will render the correct component based on the tag
const DynamicComponent = ({
  type: Tag,
  content,
  style,
  components,
  src,
  action,
}: ComponentData) => {
  const router = useRouter();

  const handleActionClick = () => {
    if (action) {
      action(router);
    }
  };

  // If the component has children, render the DynamicPage component
  if (components) {
    return <DynamicPage components={components} style={style} />;
  }

  // Return the component with the correct tag
  switch (Tag) {
    case "img":
      return <Tag style={style} src={src} />;
    case "button":
      return (
        <Tag router={router} style={style} onClick={handleActionClick}>
          {content}
        </Tag>
      );
    default:
      return <Tag style={style}>{content}</Tag>;
  }
};
